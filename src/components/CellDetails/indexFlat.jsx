import ChartsFlat from './ChartsFlat';
import CostBreakdownFlat from './CostBreakdownFlat';
import LinkAnalysisFlat from './LinkAnalysisFlat';
import { useLanguage } from '../../i18n/LanguageContext';
import { formatCurrency } from '../../utils/formatters';

export default function CellDetailsFlat({ selectedCell, setSelectedCell, selectedCSP, volumeUnit, capacityThreshold, onCompareVsDiy }) {
  const { t } = useLanguage();
  if (!selectedCell) return null;

  const handleCompareVsDiy = () => {
    onCompareVsDiy({ country: selectedCell.obCountry, bandwidth: selectedCell.bandwidth });
  };

  const isObWin = selectedCell.winner === 'OB';
  const winnerName = isObWin ? 'Orange Business' : selectedCSP;
  const loserName = isObWin ? selectedCSP : 'Orange Business';

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
          {/* Bandeau statut + phrase de synthèse */}
          <div
            className={`rounded-lg p-4 mb-6 ${isObWin ? 'bg-malachite-50' : 'bg-graphite-100'}`}
          >
            <div className={`font-semibold ${isObWin ? 'text-malachite-700' : 'text-graphite-700'}`}>
              {isObWin ? t('cellDetails.headlineWin') : t('cellDetails.headlineLose', { csp: selectedCSP })}
            </div>
            <p className="text-sm text-graphite-600 mt-1">
              {t('cellDetails.summarySentence', {
                winner: winnerName,
                loser: loserName,
                magnitude: Math.round(selectedCell.magnitude || 0),
                bandwidth: selectedCell.bandwidth,
                volume: selectedCell.totalVolume,
                amount: formatCurrency(Math.abs(selectedCell.savingsAmount || 0))
              })}
            </p>
          </div>

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

          <div className="mt-6 pt-4 border-t border-graphite-200 flex justify-end">
            <button
              onClick={handleCompareVsDiy}
              className="px-4 py-2 text-sm font-medium bg-graphite-800 text-white rounded-lg hover:bg-graphite-900 transition-colors"
            >
              ⚔️ {t('cellDetails.compareVsDiy')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
