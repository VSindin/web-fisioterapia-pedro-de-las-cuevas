import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '@/constants'

interface CtaBannerProps {
  text?: string
}

export default function CtaBanner({
  text = '¿Listo para empezar? Pide tu primera consulta hoy.',
}: CtaBannerProps) {
  return (
    <div className="bg-white border-y border-border py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-sans font-semibold text-ink text-base md:text-lg text-center sm:text-left">
          {text}
        </p>
        <div className="flex gap-3 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 border border-border text-ink font-sans font-semibold text-sm px-4 py-3 rounded-xl hover:bg-surface transition-colors min-h-[48px]"
          >
            <Phone size={15} aria-hidden />
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-4 py-3 rounded-xl transition-colors min-h-[48px]"
          >
            <MessageCircle size={15} aria-hidden />
            Pedir cita
          </a>
        </div>
      </div>
    </div>
  )
}
