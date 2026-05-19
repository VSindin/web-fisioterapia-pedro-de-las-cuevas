import { TESTIMONIOS, BUSINESS } from '@/constants'
import FadeIn from '@/components/FadeIn'

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} estrellas`}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} width={13} height={13} viewBox="0 0 14 14" fill="#f59e0b" aria-hidden>
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 8.885l-3.09 1.625.59-3.44L2 4.631l3.455-.502z" />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonios() {
  const [featured, ...rest] = TESTIMONIOS

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="bg-surface py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">Testimonios</p>
            <h2
              id="testimonios-heading"
              className="font-sans text-ink font-bold leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
            >
              Lo que dicen<br />los pacientes
            </h2>
          </div>
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-ink-muted hover:text-ink transition-colors self-start md:self-auto whitespace-nowrap"
          >
            <span className="font-semibold text-ink">{BUSINESS.rating} ★</span>
            {' '}· {BUSINESS.reviewCount} reseñas en Google →
          </a>
        </FadeIn>

        {/* Featured testimonial */}
        <FadeIn className="mb-5">
          <blockquote className="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-sans font-bold text-primary text-base">{featured.name[0]}</span>
              </div>
              <div>
                <p className="font-sans text-ink font-semibold text-base">{featured.name}</p>
                <p className="font-sans text-ink-subtle text-sm mt-0.5">{featured.timeAgo}</p>
              </div>
              <Stars n={featured.stars} />
            </div>
            <p
              className="font-sans text-ink-muted leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>
          </blockquote>
        </FadeIn>

        {/* Grid of remaining reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((t, i) => (
            <FadeIn key={t.name} delay={0.05 + i * 0.06}>
              <blockquote className="bg-white rounded-2xl border border-border p-5 flex flex-col gap-3 h-full hover:shadow-md hover:border-primary/20 transition-all duration-200">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-sans font-semibold text-primary text-xs">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-sans text-ink font-semibold text-sm leading-tight">{t.name}</p>
                      <p className="font-sans text-ink-subtle text-xs">{t.timeAgo}</p>
                    </div>
                  </div>
                  <Stars n={t.stars} />
                </div>
                <p className="font-sans text-ink-muted text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          ))}
        </div>

        {/* Link */}
        <FadeIn delay={0.3} className="mt-8 text-center">
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Ver todas las reseñas en Google Maps →
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
