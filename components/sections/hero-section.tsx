'use client'

import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || '#register'

export function HeroSection() {
  const { t, language, localizeNumber } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-36"
      style={{
        background: 'linear-gradient(135deg, var(--saffron-light) 0%, var(--saffron) 50%, var(--saffron-dark) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom px-4 md:px-6 relative z-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            {/* Government Badge */}
            <div className="inline-flex items-center gap-2 bg-background/80 px-4 py-2 mb-6">
              {/* <span className="text-sm font-medium text-muted-foreground">
                {t.footer.governmentOf}
              </span> */}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-medium text-[var(--govt-orange)] mb-5">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-xl text-pretty">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[var(--govt-orange)] hover:bg-[var(--govt-orange-dark)] text-white px-8 py-6 text-lg font-semibold"
              >
                <Link href="#register">{t.hero.cta}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="#about">{t.common.learnMore}</Link>
              </Button>
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 bg-background/95 border-2 border-[var(--govt-orange)] p-6 text-center shadow-sm">
            <p className="text-lg font-semibold text-foreground mb-4">
              {t.registration.scanQR}
            </p>
            <div className="bg-white p-3 inline-block mb-4">
              <QRCodeSVG
                value={GOOGLE_FORM_URL}
                size={180}
                level="H"
                includeMargin={false}
                fgColor="#1A1A1A"
                bgColor="#FFFFFF"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t.registration.orClick}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-[var(--govt-orange)] hover:bg-[var(--govt-orange-dark)] text-white py-5 text-base font-semibold"
            >
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                {t.common.registerNow}
              </Link>
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem value={localizeNumber(15)} label={t.courses.days} />
          <StatItem value={localizeNumber(9)} label={t.courses.title.split(' ')[0]} />
          <StatItem value={localizeNumber(3)} label={t.centers.title.split(' ')[0]} />
          <StatItem value={localizeNumber(11)} label={language === 'en' ? 'Rs. Only' : 'ଟଙ୍କା'} prefix="" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

interface StatItemProps {
  value: string
  label: string
  prefix?: string
}

function StatItem({ value, label, prefix = '' }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-[var(--govt-orange)]">
        {prefix}{value}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  )
}
