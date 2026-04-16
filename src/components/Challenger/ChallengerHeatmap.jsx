import { useState, useMemo } from 'react'
import { computeLevel } from '../../engine/pricingEngine'
import { setDisplayCurrency } from '../../engine/currencyUtils'
import { CHALLENGER_COUNTRIES, CHALLENGER_BANDWIDTHS } from '../../data/geoMappings'
import { getUseCases } from '../../engine/stackComposer'
import { useLanguage } from '../../i18n/LanguageContext'

// Cas réels (sans E) + cas virtuel "A+port"
const BASE_USE_CASES = getUseCases().filter(uc => uc.id !== 'E')
const HEATMAP_USE_CASES = [
  ...BASE_USE_CASES,
  {
    id: 'A+port',
    label: 'A+port',
    label_en: 'A+port',
    description: 'Cas A avec port (MPLS)',
    description_en: 'Case A with port (MPLS)',
    constraints: { max_csps: 1 },
  },
]

const WINNER_COLORS = {
  ob:       { bg: 'bg-orange-500', text: 'text-white',    label: 'OB' },
  megaport: { bg: 'bg-blue-500',   text: 'text-white',    label: 'MP' },
  equinix:  { bg: 'bg-teal-600',   text: 'text-white',    label: 'EQ' },
  tie:      { bg: 'bg-gray-200',   text: 'text-gray-500', label: '='  },
  missing:  { bg: 'bg-gray-100',   text: 'text-gray-300', label: '?'  },
}

// Couleurs couverture : 3/3 vert, 2/3 jaune, 1/3 orange, 0/3 rouge
const COVERAGE_BG = ['bg-red-100', 'bg-orange-100', 'bg-yellow-100', 'bg-green-100']

export default function ChallengerHeatmap() {
  const [usecaseId,  setUsecaseId]  = useState('A')
  const [context,    setContext]    = useState('mpls')
  const [resilience, setResilience] = useState('mid')
  const [term,       setTerm]       = useState(12)
  const [viewMode,   setViewMode]   = useState('winner')   // 'winner' | 'coverage'

  const { t, lang } = useLanguage()

  // Cas "A+port" : on force Cas A + add_port_mpls=true + contexte MPLS
  const isAplus          = usecaseId === 'A+port'
  const effectiveUsecase = isAplus ? 'A'    : usecaseId
  const effectiveContext = isAplus ? 'mpls' : context
  const effectiveAddPort = isAplus

  // Heatmap always renders in USD
  setDisplayCurrency('USD')

  const baseParams = {
    usecase_id:     effectiveUsecase,
    context:        effectiveContext,
    resilience,
    term_months:    term,
    csps:           ['aws'],
    n_csps:         1,
    m_dcs:          1,
    vne_config:     '2vCPU_4GB_64GB',
    vpnaas_footprint: 'Local',
    add_port_mpls:  effectiveAddPort,
  }

  // ── Vue Compétitif ─────────────────────────────────────────────────────────
  const winnerGrid = useMemo(() => {
    return CHALLENGER_COUNTRIES.map(country => ({
      country,
      cells: CHALLENGER_BANDWIDTHS.map(bw => {
        try {
          const level = computeLevel({ ...baseParams, country, bandwidth_mbps: bw })
          const ob  = level.ob?.total
          const meg = level.megaport?.total
          const eqx = level.equinix?.total

          const validTotals = [
            ob  != null ? { id: 'ob',       total: ob  } : null,
            meg != null ? { id: 'megaport', total: meg } : null,
            eqx != null ? { id: 'equinix',  total: eqx } : null,
          ].filter(Boolean)

          if (validTotals.length === 0) return { winner: 'missing', ob, meg, eqx }

          const minTotal = Math.min(...validTotals.map(v => v.total))
          const winners  = validTotals.filter(v => Math.abs(v.total - minTotal) / minTotal < 0.01)
          const winner   = winners.length > 1 ? 'tie' : winners[0].id

          let delta = null
          if (ob != null) {
            const bestDIY = [meg, eqx].filter(v => v != null)
            if (bestDIY.length > 0) {
              const minDIY = Math.min(...bestDIY)
              delta = ((ob - minDIY) / minDIY * 100).toFixed(0)
            }
          }

          return { winner, ob, meg, eqx, delta }
        } catch {
          return { winner: 'missing' }
        }
      }),
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usecaseId, context, resilience, term])

  // ── Vue Couverture ─────────────────────────────────────────────────────────
  const coverageGrid = useMemo(() => {
    return CHALLENGER_COUNTRIES.map(country => ({
      country,
      cells: CHALLENGER_BANDWIDTHS.map(bw => {
        try {
          const level = computeLevel({ ...baseParams, country, bandwidth_mbps: bw })

          const obOk  = level.ob?.missing?.length === 0 && (level.ob?.total != null || level.ob?.breakdown?.length > 0)
          const megOk = level.megaport?.total != null
          const eqxOk = level.equinix?.total  != null

          const obMissing  = level.ob?.missing  ?? []
          const megMissing = level.megaport?.missing ?? []
          const eqxMissing = level.equinix?.missing  ?? []

          return {
            obOk, megOk, eqxOk,
            count: [obOk, megOk, eqxOk].filter(Boolean).length,
            obMissing, megMissing, eqxMissing,
          }
        } catch (e) {
          return { obOk: false, megOk: false, eqxOk: false, count: 0, obMissing: [e.message], megMissing: [], eqxMissing: [] }
        }
      }),
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usecaseId, context, resilience, term])

  const grid = viewMode === 'coverage' ? coverageGrid : winnerGrid

  // Summary stats for coverage view
  const coverageSummary = useMemo(() => {
    let total = 0, complete = 0, partial = 0, empty = 0
    coverageGrid.forEach(({ cells }) => cells.forEach(cell => {
      total++
      if (cell.count === 3) complete++
      else if (cell.count > 0) partial++
      else empty++
    }))
    return { total, complete, partial, empty }
  }, [coverageGrid])

  return (
    <div className="space-y-4">

      {/* ── Controls ───────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-4 items-center">

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {lang === 'en' ? 'View' : 'Vue'}
          </span>
          <div className="flex gap-1 border border-gray-200 rounded-lg p-0.5">
            {[
              { id: 'winner',   label: lang === 'en' ? '🏆 Winner'   : '🏆 Compétitif' },
              { id: 'coverage', label: lang === 'en' ? '🗂 Coverage' : '🗂 Couverture' },
            ].map(opt => (
              <button key={opt.id} onClick={() => setViewMode(opt.id)}
                className={`px-3 py-1 text-xs rounded-md transition-colors font-medium ${
                  viewMode === opt.id ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-700'
                }`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-px h-6 bg-gray-200" />

        {/* Use case */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('heatmap.cas_label')}</span>
          <div className="flex gap-1">
            {HEATMAP_USE_CASES.map(uc => (
              <button key={uc.id} onClick={() => setUsecaseId(uc.id)}
                title={lang === 'en' ? uc.description_en : uc.description}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  usecaseId === uc.id
                    ? 'bg-orange-500 border-orange-500 text-white font-medium'
                    : 'border-gray-200 text-gray-600 hover:border-orange-300'
                } ${uc.id === 'A+port' ? 'border-dashed' : ''}`}>
                {uc.id}
              </button>
            ))}
          </div>
        </div>

        {/* Context (hidden when A+port — forced to MPLS) */}
        {!isAplus && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('heatmap.context_label')}</span>
            <div className="flex gap-1">
              {[
                { v: 'mpls',       l: t('heatmap.mpls') },
                { v: 'greenfield', l: t('heatmap.greenfield') },
              ].map(opt => (
                <button key={opt.v} onClick={() => setContext(opt.v)}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                    context === opt.v ? 'bg-orange-500 border-orange-500 text-white font-medium' : 'border-gray-200 text-gray-600 hover:border-orange-300'
                  }`}>
                  {opt.l}
                </button>
              ))}
            </div>
          </div>
        )}
        {isAplus && (
          <span className="text-xs text-gray-400 italic">
            {lang === 'en' ? 'Context locked: MPLS (port always included)' : 'Contexte verrouillé : MPLS (port toujours inclus)'}
          </span>
        )}

        {/* Resilience */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('heatmap.resilience_label')}</span>
          <div className="flex gap-1">
            {[{v:'bot',l:'Bot'},{v:'mid',l:'Mid'},{v:'a2a',l:'A2A'}].map(opt => (
              <button key={opt.v} onClick={() => setResilience(opt.v)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  resilience === opt.v ? 'bg-orange-500 border-orange-500 text-white font-medium' : 'border-gray-200 text-gray-600 hover:border-orange-300'
                }`}>
                {opt.l}
              </button>
            ))}
          </div>
        </div>

        {/* Term */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('heatmap.commitment_label')}</span>
          <div className="flex gap-1">
            {[1,12,24,36].map(tv => (
              <button key={tv} onClick={() => setTerm(tv)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  term === tv ? 'bg-orange-500 border-orange-500 text-white font-medium' : 'border-gray-200 text-gray-600 hover:border-orange-300'
                }`}>
                {tv}m
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Legend ─────────────────────────────────────────────────────────── */}
      {viewMode === 'winner' ? (
        <div className="flex flex-wrap gap-3 items-center text-xs text-gray-500 px-1">
          <span className="font-medium">{t('heatmap.winner_label')} :</span>
          {Object.entries(WINNER_COLORS).map(([key, s]) =>
            key !== 'missing' && (
              <span key={key} className="flex items-center gap-1">
                <span className={`inline-block w-4 h-4 rounded ${s.bg}`} />
                <span>
                  {key === 'ob'       ? t('heatmap.ob_full')
                  : key === 'megaport' ? t('heatmap.mp_full')
                  : key === 'equinix'  ? t('heatmap.eq_full')
                  : t('heatmap.tie')}
                </span>
              </span>
            )
          )}
          <span className="ml-1 text-gray-400">{t('heatmap.delta_note')}</span>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 items-center text-xs text-gray-500 px-1">
          <span className="font-medium">{lang === 'en' ? 'Data coverage' : 'Couverture données'} :</span>
          {[
            { bg: 'bg-green-100',  label: lang === 'en' ? '3/3 complete' : '3/3 complet' },
            { bg: 'bg-yellow-100', label: lang === 'en' ? '2/3'          : '2/3' },
            { bg: 'bg-orange-100', label: lang === 'en' ? '1/3'          : '1/3' },
            { bg: 'bg-red-100',    label: lang === 'en' ? '0/3 missing'  : '0/3 manquant' },
          ].map(({ bg, label }) => (
            <span key={bg} className="flex items-center gap-1">
              <span className={`inline-block w-4 h-4 rounded border border-gray-200 ${bg}`} />
              <span>{label}</span>
            </span>
          ))}
          <span className="ml-auto font-medium text-gray-600">
            {lang === 'en'
              ? `${coverageSummary.complete}/${coverageSummary.total} cells complete · ${coverageSummary.partial} partial · ${coverageSummary.empty} empty`
              : `${coverageSummary.complete}/${coverageSummary.total} cellules complètes · ${coverageSummary.partial} partielles · ${coverageSummary.empty} vides`}
          </span>
        </div>
      )}

      {/* ── Grid ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-2.5 font-medium text-gray-500 min-w-[140px]">{t('heatmap.col_country')}</th>
              {CHALLENGER_BANDWIDTHS.map(bw => (
                <th key={bw} className="px-2 py-2.5 font-medium text-gray-500 text-center min-w-[64px]">
                  {bw >= 1000 ? `${bw/1000}G` : `${bw}M`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {grid.map(({ country, cells }) => (
              <tr key={country} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-700 text-xs whitespace-nowrap">{country}</td>
                {cells.map((cell, j) => {
                  const bw = CHALLENGER_BANDWIDTHS[j]

                  if (viewMode === 'winner') {
                    const style = WINNER_COLORS[cell.winner] ?? WINNER_COLORS.missing
                    const tooltipParts = []
                    if (cell.ob  != null) tooltipParts.push(`OB: $${Math.round(cell.ob).toLocaleString()}`)
                    if (cell.meg != null) tooltipParts.push(`MP: $${Math.round(cell.meg).toLocaleString()}`)
                    if (cell.eqx != null) tooltipParts.push(`EQ: $${Math.round(cell.eqx).toLocaleString()}`)
                    return (
                      <td key={bw} className="px-1 py-1 text-center" title={tooltipParts.join(' | ')}>
                        <div className={`inline-flex flex-col items-center justify-center rounded w-14 h-10 ${style.bg} ${style.text} cursor-default`}>
                          <span className="font-bold text-xs leading-none">{style.label}</span>
                          {cell.delta != null && (
                            <span className="text-[9px] leading-none mt-0.5 opacity-90">
                              {Number(cell.delta) > 0 ? `+${cell.delta}%` : `${cell.delta}%`}
                            </span>
                          )}
                        </div>
                      </td>
                    )
                  }

                  // Coverage cell
                  const coverageBg = COVERAGE_BG[cell.count] ?? 'bg-gray-100'
                  const tooltipLines = []
                  if (!cell.obOk  && cell.obMissing?.length)  tooltipLines.push(`OB: ${cell.obMissing.join(', ')}`)
                  if (!cell.megOk && cell.megMissing?.length) tooltipLines.push(`MP: ${cell.megMissing.join(', ')}`)
                  if (!cell.eqxOk && cell.eqxMissing?.length) tooltipLines.push(`EQ: ${cell.eqxMissing.join(', ')}`)
                  const allOk = cell.obOk && cell.megOk && cell.eqxOk
                  const tooltip = allOk
                    ? (lang === 'en' ? 'All data complete' : 'Toutes les données présentes')
                    : tooltipLines.join('\n')

                  return (
                    <td key={bw} className="px-1 py-1 text-center" title={tooltip}>
                      <div className={`inline-flex items-center justify-center gap-0.5 rounded w-14 h-10 border border-gray-100 ${coverageBg} cursor-default`}>
                        {/* Three dots: OB | MP | EQ */}
                        <span title={`OB${cell.obOk ? '' : ' ✗'}`}
                          className={`w-3.5 h-3.5 rounded-full border ${cell.obOk ? 'bg-orange-400 border-orange-500' : 'bg-gray-200 border-gray-300'}`} />
                        <span title={`MP${cell.megOk ? '' : ' ✗'}`}
                          className={`w-3.5 h-3.5 rounded-full border ${cell.megOk ? 'bg-blue-400 border-blue-500' : 'bg-gray-200 border-gray-300'}`} />
                        <span title={`EQ${cell.eqxOk ? '' : ' ✗'}`}
                          className={`w-3.5 h-3.5 rounded-full border ${cell.eqxOk ? 'bg-teal-400 border-teal-500' : 'bg-gray-200 border-gray-300'}`} />
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
