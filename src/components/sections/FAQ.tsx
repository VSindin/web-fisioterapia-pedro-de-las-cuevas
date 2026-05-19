'use client'

import { useState } from 'react'
import { MessageCircle, Plus } from 'lucide-react'
import { FAQ_ITEMS, BUSINESS } from '@/constants'
import FadeIn from '@/components/FadeIn'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-12 md:gap-20 items-start">

          {/* Left — sticky heading */}
          <FadeIn className="md:sticky md:top-28">
            <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">FAQ</p>
            <h2
              id="faq-heading"
              className="font-sans text-ink font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
            >
              Preguntas<br />frecuentes
            </h2>
            <p className="font-sans text-ink-muted text-base leading-relaxed mb-8">
              ¿Tienes dudas que no están aquí? Escríbeme y te respondo en menos de 24 horas.
            </p>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-2xl transition-colors min-h-[48px]"
            >
              <MessageCircle size={17} aria-hidden />
              Preguntar por WhatsApp
            </a>
          </FadeIn>

          {/* Right — accordion */}
          <div className="divide-y divide-border">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-start justify-between gap-5 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-sans font-semibold leading-snug transition-colors ${
                          isOpen ? 'text-primary' : 'text-ink group-hover:text-primary-dark'
                        }`}
                        style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                          isOpen
                            ? 'bg-primary border-primary text-white rotate-45'
                            : 'border-border text-ink-subtle group-hover:border-primary/40'
                        }`}
                        aria-hidden
                      >
                        <Plus size={14} />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-ink-muted text-base leading-relaxed pb-5">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
