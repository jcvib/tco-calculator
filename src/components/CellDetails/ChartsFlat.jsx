import { formatCurrency } from '../../utils/formatters';

export default function ChartsFlat({ selectedCell, selectedCSP }) {
  const {
    totalEgress = 0,
    savingsAmount = 0,
    savingsPercent = 0,
    obDiscount = 0
  } = selectedCell || {};

  // OB avec remise si applicable, sinon valeur originale
  const obCost = selectedCell?.obCostWithDiscount ?? selectedCell?.obCost ?? 0;
  const cspPortCost = selectedCell?.cspPortCost || 0;
  const erGwCost = selectedCell?.erGwCost || 0;
  const privateEgressCost = selectedCell?.privateEgressCost || 0;

  const totalPrivate = selectedCell?.totalWithDiscount ?? selectedCell?.totalPrivate ?? 0;
  const hasDiscount = obDiscount > 0;

  // Pourcentages pour barre segmentee
  const totalForBars = obCost + cspPortCost + erGwCost + privateEgressCost;
  const obPercent = totalForBars > 0 ? (obCost / totalForBars) * 100 : 0;
  const portPercent = totalForBars > 0 ? (cspPortCost / totalForBars) * 100 : 0;
  const erGwPercent = totalForBars > 0 ? (erGwCost / totalForBars) * 100 : 0;
  const egressPercent = totalForBars > 0 ? (privateEgressCost / totalForBars) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Decomposition */}
      <div className="rounded-lg p-6" style={{ background: '#222533', border: '1px solid #2D3148' }}>
        <h3 className="text-base font-semibold mb-4 flex items-center gap-2" style={{ color: '#E4E6F1' }}>
          Decomposition des Couts
          {hasDiscount && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded">Remise OB {obDiscount}%</span>}
        </h3>

        {/* Egress Internet */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm" style={{ color: '#7B809A' }}>Egress Internet {selectedCSP}</span>
            <span className="text-sm font-semibold" style={{ color: '#60a5fa' }}>{formatCurrency(totalEgress)}</span>
          </div>
          <div className="w-full rounded-full h-3" style={{ background: '#1A1D27' }}>
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Prive (segmentee) */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm" style={{ color: '#7B809A' }}>Connectivite Privee</span>
            <span className="text-sm font-semibold" style={{ color: '#FF6600' }}>{formatCurrency(totalPrivate)}</span>
          </div>
          <div className="w-full rounded-full h-3 flex overflow-hidden" style={{ background: '#1A1D27' }}>
            {obPercent > 0 && (
              <div className="bg-orange-500 h-3" style={{ width: `${obPercent}%` }}
                title={`OB ODCC: ${formatCurrency(obCost)}`}></div>
            )}
            {portPercent > 0 && (
              <div className="bg-blue-400 h-3" style={{ width: `${portPercent}%` }}
                title={`${selectedCSP} Port: ${formatCurrency(cspPortCost)}`}></div>
            )}
            {erGwPercent > 0 && (
              <div className="bg-purple-400 h-3" style={{ width: `${erGwPercent}%` }}
                title={`ErGw: ${formatCurrency(erGwCost)}`}></div>
            )}
            {egressPercent > 0 && (
              <div className="bg-green-500 h-3" style={{ width: `${egressPercent}%` }}
                title={`Egress prive: ${formatCurrency(privateEgressCost)}`}></div>
            )}
          </div>
        </div>

        {/* Legende */}
        <div className="flex flex-wrap gap-4 mt-3 text-xs" style={{ color: '#7B809A' }}>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>OB: {formatCurrency(obCost)}{hasDiscount ? ' \u2713' : ''}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <span>{selectedCSP} Port: {formatCurrency(cspPortCost)}</span>
          </div>
          {erGwPercent > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span>ErGw: {formatCurrency(erGwCost)}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Egress: {formatCurrency(privateEgressCost)}</span>
          </div>
        </div>
      </div>

      {/* Comparaison finale */}
      <div className="rounded-lg p-6" style={{ background: '#222533', border: '1px solid #2D3148' }}>
        <h3 className="text-base font-semibold mb-4" style={{ color: '#E4E6F1' }}>Comparaison Finale</h3>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs mb-1" style={{ color: '#7B809A' }}>Egress Internet {selectedCSP}</div>
            <div className="text-xl font-bold" style={{ color: '#E4E6F1' }}>{formatCurrency(totalEgress)}</div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: '#7B809A' }}>
              Connectivite Privee OB
              {hasDiscount && <span className="block font-medium" style={{ color: '#4ade80' }}>(remise {obDiscount}%)</span>}
            </div>
            <div className="text-xl font-bold" style={{ color: '#FF6600' }}>{formatCurrency(totalPrivate)}</div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: '#7B809A' }}>Economies OB</div>
            <div className="text-xl font-bold" style={{ color: savingsAmount > 0 ? '#4ade80' : '#f87171' }}>
              {savingsAmount > 0 ? '+' : ''}{formatCurrency(Math.abs(savingsAmount))}
            </div>
            <div className="text-sm" style={{ color: savingsAmount > 0 ? '#4ade80' : '#f87171' }}>
              ({savingsPercent > 0 ? '+' : ''}{savingsPercent.toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
