import { Phone, MapPin, MessageCircle, Clock, Mail } from 'lucide-react'
import { BUSINESS, SCHEDULE } from '@/constants'
import FadeIn from '@/components/FadeIn'

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="bg-surface py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-14 max-w-xl">
          <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">Contacto</p>
          <h2
            id="contacto-heading"
            className="font-sans text-ink font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            Estamos en Tres Cantos
          </h2>
          <p className="font-sans text-ink-muted text-base leading-relaxed">
            Pide cita por WhatsApp y te responderemos en menos de 24 horas.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Left — CTAs + info */}
          <FadeIn direction="right" className="flex flex-col gap-4">

            {/* WhatsApp */}
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-primary hover:bg-primary-dark rounded-2xl p-5 group transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={22} className="text-white" aria-hidden />
              </div>
              <div>
                <p className="font-sans text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5">Más rápido</p>
                <p className="font-sans text-white font-semibold text-base">Pedir cita por WhatsApp</p>
                <p className="font-sans text-white/60 text-xs mt-0.5">Respuesta en menos de 24 h</p>
              </div>
              <span className="ml-auto font-sans text-white/50 text-lg group-hover:text-white/80 transition-colors" aria-hidden>→</span>
            </a>

            {/* Phone */}
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-4 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm p-5 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" aria-hidden />
              </div>
              <div>
                <p className="font-sans text-ink-muted text-xs font-semibold uppercase tracking-widest mb-0.5">Teléfono</p>
                <p className="font-sans text-ink font-semibold text-base">{BUSINESS.phone}</p>
              </div>
              <span className="ml-auto font-sans text-ink-subtle text-lg group-hover:text-ink transition-colors" aria-hidden>→</span>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white rounded-2xl border border-border p-5">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-secondary" aria-hidden />
              </div>
              <div>
                <p className="font-sans text-ink-muted text-xs font-semibold uppercase tracking-widest mb-1">Dirección</p>
                <p className="font-sans text-ink font-semibold text-sm">{BUSINESS.address.street}</p>
                <p className="font-sans text-ink-muted text-sm">{BUSINESS.address.zip} {BUSINESS.address.city}, {BUSINESS.address.province}</p>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-primary text-xs font-medium hover:underline mt-2 inline-block"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-primary" aria-hidden />
                </div>
                <p className="font-sans text-ink font-semibold text-sm">Horario</p>
              </div>
              <div className="space-y-1.5">
                {SCHEDULE.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4 text-sm">
                    <span className={`font-sans ${item.closed ? 'text-ink-subtle' : 'text-ink-muted'}`}>{item.day}</span>
                    <span className={`font-sans tabular-nums text-right ${item.closed ? 'text-ink-subtle' : 'text-ink font-medium'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <a
              href={BUSINESS.emailHref}
              className="flex items-center gap-3 font-sans text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Mail size={16} className="text-ink-subtle shrink-0" aria-hidden />
              {BUSINESS.email}
            </a>
          </FadeIn>

          {/* Right — Map */}
          <FadeIn direction="left" className="min-h-[400px] md:min-h-0">
            <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-full min-h-[400px]">
              <iframe
                src={`https://maps.google.com/maps?q=${BUSINESS.geo.lat},${BUSINESS.geo.lng}&z=15&output=embed&hl=es`}
                className="w-full h-full min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Pedro de las Cuevas Fisioterapia en Tres Cantos"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
