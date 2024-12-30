import type { Metadata } from 'next'

import './globals.css'

import Providers from '@/app/Providers'
import { Anonymous_Pro } from 'next/font/google'

import MusicGift from '@/components/features/MusicGift'
import Header from '@/components/sections/Header/Header'

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
            <MusicGift />
          </main>
        </Providers>
      </body>
    </html>
  )
}
