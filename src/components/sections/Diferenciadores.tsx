import { Search, UserCheck, Dumbbell, Clock } from 'lucide-react'
import { DIFERENCIADORES } from '@/constants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  'search':     Search,
  'user-check': UserCheck,
  'dumbbell':   Dumbbell,
  'clock':      Clock,
}

export default function Diferenciadores() {
  return (
    <section aria-label="Por qué elegirnos" className="bg-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DIFERENCIADORES.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  {Icon && <Icon size={18} className="text-white" aria-hidden />}
                </div>
                <div>
                  <p className="font-sans font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
