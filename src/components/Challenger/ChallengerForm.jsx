import { useState } from 'react'
import { getUseCases } from '../../engine/stackComposer'
import { CHALLENGER_COUNTRIES, CHALLENGER_BANDWIDTHS, DEFAULT_VNE_CONFIG } from '../../data/geoMappings'
import { useLanguage } from '../../i18n/LanguageContext'

const VNE_CONFIGS = [
  '1vCPU_2GB_64GB', '1vCPU_4GB_64GB',
  '2vCPU_4GB_64GB', '2vCPU_8GB_64GB',
  '4vCPU_4GB_64GB', '4vCPU_8GB_64GB', '4vCPU_16GB_64GB',
  '8vCPU_16GB_64GB', '8vCPU_32GB_64GB',
  '16vCPU_16GB_64GB', '16vCPU_32GB_64GB', '16vCPU_64GB_64GB',
]

const TERM_OPTIONS = [
  { value: 1,  label: '1 mois' },
  { value: 12, label: '12 mois' },
  { value: 24, label: '24 mois' },
  { value: 36, label: '36 mois' },
]

const FOOTPRINT_OPTIONS = ['Local', 'Regional', 'Global']

const USE_CASES = getUseCases()

export default function ChallengerForm({ onCalculate }) {
  const { t, lang } = useLanguage()

  const [context,          setContext]          = useState('mpls')
  const [country,          setCountry]          = useState('France')
  const [vpnaasFootprint,  setVpnaasFootprint]  = useState('Local')
  const [usecaseId,        setUsecaseId]        = useState('A')
  const [csps,             setCsps]             = useState(['aws'])
  const [mDcs,             setMDcs]             = useState(2)
  const [bandwidthMbps,    setBandwidthMbps]    = useState(500)
  const [termMonths,       setTermMonths]       = useState(12)
  const [vneConfig,        setVneConfig]        = useState(DEFAULT_VNE_CONFIG)
  const [showAdvanced,     setShowAdvanced]     = useState(false)
  const [addPortMpls,      setAddPortMpls]      = useState(false)
  const [dcCountries,      setDcCountries]      = useState(['France', 'France'])

  const usecase = USE_CASES.find(uc => uc.id === usecaseId)
  const constraints = usecase?.constraints ?? {}

  const showMDcs       = usecase?.params?.includes('m_dcs')
  const showFootprint  = context === 'mpls'
  const showVne        = context === 'greenfield'

  // Enforce fixed_csps constraint
  const effectiveCsps = constraints.fixed_csps === 2 ? ['aws', 'azure'] : csps

  function toggleCSP(csp) {
    if (constraints.fixed_csps === 2) return
    if (constraints.max_csps === 1) {
      setCsps([csp])
      return
    }
    if (csps.includes(csp)) {
      if (csps.length === 1) return   // keep at least 1
      setCsps(csps.filter(c => c !== csp))
    } else {
      setCsps([...csps, csp])
    }
  }

  function handleMDcsChange(n) {
    setMDcs(n)
    setDcCountries(prev => {
      if (n > prev.length) return [...prev, ...Array(n - prev.length).fill(prev[prev.length - 1] ?? 'France')]
      return prev.slice(0, n)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onCalculate({
      usecase_id:       usecaseId,
      context,
      country:          usecaseId === 'E' ? dcCountries[0] : country,
      countries:        usecaseId === 'E' ? dcCountries : undefined,
      vpnaas_footprint: vpnaasFootprint,
      csps:             effectiveCsps,
      n_csps:           effectiveCsps.length,
      m_dcs:            showMDcs ? mDcs : 1,
      bandwidth_mbps:   bandwidthMbps,
      term_months:      termMonths,
      vne_config:       vneConfig,
      add_port_mpls:    addPortMpls,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-lg font-bold text-gray-800">{t('form.title')}</h2>

      {/* ── Section 1 : Contexte ─────────────────────── */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {t('form.section_context')}
        </legend>

        {/* Context toggle */}
        <div className="flex gap-2">
          {[
            { value: 'mpls',       label: t('form.mpls_label'),       desc: t('form.mpls_desc') },
            { value: 'greenfield', label: t('form.greenfield_label'), desc: t('form.greenfield_desc') },
          ].map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setContext(opt.value)}
              className={`flex-1 text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                context === opt.value
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-200'
              }`}
            >
              <div className="font-medium text-sm text-gray-800">{opt.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{opt.desc}</div>
            </button>
          ))}
        </div>

        {/* Country */}
        {usecaseId === 'E' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.country_per_dc')}</label>
            <div className="space-y-2">
              {dcCountries.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-10 shrink-0">DC {i+1}</span>
                  <select
                    value={c}
                    onChange={e => {
                      const next = [...dcCountries]
                      next[i] = e.target.value
                      setDcCountries(next)
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-sm"
                  >
                    {CHALLENGER_COUNTRIES.map(ct => <option key={ct} value={ct}>{ct}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.country')}</label>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
            >
              {CHALLENGER_COUNTRIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        {/* VPNaaS footprint (MPLS only) */}
        {showFootprint && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.vpnaas_footprint')}
                <span className="ml-2 text-xs text-green-600 font-normal">{t('form.vpnaas_local_note')}</span>
              </label>
              <div className="flex gap-1">
                {FOOTPRINT_OPTIONS.map(fp => (
                  <button
                    key={fp}
                    type="button"
                    onClick={() => setVpnaasFootprint(fp)}
                    className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                      vpnaasFootprint === fp
                        ? 'border-orange-500 bg-orange-500 text-white font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-orange-300'
                    }`}
                  >
                    {fp}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <div className="text-sm font-medium text-gray-700">{t('form.add_port_label')}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t('form.add_port_desc')}</div>
              </div>
              <button
                type="button"
                onClick={() => setAddPortMpls(a => !a)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  addPortMpls ? 'bg-orange-500' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  addPortMpls ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </>
        )}
      </fieldset>

      {/* ── Section 2 : Topologie ────────────────────── */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {t('form.section_topology')}
        </legend>

        {/* Use case radio cards */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.use_case')}</label>
          <div className="grid grid-cols-2 gap-2">
            {USE_CASES.map(uc => (
              <button
                key={uc.id}
                type="button"
                onClick={() => setUsecaseId(uc.id)}
                className={`text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                  usecaseId === uc.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-200'
                }`}
              >
                <div className="font-semibold text-sm text-gray-800">
                  <span className="text-orange-600 mr-1">Cas {uc.id}</span>
                  {lang === 'en' && uc.label_en ? uc.label_en : uc.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {lang === 'en' && uc.description_en ? uc.description_en : uc.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CSPs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.cloud_providers')}
            {constraints.max_csps === 1 && (
              <span className="ml-2 text-xs text-gray-400">{t('form.csps_max1')}</span>
            )}
            {constraints.fixed_csps === 2 && (
              <span className="ml-2 text-xs text-gray-400">{t('form.csps_fixed')}</span>
            )}
          </label>
          <div className="flex gap-2">
            {[
              { id: 'aws',   label: 'AWS',   logo: '🟠' },
              { id: 'azure', label: 'Azure', logo: '🔵' },
            ].map(csp => {
              const active = effectiveCsps.includes(csp.id)
              const locked = constraints.fixed_csps === 2
              return (
                <button
                  key={csp.id}
                  type="button"
                  onClick={() => toggleCSP(csp.id)}
                  disabled={locked}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 text-sm font-medium transition-colors ${
                    active
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  } ${locked ? 'opacity-70 cursor-default' : ''}`}
                >
                  {csp.logo} {csp.label}
                  {active && <span className="text-orange-500">✓</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* m_dcs slider (Cas E only) */}
        {showMDcs && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.n_dcs')} : <span className="text-orange-600 font-bold">{mDcs}</span>
            </label>
            <input
              type="range"
              min={2} max={5} step={1}
              value={mDcs}
              onChange={e => handleMDcsChange(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              {[2,3,4,5].map(n => <span key={n}>{n} DC</span>)}
            </div>
          </div>
        )}
      </fieldset>

      {/* ── Section 3 : Réseau ───────────────────────── */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {t('form.section_network')}
        </legend>

        {/* Bandwidth slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.bandwidth')} : <span className="text-orange-600 font-bold">
              {bandwidthMbps >= 1000 ? `${bandwidthMbps/1000} G` : `${bandwidthMbps} M`}bps
            </span>
          </label>
          <input
            type="range"
            min={0} max={CHALLENGER_BANDWIDTHS.length - 1} step={1}
            value={CHALLENGER_BANDWIDTHS.indexOf(bandwidthMbps)}
            onChange={e => setBandwidthMbps(CHALLENGER_BANDWIDTHS[Number(e.target.value)])}
            className="w-full accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            {CHALLENGER_BANDWIDTHS.map(bw => (
              <span key={bw}>{bw >= 1000 ? `${bw/1000}G` : `${bw}M`}</span>
            ))}
          </div>
        </div>

        {/* Term segmented control */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.commitment')}</label>
          <div className="flex gap-1">
            {TERM_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setTermMonths(opt.value)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  termMonths === opt.value
                    ? 'border-orange-500 bg-orange-500 text-white font-medium'
                    : 'border-gray-200 text-gray-600 hover:border-orange-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced VNE config */}
        {showVne && (
          <div>
            <button
              type="button"
              onClick={() => setShowAdvanced(a => !a)}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              {showAdvanced ? t('form.vne_advanced_hide') : t('form.vne_advanced_show')}
            </button>
            {showAdvanced && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.vne_config')}</label>
                <select
                  value={vneConfig}
                  onChange={e => setVneConfig(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                >
                  {VNE_CONFIGS.map(cfg => (
                    <option key={cfg} value={cfg}>{cfg}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}
      </fieldset>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
      >
        {t('form.submit')}
      </button>
    </form>
  )
}
