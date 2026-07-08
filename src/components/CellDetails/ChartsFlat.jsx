import { formatCurrency } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ChartsFlat({ selectedCell, selectedCSP }) {
  const { t } = useLanguage();
  const {
    ccMode = 'private',
    totalEgress = 0,
    savingsAmount = 0,
    savingsPercent = 0,
    obDiscount = 0
  } = selectedCell || {};

  const isPublic = ccMode === 'public';
  const modeLabel = isPublic ? t('charts.modePublic') : t('charts.modePrivate');

  // OB avec remise si applicable, sinon valeur originale
  const obCost = selectedCell?.obCostWithDiscount ?? selectedCell?.obCost ?? 0;
  const cspPortCost = isPublic ? 0 : (selectedCell?.cspPortCost || 0);
  const erGwCost = isPublic ? 0 : (selectedCell?.erGwCost || 0);
  const privateEgressCost = isPublic ? 0 : (selectedCell?.privateEgressCost || 0);
  const cspEgressCost = isPublic ? (selectedCell?.cspEgressCost || 0) : 0;
  const clientCost = isPublic ? ((selectedCell?.natGwCost || 0) + (selectedCell?.ipsecCpeCost || 0)) : 0;

  const totalPrivate = selectedCell?.totalWithDiscount ?? selectedCell?.totalPrivate ?? 0;
  const hasDiscount = obDiscount > 0;

  // Pourcentages pour barre segmentée
  const totalForBars = obCost + cspPortCost + erGwCost + privateEgressCost + cspEgressCost + clientCost;
  const obPercent = totalForBars > 0 ? (obCost / totalForBars) * 100 : 0;
  const portPercent = totalForBars > 0 ? (cspPortCost / totalForBars) * 100 : 0;
  const erGwPercent = totalForBars > 0 ? (erGwCost / totalForBars) * 100 : 0;
  const egressPercent = totalForBars > 0 ? (privateEgressCost / totalForBars) * 100 : 0;
  const cspEgressPercent = totalForBars > 0 ? (cspEgressCost / totalForBars) * 100 : 0;
  const clientCostPercent = totalForBars > 0 ? (clientCost / totalForBars) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Décomposition */}
      <div className="bg-white border border-graphite-200 rounded-lg p-6">
        <h3 className="text-base font-medium text-graphite-800 mb-4 flex items-center gap-2">
          📊 {t('charts.breakdownTitle')}
          {hasDiscount && <span className="text-xs bg-malachite-600 text-white px-2 py-0.5 rounded">{t('charts.discountBadge', { discount: obDiscount })}</span>}
        </h3>

        {/* Egress Internet */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-graphite-600">{t('charts.egressInternet', { csp: selectedCSP })}</span>
            <span className="text-sm font-medium text-graphite-700">{formatCurrency(totalEgress)}</span>
          </div>
          <div className="w-full bg-graphite-100 rounded-full h-3">
            <div className="bg-graphite-500 h-3 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* OB (segmentée) */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-graphite-600">{t('charts.cloudConnect', { mode: modeLabel })}</span>
            <span className="text-sm font-medium text-orange-600">{formatCurrency(totalPrivate)}</span>
          </div>
          <div className="w-full bg-graphite-100 rounded-full h-3 flex overflow-hidden">
            {obPercent > 0 && (
              <div className="bg-orange-500 h-3" style={{ width: `${obPercent}%` }}
                title={t('charts.legendOb', { amount: formatCurrency(obCost) })}></div>
            )}
            {portPercent > 0 && (
              <div className="bg-graphite-400 h-3" style={{ width: `${portPercent}%` }}
                title={t('charts.legendPort', { csp: selectedCSP, amount: formatCurrency(cspPortCost) })}></div>
            )}
            {erGwPercent > 0 && (
              <div className="bg-purple-400 h-3" style={{ width: `${erGwPercent}%` }}
                title={t('charts.legendErgw', { amount: formatCurrency(erGwCost) })}></div>
            )}
            {egressPercent > 0 && (
              <div className="bg-graphite-300 h-3" style={{ width: `${egressPercent}%` }}
                title={t('charts.legendEgress', { amount: formatCurrency(privateEgressCost) })}></div>
            )}
            {cspEgressPercent > 0 && (
              <div className="bg-graphite-500 h-3" style={{ width: `${cspEgressPercent}%` }}
                title={t('charts.legendPublicEgress', { csp: selectedCSP, amount: formatCurrency(cspEgressCost) })}></div>
            )}
            {clientCostPercent > 0 && (
              <div className="bg-graphite-200 h-3" style={{ width: `${clientCostPercent}%` }}
                title={t('charts.legendClient', { amount: formatCurrency(clientCost) })}></div>
            )}
          </div>
        </div>

        {/* Légende */}
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-graphite-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>{t('charts.legendOb', { amount: formatCurrency(obCost) })}{hasDiscount ? ' ✓' : ''}</span>
          </div>
          {!isPublic && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-graphite-400 rounded"></div>
              <span>{t('charts.legendPort', { csp: selectedCSP, amount: formatCurrency(cspPortCost) })}</span>
            </div>
          )}
          {erGwPercent > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span>{t('charts.legendErgw', { amount: formatCurrency(erGwCost) })}</span>
            </div>
          )}
          {!isPublic && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-graphite-300 rounded"></div>
              <span>{t('charts.legendEgress', { amount: formatCurrency(privateEgressCost) })}</span>
            </div>
          )}
          {isPublic && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-graphite-500 rounded"></div>
              <span>{t('charts.legendPublicEgress', { csp: selectedCSP, amount: formatCurrency(cspEgressCost) })}</span>
            </div>
          )}
          {clientCostPercent > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-graphite-200 rounded"></div>
              <span>{t('charts.legendClient', { amount: formatCurrency(clientCost) })}</span>
            </div>
          )}
        </div>
      </div>

      {/* Comparaison finale */}
      <div className="bg-white border border-graphite-200 rounded-lg p-6">
        <h3 className="text-base font-medium text-graphite-800 mb-4">📈 {t('charts.finalComparisonTitle')}</h3>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs text-graphite-500 mb-1">{t('charts.finalEgress', { csp: selectedCSP })}</div>
            <div className="text-xl font-bold text-graphite-800">{formatCurrency(totalEgress)}</div>
          </div>
          <div>
            <div className="text-xs text-graphite-500 mb-1">
              {t('charts.finalCloudConnect', { mode: modeLabel })}
              {hasDiscount && <span className="block text-malachite-600 font-medium">{t('charts.finalDiscount', { discount: obDiscount })}</span>}
            </div>
            <div className="text-xl font-bold text-orange-600">{formatCurrency(totalPrivate)}</div>
          </div>
          <div>
            <div className="text-xs text-graphite-500 mb-1">{t('charts.finalSavings')}</div>
            <div className={`text-xl font-bold ${savingsAmount > 0 ? 'text-malachite-600' : 'text-graphite-700'}`}>
              {savingsAmount > 0 ? '+' : ''}{formatCurrency(Math.abs(savingsAmount))}
            </div>
            <div className={`text-sm ${savingsAmount > 0 ? 'text-malachite-600' : 'text-graphite-700'}`}>
              ({savingsPercent > 0 ? '+' : ''}{savingsPercent.toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
