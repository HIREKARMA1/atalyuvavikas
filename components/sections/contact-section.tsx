'use client'

import { Phone, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import config from '@/data/config.json'

export function ContactSection() {
  const { t } = useLanguage()
  const whatsappUrl = `https://wa.me/${config.program.contact.whatsapp}`

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone.title,
      value: t.contact.phone.value,
      href: `tel:${config.program.contact.phone}`,
    },
    {
      icon: MapPin,
      title: t.contact.address.title,
      value: t.contact.address.value,
      href: null,
    },
    {
      icon: Clock,
      title: t.contact.timing.title,
      value: t.contact.timing.value,
      href: null,
    },
  ]

  return (
    <section id="contact" className="section-padding bg-[var(--saffron-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border border-border text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--saffron)] mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--govt-orange)]" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg font-semibold text-foreground hover:text-[var(--govt-orange)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-foreground">
                    {item.value}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.simpleicons.org/whatsapp/ffffff"
                alt="WhatsApp"
                className="w-5 h-5 mr-2 inline-block"
              />
              {t.contact.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
