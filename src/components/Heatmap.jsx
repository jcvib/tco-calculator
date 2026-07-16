import { useState, useMemo, useEffect, useRef } from 'react';
import { getCellColor, getTextColor } from '../utils/colors';
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

        row.cells[volumeDisplay] = {
          volumeTiB,
          volumeGiB,
          egressCost: egressCostData.total,
          egressCostData,
          privateCost,
          savings,
          savingsPercent,
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
      <div className="flex items-start justify-between gap-6 mb-4 flex-wrap">
        <div>
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

        {/* Légende : sens de lecture + échelle de couleur */}
        <div className="text-xs text-graphite-500 shrink-0">
          <div className="flex items-center gap-2 mb-1.5 justify-end">
            <span className="font-medium text-graphite-600">{t('heatmap.legendMoreExpensive')}</span>
            <div className="flex h-2.5 w-40 rounded-full overflow-hidden border border-graphite-200">
              <div className="flex-1" style={{ backgroundColor: '#8B8F99' }}></div>
              <div className="flex-1" style={{ backgroundColor: '#DBDDE2' }}></div>
              <div className="flex-1" style={{ backgroundColor: '#F7F8F9' }}></div>
              <div className="flex-1" style={{ backgroundColor: '#FFCB85' }}></div>
              <div className="flex-1" style={{ backgroundColor: '#9C4700' }}></div>
            </div>
            <span className="font-medium text-graphite-600">{t('heatmap.legendLessExpensive')}</span>
          </div>
          <p className="text-right">{t('heatmap.legendCaption', { csp: selectedCSP })}</p>
        </div>
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
                {row.crossover?.crossoverVolumeTiB != null && (
                  <div
                    className="text-[10px] font-normal text-graphite-400 mt-0.5"
                    title={t('heatmap.crossoverTooltip', {
                      volume: row.crossover.crossoverVolumeTiB.toFixed(1),
                      winnerBelow: winnerLabelFull(row.crossover.winnerBelow),
                      winnerAbove: winnerLabelFull(row.crossover.winnerAbove)
                    })}
                  >
                    {t('heatmap.crossoverBadge', { volume: row.crossover.crossoverVolumeTiB.toFixed(1) })}
                  </div>
                )}
                {row.crossover?.reason === 'no-crossover' && (
                  <div
                    className="text-[10px] font-normal text-graphite-400 mt-0.5"
                    title={t('heatmap.crossoverConstantTooltip', {
                      winner: winnerLabelFull(row.crossover.constantWinner)
                    })}
                  >
                    {t('heatmap.crossoverConstantBadge', {
                      winner: winnerLabelShort(row.crossover.constantWinner)
                    })}
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
                const bgColor = getCellColor(cell.savingsPercent);
                const textColor = getTextColor(cell.savingsPercent);

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
                    <div className="text-lg font-bold">
                      {cell.savingsPercent > 0 ? '+' : ''}{cell.savingsPercent.toFixed(0)}%
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
