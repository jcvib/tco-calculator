import { useLanguage } from '../i18n/LanguageContext'

export default function ViewSelector({ viewMode, setViewMode }) {
  const { t } = useLanguage()

  const tabs = [
    { id: 'heatmap',    label: `📊 ${t('viewSelector.heatmap')}`,     desc: 'OB vs CSP Egress' },
    { id: 'challenger', label: t('viewSelector.challenger'),           desc: 'OB vs Megaport vs Equinix' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 flex overflow-hidden">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setViewMode(tab.id)}
          className={`flex-1 py-4 px-6 text-left transition-colors ${
            viewMode === tab.id
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700'
          }`}
        >
          <div className="font-semibold text-sm">{tab.label}</div>
          <div className={`text-xs mt-0.5 ${viewMode === tab.id ? 'text-orange-100' : 'text-gray-400'}`}>
            {tab.desc}
          </div>
        </button>
      ))}
    </div>
  )
}
