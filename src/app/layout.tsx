import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ShowcaseErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AquaScene - Premium Aquascaping Solutions',
  description: 'Professional aquascaping business offering premium aquarium design, maintenance, and aquatic products. Partner with us for exceptional aquatic experiences.',
  keywords: 'aquascaping, aquarium design, aquatic plants, fish tank, aquarium maintenance, Green Aqua',
  authors: [{ name: 'AquaScene Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AquaScene - Premium Aquascaping Solutions',
    description: 'Professional aquascaping business offering premium aquarium design, maintenance, and aquatic products.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ShowcaseErrorBoundary>
          {children}
        </ShowcaseErrorBoundary>
      </body>
    </html>
  )
}