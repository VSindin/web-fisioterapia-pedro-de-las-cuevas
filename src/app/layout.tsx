import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { BUSINESS, IMAGES } from '@/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Fisioterapeuta en Tres Cantos`,
  description: 'Fisioterapia deportiva y rehabilitación en Tres Cantos, Madrid. Especialistas en lesiones deportivas, dolor lumbar y ecografía diagnóstica. Pide cita por WhatsApp.',
  keywords: 'fisioterapeuta Tres Cantos, fisioterapia deportiva Madrid, rehabilitación lesiones, fisioterapeuta Pedro de las Cuevas',
  openGraph: {
    title: `${BUSINESS.name} | Fisioterapeuta en Tres Cantos`,
    description: 'Fisioterapia deportiva y rehabilitación en Tres Cantos, Madrid.',
    type: 'website',
    locale: 'es_ES',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physiotherapist',
  name: BUSINESS.name,
  image: IMAGES.heroMasaje,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.province,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday'], opens: '12:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday'], opens: '12:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday'], opens: '12:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '16:00', closes: '21:00' },
  ],
  priceRange: BUSINESS.priceRange,
  url: 'https://pedrofisioterapia.es',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main
          className="relative z-10 bg-white"
          style={{ marginBottom: 'var(--footer-height, 500px)' }}
        >
          {children}
        </main>
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  )
}
