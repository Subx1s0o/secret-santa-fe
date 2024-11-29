'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Providers({ children }: PropsWithChildren) {
  const client = new QueryClient()

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
