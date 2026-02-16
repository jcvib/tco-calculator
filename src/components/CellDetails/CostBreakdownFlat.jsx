import { formatCurrency } from '../../utils/formatters';

export default function CostBreakdownFlat({ selectedCell, selectedCSP }) {
  const {
    obCost = 0,
    obCostWithDiscount,
    obDiscount = 0,
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
    totalWithoutDiscount,
    totalWithDiscount,
    internetEgressTiers = [],
    totalEgress = 0,
    totalVolume = 'N/A',
    regionName = 'N/A',
    bandwidth = 'N/A'
  } = selectedCell || {};

  const hasDiscount = obDiscount > 0;
  const labelColor = { color: '#7B809A' };
  const valueColor = { color: '#E4E6F1' };

  return (
    <div className="space-y-4">
      {/* Egress Internet */}
      <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(96,165,250,0.3)' }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: '#60a5fa' }}>Egress Internet {selectedCSP}</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span style={labelColor}>Volume total:</span>
            <span className="font-medium" style={valueColor}>{totalVolume}</span>
          </div>
          <div className="flex justify-between">
            <span style={labelColor}>Region {selectedCSP}:</span>
            <span className="font-medium" style={valueColor}>{regionName}</span>
          </div>

          {/* Paliers */}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(96,165,250,0.2)' }}>
            <div className="text-xs mb-2" style={labelColor}>Paliers de prix:</div>
            {internetEgressTiers && internetEgressTiers.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-center py-0.5">
                <span className="text-xs" style={labelColor}>{tier?.label || 'N/A'}</span>
                <span className="text-xs font-medium" style={valueColor}>{formatCurrency(tier?.cost || 0)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2" style={{ borderTop: '1px solid rgba(96,165,250,0.3)' }}>
            <span className="font-semibold" style={{ color: '#93c5fd' }}>Total Egress {selectedCSP}:</span>
            <span className="font-bold text-lg" style={{ color: '#60a5fa' }}>{formatCurrency(totalEgress)}</span>
          </div>
        </div>
      </div>

      {/* Connectivite Privee */}
      <div className="rounded-lg p-4" style={{ background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.3)' }}>
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: '#FF6600' }}>
          Connectivite Privee (OB + {selectedCSP})
          {hasDiscount && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded">Remise {obDiscount}%</span>}
        </h3>

        {/* OB ODCC */}
        <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,102,0,0.2)' }}>
          <div className="text-xs font-semibold mb-2" style={{ color: '#FF6600' }}>Orange Business ODCC</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Pays / Routage:</span>
              <span style={valueColor}>{obCountry} / Local</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Bande passante:</span>
              <span style={valueColor}>{bandwidth}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Reserved BW fee:</span>
              <span style={valueColor}>{formatCurrency(obReservedBWCost)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Usage ({obUsage}):</span>
              <span style={valueColor}>{formatCurrency(obUsageCost)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Heures par mois:</span>
              <span style={valueColor}>{obHours}h</span>
            </div>

            {hasDiscount ? (
              <>
                <div className="flex justify-between text-xs line-through mt-2" style={{ color: '#7B809A' }}>
                  <span>Cout OB mensuel (sans remise):</span>
                  <span>{formatCurrency(obCost)}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm pt-1" style={{ color: '#4ade80' }}>
                  <span>Cout OB mensuel (remise {obDiscount}%):</span>
                  <span>{formatCurrency(obCostWithDiscount)}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between font-semibold text-sm pt-2">
                <span style={valueColor}>Cout OB mensuel:</span>
                <span style={{ color: '#FF6600' }}>{formatCurrency(obCost)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Port CSP */}
        <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,102,0,0.2)' }}>
          <div className="text-xs font-semibold mb-2" style={{ color: '#60a5fa' }}>
            Port {selectedCSP === 'AWS' ? 'Direct Connect' : 'ExpressRoute'}
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Bande passante:</span>
              <span style={valueColor}>{bandwidth}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Cout horaire port:</span>
              <span style={valueColor}>{formatCurrency(cspPortRate)}/h</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Heures par mois:</span>
              <span style={valueColor}>{cspHoursPerMonth}h</span>
            </div>
            {selectedCSP === 'AWS' && (
              <div className="flex justify-between text-xs">
                <span style={labelColor}>Circuits (HA):</span>
                <span style={valueColor}>x{cspCircuitCount}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-sm pt-1">
              <span style={valueColor}>Cout port mensuel:</span>
              <span style={{ color: '#60a5fa' }}>{formatCurrency(cspPortCost)}</span>
            </div>
          </div>
        </div>

        {/* ErGw Azure */}
        {selectedCSP === 'Azure' && erGwCost > 0 && (
          <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,102,0,0.2)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#a78bfa' }}>ExpressRoute Gateway</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-xs">
                <span style={labelColor}>Scale Units:</span>
                <span style={valueColor}>{erGwScaleUnits}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span style={labelColor}>Cout par Scale Unit:</span>
                <span style={valueColor}>{formatCurrency(erGwCostPerUnit)}/h</span>
              </div>
              <div className="flex justify-between font-semibold text-sm pt-1">
                <span style={valueColor}>Cout ErGw mensuel:</span>
                <span style={{ color: '#a78bfa' }}>{formatCurrency(erGwCost)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Private Egress */}
        <div className="mb-3">
          <div className="text-xs font-semibold mb-2" style={{ color: '#4ade80' }}>Egress via {selectedCSP === 'AWS' ? 'Direct Connect' : 'ExpressRoute'}</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Volume:</span>
              <span style={valueColor}>{privateEgressVolume}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={labelColor}>Tarif:</span>
              <span style={valueColor}>{formatCurrency(privateEgressRate)}/GB</span>
            </div>
            <div className="flex justify-between font-semibold text-sm pt-1">
              <span style={valueColor}>Cout egress prive:</span>
              <span style={{ color: '#4ade80' }}>{formatCurrency(privateEgressCost)}</span>
            </div>
          </div>
        </div>

        {/* Total prive */}
        {hasDiscount ? (
          <>
            <div className="flex justify-between items-center pt-2 text-sm line-through" style={{ borderTop: '1px solid rgba(255,102,0,0.3)', color: '#7B809A' }}>
              <span>Total Prive (sans remise):</span>
              <span>{formatCurrency(totalWithoutDiscount)}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-semibold" style={{ color: '#E4E6F1' }}>Total Prive (remise {obDiscount}%):</span>
              <span className="font-bold text-lg" style={{ color: '#4ade80' }}>{formatCurrency(totalWithDiscount)}</span>
            </div>
            <div className="text-center text-xs py-1 rounded mt-1" style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80' }}>
              Economie remise : {formatCurrency(totalWithoutDiscount - totalWithDiscount)}/mois
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid rgba(255,102,0,0.3)' }}>
            <span className="font-semibold" style={{ color: '#E4E6F1' }}>Total Prive:</span>
            <span className="font-bold text-lg" style={{ color: '#FF6600' }}>{formatCurrency(totalWithDiscount)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
