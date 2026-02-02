import { formatCurrency } from '../../utils/formatters';

export default function CostBreakdownFlat({ selectedCell, selectedCSP }) {
  const {
    obCost = 0,
    obReservedBW = 'N/A',
    obUsage = 'N/A',
    obReservedBWCost = 0,
    obUsageCost = 0,
    obHours = 730,
    obCountry = 'N/A',
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
    totalPrivate = 0,
    internetEgressTiers = [],
    totalEgress = 0,
    totalVolume = 'N/A',
    regionName = 'N/A',
    bandwidth = 'N/A'
  } = selectedCell || {};

  return (
    <div className="space-y-4">
      {/* Egress Internet */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-3">🌐 Egress Internet {selectedCSP}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Volume total:</span>
            <span className="font-medium">{totalVolume}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Région {selectedCSP}:</span>
            <span className="font-medium">{regionName}</span>
          </div>

          {/* Paliers de prix */}
          <div className="mt-3 pt-3 border-t border-blue-200">
            <div className="text-xs text-gray-500 mb-2">Paliers de prix:</div>
            {internetEgressTiers && internetEgressTiers.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-center py-1">
                <span className="text-xs text-gray-600">{tier?.label || 'N/A'}</span>
                <span className="text-xs font-medium">{formatCurrency(tier?.cost || 0)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-blue-300">
            <span className="font-semibold text-blue-900">Total Egress {selectedCSP}:</span>
            <span className="font-bold text-blue-600 text-lg">{formatCurrency(totalEgress)}</span>
          </div>
        </div>
      </div>

      {/* Connectivité Privée */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-orange-900 mb-3">🔒 Connectivité Privée (OB + DX)</h3>

        {/* OB ODCC */}
        <div className="mb-3 pb-3 border-b border-orange-200">
          <div className="text-xs font-semibold text-orange-800 mb-2">Orange Business ODCC</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Pays / Routage:</span>
              <span>{obCountry} / Local</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Bande passante:</span>
              <span>{obReservedBW}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Reserved BW fee:</span>
              <span>{formatCurrency(obReservedBWCost)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Usage ({obUsage}):</span>
              <span>{formatCurrency(obUsageCost)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Heures par mois (OB):</span>
              <span>{obHours}h</span>
            </div>
            <div className="flex justify-between font-semibold text-sm pt-1">
              <span>Coût OB mensuel:</span>
              <span className="text-orange-600">{formatCurrency(obCost)}</span>
            </div>
          </div>
        </div>

        {/* Port Direct Connect */}
        <div className="mb-3 pb-3 border-b border-orange-200">
          <div className="text-xs font-semibold text-blue-800 mb-2">Port Direct Connect:</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Bande passante:</span>
              <span>{bandwidth}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Coût horaire port:</span>
              <span>{formatCurrency(cspPortRate)}/h</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Heures par mois ({selectedCSP}):</span>
              <span>{cspHoursPerMonth}h</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Nombre de circuits (HA):</span>
              <span>x{cspCircuitCount}</span>
            </div>
            <div className="flex justify-between font-semibold text-sm pt-1">
              <span>Coût port mensuel total:</span>
              <span className="text-blue-600">{formatCurrency(cspPortCost)}</span>
            </div>
          </div>
        </div>

        {/* ErGw (si Azure) */}
        {selectedCSP === 'Azure' && erGwCost > 0 && (
          <div className="mb-3 pb-3 border-b border-orange-200">
            <div className="text-xs font-semibold text-purple-800 mb-2">ExpressRoute Gateway:</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Scale Units:</span>
                <span>{erGwScaleUnits}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Coût par Scale Unit:</span>
                <span>{formatCurrency(erGwCostPerUnit)}/h</span>
              </div>
              <div className="flex justify-between font-semibold text-sm pt-1">
                <span>Coût ErGw mensuel:</span>
                <span className="text-purple-600">{formatCurrency(erGwCost)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Private Egress */}
        <div className="mb-3">
          <div className="text-xs font-semibold text-green-800 mb-2">Egress via Direct Connect:</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Volume:</span>
              <span>{privateEgressVolume}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Tarif DX:</span>
              <span>{formatCurrency(privateEgressRate)}/GB</span>
            </div>
            <div className="flex justify-between font-semibold text-sm pt-1">
              <span>Coût egress privé:</span>
              <span className="text-green-600">{formatCurrency(privateEgressCost)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-orange-300">
          <span className="font-semibold text-orange-900">Total Privé:</span>
          <span className="font-bold text-orange-600 text-lg">{formatCurrency(totalPrivate)}</span>
        </div>
      </div>
    </div>
  );
}
