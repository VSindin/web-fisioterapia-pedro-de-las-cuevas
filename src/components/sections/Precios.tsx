import { MessageCircle, Phone } from 'lucide-react'
import { PRECIOS, BUSINESS } from '@/constants'

export default function Precios() {
  return (
    <section
      id="precios"
      aria-labelledby="precios-heading"
      className="bg-surface py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="mb-10 md:mb-12 text-center max-w-xl mx-auto">
          <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">Tarifas</p>
          <h2
            id="precios-heading"
            className="font-sans text-ink font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            Sesiones individuales
          </h2>
          <p className="font-sans text-ink-muted text-base leading-relaxed">
            Atención individual y sin interrupciones, solo un paciente a la vez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {PRECIOS.map((plan) => (
            <div
              key={plan.label}
              className={`rounded-2xl p-8 flex flex-col gap-5 ${
                plan.highlighted
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                  : 'bg-white border border-border'
              }`}
            >
              {/* Price */}
              <div>
                <p
                  className={`font-sans font-bold leading-none mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-ink'
                  }`}
                  style={{ fontSize: 'clamp(2.8rem, 5vw, 3.5rem)' }}
                >
                  {plan.price}
                </p>
                <p className={`font-sans font-semibold text-lg ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                  {plan.label}
                  {plan.highlighted && <span className="text-sm font-normal ml-1">*</span>}
                </p>
              </div>

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed flex-1 ${plan.highlighted ? 'text-white/85' : 'text-ink-muted'}`}>
                {plan.description}
              </p>

              {/* Note */}
              {plan.note && (
                <p className={`font-sans text-xs ${plan.highlighted ? 'text-white/60' : 'text-ink-subtle'}`}>
                  {plan.note}
                </p>
              )}

              {/* CTA */}
              {plan.ctaType === 'whatsapp' ? (
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors min-h-[48px]"
                >
                  <MessageCircle size={16} aria-hidden />
                  {plan.ctaLabel}
                </a>
              ) : (
                <a
                  href={BUSINESS.phoneHref}
                  className={`inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors min-h-[48px] ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-slate-50'
                      : 'border border-border text-ink hover:bg-surface'
                  }`}
                >
                  <Phone size={16} aria-hidden />
                  {plan.ctaLabel}
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
