'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import config from '@/data/config.json'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'centers', href: '#centers' },
  { key: 'courses', href: '#courses' },
  { key: 'register', href: '#register' },
  { key: 'contact', href: '#contact' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()
  // const navbarLogoUrl = config.program.images.logo
  const ministerPhoto = config.minister.photo

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="bg-neutral-800 text-neutral-100">
        <div className="container-custom h-8 px-4 md:px-6 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            {/* <span className="font-medium tracking-wide">Government of Odisha</span>
            <span className="hidden sm:inline text-neutral-300">ଓଡ଼ିଶା ସରକାର</span> */}
          </div>
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'od' : 'en')}
            className="inline-flex items-center rounded-full border border-neutral-600 px-2.5 py-0.5 text-[11px] font-medium hover:border-white hover:bg-neutral-700"
          >
            {language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}
          </button>
        </div>
      </div>

      <div className="bg-[var(--govt-orange)]">
        <div className="container-custom h-24 px-4 md:px-6 flex items-center justify-between gap-3">
          {/* Logo / Title */}
          <Link href="#home" className="flex items-center gap-3 min-w-0">
            {/* {navbarLogoUrl !== 'PLACEHOLDER_S3_URL_LOGO' && (
              <img
                src={navbarLogoUrl}
                alt="Logo"
                className="h-14 md:h-20 w-auto shrink-0"
              />
            )} */}
            <div className="leading-tight min-w-0">
              <p className="text-base md:text-2xl font-bold text-white truncate">
                {t.header.title}
              </p>
              {/* <p className="text-[11px] md:text-sm font-semibold text-orange-100 truncate">
                {t.header.government}
              </p> */}
            </div>
          </Link>

          {/* Desktop Minister Block */}
          <div className="hidden md:flex items-center gap-3 min-w-0">
            <div className="text-right min-w-0">
              <p className="text-base md:text-xl font-bold text-white truncate">
                {config.minister.name[language]}
              </p>
              <p className="text-xs md:text-sm font-semibold text-orange-100 truncate">
                {t.minister.designation}, {config.minister.designation[language]}
              </p>
            </div>
            {ministerPhoto !== 'PLACEHOLDER_S3_URL_MINISTER' && (
              <img
                src={ministerPhoto}
                alt={config.minister.name[language]}
                className="h-16 w-14 md:h-24 md:w-20 object-cover rounded-sm shrink-0"
              />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-[var(--govt-orange)]">
            <div className="px-4 py-4 space-y-2">
              {/* {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {t.header[item.key as keyof typeof t.header]}
                </Link>
              ))} */}

              <div className="pt-3 mt-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {config.minister.name[language]}
                  </p>
                  <p className="text-xs text-orange-100 truncate">
                    {t.minister.designation}
                  </p>
                </div>
                {ministerPhoto !== 'PLACEHOLDER_S3_URL_MINISTER' && (
                  <img
                    src={ministerPhoto}
                    alt={config.minister.name[language]}
                    className="h-16 w-14 object-cover rounded-sm shrink-0"
                  />
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
