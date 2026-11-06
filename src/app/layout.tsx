import type { Metadata, Viewport } from 'next'
import { Libre_Franklin, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BASE_URL, ogImage, site } from '@/lib/site'

const display = Libre_Franklin({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-libre-franklin', display: 'swap' })
const body = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', display: 'swap' })

export const viewport: Viewport = { themeColor: '#000000' }

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'AC Repair & Installation in Lockport, LA | Premium Air', template: '%s | Premium Air' },
  description: 'Premium Air Services handles AC repair, installation, heating and maintenance for homes in Lockport and across Lafourche and Terrebonne. Call to schedule.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: { type: 'website', locale: 'en_US', url: BASE_URL, siteName: site.name, images: [ogImage] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
