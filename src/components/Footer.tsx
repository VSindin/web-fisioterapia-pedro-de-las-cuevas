'use client'

import { useRef, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '@/constants'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--footer-height', `${el.offsetHeight}px`)
    })
    ro.observe(el)
    document.documentElement.style.setProperty('--footer-height', `${el.offsetHeight}px`)
    return () => ro.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-0 bg-navy text-white min-h-[80vh] md:min-h-0"
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-10 md:pt-16 md:pb-12 flex flex-col min-h-[inherit]">

        {/* Nav + CTA — horizontal desktop, vertical mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8 mb-12 md:mb-16 flex-1">

          <nav
            aria-label="Secciones"
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-base md:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors min-h-[48px] shrink-0"
          >
            <MessageCircle size={16} aria-hidden />
            Pedir cita por WhatsApp
          </a>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-slate-600">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            {[
              { href: '/aviso-legal',         label: 'Aviso legal' },
              { href: '/politica-privacidad', label: 'Privacidad' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="font-sans text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
