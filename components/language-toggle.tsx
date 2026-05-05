'use client'

import { useLanguage } from '@/lib/language-context'
import { languageNames, type Language } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'od' : 'en'
    setLanguage(newLang)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="min-w-[80px] font-medium"
    >
      {language === 'en' ? languageNames.od : languageNames.en}
    </Button>
  )
}
