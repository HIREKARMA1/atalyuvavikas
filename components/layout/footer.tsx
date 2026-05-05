'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import config from '@/data/config.json'

const quickLinks = [
  { key: 'about', href: '#about' },
  { key: 'centers', href: '#centers' },
  { key: 'courses', href: '#courses' },
  { key: 'register', href: '#register' },
  { key: 'contact', href: '#contact' },
] as const

export function Footer() {
  const { t } = useLanguage()
  const footerLogoUrl = config.program.images.footerLogo || config.program.images.logo
  const poweredBy = config.program.poweredBy

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              {footerLogoUrl !== 'PLACEHOLDER_S3_URL_LOGO' && (
                <img
                  src={footerLogoUrl}
                  alt="Logo"
                  className="h-14 w-auto shrink-0"
                />
              )}
              <div className="leading-tight">
                <h3 className="text-lg md:text-2xl font-semibold">{t.header.title}</h3>
                <p className="text-sm md:text-lg font-semibold text-background/80">
                  {t.footer.governmentOf}
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4 max-w-md">
              {t.hero.description}
            </p>
            <p className="text-background/70 text-sm">
              {t.contact.address.value}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="block text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t.header[link.key as keyof typeof t.header]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>{t.contact.phone.title}: {t.contact.phone.value}</p>
              <p>{t.contact.address.title}: {t.contact.address.value}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-sm text-background/60">
            {t.footer.copyright}
          </p>
          {poweredBy?.name && poweredBy?.url && (
            <p className="text-center text-sm text-background/60 mt-2">
              {t.footer.poweredBy}{' '}
              <Link
                href={poweredBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background underline underline-offset-2 transition-colors"
              >
                {poweredBy.name}
              </Link>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
