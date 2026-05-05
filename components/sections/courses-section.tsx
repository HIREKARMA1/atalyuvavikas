'use client'

import { 
  MessageCircle, 
  Monitor, 
  Heart, 
  BookOpen, 
  Shield, 
  Music, 
  Mic, 
  Cross, 
  HeartPulse 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import coursesData from '@/data/courses.json'

const iconMap = {
  MessageCircle,
  Monitor,
  Heart,
  BookOpen,
  Shield,
  Music,
  Mic,
  Cross,
  HeartPulse,
} as const

export function CoursesSection() {
  const { t, language, localizeNumber } = useLanguage()

  return (
    <section id="courses" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.courses.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium">
            {t.courses.subtitle}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.courses.map((course) => {
            const Icon = iconMap[course.icon as keyof typeof iconMap]
            return (
              <Card 
                key={course.id} 
                className="border border-border hover:border-[var(--govt-orange)]/30 transition-colors group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--saffron)] group-hover:bg-[var(--govt-orange)] transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-[var(--govt-orange)] group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {course.name[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {course.description[language]}
                      </p>
                      <p className="text-xs text-[var(--govt-orange)] font-medium">
                        {t.courses.duration}: {localizeNumber(course.duration)} {t.courses.days}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
