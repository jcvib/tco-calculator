import { useState, useMemo, useCallback } from 'react';
import {
  MEGAPORT_DATA,
  MEGAPORT_TO_OB_BW,
  MEGAPORT_TO_OB_COUNTRY,
  MEGAPORT_COUNTRIES,
  MEGAPORT_BANDWIDTHS,
  MEGAPORT_BW_LABELS,
  MEGAPORT_COUNTRY_META
} from '../data/megaport_pricing';

const ROUTING_TYPES = ['Local', 'Regional', 'Inter - Regional'];
const ROUTING_LABELS = { 'Local': 'Local', 'Regional': 'Regional', 'Inter - Regional': 'Inter-Regional' };

function getCellColor(s) {
  if (s >= 5) return { bg: '#15803d', text: 'white' };
  if (s >= 0) return { bg: '#166534', text: '#86efac' };
  if (s >= -15) return { bg: '#854d0e', text: '#fde68a' };
  if (s >= -40) return { bg: '#1d4ed8', text: 'white' };
  if (s >= -100) return { bg: '#1e3a8a', text: '#93c5fd' };
  if (s >= -200) return { bg: '#172554', text: '#60a5fa' };
  return { bg: '#0f172a', text: '#38bdf8' };
}

function fmtMoney(n) {
  return `$${Math.round(n).toLocaleString()}`;
}

function calcCell(country, bw, csp, term, routing, obPricing, portCount = 1) {
  const obCountryName = MEGAPORT_TO_OB_COUNTRY[country] || country;
  const mgptData = MEGAPORT_DATA[country]?.[bw];
  const obBwKey = MEGAPORT_TO_OB_BW[bw];
  const obData = obPricing?.[obCountryName]?.['High Availability']?.[routing]?.[obBwKey];

  if (!mgptData || !obData) return null;

  const port = mgptData.port?.[term];
  const vxcKey = csp === 'AWS' ? 'vxc_aws' : 'vxc_azure';
  const vxc = mgptData[vxcKey]?.[term];

  if (port == null || vxc == null) return null;

  const total = portCount * port + 2 * vxc; // portCount ports + 2 VXC for redundancy
  const obCost = obData.monthly_cost_744h;

  const savingsPercent = (total - obCost) / total * 100;
  const obPremiumPct = (obCost - total) / total * 100;

  return {
    port, vxc, portCount, vxcCount: 2, total, obCost, savingsPercent, obPremiumPct,
    awsRegion: mgptData.aws_region || '',
    azureCircuit: mgptData.azure_circuit || '',
    obCountryName
  };
}

// ─── DETAIL MODAL ────────────────────────────────────────────────────────────
function DetailModal({ data, csp, term, routing, obPricing, portCount, onClose }) {
  const meta = MEGAPORT_COUNTRY_META[data.country];
  const { port, vxc, vxcCount, total, obCost, savingsPercent, obPremiumPct, awsRegion, azureCircuit, obCountryName } = data;
  const bwLabel = MEGAPORT_BW_LABELS[data.bw];
  const maxBar = Math.max(total, obCost);
  const termLabel = term === '1' ? 'Sans eng.' : `${term}m`;

  const allTerms = ['1', '12', '24', '36'].map(t => {
    const c = calcCell(data.country, data.bw, csp, t, routing, obPricing, portCount);
    return { term: t, ...c };
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.75)', padding: '2rem 1rem' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#1A1D27', border: '1px solid #2D3148',
        borderRadius: 12, width: '100%', maxWidth: 800, padding: '1.5rem', position: 'relative',
        color: '#E4E6F1'
      }}>
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="text-lg font-bold text-white">
              {data.country} - {bwLabel} - {csp}
            </div>
            <div className="text-xs mt-1" style={{ color: '#7B809A' }}>
              Routing OB: {routing} | Term Megaport: {termLabel} | {portCount} Port{portCount > 1 ? 's' : ''}
              {obCountryName !== data.country && (
                <span className="ml-2" style={{ color: '#f59e0b' }}>
                  · pricing OB: {obCountryName}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded px-2 py-1 text-sm cursor-pointer"
            style={{ background: 'none', border: '1px solid #2D3148', color: '#7B809A' }}
          >
            ✕
          </button>
        </div>

        {/* Side by side */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {/* OB ODCC */}
          <div className="rounded-lg p-4" style={{ background: '#1a1d27', border: '1px solid rgba(255,102,0,0.3)' }}>
            <div className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: '#FF6600' }}>
              Orange Business ODCC
            </div>
            <div className="text-3xl font-bold text-white" style={{ fontFamily: 'monospace' }}>
              {fmtMoney(obCost)}
            </div>
            <div className="text-xs mt-1" style={{ color: '#7B809A' }}>/mois (744h)</div>
            <div className="mt-3 text-xs border-t pt-3" style={{ color: '#7B809A', borderColor: '#2D3148', lineHeight: 1.8 }}>
              <div>Pays : {obCountryName}</div>
              <div>Architecture : High Availability</div>
              <div>Type : {routing}</div>
              <div>Bande passante : {bwLabel}</div>
              <div className="mt-2 rounded px-2 py-1.5 text-xs" style={{ background: 'rgba(255,102,0,0.1)', color: '#fb923c' }}>
                Inclut last-mile + backbone + NOC + SLA
              </div>
            </div>
          </div>

          {/* Megaport */}
          <div className="rounded-lg p-4" style={{ background: '#1a1d27', border: '1px solid rgba(232,0,45,0.3)' }}>
            <div className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: '#e11d48' }}>
              Megaport {portCount} Port{portCount > 1 ? 's' : ''} + 2x VXC
            </div>
            <div className="text-3xl font-bold text-white" style={{ fontFamily: 'monospace' }}>
              {fmtMoney(total)}
            </div>
            <div className="text-xs mt-1" style={{ color: '#7B809A' }}>/mois ({termLabel})</div>
            <div className="mt-3 text-xs border-t pt-3" style={{ color: '#7B809A', borderColor: '#2D3148', lineHeight: 1.8 }}>
              <div className="flex justify-between">
                <span>Port x{portCount} ({meta?.city} PoP)</span>
                <span className="text-white" style={{ fontFamily: 'monospace' }}>{fmtMoney(port)}{portCount > 1 ? ` x${portCount}` : ''}</span>
              </div>
              <div className="flex justify-between">
                <span>VXC x{vxcCount} &rarr; {csp === 'AWS' ? awsRegion : azureCircuit}</span>
                <span className="text-white" style={{ fontFamily: 'monospace' }}>{fmtMoney(vxc)} x{vxcCount}</span>
              </div>
              <div className="flex justify-between font-bold border-t mt-1 pt-1" style={{ borderColor: '#2D3148' }}>
                <span className="text-white">Total</span>
                <span style={{ fontFamily: 'monospace', color: '#e11d48' }}>{fmtMoney(total)}</span>
              </div>
              <div className="mt-2 rounded px-2 py-1.5 text-xs" style={{ background: 'rgba(232,0,45,0.08)', color: '#f87171' }}>
                Client doit acceder physiquement au PoP Megaport
              </div>
            </div>
          </div>
        </div>

        {/* Comparison bars */}
        <div className="mb-5">
          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#7B809A' }}>Comparaison visuelle</div>
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1" style={{ color: '#7B809A' }}>
              <span>Orange Business ODCC</span>
              <span style={{ fontFamily: 'monospace' }}>{fmtMoney(obCost)}/mo</span>
            </div>
            <div className="rounded overflow-hidden" style={{ height: 28, background: '#1a1d27' }}>
              <div
                className="h-full flex items-center justify-end pr-1.5 text-xs font-bold text-white"
                style={{ width: `${(obCost / maxBar * 100)}%`, background: '#FF6600', transition: 'width 0.3s' }}
              >
                {obCost / maxBar > 0.15 && 'OB ODCC'}
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1" style={{ color: '#7B809A' }}>
              <span>Megaport {portCount}x Port + 2x VXC</span>
              <span style={{ fontFamily: 'monospace' }}>{portCount > 1 ? `${portCount}x` : ''}{fmtMoney(port)} + 2x{fmtMoney(vxc)}</span>
            </div>
            <div className="rounded overflow-hidden flex" style={{ height: 28, background: '#1a1d27' }}>
              <div
                className="h-full flex items-center justify-center text-xs font-bold text-white"
                style={{ width: `${(portCount * port / maxBar * 100)}%`, background: '#e11d48', transition: 'width 0.3s' }}
              >
                {portCount * port / maxBar > 0.1 && `${portCount > 1 ? `${portCount}x` : ''}Port`}
              </div>
              <div
                className="h-full flex items-center justify-center text-xs font-bold text-white"
                style={{ width: `${(2 * vxc / maxBar * 100)}%`, background: '#fb7185', transition: 'width 0.3s' }}
              >
                {2 * vxc / maxBar > 0.08 && '2xVXC'}
              </div>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="rounded-lg p-3 mb-4" style={{
          background: savingsPercent >= 0 ? 'rgba(21,128,61,0.2)' : 'rgba(29,78,216,0.2)',
          border: `1px solid ${savingsPercent >= 0 ? '#166534' : '#1e3a8a'}`
        }}>
          <div className="font-bold text-sm text-white mb-1">
            {savingsPercent >= 0
              ? `OB ODCC est ${savingsPercent.toFixed(0)}% moins cher que Megaport`
              : `Megaport est ${Math.abs(obPremiumPct).toFixed(0)}% moins cher - OB doit justifier +${fmtMoney(obCost - total)}/mois`}
          </div>
          <div className="text-xs" style={{ color: '#7B809A' }}>
            {savingsPercent >= 0
              ? `OB = ${fmtMoney(obCost)} vs Megaport ${fmtMoney(total)} - economie de ${fmtMoney(total - obCost)}/mois avec OB`
              : `Sur 36 mois : differentiel de ${fmtMoney((obCost - total) * 36)} - a comparer avec la valeur du service manage OB`}
          </div>
        </div>

        {/* All terms comparison */}
        <div className="rounded-lg p-3" style={{ background: '#1a1d27' }}>
          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#7B809A' }}>Comparaison multi-terme</div>
          <div className="grid grid-cols-4 gap-2">
            {allTerms.map(t => {
              if (!t.total) return <div key={t.term} />;
              const { bg, text } = getCellColor(t.savingsPercent);
              const tLabel = t.term === '1' ? 'Sans eng.' : `${t.term} mois`;
              return (
                <div key={t.term} className="rounded-md p-2 text-center" style={{ background: bg }}>
                  <div className="text-xs mb-0.5" style={{ color: text, opacity: 0.8 }}>{tLabel}</div>
                  <div className="text-sm font-bold" style={{ fontFamily: 'monospace', color: text }}>
                    Mgpt {fmtMoney(t.total)}
                  </div>
                  <div className="text-xs" style={{ fontFamily: 'monospace', color: text, opacity: 0.8 }}>
                    OB {fmtMoney(t.obCost)}
                  </div>
                  <div className="text-base font-bold mt-0.5" style={{ fontFamily: 'monospace', color: text }}>
                    {t.savingsPercent >= 0 ? `OB +${t.savingsPercent.toFixed(0)}%` : `Mgpt ${t.savingsPercent.toFixed(0)}%`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── INSIGHTS PANEL ──────────────────────────────────────────────────────────
function InsightsPanel({ heatmapData, csp, term, routing }) {
  const stats = useMemo(() => {
    let obWins = 0, mgptWins = 0, totalCells = 0;
    let maxOBAdv = null, maxMgptAdv = null;
    let avgPremium = 0;

    MEGAPORT_BANDWIDTHS.forEach(bw => {
      MEGAPORT_COUNTRIES.forEach(c => {
        const cell = heatmapData[bw]?.[c];
        if (!cell) return;
        totalCells++;
        if (cell.savingsPercent > 0) {
          obWins++;
          if (!maxOBAdv || cell.savingsPercent > maxOBAdv.pct) maxOBAdv = { country: c, bw, pct: cell.savingsPercent };
        } else {
          mgptWins++;
          if (!maxMgptAdv || cell.savingsPercent < maxMgptAdv.pct) maxMgptAdv = { country: c, bw, pct: cell.savingsPercent };
        }
        avgPremium += cell.obPremiumPct;
      });
    });
    if (totalCells > 0) avgPremium /= totalCells;
    return { obWins, mgptWins, totalCells, maxOBAdv, maxMgptAdv, avgPremium };
  }, [heatmapData]);

  const StatCard = ({ label, value, sub, color }) => (
    <div className="rounded-lg p-3 flex-1" style={{ background: '#1A1D27', border: '1px solid #2D3148', minWidth: 160 }}>
      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#7B809A' }}>{label}</div>
      <div className="text-2xl font-bold" style={{ fontFamily: 'monospace', color: color || 'white', lineHeight: 1 }}>{value}</div>
      {sub && <div className="text-xs mt-1" style={{ color: '#7B809A' }}>{sub}</div>}
    </div>
  );

  return (
    <div className="rounded-lg p-4 mb-4" style={{ background: '#222533', border: '1px solid #2D3148' }}>
      <h2 className="text-sm font-bold text-white mb-3">Analyse Competitive</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        <StatCard label="Megaport moins cher" value={`${stats.mgptWins}/${stats.totalCells}`}
          sub="combinaisons BW x Pays" color="#60a5fa" />
        <StatCard label="OB competitif" value={`${stats.obWins}/${stats.totalCells}`}
          sub="combinaisons BW x Pays" color="#4ade80" />
        <StatCard label="Premium OB moyen" value={`+${Math.round(stats.avgPremium)}%`}
          sub="par rapport a Megaport" color="#fb923c" />
        {stats.maxOBAdv && (
          <StatCard label="Meilleur cas OB"
            value={`+${stats.maxOBAdv.pct.toFixed(0)}%`}
            sub={`${stats.maxOBAdv.country} @ ${MEGAPORT_BW_LABELS[stats.maxOBAdv.bw]}`}
            color="#4ade80" />
        )}
        {stats.maxMgptAdv && (
          <StatCard label="Pire cas OB"
            value={`${stats.maxMgptAdv.pct.toFixed(0)}%`}
            sub={`${stats.maxMgptAdv.country} @ ${MEGAPORT_BW_LABELS[stats.maxMgptAdv.bw]}`}
            color="#f43f5e" />
        )}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function MegaportHeatmap({ obPricing, selectedCSP, setSelectedCSP }) {
  const [term, setTerm] = useState('12');
  const [routing, setRouting] = useState('Local');
  const [portCount, setPortCount] = useState(1);
  const [selected, setSelected] = useState(null);

  const csp = selectedCSP;

  const heatmapData = useMemo(() => {
    const rows = {};
    MEGAPORT_BANDWIDTHS.forEach(bw => {
      rows[bw] = {};
      MEGAPORT_COUNTRIES.forEach(c => {
        rows[bw][c] = calcCell(c, bw, csp, term, routing, obPricing, portCount);
      });
    });
    return rows;
  }, [csp, term, routing, obPricing, portCount]);

  const handleClick = useCallback((country, bw) => {
    const cell = heatmapData[bw]?.[country];
    if (cell) setSelected({ country, bw, ...cell });
  }, [heatmapData]);

  return (
    <div style={{ color: '#E4E6F1' }}>
      {/* Controls */}
      <div className="rounded-lg p-4 mb-4" style={{ background: '#222533', border: '1px solid #2D3148' }}>
        <div className="flex flex-wrap gap-5 items-center">
          {/* CSP */}
          <div>
            <div className="text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>Cloud Provider</div>
            <div className="flex gap-1.5">
              {['AWS', 'Azure'].map(c => (
                <button key={c}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-all ${
                    csp === c
                      ? (c === 'AWS' ? 'bg-amber-600 text-white border-amber-500' : 'bg-blue-600 text-white border-blue-500')
                      : 'text-gray-400 border-gray-600 hover:border-gray-500 hover:text-gray-300'
                  }`}
                  style={{ border: '1px solid', fontFamily: 'monospace' }}
                  onClick={() => { setSelectedCSP(c); setSelected(null); }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Term */}
          <div>
            <div className="text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>Engagement Megaport</div>
            <div className="flex gap-1.5">
              {[['1', 'Sans eng.'], ['12', '12 mois'], ['24', '24 mois'], ['36', '36 mois']].map(([v, l]) => (
                <button key={v}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-all ${
                    term === v ? 'bg-blue-600 text-white border-blue-500' : 'text-gray-400 border-gray-600 hover:border-gray-500 hover:text-gray-300'
                  }`}
                  style={{ border: '1px solid', fontFamily: 'monospace' }}
                  onClick={() => { setTerm(v); setSelected(null); }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Port count */}
          <div>
            <div className="text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>Ports Megaport</div>
            <div className="flex gap-1.5">
              {[1, 2].map(n => (
                <button key={n}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-all ${
                    portCount === n ? 'bg-purple-600 text-white border-purple-500' : 'text-gray-400 border-gray-600 hover:border-gray-500 hover:text-gray-300'
                  }`}
                  style={{ border: '1px solid', fontFamily: 'monospace' }}
                  onClick={() => { setPortCount(n); setSelected(null); }}
                >
                  {n} Port{n > 1 ? 's' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Routing */}
          <div>
            <div className="text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>OB Routing Type</div>
            <div className="flex gap-1.5">
              {ROUTING_TYPES.map(r => (
                <button key={r}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-all ${
                    routing === r ? 'bg-orange-600 text-white border-orange-500' : 'text-gray-400 border-gray-600 hover:border-gray-500 hover:text-gray-300'
                  }`}
                  style={{ border: '1px solid', fontFamily: 'monospace' }}
                  onClick={() => { setRouting(r); setSelected(null); }}
                >
                  {ROUTING_LABELS[r]}
                </button>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="ml-auto">
            <div className="text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>Avantage</div>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: '#4ade80', fontFamily: 'monospace' }}>OB +%</span>
              <div className="rounded" style={{
                width: 120, height: 10,
                background: 'linear-gradient(to right, #15803d, #4ade80, #fef08a, #93c5fd, #2563eb, #1e3a8a)'
              }} />
              <span className="text-xs" style={{ color: '#60a5fa', fontFamily: 'monospace' }}>Mgpt -%</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-3 rounded-md px-3 py-2 text-xs" style={{
          background: '#1e2433', borderLeft: '3px solid #d97706', color: '#fcd34d'
        }}>
          <strong>Perimetre Megaport :</strong> {portCount} Port{portCount > 1 ? 's' : ''} (co-location PoP) + 2x VXC (acces cloud, redondance HA).
          OB ODCC inclut la gestion bout-en-bout, le dernier kilometre, NOC 24/7 et le SLA.
        </div>
      </div>

      {/* Heatmap */}
      <div className="rounded-lg p-4 mb-4" style={{ background: '#222533', border: '1px solid #2D3148' }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-white">
            Avantage OB ODCC vs Megaport ({portCount} Port{portCount > 1 ? 's' : ''} + 2xVXC) - {csp} - {term === '1' ? 'Sans eng.' : `${term} mois`} - {ROUTING_LABELS[routing]}
          </h2>
          <span className="text-xs" style={{ color: '#7B809A', fontFamily: 'monospace' }}>
            Cliquer une cellule pour le detail
          </span>
        </div>
        <div className="overflow-x-auto">
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{
                  background: '#1A1D27', color: '#7B809A', fontWeight: 600, fontSize: '0.7rem',
                  padding: '0.5rem 0.3rem', position: 'sticky', top: 0, zIndex: 20,
                  border: '1px solid #2D3148', textAlign: 'left', minWidth: 70,
                  textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>BW</th>
                {MEGAPORT_COUNTRIES.map(c => {
                  const meta = MEGAPORT_COUNTRY_META[c];
                  return (
                    <th key={c} style={{
                      background: '#1A1D27', color: '#7B809A', fontWeight: 600, fontSize: '0.7rem',
                      padding: '0.5rem 0.3rem', position: 'sticky', top: 0, zIndex: 20,
                      border: '1px solid #2D3148', textAlign: 'center', minWidth: 64,
                      textTransform: 'uppercase', letterSpacing: '0.05em'
                    }}>
                      <div>{meta?.code}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {MEGAPORT_BANDWIDTHS.map(bw => (
                <tr key={bw}>
                  <td style={{
                    background: '#222533', color: '#FF6600', fontWeight: 700, fontSize: '0.8rem',
                    padding: '0.6rem 0.75rem', position: 'sticky', left: 0, zIndex: 10,
                    border: '1px solid #2D3148', fontFamily: 'monospace', whiteSpace: 'nowrap'
                  }}>{MEGAPORT_BW_LABELS[bw]}</td>
                  {MEGAPORT_COUNTRIES.map(c => {
                    const cell = heatmapData[bw]?.[c];
                    if (!cell) return (
                      <td key={c} style={{
                        padding: '0.4rem 0.25rem', textAlign: 'center', fontWeight: 700,
                        fontSize: '0.72rem', border: '1px solid #2D3148', minWidth: 64,
                        background: '#1a1d27', color: '#4b5563', fontFamily: 'monospace'
                      }}>N/A</td>
                    );
                    const { bg, text } = getCellColor(cell.savingsPercent);
                    return (
                      <td key={c}
                        style={{
                          padding: '0.4rem 0.25rem', textAlign: 'center', fontWeight: 700,
                          fontSize: '0.72rem', border: '1px solid #2D3148', minWidth: 64,
                          background: bg, color: text, cursor: 'pointer',
                          fontFamily: 'monospace', lineHeight: 1.2,
                          transition: 'box-shadow 0.12s, outline 0.12s'
                        }}
                        onClick={() => handleClick(c, bw)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 0 12px rgba(255,102,0,0.4)';
                          e.currentTarget.style.outline = '2px solid rgba(255,102,0,0.6)';
                          e.currentTarget.style.outlineOffset = '-2px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.outline = '';
                          e.currentTarget.style.outlineOffset = '';
                        }}
                      >
                        {cell.savingsPercent >= 0
                          ? `+${cell.savingsPercent.toFixed(0)}%`
                          : `${cell.savingsPercent.toFixed(0)}%`}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Country legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
          {MEGAPORT_COUNTRIES.map(c => {
            const meta = MEGAPORT_COUNTRY_META[c];
            const obCountryName = MEGAPORT_TO_OB_COUNTRY[c] || c;
            const hasOB = !!obPricing?.[obCountryName];
            return (
              <span key={c} className="text-xs" style={{
                color: hasOB ? '#7B809A' : '#f59e0b', fontFamily: 'monospace'
              }}>
                {meta?.code} {meta?.city}{!hasOB ? ' (pas de pricing OB)' : ''}
              </span>
            );
          })}
        </div>
      </div>

      {/* Insights */}
      <InsightsPanel heatmapData={heatmapData} csp={csp} term={term} routing={routing} />

      {/* Modal */}
      {selected && (
        <DetailModal
          data={selected}
          csp={csp}
          term={term}
          routing={routing}
          obPricing={obPricing}
          portCount={portCount}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
