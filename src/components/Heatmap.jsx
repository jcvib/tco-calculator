import { useState, useMemo } from 'react';
import { getCellColor, getTextColor } from '../utils/colors';
import { getVolumeLabel, parseBandwidth } from '../utils/formatters';
import { calculateEgressCost, calculatePrivateCost, calculateLinkLoad } from '../utils/calculations';

export default function Heatmap({
  selectedCountry,
  selectedCSP,
  selectedRegion,
  volumeUnit,
  capacityThreshold,
  setSelectedCell,
  availableBandwidths,
  obPricing,
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
  setCustomVolumes
}) {
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
  const BASE_VOLUMES_TIB = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];
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

      for (const volumeTiB of VOLUMES_TIB) {
        const volumeGiB = volumeTiB * 1024;
        const volumeDisplay = getVolumeLabel(volumeTiB, volumeUnit, selectedCSP);

        const linkLoad = calculateLinkLoad(volumeTiB, bandwidthMbps, capacityThreshold);

        if (linkLoad.loadPercent >= 100) continue;

        const egressRegions = selectedCSP === 'AWS' ? awsEgressRegions : azureEgressRegions;
        const egressCostData = calculateEgressCost(volumeGiB, selectedRegion, selectedCSP, egressRegions);

        const privateCost = calculatePrivateCost({
          bandwidth,
          volumeGiB,
          obCountry: selectedCountry,
          csp: selectedCSP,
          region: selectedRegion,
          obPricing,
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

        // savings = egress Internet CSP direct vs OB privé (avec remise)
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
    obPricing,
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

  return (
    <div className="rounded-lg p-4 overflow-x-auto" style={{ background: '#222533', border: '1px solid #2D3148' }}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-white">
          Economies OB ODCC vs Egress Internet {selectedCSP} - {selectedCountry} - {selectedRegion}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: '#4ade80', fontFamily: 'monospace' }}>OB +%</span>
          <div className="rounded" style={{
            width: 120, height: 10,
            background: 'linear-gradient(to right, #15803d, #86efac, #fde68a, #93c5fd, #1d4ed8, #172554)'
          }} />
          <span className="text-xs" style={{ color: '#60a5fa', fontFamily: 'monospace' }}>CSP -%</span>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="header-cell">Bande passante</th>
            {volumeHeaders.map(vol => (
              <th key={vol} className="header-cell">{vol}/mois</th>
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
                  className="w-full px-1 py-0.5 rounded text-xs text-center focus:ring-1 focus:ring-orange-400 focus:outline-none"
                  style={{ maxWidth: '58px', background: '#222533', border: '1px solid #2D3148', color: '#E4E6F1' }}
                />
              ) : (
                <button
                  onClick={() => setAddingVolume(true)}
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                  style={{ opacity: 1, background: '#2D3148', color: '#FF6600' }}
                  title="Ajouter un volume"
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
              <td className="bandwidth-cell">{row.bandwidth}</td>
              {volumeHeaders.map(vol => {
                const cell = row.cells[vol];

                if (!cell) {
                  return (
                    <td
                      key={vol}
                      className="p-2 text-center text-xs"
                      style={{ background: '#1A1D27', border: '1px solid #2D3148', color: '#7B809A' }}
                      title="Capacité dépassée (charge > 100%)"
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
                    onClick={() => setSelectedCell({
                      // Infos de base
                      bandwidth: row.bandwidth,
                      totalVolume: vol,
                      volumeTiB: cell.volumeTiB,
                      volumeGiB: cell.volumeGiB,
                      
                      // Egress Internet
                      totalEgress: cell.egressCost,
                      internetEgressTiers: cell.egressCostData?.tiers?.map(t => ({
                        label: `${t.min.toFixed(0)}-${t.max === Infinity ? '∞' : t.max.toFixed(0)} ${selectedCSP === 'AWS' ? 'GiB' : 'GB'}`,
                        cost: t.cost
                      })) || [],
                      regionName: selectedRegion,
                      
                      // OB (coûts originaux)
                      obCost: cell.privateCost?.obCost || 0,
                      obReservedBW: `${cell.privateCost?.obReservedBW || 0} USD`,
                      obUsage: `${cell.volumeTiB} TiB`,
                      obReservedBWCost: cell.privateCost?.obReservedBW || 0,
                      obUsageCost: cell.privateCost?.obUsageCost || 0,
                      obHours: cell.privateCost?.obHours || 730,
                      obCountry: selectedCountry,

                      // OB avec remise
                      obCostWithDiscount: cell.privateCost?.obCostWithDiscount || cell.privateCost?.obCost || 0,
                      obDiscount: cell.privateCost?.obDiscount || 0,
                      
                      // CSP Port (pas de remise CSP)
                      cspPortCost: cell.privateCost?.cspPortCost || 0,
                      cspPortRate: cell.privateCost?.portCostPerHour || 0,
                      cspHoursPerMonth: cell.privateCost?.monthlyHours || 730,
                      cspCircuitCount: cell.privateCost?.numCircuits || 2,
                      
                      // ErGw Azure
                      erGwCost: cell.privateCost?.erGwCost || 0,
                      erGwScaleUnits: cell.privateCost?.erGwScaleUnits || 0,
                      erGwCostPerUnit: cell.privateCost?.erGwCostPerHour || 0,
                      
                      // Private Egress
                      privateEgressCost: cell.privateCost?.privateEgressCost || 0,
                      privateEgressRate: cell.privateCost?.privateEgressRate || 0,
                      privateEgressVolume: `${(cell.privateCost?.volumeForEgress || 0).toFixed(2)} ${selectedCSP === 'AWS' ? 'GiB' : 'GB'}`,
                      
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
                      chargeTheoric: `${cell.linkLoad?.loadPercent?.toFixed(1) || 0}%`
                    })}
                    title={`Cliquer pour voir les détails | Charge: ${cell.linkLoad.loadPercent.toFixed(0)}%`}
                  >
                    <div className="text-sm font-bold" style={{ fontFamily: 'monospace' }}>
                      {cell.savingsPercent > 0 ? '+' : ''}{cell.savingsPercent.toFixed(0)}%
                    </div>
                    <div className="text-xs mt-0.5" style={{ fontFamily: 'monospace', opacity: 0.8 }}>
                      ${Math.abs(cell.savings).toFixed(0)}
                    </div>
                    {isOverThreshold && (
                      <div className="text-xs mt-1">⚠️</div>
                    )}
                  </td>
                );
              })}
              {/* Cellule vide sous le "+" */}
              <td style={{ background: '#1A1D27', border: '1px solid #2D3148' }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
