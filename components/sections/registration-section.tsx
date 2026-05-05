'use client'

import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'
import { IndianRupee, Globe, Users, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'

// Use environment variable for Google Form URL
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL

export function RegistrationSection() {
  const { t, localizeNumber } = useLanguage()

  const registrationInfo = [
    { icon: IndianRupee, label: t.registration.fee, value: t.registration.feeAmount },
    { icon: Globe, label: t.registration.mode, value: t.registration.modeValue },
    { icon: Users, label: t.registration.seats, value: t.registration.seatsValue },
    { icon: Calendar, label: t.registration.deadline, value: t.registration.deadlineValue },
  ]

  const steps = [
    t.registration.instructions.step1,
    t.registration.instructions.step2,
    t.registration.instructions.step3,
    t.registration.instructions.step4,
    t.registration.instructions.step5,
  ]

  return (
    <section id="register" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.registration.title}
          </h2>
          <p className="text-lg text-[var(--govt-orange)] font-medium">
            {t.registration.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Registration Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {registrationInfo.map((item, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-[var(--saffron)]">
                        <item.icon className="w-5 h-5 text-[var(--govt-orange)]" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Instructions */}
            <Card className="border border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">
                  {t.registration.instructions.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 flex items-center justify-center bg-[var(--govt-orange)] text-white text-xs font-semibold shrink-0">
                        {localizeNumber(index + 1)}
                      </span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Right - QR Code */}
          <div className="flex flex-col items-center justify-center">
            <Card className="border-2 border-[var(--govt-orange)] w-full max-w-sm">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-semibold text-foreground mb-6">
                  {t.registration.scanQR}
                </p>

                {/* QR Code */}
                <div className="bg-white p-4 inline-block mb-6">
                  <QRCodeSVG
                    value={GOOGLE_FORM_URL}
                    size={200}
                    level="H"
                    includeMargin={false}
                    fgColor="#1A1A1A"
                    bgColor="#FFFFFF"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {t.registration.orClick}
                </p>

                {/* Register Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[var(--govt-orange)] hover:bg-[var(--govt-orange-dark)] text-white py-6 text-lg font-semibold"
                >
                  <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    {t.common.registerNow}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm">
                {t.footer.governmentOf}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
