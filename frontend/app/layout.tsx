import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/navbar"
import { SmoothScroll } from "@/components/smooth-scroll"

import AOSInitializer from "@/components/AOSInitializer"
import { UniversalCTA } from "@/components/universal-cta"
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atlantic Quest & Reality | Jobs, Travel & Recruitment",
  description: "Atlantic Quest & Reality (AQR) connects East African talent with global opportunities. Ethical recruitment, unforgettable tours, and trusted travel services.",
  generator: 'Next.js',
  metadataBase: new URL('https://atlantisquestandreality.com'),
  alternates: {
    canonical: 'https://atlantisquestandreality.com',
  },
  openGraph: {
    title: 'Atlantic Quest & Reality | Jobs, Travel & Recruitment',
    description: 'Atlantic Quest & Reality (AQR) connects East African talent with global opportunities. Ethical recruitment, unforgettable tours, and trusted travel services.',
    url: 'https://atlantisquestandreality.com',
    siteName: 'Atlantic Quest & Reality',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Atlantic Quest & Reality Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '64x64', url: '/favicon-64x64.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/android-chrome-512x512.png' },
    { rel: 'manifest', url: '/site.webmanifest' },
    { rel: 'sitemap', url: '/sitemap.xml' },
    { rel: 'robots', url: '/robots.txt' },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">

      <body className="min-h-screen bg-white font-sans antialiased">
        <AOSInitializer />
        <SmoothScroll>
          <Navbar />
          <main className="bg-white">
            {children}
          </main>
          {/* <Footer /> */}
          <Toaster />
          {/* <UniversalCTA /> */}
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  )
}
