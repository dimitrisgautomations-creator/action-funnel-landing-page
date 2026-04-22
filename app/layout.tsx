import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnimatedGradientBackground } from '@/components/background/animated-gradient'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vane & Co. Wealth Management | Fee-Only Financial Advisory',
  description: 'Boutique fee-only wealth management for clients with $250K–$5M portfolios. Personalized tax planning, estate strategies, and fiduciary advice from Julian Vane, CFA, CFP.',
  keywords: ['wealth management', 'financial advisor', 'fee-only', 'fiduciary', 'tax planning', 'estate planning'],
  authors: [{ name: 'Vane & Co. Wealth Management' }],
  openGraph: {
    title: 'Vane & Co. Wealth Management',
    description: 'Fee-only fiduciary wealth management for high-net-worth families.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vane & Co. Wealth Management',
    description: 'Fee-only fiduciary wealth management for high-net-worth families.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased bg-background text-foreground">
        <AnimatedGradientBackground />
        {children}
        <SpeedInsights />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
