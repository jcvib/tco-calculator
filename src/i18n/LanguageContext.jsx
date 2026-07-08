import { createContext, useContext, useState, useMemo } from 'react';
import { TRANSLATIONS } from './translations';

const LanguageContext = createContext(null);

function resolve(dict, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  const t = useMemo(() => {
    return (key, vars) => {
      const template = resolve(TRANSLATIONS[lang], key) ?? resolve(TRANSLATIONS.fr, key) ?? key;
      if (!vars) return template;
      return Object.entries(vars).reduce(
        (str, [name, value]) => str.replaceAll(`{${name}}`, value),
        template
      );
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
