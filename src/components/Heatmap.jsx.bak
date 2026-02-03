import { useMemo } from 'react';
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
  azureErGwConfig
}) {
  const VOLUMES_TIB = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];

  const heatmapData = useMemo(() => {
    const rows = [];

    for (const bandwidth of availableBandwidths) {
      const row = { bandwidth, cells: {} };
      const bandwidthMbps = parseBandwidth(bandwidth);

      for (const volumeTiB of VOLUMES_TIB) {
        const volumeGiB = volumeTiB * 1024;
        const volumeDisplay = getVolumeLabel(volumeTiB, volumeUnit, selectedCSP);

        // Calcul charge du lien
        const linkLoad = calculateLinkLoad(volumeTiB, bandwidthMbps, capacityThreshold);

        // Ignorer si charge > 100%
        if (linkLoad.loadPercent >= 100) {
          continue;
        }

        // Calcul egress Internet
        const egressRegions = selectedCSP === 'AWS' ? awsEgressRegions : azureEgressRegions;
        const egressCostData = calculateEgressCost(volumeGiB, selectedRegion, selectedCSP, egressRegions);

        // Calcul connectivité privée
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
          azureErGwConfig
        });

        if (!privateCost) continue;

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
    azureErGwConfig
  ]);

  const volumeHeaders = useMemo(() => {
    return VOLUMES_TIB.map(vol => getVolumeLabel(vol, volumeUnit, selectedCSP));
  }, [volumeUnit, selectedCSP]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🔥 Heatmap TCO - Économies/Surcoûts (%)
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="header-cell">Bande passante</th>
            {volumeHeaders.map(vol => (
              <th key={vol} className="header-cell">{vol}/mois</th>
            ))}
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
                      className="p-2 text-center border border-gray-200 bg-gray-100 text-gray-400 text-xs"
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
                    onClick={() => setSelectedCell({ ...cell, bandwidth: row.bandwidth, volume: vol })}
                    title={`Cliquer pour voir les détails | Charge: ${cell.linkLoad.loadPercent.toFixed(0)}%`}
                  >
                    <div className="text-lg font-bold">
                      {cell.savingsPercent > 0 ? '+' : ''}{cell.savingsPercent.toFixed(0)}%
                    </div>
                    <div className="text-xs mt-1">
                      ${Math.abs(cell.savings).toFixed(0)}
                    </div>
                    {isOverThreshold && (
                      <div className="text-xs mt-1">⚠️</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
