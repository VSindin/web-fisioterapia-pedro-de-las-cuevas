import {
  Activity, RefreshCw, Zap, Scan, Dumbbell, Shield,
} from 'lucide-react'
import { ESPECIALIDADES } from '@/constants'
import FadeIn from '@/components/FadeIn'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  'activity':    Activity,
  'refresh-cw':  RefreshCw,
  'zap':         Zap,
  'scan':        Scan,
  'dumbbell':    Dumbbell,
  'shield':      Shield,
}

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-heading"
      className="bg-surface py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Especialidades
          </p>
          <h2
            id="especialidades-heading"
            className="font-sans text-ink font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            Qué tratamos
          </h2>
          <p className="font-sans text-ink-muted text-base md:text-lg leading-relaxed">
            No todos los dolores son iguales. Cada caso tiene su historia y su protocolo.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ESPECIALIDADES.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 h-full flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {Icon && <Icon size={20} className="text-primary" aria-hidden />}
                  </div>
                  <h3 className="font-sans text-ink font-semibold text-base leading-snug">{item.title}</h3>
                  <p className="font-sans text-ink-muted text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
