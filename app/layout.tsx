import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Oriya } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansOriya = Noto_Sans_Oriya({
  subsets: ['oriya'],
  variable: '--font-noto-sans-oriya',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Atal Yuva Vikas 2026 | 15-Day Summer Talent Program',
  description: 'Join the Atal Yuva Vikas 2026 Summer Talent Residential Program. A Government of Odisha initiative for skill development, discipline, and personality building. Register now for just Rs. 11.',
  keywords: ['Atal Yuva Vikas', 'Summer Program', 'Youth Development', 'Odisha', 'Skill Training', 'Ganjam', 'Government Initiative'],
  authors: [{ name: 'Government of Odisha' }],
  openGraph: {
    title: 'Atal Yuva Vikas 2026 | Summer Talent Program',
    description: '15-Day Residential Summer Talent Program for Youth Development',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Atal Yuva Vikas 2026',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6B00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansOriya.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
