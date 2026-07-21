import { useState, useMemo, useEffect, useRef } from 'react';
import { getCellColor, getTextColor, winnerMagnitude, getWinner, ORANGE_STOPS, GRAY_STOPS } from '../utils/colors';
import { getVolumeLabel, parseBandwidth, formatCurrency } from '../utils/formatters';
import { calculateEgressCost, calculatePrivateCost, calculatePublicIPsecCost, calculateNatGwCost, calculateLinkLoad, findPrivatePublicCrossover } from '../utils/calculations';
import { useLanguage } from '../i18n/LanguageContext';

export default function Heatmap({
  selectedCountry,
  selectedCSP,
  selectedRegion,
  volumeUnit,
  capacityThreshold,
  setSelectedCell,
  availableBandwidths,
  obPricingPrivate,
  obPricingPublic,
  ccMode,
  publicArchitecture,
  includeClientCost,
  awsPortCosts,
  awsPortCostsJapan,
  awsPrivateEgress,
  awsEgressRegions,
  azurePortCosts,
  azurePrivateEgress,
  azureRegionsToZones,
  azureEgressRegions,
  azureErGwConfig,
  obDiscount,
  customVolumes,
  setCustomVolumes,
  initialCellSelection
}) {
  const { t } = useLanguage();

  // Libellés du "gagnant" Private/Public pour le point de bascule — la version complète
  // précise l'architecture Public (Standard/HA) pour éviter toute ambiguïté, la version
  // courte reste compacte pour l'annotation inline sous la bande passante.
  const architectureLabel = publicArchitecture === 'Standard' ? t('heatmap.architectureStandard') : t('heatmap.architectureHa');
  const winnerLabelFull = (winner) => winner === 'public' ? t('heatmap.winnerPublic', { architecture: architectureLabel }) : t('heatmap.winnerPrivate');
  const winnerLabelShort = (winner) => winner === 'public' ? t('heatmap.winnerPublicShort') : t('heatmap.winnerPrivate');

  // "+" inline dans le header
  const [addingVolume, setAddingVolume] = useState(false);
  const [inlineVolume, setInlineVolume] = useState('');

  const handleInlineAdd = () => {
    const vol = parseFloat(inlineVolume);
    if (vol && vol > 0 && vol <= 1000 && !customVolumes.includes(vol)) {
      setCustomVolumes([...customVolumes, vol].sort((a, b) => a - b));
    }
    setInlineVolume('');
    setAddingVolume(false);
  };

  // Volumes fusionnés (base + personnalisés), triés
  // Échelle resserrée sous 50 TiB/mois (~90% des clients/prospects) ; les volumes
  // plus élevés restent accessibles via le "+" personnalisé pour les cas hors norme.
  const BASE_VOLUMES_TIB = [0.5, 1, 2, 5, 10, 20, 30, 40, 50];
  const VOLUMES_TIB = useMemo(() => {
    return [...new Set([...BASE_VOLUMES_TIB, ...customVolumes])].sort((a, b) => a - b);
  }, [customVolumes]);
  const volumeMaxTiB = VOLUMES_TIB[VOLUMES_TIB.length - 1];

  // Headers dérivés de VOLUMES_TIB — même deps
  const volumeHeaders = useMemo(() => {
    return VOLUMES_TIB.map(vol => getVolumeLabel(vol, volumeUnit, selectedCSP));
  }, [VOLUMES_TIB, volumeUnit, selectedCSP]);

  const heatmapData = useMemo(() => {
    const rows = [];

    for (const bandwidth of availableBandwidths) {
      const row = { bandwidth, cells: {} };
      const bandwidthMbps = parseBandwidth(bandwidth);

      const egressRegionsForCrossover = selectedCSP === 'AWS' ? awsEgressRegions : azureEgressRegions;
      row.crossover = findPrivatePublicCrossover({
        bandwidth,
        bandwidthMbps,
        obCountry: selectedCountry,
        csp: selectedCSP,
        region: selectedRegion,
        obPricing: obPricingPrivate,
        obPricingPublic,
        architecture: publicArchitecture,
        egressRegions: egressRegionsForCrossover,
        awsPortCosts,
        awsPortCostsJapan,
        awsPrivateEgress,
        azurePortCosts,
        azurePrivateEgress,
        azureRegionsToZones,
        azureErGwConfig,
        obDiscount,
        includeClientCost
      });

      for (const volumeTiB of VOLUMES_TIB) {
        const volumeGiB = volumeTiB * 1024;
        const volumeDisplay = getVolumeLabel(volumeTiB, volumeUnit, selectedCSP);

        const linkLoad = calculateLinkLoad(volumeTiB, bandwidthMbps, capacityThreshold);

        if (linkLoad.loadPercent >= 100) continue;

        const egressRegions = selectedCSP === 'AWS' ? awsEgressRegions : azureEgressRegions;
        const rawEgressCostData = calculateEgressCost(volumeGiB, selectedRegion, selectedCSP, egressRegions);

        // Baseline "Egress Internet direct" : + NAT GW estimé côté client si activé
        // (une VPC/VNet qui route du trafic sortant vers Internet a besoin d'un NAT Gateway,
        // que ce trafic soit en clair ou encapsulé IPsec)
        const natGwBaseline = includeClientCost ? calculateNatGwCost(volumeGiB) : { total: 0 };
        const egressCostData = {
          ...rawEgressCostData,
          natGwCost: natGwBaseline.total,
          natGwDetail: natGwBaseline,
          total: rawEgressCostData.total + natGwBaseline.total
        };

        const privateCost = ccMode === 'public'
          ? calculatePublicIPsecCost({
              bandwidth,
              volumeGiB,
              obCountry: selectedCountry,
              csp: selectedCSP,
              region: selectedRegion,
              obPricingPublic,
              architecture: publicArchitecture,
              egressRegions,
              obDiscount,
              includeClientCost
            })
          : calculatePrivateCost({
              bandwidth,
              volumeGiB,
              obCountry: selectedCountry,
              csp: selectedCSP,
              region: selectedRegion,
              obPricing: obPricingPrivate,
              awsPortCosts,
              awsPortCostsJapan,
              awsPrivateEgress,
              azurePortCosts,
              azurePrivateEgress,
              azureRegionsToZones,
              azureErGwConfig,
              obDiscount
            });

        if (!privateCost) continue;

        // savings = egress Internet CSP direct vs OB (avec remise)
        const savings = egressCostData.total - privateCost.total;
        const savingsPercent = egressCostData.total > 0 ? (savings / egressCostData.total) * 100 : 0;
        // magnitude : toujours borné 0-100, contrairement à savingsPercent qui explose
        // côté CSP gagnant (le dénominateur bascule alors sur le coût du perdant) — voir
        // utils/colors.js. winner = qui gagne la case ('OB' ou 'CSP').
        const winner = getWinner(savingsPercent);
        const magnitude = winnerMagnitude(savingsPercent, egressCostData.total, privateCost.total);

        row.cells[volumeDisplay] = {
          volumeTiB,
          volumeGiB,
          egressCost: egressCostData.total,
          egressCostData,
          privateCost,
          savings,
          savingsPercent,
          winner,
          magnitude,
          linkLoad
        };
      }

      rows.push(row);
    }

    return rows;
  }, [
    selectedCountry,
    selectedCSP,
    selectedRegion,
    volumeUnit,
    capacityThreshold,
    availableBandwidths,
    obPricingPrivate,
    obPricingPublic,
    ccMode,
    publicArchitecture,
    includeClientCost,
    awsPortCosts,
    awsPortCostsJapan,
    awsPrivateEgress,
    awsEgressRegions,
    azurePortCosts,
    azurePrivateEgress,
    azureRegionsToZones,
    azureEgressRegions,
    azureErGwConfig,
    obDiscount,
    VOLUMES_TIB
  ]);

  // Bandeau de synthèse : taux de gain OB sur toutes les cases actuellement affichées
  // (recalculé à chaque changement de filtre puisque dérivé de heatmapData/volumeHeaders).
  const summary = useMemo(() => {
    let wins = 0;
    let total = 0;
    for (const row of heatmapData) {
      for (const vol of volumeHeaders) {
        const cell = row.cells[vol];
        if (!cell) continue;
        total++;
        if (cell.winner === 'OB') wins++;
      }
    }
    const losses = total - wins;
    return { wins, losses, total, winRate: total > 0 ? Math.round((wins / total) * 100) : 0 };
  }, [heatmapData, volumeHeaders]);

  // Construit le payload transmis au panneau de détail (CellDetailsFlat) — extrait pour être
  // réutilisé à la fois par le clic manuel sur une cellule et par la réouverture automatique
  // d'une cellule depuis un lien partagé (voir effet ci-dessous).
  function buildCellPayload(row, vol, cell) {
    return {
      // Infos de base
      ccMode,
      bandwidth: row.bandwidth,
      totalVolume: vol,
      volumeTiB: cell.volumeTiB,
      volumeGiB: cell.volumeGiB,

      // Egress Internet (baseline)
      totalEgress: cell.egressCost,
      natGwBaselineCost: cell.egressCostData?.natGwCost || 0,
      natGwBaselineDetail: cell.egressCostData?.natGwDetail || null,
      internetEgressTiers: cell.egressCostData?.tiers?.map(t => ({
        label: `${t.min.toFixed(0)}-${t.max === Infinity ? '∞' : t.max.toFixed(0)} ${selectedCSP === 'AWS' ? 'GiB' : 'GB'}`,
        cost: t.cost
      })) || [],
      regionName: selectedRegion,

      // OB (coûts originaux)
      obCost: cell.privateCost?.obCost || 0,
      obReservedBW: ccMode === 'public' ? '0 (PAYG)' : `${cell.privateCost?.obReservedBW || 0} — PAYG`,
      obUsage: `${cell.volumeTiB} TiB`,
      obReservedBWCost: cell.privateCost?.obReservedBW || 0,
      obUsageCost: cell.privateCost?.obUsageCost ?? cell.privateCost?.obCost ?? 0,
      obHours: cell.privateCost?.obHours || 744,
      obCountry: selectedCountry,
      obArchitecture: ccMode === 'public' ? publicArchitecture : 'High Availability',
      obAvailable: ccMode === 'public' ? (cell.privateCost?.available ?? true) : true,

      // OB avec remise
      obCostWithDiscount: cell.privateCost?.obCostWithDiscount || cell.privateCost?.obCost || 0,
      obDiscount: cell.privateCost?.obDiscount || 0,

      // Private uniquement : Port CSP (pas de remise CSP)
      cspPortCost: cell.privateCost?.cspPortCost || 0,
      cspPortRate: cell.privateCost?.portCostPerHour || 0,
      cspHoursPerMonth: cell.privateCost?.monthlyHours || 730,
      cspCircuitCount: cell.privateCost?.numCircuits || 2,

      // Private uniquement : ErGw Azure
      erGwCost: cell.privateCost?.erGwCost || 0,
      erGwScaleUnits: cell.privateCost?.erGwScaleUnits || 0,
      erGwCostPerUnit: cell.privateCost?.erGwCostPerHour || 0,

      // Private uniquement : Egress privé DX/ExpressRoute
      privateEgressCost: cell.privateCost?.privateEgressCost || 0,
      privateEgressRate: cell.privateCost?.privateEgressRate || 0,
      privateEgressVolume: `${(cell.privateCost?.volumeForEgress || 0).toFixed(2)} ${selectedCSP === 'AWS' ? 'GiB' : 'GB'}`,

      // Public/IPsec uniquement : egress Internet côté CSP + coûts client
      cspEgressCost: cell.privateCost?.cspEgressCost || 0,
      cspEgressTiers: cell.privateCost?.cspEgressTiers?.map(t => ({
        label: `${t.min.toFixed(0)}-${t.max === Infinity ? '∞' : t.max.toFixed(0)} ${selectedCSP === 'AWS' ? 'GiB' : 'GB'}`,
        cost: t.cost
      })) || [],
      natGwCost: cell.privateCost?.natGwCost || 0,
      natGwDetail: cell.privateCost?.natGwDetail || null,
      ipsecCpeCost: cell.privateCost?.ipsecCpeCost || 0,

      // Totaux avec/sans remise
      totalPrivate: cell.privateCost?.total || 0,
      totalWithDiscount: cell.privateCost?.totalWithDiscount || cell.privateCost?.total || 0,
      totalWithoutDiscount: cell.privateCost?.totalWithoutDiscount || cell.privateCost?.total || 0,

      // Économies
      savingsAmount: cell.savings,
      savingsPercent: cell.savingsPercent,
      magnitude: cell.magnitude,
      winner: cell.winner,

      // Link Load
      linkLoadPercent: cell.linkLoad?.loadPercent || 0,
      volumeDemanded: `${cell.volumeTiB} TiB`,
      capacityMonthly: `${cell.linkLoad?.capacityTiB?.toFixed(2) || 0} TiB`,
      chargeTheoric: `${cell.linkLoad?.loadPercent?.toFixed(1) || 0}%`,

      // Point de bascule Private ↔ Public/IPsec (calculé par bande passante, indépendant du ccMode affiché)
      crossoverVolumeTiB: row.crossover?.crossoverVolumeTiB ?? null,
      crossoverWinnerBelow: row.crossover?.winnerBelow ?? null,
      crossoverWinnerAbove: row.crossover?.winnerAbove ?? null,
      crossoverReason: row.crossover?.reason ?? null,
      crossoverConstantWinner: row.crossover?.constantWinner ?? null,
      crossoverPublicArchitecture: publicArchitecture
    };
  }

  // Réouvre automatiquement la cellule référencée par un lien partagé (une fois les données
  // prêtes). Ne s'exécute qu'une seule fois — un ref évite de rouvrir la cellule si
  // l'utilisateur la ferme ensuite alors que heatmapData se recalcule pour d'autres raisons.
  const appliedInitialCell = useRef(false);
  useEffect(() => {
    if (appliedInitialCell.current || !initialCellSelection) return;
    const row = heatmapData.find(r => r.bandwidth === initialCellSelection.bandwidth);
    if (!row) return;
    const volLabel = volumeHeaders.find(vol => row.cells[vol]?.volumeTiB === initialCellSelection.volumeTiB);
    if (volLabel && row.cells[volLabel]) {
      setSelectedCell(buildCellPayload(row, volLabel, row.cells[volLabel]));
      appliedInitialCell.current = true;
    }
  }, [heatmapData, volumeHeaders, initialCellSelection]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-graphite-900">
          {t('heatmap.title')}
        </h2>
        <p className="text-sm text-graphite-500 mt-0.5">
          {t('heatmap.subtitle', {
            mode: ccMode === 'public'
              ? t('heatmap.modePublic', { architecture: publicArchitecture === 'Standard' ? t('heatmap.architectureStandard') : t('heatmap.architectureHa') })
              : t('heatmap.modePrivate'),
            csp: selectedCSP
          })}
        </p>
      </div>

      {/* Bandeau de synthèse : taux de gain OB sur les cases actuellement affichées */}
      <div
        className="flex items-center gap-4 rounded-lg p-4 mb-4 flex-wrap"
        style={{ backgroundColor: 'var(--ouds-orange-50)' }}
      >
        <div className="text-4xl font-bold shrink-0" style={{ color: 'var(--ouds-orange-600)' }}>
          {summary.winRate}%
        </div>
        <div className="text-sm text-graphite-700">
          <div className="font-medium">{t('heatmap.winRateHeadline', { csp: selectedCSP })}</div>
          <div className="text-graphite-500 mt-0.5">
            {t('heatmap.winRateDetail', { wins: summary.wins, losses: summary.losses, total: summary.total })}
          </div>
        </div>
      </div>

      {/* Légende permanente : sens de lecture + échelle de couleur, 9 paliers */}
      <div className="flex items-center gap-2 mb-3 text-xs">
        <span className="font-medium text-graphite-600 shrink-0">{t('heatmap.legendMoreExpensive')}</span>
        <div className="flex h-2.5 flex-1 max-w-md rounded-full overflow-hidden border border-graphite-200">
          {[...GRAY_STOPS].reverse().map((c, i) => (
            <div key={`g${i}`} className="flex-1" style={{ backgroundColor: c }}></div>
          ))}
          {ORANGE_STOPS.slice(1).map((c, i) => (
            <div key={`o${i}`} className="flex-1" style={{ backgroundColor: c }}></div>
          ))}
        </div>
        <span className="font-medium text-graphite-600 shrink-0">{t('heatmap.legendLessExpensive')}</span>
      </div>

      <div className="flex text-xs font-medium text-graphite-400 mb-1 pl-[100px]">
        <span>{t('heatmap.volumeAxis')}</span>
      </div>

      <div className="rounded-lg border border-graphite-200 overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="header-cell">{t('heatmap.bandwidthAxis')}</th>
            {volumeHeaders.map(vol => (
              <th key={vol} className="header-cell">{vol}{t('heatmap.perMonthSuffix')}</th>
            ))}
            {/* Colonne "+" pour ajouter un volume inline */}
            <th className="header-cell" style={{ minWidth: '60px' }}>
              {addingVolume ? (
                <input
                  autoFocus
                  type="number"
                  min="0.1"
                  max="1000"
                  step="0.1"
                  value={inlineVolume}
                  onChange={(e) => setInlineVolume(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleInlineAdd();
                    if (e.key === 'Escape') { setAddingVolume(false); setInlineVolume(''); }
                  }}
                  onBlur={() => { setAddingVolume(false); setInlineVolume(''); }}
                  placeholder="TiB"
                  className="w-full px-1 py-0.5 border border-orange-300 rounded text-xs text-center focus:ring-1 focus:ring-orange-400 focus:outline-none"
                  style={{ maxWidth: '58px' }}
                />
              ) : (
                <button
                  onClick={() => setAddingVolume(true)}
                  className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-orange-800 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                  style={{ opacity: 1 }}
                  title={t('heatmap.addVolumeTitle')}
                >
                  +
                </button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {heatmapData.map(row => (
            <tr key={row.bandwidth}>
              <td className="bandwidth-cell">
                {row.bandwidth}
                {row.crossover?.crossoverVolumeTiB != null && (() => {
                  const fraction = Math.min(row.crossover.crossoverVolumeTiB / volumeMaxTiB, 1);
                  const belowColor = row.crossover.winnerBelow === 'public' ? 'var(--ouds-sky-500)' : 'var(--ouds-amber-500)';
                  const aboveColor = row.crossover.winnerAbove === 'public' ? 'var(--ouds-sky-500)' : 'var(--ouds-amber-500)';
                  return (
                    <div
                      className="flex items-center gap-1 mt-0.5"
                      title={t('heatmap.crossoverTooltip', {
                        volume: row.crossover.crossoverVolumeTiB.toFixed(1),
                        winnerBelow: winnerLabelFull(row.crossover.winnerBelow),
                        winnerAbove: winnerLabelFull(row.crossover.winnerAbove)
                      })}
                    >
                      <div className="flex h-1.5 rounded-full overflow-hidden" style={{ width: '40px' }}>
                        <div style={{ width: `${fraction * 100}%`, backgroundColor: belowColor }}></div>
                        <div style={{ width: `${(1 - fraction) * 100}%`, backgroundColor: aboveColor }}></div>
                      </div>
                      <span className="text-[10px] font-normal text-graphite-400">
                        {t('heatmap.crossoverVolumeLabel', { volume: row.crossover.crossoverVolumeTiB.toFixed(1) })}
                      </span>
                    </div>
                  );
                })()}
                {row.crossover?.reason === 'no-crossover' && (
                  <div
                    className="flex items-center gap-1 mt-0.5"
                    title={t('heatmap.crossoverConstantTooltip', {
                      winner: winnerLabelFull(row.crossover.constantWinner)
                    })}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: row.crossover.constantWinner === 'public' ? 'var(--ouds-sky-500)' : 'var(--ouds-amber-500)' }}
                    ></span>
                    <span className="text-[10px] font-normal text-graphite-400">
                      {t('heatmap.crossoverConstantBadge', {
                        winner: winnerLabelShort(row.crossover.constantWinner)
                      })}
                    </span>
                  </div>
                )}
              </td>
              {volumeHeaders.map(vol => {
                const cell = row.cells[vol];

                if (!cell) {
                  return (
                    <td
                      key={vol}
                      className="p-2 text-center border border-graphite-200 bg-graphite-100 text-graphite-400 text-xs"
                      title={t('heatmap.capacityExceeded')}
                    >
                      N/A
                    </td>
                  );
                }

                const isOverThreshold = cell.linkLoad.isOverThreshold;
                const bgColor = getCellColor(cell.magnitude, cell.winner);
                const textColor = getTextColor(cell.magnitude);
                const badgeLabel = cell.winner === 'OB' ? 'OB' : selectedCSP;
                const badgeBg = cell.winner === 'OB' ? 'var(--ouds-orange-500)' : 'var(--ouds-warm-gray-700)';

                return (
                  <td
                    key={vol}
                    className="heatmap-cell"
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                      opacity: isOverThreshold ? 0.5 : 1
                    }}
                    onClick={() => setSelectedCell(buildCellPayload(row, vol, cell))}
                    title={`${t('heatmap.clickForDetails', { load: cell.linkLoad.loadPercent.toFixed(0) })}${ccMode === 'public' && !cell.privateCost?.available ? t('heatmap.notAvailableSuffix') : ''}`}
                  >
                    <div
                      className="inline-block text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: badgeBg, color: '#ffffff' }}
                    >
                      {badgeLabel} −{Math.round(cell.magnitude)}%
                    </div>
                    <div className="text-xs mt-1">
                      {formatCurrency(Math.abs(cell.savings))}
                    </div>
                    {isOverThreshold && (
                      <div className="text-xs mt-1">⚠️</div>
                    )}
                    {ccMode === 'public' && !cell.privateCost?.available && (
                      <div className="text-xs mt-1" title={t('heatmap.notAvailableTitle')}>🚧</div>
                    )}
                  </td>
                );
              })}
              {/* Cellule vide sous le "+" */}
              <td className="border border-graphite-200 bg-graphite-50"></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}
