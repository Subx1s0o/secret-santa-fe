'use client'

import { useEffect } from 'react'
import deleteJoinToken from '@/actions/deleteJoinToken'
import { useRouter } from 'next/navigation'

import ErrorStatusSection from '@/components/sections/StatusSections/ErrorStatusSection'
import SuccessStatusSection from '@/components/sections/StatusSections/SuccessStatusSection'

interface HandlerProps {
  status: 'success' | 'failed'
}

export default function StatusHandler({ status }: HandlerProps) {
  const router = useRouter()

  useEffect(() => {
    deleteJoinToken()
    router.replace(`/santas/status/${status}`)
  }, [status, router])

  if (status === 'success') {
    return <SuccessStatusSection />
  }

  if (status === 'failed') {
    return <ErrorStatusSection />
  }

  return null
}
