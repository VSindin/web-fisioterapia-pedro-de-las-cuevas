'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { BUSINESS, NAV_LINKS, IMAGES } from '@/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center ring-1 ring-slate-200">
            <Image
              src={IMAGES.logo}
              alt={BUSINESS.name}
              width={40}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>
          <span className={`font-sans font-semibold text-[15px] leading-tight transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
            Pedro de las Cuevas<br />
            <span className="text-xs font-normal text-ink-muted">Fisioterapia · Tres Cantos</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg font-sans text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink-muted hover:text-ink hover:bg-surface'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop phone + CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className={`flex items-center gap-1.5 font-sans text-sm font-medium transition-colors ${
              scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/75 hover:text-white'
            }`}
          >
            <Phone size={14} aria-hidden />
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors min-h-[44px]"
          >
            <MessageCircle size={16} aria-hidden />
            Pedir cita
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-ink hover:bg-surface' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-sans text-base font-medium text-ink-muted hover:text-ink hover:bg-surface transition-colors min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 border border-slate-200 text-ink font-sans font-semibold text-sm px-4 py-3 rounded-xl hover:bg-surface transition-colors min-h-[48px]"
              >
                <Phone size={16} aria-hidden />
                Llamar
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white font-sans font-semibold text-sm px-4 py-3 rounded-xl hover:bg-primary-dark transition-colors min-h-[48px]"
              >
                <MessageCircle size={16} aria-hidden />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
