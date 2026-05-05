'use client'

import { Building2, GraduationCap, Shield, IndianRupee } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'

const featureIcons = {
  residential: Building2,
  skills: GraduationCap,
  government: Shield,
  affordable: IndianRupee,
} as const

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    { key: 'residential', ...t.about.features.residential },
    { key: 'skills', ...t.about.features.skills },
    { key: 'government', ...t.about.features.government },
    { key: 'affordable', ...t.about.features.affordable },
  ] as const

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.about.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium mb-4">
            {t.about.subtitle}
          </p>
          <p className="text-muted-foreground text-pretty">
            {t.about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = featureIcons[feature.key as keyof typeof featureIcons]
            return (
              <Card key={feature.key} className="border border-border hover:border-[var(--govt-orange)]/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--saffron)] mb-4">
                    <Icon className="w-6 h-6 text-[var(--govt-orange)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
