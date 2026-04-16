import { useState } from 'react'
import ChallengerForm from './ChallengerForm'
import ChallengerResult from './ChallengerResult'
import ChallengerHeatmap from './ChallengerHeatmap'
import { computeAllLevels } from '../../engine/pricingEngine'
import { generateNarrative } from '../../engine/narrativeGenerator'
import { setDisplayCurrency } from '../../engine/currencyUtils'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ChallengerView() {
  const [tab,      setTab]      = useState('calc')  // 'calc' | 'heatmap'
  const [params,   setParams]   = useState(null)
  const [allLevels, setAllLevels] = useState(null)
  const [error,    setError]    = useState(null)
  const [currency, setCurrency] = useState('USD')

  const { t, lang } = useLanguage()

  // Narrative is derived from allLevels + lang + currency — recomputed on any change
  // (no need to store it in state separately)
  const narrative = allLevels && params
    ? (() => { try { return generateNarrative(allLevels, { ...params, resilience: 'mid', lang }) } catch { return '' } })()
    : null

  function runCompute(formParams) {
    const levels = computeAllLevels(formParams)
    setAllLevels(levels)
  }

  function handleCalculate(formParams) {
    try {
      setParams(formParams)
      runCompute(formParams)
      setError(null)
    } catch (e) {
      console.error('[ChallengerView] Erreur de calcul:', e)
      setError(e.message)
    }
  }

  function handleCurrencyChange(cur) {
    setDisplayCurrency(cur)
    setCurrency(cur)
    if (params) { try { runCompute(params) } catch (e) {} }
  }

  function handleReset() {
    setParams(null)
    setAllLevels(null)
    setError(null)
  }

  const results = allLevels ? { allLevels, narrative } : null

  return (
    <div className="space-y-6">
      {/* Intro banner + tabs */}
      <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-orange-500">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">{t('challenger.title')}</h2>
            <p className="text-sm text-gray-600">
              {t('challenger.subtitle')}
            </p>
          </div>
          <div className="flex gap-1 border border-gray-200 rounded-lg p-1">
            {[
              { id: 'calc',    label: t('challenger.tab_calc') },
              { id: 'heatmap', label: t('challenger.tab_heatmap') },
            ].map(tab_item => (
              <button key={tab_item.id} onClick={() => setTab(tab_item.id)}
                className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                  tab === tab_item.id ? 'bg-orange-500 text-white font-medium' : 'text-gray-500 hover:text-gray-700'
                }`}>
                {tab_item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          ⚠️ {lang === 'en' ? 'Calculation error' : 'Erreur de calcul'} : {error}
        </div>
      )}

      {tab === 'heatmap' ? (
        <ChallengerHeatmap />
      ) : !results ? (
        <ChallengerForm onCalculate={handleCalculate} />
      ) : (
        <ChallengerResult
          results={results}
          params={params}
          currency={currency}
          onCurrencyChange={handleCurrencyChange}
          onReset={handleReset}
        />
      )}
    </div>
  )
}
