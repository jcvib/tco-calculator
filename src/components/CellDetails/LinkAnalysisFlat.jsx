export default function LinkAnalysisFlat({ selectedCell, capacityThreshold }) {
  const {
    bandwidth = 'N/A',
    linkLoadPercent = 0,
    volumeDemanded = 'N/A',
    capacityMonthly = 'N/A',
    chargeTheoric = 'N/A'
  } = selectedCell || {};

  const isComfortable = linkLoadPercent <= capacityThreshold;
  const statusColor = isComfortable ? '#4ade80' : '#fbbf24';
  const barColor = isComfortable ? '#22c55e' : '#f59e0b';
  const borderStyle = isComfortable
    ? '1px solid rgba(34,197,94,0.3)'
    : '1px solid rgba(245,158,11,0.3)';
  const bgStyle = isComfortable
    ? 'rgba(34,197,94,0.1)'
    : 'rgba(245,158,11,0.1)';

  return (
    <div className="rounded-lg p-4" style={{ background: bgStyle, border: borderStyle }}>
      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: '#E4E6F1' }}>
        Analyse de Capacite du Lien
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span style={{ color: '#7B809A' }}>Bande passante selectionnee:</span>
          <span className="font-semibold" style={{ color: '#E4E6F1' }}>{bandwidth}</span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: '#7B809A' }}>Capacite theorique mensuelle:</span>
          <span className="font-semibold" style={{ color: '#E4E6F1' }}>{capacityMonthly}</span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: '#7B809A' }}>Volume de donnees demande:</span>
          <span className="font-semibold" style={{ color: '#E4E6F1' }}>{volumeDemanded}</span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: '#7B809A' }}>Charge theorique (debit constant):</span>
          <span className="font-semibold" style={{ color: '#E4E6F1' }}>{chargeTheoric}</span>
        </div>

        <div className="pt-3" style={{ borderTop: '1px solid #2D3148' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium" style={{ color: '#E4E6F1' }}>Charge du lien:</span>
            <span className="font-bold text-lg" style={{ color: statusColor }}>
              {(linkLoadPercent || 0).toFixed(1)}%
            </span>
          </div>

          <div className="w-full rounded-full h-4 overflow-hidden" style={{ background: '#2D3148' }}>
            <div
              className="h-4 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(linkLoadPercent || 0, 100)}%`, background: barColor }}
            ></div>
          </div>

          <div className="mt-2 text-xs flex items-center gap-2">
            {isComfortable ? (
              <span style={{ color: '#4ade80' }}>Marge confortable pour absorber les pics</span>
            ) : (
              <span style={{ color: '#fbbf24' }}>Ajuster la bande passante pour les pics</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
