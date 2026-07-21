import { formatCurrency } from '../../utils/formatters';
import { NAT_GW_HOURLY_USD, NAT_GW_PER_GB_USD, NAT_GW_MONTHLY_HOURS, IPSEC_CPE_MONTHLY_USD } from '../../utils/calculations';
import { useLanguage } from '../../i18n/LanguageContext';

export default function CostBreakdownFlat({ selectedCell, selectedCSP }) {
  const { t } = useLanguage();
  const {
    ccMode = 'private',
    obCost = 0,
    obCostWithDiscount,
    obDiscount = 0,
    obUsage = 'N/A',
    obReservedBWCost = 0,
    obUsageCost = 0,
    obHours = 730,
    obCountry = 'N/A',
    obArchitecture = 'N/A',
    obAvailable = true,
    cspPortCost = 0,
    cspPortRate = 0,
    cspHoursPerMonth = 730,
    cspCircuitCount = 2,
    erGwCost = 0,
    erGwScaleUnits = 0,
    erGwCostPerUnit = 0,
    privateEgressCost = 0,
    privateEgressRate = 0,
    privateEgressVolume = 'N/A',
    cspEgressCost = 0,
    cspEgressTiers = [],
    natGwCost = 0,
    ipsecCpeCost = 0,
    natGwBaselineCost = 0,
    natGwBaselineDetail = null,
    natGwDetail = null,
    totalWithoutDiscount,
    totalWithDiscount,
    internetEgressTiers = [],
    totalEgress = 0,
    totalVolume = 'N/A',
    regionName = 'N/A',
    bandwidth = 'N/A'
  } = selectedCell || {};

  const hasDiscount = obDiscount > 0;
  const isPublic = ccMode === 'public';
  const connectType = selectedCSP === 'AWS' ? t('costBreakdown.directConnect') : t('costBreakdown.expressRoute');
  const modeLabel = isPublic ? t('costBreakdown.modePublicLabel') : t('costBreakdown.modePrivateLabel');

  return (
    <div className="space-y-4">
      {/* Egress Internet */}
      <div className="bg-graphite-50 border border-graphite-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-graphite-800 mb-3 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-graphite-500 shrink-0"></span>
          {t('costBreakdown.egressTitle', { csp: selectedCSP })}
        </h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-graphite-500">{t('costBreakdown.totalVolume')}</span>
            <span className="font-medium">{totalVolume}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">{t('costBreakdown.region', { csp: selectedCSP })}</span>
            <span className="font-medium">{regionName}</span>
          </div>

          {/* Paliers */}
          <div className="mt-3 pt-3 border-t border-graphite-200">
            <div className="text-xs text-graphite-400 mb-2">{t('costBreakdown.priceTiers')}</div>
            {internetEgressTiers && internetEgressTiers.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-center py-0.5">
                <span className="text-xs text-graphite-500">{tier?.label || 'N/A'}</span>
                <span className="text-xs font-medium">{formatCurrency(tier?.cost || 0)}</span>
              </div>
            ))}
            {natGwBaselineCost > 0 && (
              <div className="flex justify-between items-center py-0.5" title={t('costBreakdown.natGwHoverDetail', {
                hourly: NAT_GW_HOURLY_USD, hours: NAT_GW_MONTHLY_HOURS,
                hourlyCost: formatCurrency(natGwBaselineDetail?.hourlyCost || 0),
                perGb: NAT_GW_PER_GB_USD, dataCost: formatCurrency(natGwBaselineDetail?.dataCost || 0)
              })}>
                <span className="text-xs text-graphite-500" style={{ textDecoration: 'underline dotted' }}>{t('costBreakdown.natGwEstimateLabel')}</span>
                <span className="text-xs font-medium">{formatCurrency(natGwBaselineCost)}</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-graphite-300">
            <span className="font-medium text-graphite-800">{t('costBreakdown.totalEgress', { csp: selectedCSP })}</span>
            <span className="font-bold text-graphite-700 text-lg">{formatCurrency(totalEgress)}</span>
          </div>
        </div>
      </div>

      {/* Connectivité OB */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-orange-900 mb-3 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0"></span>
          {isPublic
            ? t('costBreakdown.connectPublic', { architecture: obArchitecture === 'Standard' ? t('heatmap.architectureStandard') : 'HA' })
            : t('costBreakdown.connectPrivate')} (OB + {selectedCSP})
          {hasDiscount && <span className="text-xs bg-malachite-600 text-white px-2 py-0.5 rounded">{t('costBreakdown.discountBadge', { discount: obDiscount })}</span>}
          {isPublic && !obAvailable && <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded">{t('costBreakdown.unavailableBadge', { csp: selectedCSP })}</span>}
        </h3>

        {/* OB ODCC */}
        <div className="mb-3 pb-3 border-b border-orange-200">
          <div className="text-xs font-medium text-orange-800 mb-2 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            {t('costBreakdown.odccTitle')}
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span className="text-graphite-500">{isPublic ? t('costBreakdown.country') : t('costBreakdown.countryRouting')}</span>
              <span>{obCountry}{isPublic ? '' : t('costBreakdown.countryLocal')}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-graphite-500">{t('costBreakdown.bandwidth')}</span>
              <span>{bandwidth}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-graphite-500">{t('costBreakdown.reservedFee')}</span>
              <span>{formatCurrency(obReservedBWCost)} {t('costBreakdown.reservedFeePayg')}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-graphite-500">{t('costBreakdown.usage', { usage: obUsage })}</span>
              <span>{formatCurrency(obUsageCost)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-graphite-500">{t('costBreakdown.hoursPerMonth')}</span>
              <span>{obHours}h</span>
            </div>

            {hasDiscount ? (
              <>
                <div className="flex justify-between text-xs text-graphite-400 line-through mt-2">
                  <span>{t('costBreakdown.monthlyCostNoDiscount')}</span>
                  <span>{formatCurrency(obCost)}</span>
                </div>
                <div className="flex justify-between font-medium text-sm pt-1 text-malachite-600">
                  <span>{t('costBreakdown.monthlyCostWithDiscount', { discount: obDiscount })}</span>
                  <span>{formatCurrency(obCostWithDiscount)}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between font-medium text-sm pt-2">
                <span>{t('costBreakdown.monthlyCost')}</span>
                <span className="text-orange-600">{formatCurrency(obCost)}</span>
              </div>
            )}
          </div>
        </div>

        {isPublic ? (
          <>
            {/* Egress Internet côté CSP (IPsec transite par Internet, pas de DX/ExpressRoute) */}
            <div className="mb-3 pb-3 border-b border-orange-200">
              <div className="text-xs font-medium text-graphite-700 mb-2 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-graphite-500 shrink-0"></span>
                {t('costBreakdown.publicEgressTitle', { csp: selectedCSP })}
              </div>
              <div className="space-y-1 text-sm">
                {cspEgressTiers.map((tier, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-graphite-500">{tier?.label || 'N/A'}</span>
                    <span>{formatCurrency(tier?.cost || 0)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-medium text-sm pt-1">
                  <span>{t('costBreakdown.monthlyEgressCost')}</span>
                  <span className="text-graphite-700">{formatCurrency(cspEgressCost)}</span>
                </div>
              </div>
            </div>

            {/* Coûts côté client (optionnels) */}
            {(natGwCost > 0 || ipsecCpeCost > 0) && (
              <div className="mb-3">
                <div className="text-xs font-medium text-graphite-700 mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-graphite-200 shrink-0"></span>
                  {t('costBreakdown.clientCostTitle')}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-xs" title={t('costBreakdown.natGwHoverDetail', {
                    hourly: NAT_GW_HOURLY_USD, hours: NAT_GW_MONTHLY_HOURS,
                    hourlyCost: formatCurrency(natGwDetail?.hourlyCost || 0),
                    perGb: NAT_GW_PER_GB_USD, dataCost: formatCurrency(natGwDetail?.dataCost || 0)
                  })}>
                    <span className="text-graphite-500" style={{ textDecoration: 'underline dotted' }}>{t('costBreakdown.natGwCsp', { csp: selectedCSP })}</span>
                    <span>{formatCurrency(natGwCost)}</span>
                  </div>
                  <div className="flex justify-between text-xs" title={t('costBreakdown.ipsecCpeHoverDetail', { monthly: formatCurrency(IPSEC_CPE_MONTHLY_USD) })}>
                    <span className="text-graphite-500" style={{ textDecoration: 'underline dotted' }}>{t('costBreakdown.ipsecCpe')}</span>
                    <span>{formatCurrency(ipsecCpeCost)}</span>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Port CSP */}
            <div className="mb-3 pb-3 border-b border-orange-200">
              <div className="text-xs font-medium text-graphite-700 mb-2 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-graphite-400 shrink-0"></span>
                {t('costBreakdown.portTitle', { connectType })}
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-xs">
                  <span className="text-graphite-500">{t('costBreakdown.bandwidth')}</span>
                  <span>{bandwidth}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-graphite-500">{t('costBreakdown.hourlyPortCost')}</span>
                  <span>{formatCurrency(cspPortRate)}/h</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-graphite-500">{t('costBreakdown.hoursPerMonth')}</span>
                  <span>{cspHoursPerMonth}h</span>
                </div>
                {selectedCSP === 'AWS' && (
                  <div className="flex justify-between text-xs">
                    <span className="text-graphite-500">{t('costBreakdown.circuits')}</span>
                    <span>x{cspCircuitCount}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium text-sm pt-1">
                  <span>{t('costBreakdown.monthlyPortCost')}</span>
                  <span className="text-graphite-700">{formatCurrency(cspPortCost)}</span>
                </div>
              </div>
            </div>

            {/* ErGw Azure */}
            {selectedCSP === 'Azure' && erGwCost > 0 && (
              <div className="mb-3 pb-3 border-b border-orange-200">
                <div className="text-xs font-medium text-purple-800 mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 shrink-0"></span>
                  {t('costBreakdown.ergwTitle')}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-xs">
                    <span className="text-graphite-500">{t('costBreakdown.scaleUnits')}</span>
                    <span>{erGwScaleUnits}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-graphite-500">{t('costBreakdown.costPerScaleUnit')}</span>
                    <span>{formatCurrency(erGwCostPerUnit)}/h</span>
                  </div>
                  <div className="flex justify-between font-medium text-sm pt-1">
                    <span>{t('costBreakdown.monthlyErgwCost')}</span>
                    <span className="text-purple-600">{formatCurrency(erGwCost)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Private Egress */}
            <div className="mb-3">
              <div className="text-xs font-medium text-graphite-700 mb-2 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-graphite-300 shrink-0"></span>
                {t('costBreakdown.privateEgressTitle', { connectType })}
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-xs">
                  <span className="text-graphite-500">{t('costBreakdown.volume')}</span>
                  <span>{privateEgressVolume}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-graphite-500">{t('costBreakdown.rate')}</span>
                  <span>{formatCurrency(privateEgressRate)}/GB</span>
                </div>
                <div className="flex justify-between font-medium text-sm pt-1">
                  <span>{t('costBreakdown.monthlyPrivateEgressCost')}</span>
                  <span className="text-graphite-700">{formatCurrency(privateEgressCost)}</span>
                </div>
              </div>
            </div>
          </>
        )}

        {hasDiscount ? (
          <>
            <div className="flex justify-between items-center pt-2 border-t border-orange-300 text-graphite-400 text-sm line-through">
              <span>{t('costBreakdown.totalNoDiscount', { mode: modeLabel })}</span>
              <span>{formatCurrency(totalWithoutDiscount)}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-medium text-orange-900">{t('costBreakdown.totalWithDiscount', { mode: modeLabel, discount: obDiscount })}</span>
              <span className="font-bold text-malachite-600 text-lg">{formatCurrency(totalWithDiscount)}</span>
            </div>
            <div className="text-center text-xs bg-malachite-50 text-malachite-700 py-1 rounded mt-1">
              {t('costBreakdown.discountSavings', { amount: formatCurrency(totalWithoutDiscount - totalWithDiscount) })}
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center pt-3 border-t border-orange-300">
            <span className="font-medium text-orange-900">{t('costBreakdown.total', { mode: modeLabel })}</span>
            <span className="font-bold text-orange-600 text-lg">{formatCurrency(totalWithDiscount)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
