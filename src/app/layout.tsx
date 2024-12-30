import type { Metadata } from 'next'

import './globals.css'

import { Anonymous_Pro } from 'next/font/google'

import Header from '@/components/common/Header'
import HelpingFooter from '@/components/common/HelpingFooter'
import Providers from '@/components/providers/Providers'

export const metadata: Metadata = {
  title: 'Гра Санта для карʼєрного центру GoIT',
  description: 'Made by Subx1s0o :)'
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
        <Providers>
          <Header />
          <main className='relative h-full bg-santa bg-cover'>
            {children}
            <HelpingFooter />
          </main>
        </Providers>
      </body>
    </html>
  )
}
