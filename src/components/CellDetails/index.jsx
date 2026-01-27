import Charts from './Charts';
import CostBreakdown from './CostBreakdown';
import LinkAnalysis from './LinkAnalysis';
import { getDisplayedVolume, getVolumeLabel } from '../../utils/formatters';

export default function CellDetails({ 
  selectedCell, 
  setSelectedCell, 
  selectedCSP,
  volumeUnit,
  capacityThreshold
}) {
  if (!selectedCell) return null;

  const getDisplayVolume = (volumeGiB) => getDisplayedVolume(volumeGiB, volumeUnit, selectedCSP);
  const getVolLabel = (vol) => getVolumeLabel(vol, volumeUnit, selectedCSP);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            📋 Analyse détaillée
          </h2>
          <p className="text-gray-600 mt-1">
            {selectedCell.bandwidth} @ {getVolLabel(selectedCell.volume)}/mois
          </p>
        </div>
        <button
          onClick={() => setSelectedCell(null)}
          className="text-3xl hover:text-red-600 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Graphiques */}
      <Charts
        privateCost={selectedCell.privateCost}
        egressCost={selectedCell.egressCost}
        savings={selectedCell.savings}
        savingsPercent={selectedCell.savingsPercent}
        selectedCSP={selectedCSP}
      />

      {/* Tableaux détaillés */}
      <CostBreakdown
        privateCost={selectedCell.privateCost}
        egressCost={selectedCell.egressCost}
        egressCostData={selectedCell.egressCostData}
        savings={selectedCell.savings}
        savingsPercent={selectedCell.savingsPercent}
        selectedCSP={selectedCSP}
      />

      {/* Analyse de charge */}
      <LinkAnalysis
        linkLoad={selectedCell.linkLoad}
        bandwidth={selectedCell.bandwidth}
        volumeGiB={selectedCell.volumeGiB}
        capacityThreshold={capacityThreshold}
        getDisplayedVolume={getDisplayVolume}
      />
    </div>
  );
}
