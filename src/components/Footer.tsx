'use client'

import { useRef, useEffect } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react'
import { BUSINESS, SCHEDULE, NAV_LINKS } from '@/constants'

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
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-10 md:pt-12 md:pb-10">

        {/* Brand */}
        <div className="mb-8 md:mb-10">
          <p className="font-sans font-bold text-xl text-white mb-1">{BUSINESS.shortName}</p>
          <p className="font-sans text-slate-400 text-sm">Fisioterapia · Tres Cantos, Madrid</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Contacto</h3>
            <ul className="space-y-3">
              {[
                { href: BUSINESS.phoneHref,     Icon: Phone,         label: BUSINESS.phone },
                { href: BUSINESS.whatsappHref,  Icon: MessageCircle, label: 'WhatsApp', external: true },
                { href: BUSINESS.emailHref,     Icon: Mail,          label: BUSINESS.email },
                { href: BUSINESS.googleMapsUrl, Icon: MapPin,        label: BUSINESS.address.full, external: true },
              ].map(({ href, Icon, label, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors font-sans text-sm"
                  >
                    <Icon size={14} aria-hidden className="shrink-0 text-primary mt-0.5" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4 flex items-center gap-2">
              <Clock size={12} aria-hidden />
              Horario
            </h3>
            <ul className="space-y-1.5">
              {SCHEDULE.map((s) => (
                <li key={s.day} className="flex justify-between gap-4 font-sans text-sm">
                  <span className={s.closed ? 'text-slate-600' : 'text-slate-400'}>{s.day}</span>
                  <span className={s.closed ? 'text-slate-600' : 'text-white/80 tabular-nums'}>{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + CTA */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Secciones</h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="font-sans text-sm text-slate-400 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} aria-hidden />
              Pedir cita por WhatsApp
            </a>
          </div>
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
