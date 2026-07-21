import { useLanguage } from '../i18n/LanguageContext';
import { formatDate } from '../utils/formatters';

// Sources affichées selon le mode actif : la Heatmap consomme OB + AWS/Azure,
// le Mode Challenger consomme OB + Megaport/Equinix (pas les tarifs bruts AWS/Azure).
const FRESHNESS_SOURCES_BY_VIEW = {
  heatmap: ['ob', 'cloud'],
  challenger: ['ob', 'megaport', 'equinix']
};

export default function Header({ selectedCSP, viewMode, freshness = {} }) {
  const { lang, setLang, t } = useLanguage();

  const freshnessEntries = (FRESHNESS_SOURCES_BY_VIEW[viewMode] ?? [])
    .filter(source => freshness[source])
    .map(source => t(`header.freshness.${source}`, { date: formatDate(freshness[source], lang) }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-8 bg-orange-500 rounded-sm shrink-0" aria-hidden="true"></span>
          <div>
            <h1 className="text-2xl font-bold text-graphite-900 leading-tight">
              {t('header.title')}
            </h1>
            <p className="text-graphite-500 text-sm">
              {t('header.tagline')}
            </p>
            {freshnessEntries.length > 0 && (
              <p className="text-graphite-400 text-xs mt-0.5">
                {freshnessEntries.join(' · ')}
              </p>
            )}
          </div>
        </div>

        {/* Switch FR/EN */}
        <div className="flex rounded-lg overflow-hidden border border-graphite-200 shrink-0">
          <button
            onClick={() => setLang('fr')}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              lang === 'fr' ? 'bg-graphite-800 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-100'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              lang === 'en' ? 'bg-graphite-800 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-100'
            }`}
          >
            EN
          </button>
        </div>
      </div>
      <div className="mt-4 p-3 bg-graphite-50 rounded border border-graphite-100">
        <p className="text-sm text-graphite-600">
          <strong className="text-graphite-800">{t('header.methodologyLabel')}</strong> — {t('header.methodologyText', { csp: selectedCSP })}
        </p>
      </div>
    </div>
  );
}
