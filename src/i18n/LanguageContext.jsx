import { createContext, useContext, useState } from 'react'
import { TRANSLATIONS } from './translations'

const LanguageContext = createContext({ lang: 'fr', t: () => '' })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')

  function t(path) {
    const keys = path.split('.')
    let val = TRANSLATIONS[lang]
    for (const k of keys) {
      if (val == null) return path
      val = val[k]
    }
    return val ?? path
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
