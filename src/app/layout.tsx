import type { Metadata } from 'next'

import './globals.css'

import { Anonymous_Pro } from 'next/font/google'

import Header from '@/components/common/Header'
import HelpingFooter from '@/components/common/HelpingFooter'
import Providers from '@/components/providers/Providers'

export const metadata: Metadata = {
  title: 'Santa App For GoIT career service',
  description: 'Made by Nazar :)'
}

const Anonymous = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='uk'>
      <body
        className={`${Anonymous.className} h-[calc(100vh-122px)] bg-turquoise antialiased`}>
        <Header />

        <main className='relative h-full bg-santa bg-cover'>
          <Providers>{children}</Providers>
          <HelpingFooter />
        </main>
      </body>
    </html>
  )
}
