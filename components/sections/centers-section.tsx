'use client'

import { MapPin, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import centersData from '@/data/centers.json'

export function CentersSection() {
  const { t, language, localizeNumber } = useLanguage()

  return (
    <section id="centers" className="section-padding bg-[var(--saffron-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.centers.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium">
            {t.centers.subtitle}
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {centersData.centers.map((center, index) => (
            <Card key={center.id} className="bg-background border border-border overflow-hidden">
              {/* Center Number Badge */}
              <div className="bg-[var(--govt-orange)] text-white px-4 py-2">
                <span className="text-sm font-semibold">
                  {language === 'en' ? `Center ${localizeNumber(index + 1)}` : `କେନ୍ଦ୍ର ${localizeNumber(index + 1)}`}
                </span>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                  {center.name[language]}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[var(--govt-orange)] mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {center.location[language]}
                  </span>
                </div>
                
                {/* Capacity */}
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[var(--govt-orange)] shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? `Capacity: ${localizeNumber(center.capacity)} students` 
                      : `ଧାରଣ କ୍ଷମତା: ${localizeNumber(center.capacity)} ଛାତ୍ର`
                    }
                  </span>
                </div>

                {/* Facilities */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">
                    {language === 'en' ? 'Facilities' : 'ସୁବିଧା'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {center.facilities[language].map((facility) => (
                      <span
                        key={facility}
                        className="inline-block px-2 py-1 text-xs bg-[var(--saffron)] text-foreground"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.centers.selectCenter}
        </p>
      </div>
    </section>
  )
}
