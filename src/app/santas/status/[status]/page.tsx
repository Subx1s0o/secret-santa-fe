'use client'

import { useEffect } from 'react'
import deleteJoinToken from '@/actions/deleteJoinToken'
import { useRouter } from 'next/navigation'

import ErrorStatusSection from '@/components/sections/StatusSections/ErrorStatusSection'
import SuccessStatusSection from '@/components/sections/StatusSections/SuccessStatusSection'

interface PageProps {
  params: { status: string }
}

export default function StatusPage({ params }: PageProps) {
  const router = useRouter()

  useEffect(() => {
    deleteJoinToken()
    if (params.status === 'success') {
      router.replace('/santas/status/success')
    } else if (params.status === 'failed') {
      router.replace('/santas/status/failed')
    }
  }, [params.status, router])

  if (params.status === 'success') {
    return <SuccessStatusSection />
  }

  if (params.status === 'failed') {
    return <ErrorStatusSection />
  }
}
