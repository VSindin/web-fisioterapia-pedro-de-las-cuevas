import Image from 'next/image'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { ABOUT, BUSINESS, IMAGES } from '@/constants'
import FadeIn from '@/components/FadeIn'

const CREDENCIALES = [
  'Fisioterapeuta colegiado',
  'Especialista en fisioterapia deportiva',
  'Ecografía diagnóstica musculoesquelética',
  'Readaptación funcional al deporte',
]

export default function SobrePedro() {
  return (
    <section
      id="sobre-pedro"
      aria-labelledby="sobre-pedro-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-6 pb-8 md:pb-10">

          {/* Images — portrait base with overlays */}
          <FadeIn direction="right" className="relative mx-auto md:mx-0" style={{ width: '100%', maxWidth: '300px' }}>

            {/* Portrait — base image */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <Image
                src={IMAGES.pedroPerfil}
                alt="Pedro de las Cuevas, fisioterapeuta en Tres Cantos"
                fill
                sizes="(max-width: 768px) 300px, 300px"
                className="object-cover object-top"
              />
            </div>

            {/* Rating badge — top-left overlay */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-2.5"
              style={{ zIndex: 10 }}
            >
              <div>
                <p className="font-sans text-2xl font-bold text-ink leading-none">5.0</p>
                <p className="font-sans text-xs text-ink-muted mt-0.5">{BUSINESS.reviewCount} reseñas ★</p>
              </div>
            </div>

            {/* Working photo — bottom-right overlay */}
            <div
              className="absolute -bottom-6 -right-6 w-[42%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white"
              style={{ zIndex: 10 }}
            >
              <Image
                src={IMAGES.pedroEcografo}
                alt="Pedro de las Cuevas usando ecógrafo"
                fill
                sizes="200px"
                className="object-cover object-center"
              />
            </div>

          </FadeIn>

          {/* Bio */}
          <div className="flex flex-col gap-6 md:pl-4">
            <FadeIn>
              <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-1">
                Sobre Pedro
              </p>
              <h2
                id="sobre-pedro-heading"
                className="font-sans text-ink font-bold leading-tight"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
              >
                Pedro de las Cuevas
              </h2>
              <p className="font-sans text-ink-muted text-sm mt-1">
                Fisioterapeuta · Tres Cantos, Madrid
              </p>
            </FadeIn>

            {ABOUT.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.08 + i * 0.08}>
                <p className="font-sans text-ink-muted text-base md:text-[17px] leading-relaxed">{p}</p>
              </FadeIn>
            ))}

            {/* Credentials */}
            <FadeIn delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {CREDENCIALES.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 font-sans text-sm text-ink-muted">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.38}>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-2xl transition-colors min-h-[48px] self-start"
              >
                <MessageCircle size={17} aria-hidden />
                Reservar primera consulta
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
