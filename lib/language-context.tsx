'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { type Language, getTranslation, defaultLanguage, type Translations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  localizeNumber: (value: number | string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const LANGUAGE_STORAGE_KEY = 'atal-yuva-vikas-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const t = getTranslation(language)
  const localizeNumber = useCallback((value: number | string) => {
    const text = String(value)
    if (language !== 'od') {
      return text
    }

    const odiaDigits = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯']
    return text.replace(/\d/g, (digit) => odiaDigits[Number(digit)])
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    }
  }, [])

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (storedLanguage === 'en' || storedLanguage === 'od') {
      setLanguageState(storedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localizeNumber }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
