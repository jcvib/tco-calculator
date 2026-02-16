import ChartsFlat from './ChartsFlat';
import CostBreakdownFlat from './CostBreakdownFlat';
import LinkAnalysisFlat from './LinkAnalysisFlat';

export default function CellDetailsFlat({ selectedCell, setSelectedCell, selectedCSP, volumeUnit, capacityThreshold }) {
  if (!selectedCell) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0,0,0,0.75)' }}>
      <div className="rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" style={{ background: '#1A1D27' }}>
        {/* Header */}
        <div className="p-5 sticky top-0 z-10 rounded-t-xl" style={{ background: '#222533', borderBottom: '1px solid #2D3148' }}>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold" style={{ color: '#E4E6F1' }}>
              Detail des Calculs - {selectedCell.bandwidth} / {selectedCell.totalVolume}
            </h2>
            <button
              onClick={() => setSelectedCell(null)}
              className="text-2xl font-bold leading-none transition-colors"
              style={{ color: '#7B809A' }}
              aria-label="Fermer"
            >
              x
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Colonne gauche : Graphiques */}
            <div>
              <ChartsFlat selectedCell={selectedCell} selectedCSP={selectedCSP} />
            </div>

            {/* Colonne droite : Details et Analyse */}
            <div className="space-y-6">
              <CostBreakdownFlat
                selectedCell={selectedCell}
                selectedCSP={selectedCSP}
              />
              <LinkAnalysisFlat
                selectedCell={selectedCell}
                capacityThreshold={capacityThreshold}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
