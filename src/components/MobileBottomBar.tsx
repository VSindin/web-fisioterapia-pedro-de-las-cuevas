import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/constants'

export default function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={BUSINESS.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white font-sans font-semibold text-sm min-h-[56px] hover:bg-slate-700 transition-colors"
      >
        <Phone size={18} aria-hidden />
        Llamar
      </a>
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm min-h-[56px] transition-colors"
      >
        <MessageCircle size={18} aria-hidden />
        WhatsApp
      </a>
    </div>
  )
}
