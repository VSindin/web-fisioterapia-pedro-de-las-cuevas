import { ReactNode } from 'react'

import { CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
  style?: CSSProperties
}

export default function FadeIn({ children, className, style }: FadeInProps) {
  return <div className={className} style={style}>{children}</div>
}
