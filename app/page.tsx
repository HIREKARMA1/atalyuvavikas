import { Header, Footer, WhatsAppButton } from '@/components/layout'
import {
  HeroSection,
  AboutSection,
  CentersSection,
  CoursesSection,
  MinisterSection,
  RegistrationSection,
  ContactSection,
} from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <MinisterSection />
        <CoursesSection />
        <CentersSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  )
}
