'use client'

import config from '@/data/config.json'

export function WhatsAppButton() {
  const whatsappNumber = config.program.contact.whatsapp
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg transition-colors"
      aria-label="Contact on WhatsApp"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/ffffff"
        alt="WhatsApp"
        className="h-7 w-7"
      />
    </a>
  )
}
