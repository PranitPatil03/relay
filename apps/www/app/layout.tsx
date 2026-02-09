/* eslint-disable import/no-unresolved */
import './globals.css'
import '@echo/ui/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { ReactQueryProvider } from '@/providers/ReactQueryProvider'

export const metadata: Metadata = {
  title: {
    default: 'Relay - Instant Communication',
    template: '%s | Relay',
  },
  description:
    'Pass messages instantly. Create private rooms, invite your team, and start collaborating in seconds. No barriers, just connection.',
  keywords: ['chat', 'real-time', 'communication', 'relay', 'instant messaging', 'team chat'],
  authors: [
    {
      name: 'Rohit Singh Rawat',
    },
  ],
  creator: 'Relay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://relay-chat.com',
    title: 'Relay - Instant Communication',
    description:
      'Pass messages instantly. Create private rooms, invite your team, and start collaborating in seconds. No barriers, just connection.',
    siteName: 'Relay',
    images: [
      {
        url: '/images/relay.png',
        width: 800,
        height: 600,
        alt: 'Relay Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relay - Instant Communication',
    description:
      'Pass messages instantly. Create private rooms, invite your team, and start collaborating in seconds. No barriers, just connection.',
    creator: '@Spacing_Whale',
    images: ['/images/relay.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="image/png" href="/images/echo.png" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className} antialiased`}
      >
        <main>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
