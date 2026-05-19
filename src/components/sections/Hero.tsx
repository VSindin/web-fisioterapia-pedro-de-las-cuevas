import Image from 'next/image'
import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '@/constants'

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} estrellas`}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} width={14} height={14} viewBox="0 0 14 14" fill="#f59e0b" aria-hidden>
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 8.885l-3.09 1.625.59-3.44L2 4.631l3.455-.502z" />
        </svg>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex items-end md:items-center pt-20 pb-16 md:pb-24"
      style={{ minHeight: '100svh' }}
    >
      {/* Background image */}
      <Image
        src="/images/imagen-hero-fisioterapia-pedro-de-las-cuevas.jpg"
        alt="Clínica de fisioterapia Pedro de las Cuevas en Tres Cantos"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay — stronger on left, fades right so photo breathes */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(5,15,40,0.90) 40%, rgba(5,15,40,0.52) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 w-full">
        <div className="max-w-lg">

          {/* Eyebrow */}
          <p className="hero-eyebrow font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-7" style={{ color: 'rgba(186,230,255,0.75)' }}>
            Fisioterapia deportiva · Tres Cantos, Madrid
          </p>

          {/* H1 — logo-style typographic treatment */}
          <h1 id="hero-heading" className="hero-title mb-8">
            <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.22)' }} />

            <span
              className="block font-sans font-light uppercase"
              style={{
                fontSize: 'clamp(0.9rem, 1.75vw, 1.25rem)',
                color: '#bae6fd',
                letterSpacing: '0.3em',
              }}
            >
              Pedro de las Cuevas
            </span>

            <div className="h-px my-4" style={{ background: 'rgba(255,255,255,0.18)' }} />

            <span
              className="block font-sans font-black uppercase leading-none text-white"
              style={{
                fontSize: 'clamp(2.55rem, 5.6vw, 4.4rem)',
                letterSpacing: '0.06em',
              }}
            >
              Fisioterapia
            </span>

            <span
              className="block font-sans font-medium uppercase mt-2"
              style={{
                fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.2em',
              }}
            >
              Tres Cantos · Madrid
            </span>
          </h1>

          {/* Description */}
          <p className="hero-sub font-sans leading-relaxed mb-9 max-w-sm" style={{ color: 'rgba(148,163,184,0.9)', fontSize: '1.0625rem' }}>
            Diagnóstico preciso, terapia manual y ejercicios personalizados para deportistas y familias de Tres Cantos.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-base px-6 py-4 rounded-2xl transition-colors min-h-[56px]"
            >
              <MessageCircle size={20} aria-hidden />
              Pedir cita por WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 font-sans font-semibold text-base px-6 py-4 rounded-2xl transition-colors min-h-[56px]"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            >
              <Phone size={20} aria-hidden />
              Llamar
            </a>
          </div>

          {/* Social proof */}
          <div className="hero-badge flex items-center gap-3">
            <Stars />
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-colors"
              style={{ color: '#64748b' }}
            >
              <span className="font-semibold text-white">{BUSINESS.rating}</span>
              {' '}· {BUSINESS.reviewCount} reseñas verificadas en Google
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
