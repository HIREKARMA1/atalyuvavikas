import en from './en.json'
import od from './od.json'

export type Language = 'en' | 'od'

export const translations = {
  en,
  od,
} as const

export type Translations = typeof en

export function getTranslation(lang: Language): Translations {
  return translations[lang]
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  od: 'ଓଡ଼ିଆ',
}

export const defaultLanguage: Language = 'en'
