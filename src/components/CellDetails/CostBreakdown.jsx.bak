export default function CostBreakdown({ privateCost, egressCost, egressCostData, savings, savingsPercent, selectedCSP }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 🔒 CONNECTIVITÉ PRIVÉE */}
      <div className="bg-orange-50 rounded-lg p-6 border border-orange-300">
        <h3 className="font-bold text-xl mb-4 text-orange-900 flex items-center">
          🔒 CONNECTIVITÉ PRIVÉE
        </h3>
        
        {/* OB ODCC */}
        <div className="mb-4 pb-4 border-b border-orange-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Orange Business ODCC</span>
            <span className="text-lg font-bold text-orange-600">
              ${privateCost.obCost.toFixed(2)}
            </span>
          </div>
          <div className="ml-4 space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>• Reserved BW fee</span>
              <span className="font-mono">${privateCost.obReservedBW.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>• Usage ({privateCost.obHours}h × ${privateCost.obHourlyRate.toFixed(6)}/h)</span>
              <span className="font-mono">${privateCost.obUsageCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* CSP Port */}
        <div className="mb-4 pb-4 border-b border-orange-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">
              {selectedCSP} Port ({privateCost.numCircuits} circuit{privateCost.numCircuits > 1 ? 's' : ''} HA)
            </span>
            <span className="text-lg font-bold text-blue-600">
              ${privateCost.cspPortCost.toFixed(2)}
            </span>
          </div>
          <div className="ml-4 space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>• Cost per hour</span>
              <span className="font-mono">${privateCost.portCostPerHour.toFixed(4)}/h</span>
            </div>
            <div className="flex justify-between">
              <span>• Hours per month</span>
              <span className="font-mono">{privateCost.monthlyHours}h</span>
            </div>
            <div className="flex justify-between">
              <span>• Number of circuits</span>
              <span className="font-mono">×{privateCost.numCircuits}</span>
            </div>
            {selectedCSP === 'Azure' && privateCost.zone && (
              <div className="flex justify-between text-xs italic">
                <span>• Zone</span>
                <span>{privateCost.zone}</span>
              </div>
            )}
          </div>
        </div>

        {/* ErGw Gateway (Azure uniquement) */}
        {selectedCSP === 'Azure' && (
          <div className="mb-4 pb-4 border-b border-orange-200">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">ExpressRoute Gateway (ErGw)</span>
              <span className="text-lg font-bold text-purple-600">
                ${privateCost.erGwCost.toFixed(2)}
              </span>
            </div>
            <div className="ml-4 space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>• Scale units ({privateCost.erGwScaleUnits} SU)</span>
                <span className="font-mono">${privateCost.erGwCostPerHour.toFixed(4)}/h</span>
              </div>
              <div className="flex justify-between">
                <span>• Hours per month</span>
                <span className="font-mono">{privateCost.monthlyHours}h</span>
              </div>
            </div>
          </div>
        )}

        {/* Private Egress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Private Egress</span>
            <span className="text-lg font-bold text-green-600">
              ${privateCost.privateEgressCost.toFixed(2)}
            </span>
          </div>
          <div className="ml-4 space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>• Rate</span>
              <span className="font-mono">
                ${privateCost.privateEgressRate.toFixed(4)}/{selectedCSP === 'Azure' ? 'GB' : 'GiB'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>• Volume</span>
              <span className="font-mono">
                {privateCost.volumeForEgress.toFixed(2)} {selectedCSP === 'Azure' ? 'GB' : 'GiB'}
              </span>
            </div>
          </div>
        </div>

        {/* Total Private */}
        <div className="mt-4 pt-4 border-t-2 border-orange-400">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-gray-800">TOTAL PRIVÉ</span>
            <span className="text-2xl font-bold text-orange-600">
              ${privateCost.total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* 🌐 EGRESS INTERNET */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-300">
        <h3 className="font-bold text-xl mb-4 text-blue-900 flex items-center">
          🌐 EGRESS INTERNET
        </h3>

        {/* Data Transfer Out */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-800">{selectedCSP} Data Transfer Out</span>
            <span className="text-lg font-bold text-blue-600">
              ${egressCost.toFixed(2)}
            </span>
          </div>

          {/* Free tier */}
          <div className="ml-4 mb-3 p-2 bg-green-100 rounded text-sm">
            <div className="flex justify-between text-green-800">
              <span>✓ Free tier</span>
              <span className="font-mono">
                {egressCostData.freeAllowance} {selectedCSP === 'Azure' ? 'GB' : 'GiB'}
              </span>
            </div>
          </div>

          {/* Tiers détaillés */}
          <div className="ml-4 space-y-2">
            {egressCostData.tiers.map((tier, index) => (
              <div key={index} className="text-sm border-l-2 border-blue-300 pl-3 py-1">
                <div className="flex justify-between text-gray-700">
                  <span>
                    • Tier {index + 1} ({tier.min.toLocaleString()}-
                    {tier.max === Infinity ? '∞' : tier.max.toLocaleString()} {selectedCSP === 'Azure' ? 'GB' : 'GiB'})
                  </span>
                  <span className="font-semibold">${tier.cost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span className="ml-2">
                    └ {tier.volume.toFixed(2)} {selectedCSP === 'Azure' ? 'GB' : 'GiB'} × ${tier.rate.toFixed(4)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total volume */}
          <div className="ml-4 mt-3 pt-2 border-t border-blue-200 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Total volume</span>
              <span className="font-mono">
                {egressCostData.volume.toFixed(2)} {selectedCSP === 'Azure' ? 'GB' : 'GiB'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Chargeable volume</span>
              <span className="font-mono">
                {egressCostData.chargeableVolume.toFixed(2)} {selectedCSP === 'Azure' ? 'GB' : 'GiB'}
              </span>
            </div>
          </div>
        </div>

        {/* Total Egress */}
        <div className="mt-4 pt-4 border-t-2 border-blue-400">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-gray-800">TOTAL EGRESS</span>
            <span className="text-2xl font-bold text-blue-600">
              ${egressCost.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* ============== RÉSUMÉ FINAL ============== */}
      <div className={`lg:col-span-2 mt-6 p-6 rounded-lg border-2 ${
        savings > 0 ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
      }`}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">
              {savings > 0 ? '💰 Économies réalisées' : '⚠️ Surcoût constaté'}
            </h3>
            <p className="text-sm text-gray-600">
              {savings > 0 
                ? 'La connectivité privée est plus économique que l\'egress internet' 
                : 'L\'egress internet est moins coûteux dans cette configuration'}
            </p>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${savings > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {savings > 0 ? '+' : ''}${Math.abs(savings).toFixed(2)}
            </div>
            <div className={`text-lg font-semibold ${savings > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ({savingsPercent > 0 ? '+' : ''}{Math.abs(savingsPercent).toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
