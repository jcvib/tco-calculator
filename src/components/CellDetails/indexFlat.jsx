import ChartsFlat from './ChartsFlat';
import CostBreakdownFlat from './CostBreakdownFlat';
import LinkAnalysisFlat from './LinkAnalysisFlat';
import { useLanguage } from '../../i18n/LanguageContext';

export default function CellDetailsFlat({ selectedCell, setSelectedCell, selectedCSP, volumeUnit, capacityThreshold }) {
  const { t } = useLanguage();
  if (!selectedCell) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-graphite-50 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-graphite-200 p-5 sticky top-0 z-10 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graphite-800">
              🔍 {t('cellDetails.modalTitle', { bandwidth: selectedCell.bandwidth, volume: selectedCell.totalVolume })}
            </h2>
            <button
              onClick={() => setSelectedCell(null)}
              className="text-graphite-400 hover:text-graphite-600 text-2xl font-bold leading-none transition-colors"
              aria-label={t('cellDetails.close')}
            >
              ×
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

            {/* Colonne droite : Détails et Analyse */}
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
