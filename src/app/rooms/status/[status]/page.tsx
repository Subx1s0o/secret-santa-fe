'use client'

import { useEffect } from 'react'
import deleteJoinToken from '@/actions/deleteJoinToken'
import { useRouter } from 'next/navigation'

interface PageProps {
  params: { status: string }
}

export default function StatusPage({ params }: PageProps) {
  const router = useRouter()

  useEffect(() => {
    deleteJoinToken()
    if (params.status === 'success') {
      router.replace('/rooms/status/success')
    } else if (params.status === 'failed') {
      router.replace('/rooms/status/failed')
    }
  }, [params.status, router])

  return <div>{params.status}</div>
}
