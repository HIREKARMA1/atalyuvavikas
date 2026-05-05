'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import config from '@/data/config.json'

export function MinisterSection() {
  const { t, language } = useLanguage()
  const ministerPhoto = config.minister.photo

  return (
    <section className="section-padding bg-[var(--saffron-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t.minister.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium mt-4">
            {t.minister.subtitle}
          </p>
        </div>

        {/* Minister Card */}
        <Card className="max-w-4xl mx-auto border border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="md:w-1/3 bg-[var(--saffron)]">
                {ministerPhoto !== 'PLACEHOLDER_S3_URL_MINISTER' ? (
                  <div className="relative aspect-[3/4] md:h-full">
                    <Image
                      src={ministerPhoto}
                      alt={config.minister.name[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] md:h-full flex items-center justify-center bg-[var(--saffron)]">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 bg-[var(--govt-orange)]/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl text-[var(--govt-orange)]">
                          {config.minister.name[language].charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Photo Coming Soon' : 'ଫଟୋ ଶୀଘ୍ର ଆସୁଛି'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quote */}
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center bg-background">
                <Quote className="w-10 h-10 text-[var(--govt-orange)]/30 mb-4" />

                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 text-pretty">
                  {t.minister.quote}
                </blockquote>

                <div className="border-l-4 border-[var(--govt-orange)] pl-4">
                  <p className="font-semibold text-foreground">
                    {config.minister.name[language]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.minister.designation}, {config.minister.designation[language]}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
