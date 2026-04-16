import { useState } from 'react'
import { formatCurrency } from '../../engine/currencyUtils'
import { FX_RATES_TO_USD } from '../../data/geoMappings'
import BrickBreakdown from './BrickBreakdown'
import { useLanguage } from '../../i18n/LanguageContext'

const ACTOR_STYLES = {
  orange: {
    header:   'bg-orange-500 text-white',
    badge:    'bg-orange-600 text-orange-100',
    price:    'text-orange-600',
    ring:     'ring-orange-400',
    card:     'border-orange-200',
    color:    'orange',
  },
  blue: {
    header:   'bg-blue-500 text-white',
    badge:    'bg-blue-600 text-blue-100',
    price:    'text-blue-600',
    ring:     'ring-blue-400',
    card:     'border-blue-200',
    color:    'blue',
  },
  teal: {
    header:   'bg-teal-600 text-white',
    badge:    'bg-teal-700 text-teal-100',
    price:    'text-teal-600',
    ring:     'ring-teal-400',
    card:     'border-teal-200',
    color:    'teal',
  },
}

function findCheapest(level) {
  let best = null, bestId = null
  for (const [id, data] of Object.entries(level ?? {})) {
    if (data?.total != null && (best === null || data.total < best)) {
      best = data.total
      bestId = id
    }
  }
  return bestId
}

export default function ChallengerResult({ results, params, currency, onCurrencyChange, onReset }) {
  const { allLevels, narrative } = results
  const { t } = useLanguage()

  const [resilience, setResilience] = useState('mid')
  const [copied,     setCopied]     = useState(false)

  const RESILIENCE_OPTIONS = [
    { id: 'bot', label: t('resilience.bot'), desc: t('resilience.bot_desc') },
    { id: 'mid', label: t('resilience.mid'), desc: t('resilience.mid_desc') },
    { id: 'a2a', label: t('resilience.a2a'), desc: t('resilience.a2a_desc') },
  ]

  const ACTORS = [
    { id: 'ob',       label: t('actors.ob'),       color: 'orange' },
    { id: 'megaport', label: t('actors.megaport'),  color: 'blue'   },
    { id: 'equinix',  label: t('actors.equinix'),   color: 'teal'   },
  ]

  const level = allLevels[resilience]
  const cheapestId = findCheapest(level)

  // Delta vs cheapest DIY
  function computeDeltas() {
    const ob  = level?.ob?.total
    const meg = level?.megaport?.total
    const eqx = level?.equinix?.total
    if (!ob) return {}
    const deltas = {}
    if (meg) deltas.megaport = ((ob - meg) / meg * 100).toFixed(0)
    if (eqx) deltas.equinix  = ((ob - eqx) / eqx * 100).toFixed(0)
    return deltas
  }

  const deltas = computeDeltas()

  function handleCopy() {
    navigator.clipboard?.writeText(narrative).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="space-y-4">

      {/* ── Controls bar ──────────────────────────────────────── */}
      <div className="bg-white rounded-lg shadow-md px-6 py-4 flex flex-wrap items-center justify-between gap-4">

        {/* Currency toggle */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('result.currency_label')}</span>
          <div className="flex gap-1">
            {['USD', 'EUR'].map(cur => (
              <button
                key={cur}
                onClick={() => onCurrencyChange(cur)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  currency === cur
                    ? 'border-orange-500 bg-orange-500 text-white font-medium'
                    : 'border-gray-200 text-gray-600 hover:border-orange-300'
                }`}
              >
                {cur === 'USD' ? '$ USD' : '€ EUR'}
              </button>
            ))}
          </div>
          {/* Exchange rate indicator — reads live from FX config */}
          <span className="text-xs text-gray-400 tabular-nums">
            1 EUR = {FX_RATES_TO_USD['EUR'].toFixed(2)} USD
          </span>
        </div>

        {/* Resilience toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t('result.resilience_label')}</span>
          <div className="flex gap-1">
            {RESILIENCE_OPTIONS.map(opt => (
              <button
                key={opt.id}
                title={opt.desc}
                onClick={() => setResilience(opt.id)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  resilience === opt.id
                    ? 'border-orange-500 bg-orange-50 text-orange-700 font-medium'
                    : 'border-gray-200 text-gray-600 hover:border-orange-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onReset}
          className="text-sm text-gray-400 hover:text-gray-600 underline"
        >
          {t('result.modify_params')}
        </button>
      </div>

      {/* ── Param recap ─────────────────────────────────────────── */}
      <div className="bg-gray-50 rounded-lg px-4 py-2.5 flex flex-wrap gap-3 text-xs text-gray-500 border border-gray-200">
        <span><strong className="text-gray-700">Cas {params.usecase_id}</strong></span>
        <span>·</span>
        {params.countries ? (
          <span>{params.countries.map((c, i) => `DC${i+1}: ${c}`).join(' · ')}</span>
        ) : (
          <span>{params.country}</span>
        )}
        <span>·</span>
        <span>{params.context === 'mpls' ? t('heatmap.mpls') : t('heatmap.greenfield')}</span>
        <span>·</span>
        <span>{params.csps.map(c => c.toUpperCase()).join('+')}</span>
        <span>·</span>
        <span>{params.bandwidth_mbps >= 1000 ? `${params.bandwidth_mbps/1000}G` : `${params.bandwidth_mbps}M`}bps</span>
        <span>·</span>
        <span>{params.term_months === 1 ? '1 mois' : `${params.term_months} mois`}</span>
        {params.context === 'mpls' && <><span>·</span><span>VPNaaS {params.vpnaas_footprint}</span></>}
      </div>

      {/* ── Actor cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ACTORS.map(actor => {
          const result    = level?.[actor.id]
          const style     = ACTOR_STYLES[actor.color]
          const delta     = deltas[actor.id]
          const hasData   = result?.total != null
          const isCheapest = actor.id === cheapestId

          return (
            <div
              key={actor.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                isCheapest ? `border-4 ${style.card}` : `border-2 ${style.card}`
              }`}
            >
              {/* Header */}
              <div className={`px-5 py-4 ${style.header} flex items-start justify-between`}>
                <div>
                  <div className="font-bold text-base">{actor.label}</div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Delta badge vs OB */}
                  {actor.id !== 'ob' && delta != null && (
                    <div className={`text-right text-sm font-semibold ${
                      Number(delta) > 0 ? 'text-green-200' : 'text-red-200'
                    }`}>
                      {Number(delta) > 0 ? `+${delta}%` : `${delta}%`}
                      <div className="text-xs font-normal opacity-80">{t('result.vs_ob')}</div>
                    </div>
                  )}
                  {/* Trophy for cheapest */}
                  {isCheapest && (
                    <span className="text-xl leading-none" title={t('result.best_price')}>🏆</span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="px-5 py-5 text-center">
                {hasData ? (
                  <>
                    <div className={`text-3xl font-extrabold tracking-tight ${style.price}`}>
                      {formatCurrency(result.total)}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{t('result.per_month')}</div>
                    {isCheapest && (
                      <div className="mt-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {t('result.best_price')}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-gray-400 text-sm">
                    {result?.missing?.length ? (
                      <span className="text-amber-500">{t('result.partial_data')}</span>
                    ) : (
                      <span>{t('result.unavailable')}</span>
                    )}
                  </div>
                )}

                {/* Partial total when missing */}
                {!hasData && result?.breakdown?.some(b => b.total != null) && (
                  <div className="text-xs text-gray-400 mt-1">
                    {t('result.partial')} : {formatCurrency(
                      result.breakdown.reduce((s, b) => s + (b.total ?? 0), 0)
                    )}
                  </div>
                )}
              </div>

              {/* Breakdown accordion */}
              <div className="px-4 pb-4">
                <BrickBreakdown result={result} color={style.color} />
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Narrative ─────────────────────────────────────────────── */}
      <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700">{t('result.narrative_title')}</h3>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
            >
              {copied ? t('result.copied') : t('result.copy')}
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{narrative}</p>
      </div>

      {/* ── All levels mini table ─────────────────────────────────── */}
      <AllLevelsTable allLevels={allLevels} activeResilience={resilience} />

    </div>
  )
}

function AllLevelsTable({ allLevels, activeResilience }) {
  const { t } = useLanguage()

  const RESILIENCE_OPTIONS = [
    { id: 'bot', label: t('resilience.bot'), desc: t('resilience.bot_desc') },
    { id: 'mid', label: t('resilience.mid'), desc: t('resilience.mid_desc') },
    { id: 'a2a', label: t('resilience.a2a'), desc: t('resilience.a2a_desc') },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700">{t('result.summary_title')}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <th className="text-left px-5 py-2.5 font-medium">{t('result.col_level')}</th>
              <th className="text-right px-4 py-2.5 font-medium text-orange-600">{t('actors.ob')}</th>
              <th className="text-right px-4 py-2.5 font-medium text-blue-600">{t('actors.megaport')}</th>
              <th className="text-right px-4 py-2.5 font-medium text-teal-600">{t('actors.equinix')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {RESILIENCE_OPTIONS.map(opt => {
              const level = allLevels[opt.id]
              const isActive = opt.id === activeResilience
              const cheapestId = findCheapest(level)

              function cellClass(actorId) {
                if (actorId === cheapestId) return 'text-green-600 font-bold'
                return isActive ? 'text-gray-700' : 'text-gray-500'
              }

              return (
                <tr key={opt.id} className={isActive ? 'bg-orange-50 font-semibold' : ''}>
                  <td className="px-5 py-3 text-gray-700">
                    {isActive && <span className="mr-1 text-orange-500">▶</span>}
                    {opt.label}
                  </td>
                  <td className={`text-right px-4 py-3 ${cellClass('ob')}`}>
                    {level?.ob?.total != null ? formatCurrency(level.ob.total) : '—'}
                  </td>
                  <td className={`text-right px-4 py-3 ${cellClass('megaport')}`}>
                    {level?.megaport?.total != null ? formatCurrency(level.megaport.total) : '—'}
                  </td>
                  <td className={`text-right px-4 py-3 ${cellClass('equinix')}`}>
                    {level?.equinix?.total != null ? formatCurrency(level.equinix.total) : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
