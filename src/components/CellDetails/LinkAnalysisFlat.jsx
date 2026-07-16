import { useLanguage } from '../../i18n/LanguageContext';

export default function LinkAnalysisFlat({ selectedCell, capacityThreshold }) {
  const { t } = useLanguage();
  const {
    bandwidth = 'N/A',
    linkLoadPercent = 0,
    volumeDemanded = 'N/A',
    capacityMonthly = 'N/A',
    chargeTheoric = 'N/A',
    crossoverVolumeTiB = null,
    crossoverWinnerBelow = null,
    crossoverWinnerAbove = null,
    crossoverReason = null,
    crossoverConstantWinner = null,
    crossoverPublicArchitecture = 'High Availability'
  } = selectedCell || {};

  const isComfortable = linkLoadPercent <= capacityThreshold;
  const statusColor = isComfortable ? 'text-malachite-600' : 'text-amber-600';
  const barColor = isComfortable ? 'bg-malachite-500' : 'bg-amber-500';
  const bgColor = isComfortable ? 'bg-malachite-50' : 'bg-amber-50';
  const borderColor = isComfortable ? 'border-malachite-200' : 'border-amber-200';

  // Libellé Public précisant l'architecture (Standard/HA) pour éviter toute ambiguïté
  const architectureLabel = crossoverPublicArchitecture === 'Standard' ? t('heatmap.architectureStandard') : t('heatmap.architectureHa');
  const winnerLabel = (winner) => winner === 'public' ? t('heatmap.winnerPublic', { architecture: architectureLabel }) : t('heatmap.winnerPrivate');

  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-4`}>
      <h3 className="text-sm font-medium text-graphite-800 mb-3 flex items-center gap-2">
        📊 {t('linkAnalysis.title')}
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-graphite-500">{t('linkAnalysis.selectedBandwidth')}</span>
          <span className="font-medium">{bandwidth}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-graphite-500">{t('linkAnalysis.theoreticalCapacity')}</span>
          <span className="font-medium">{capacityMonthly}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-graphite-500">{t('linkAnalysis.requestedVolume')}</span>
          <span className="font-medium">{volumeDemanded}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-graphite-500">{t('linkAnalysis.theoreticalLoad')}</span>
          <span className="font-medium">{chargeTheoric}</span>
        </div>

        <div className="pt-3 border-t border-graphite-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-graphite-700 font-medium">{t('linkAnalysis.linkLoad')}</span>
            <span className={`font-bold text-lg ${statusColor}`}>
              {(linkLoadPercent || 0).toFixed(1)}%
            </span>
          </div>

          <div className="w-full bg-graphite-200 rounded-full h-4 overflow-hidden">
            <div
              className={`${barColor} h-4 rounded-full transition-all duration-300`}
              style={{ width: `${Math.min(linkLoadPercent || 0, 100)}%` }}
            ></div>
          </div>

          <div className="mt-2 text-xs text-graphite-500 flex items-center gap-2">
            {isComfortable ? (
              <span className="text-malachite-600">{t('linkAnalysis.comfortableMargin')}</span>
            ) : (
              <span className="text-amber-600">{t('linkAnalysis.adjustBandwidth')}</span>
            )}
          </div>
        </div>

        {crossoverVolumeTiB != null && (
          <div className="pt-3 border-t border-graphite-200">
            <span className="text-graphite-700 font-medium">{t('linkAnalysis.crossoverTitle')}</span>
            <p className="mt-1 text-xs text-graphite-500">
              {t('linkAnalysis.crossoverExplain', {
                volume: crossoverVolumeTiB.toFixed(1),
                winnerBelow: winnerLabel(crossoverWinnerBelow),
                winnerAbove: winnerLabel(crossoverWinnerAbove)
              })}
            </p>
          </div>
        )}
        {crossoverReason === 'no-crossover' && (
          <div className="pt-3 border-t border-graphite-200">
            <span className="text-graphite-700 font-medium">{t('linkAnalysis.crossoverTitle')}</span>
            <p className="mt-1 text-xs text-graphite-500">
              {t('linkAnalysis.crossoverConstantExplain', { winner: winnerLabel(crossoverConstantWinner) })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
