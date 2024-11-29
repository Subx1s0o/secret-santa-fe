'use client'

import { useState } from 'react'
import { createSanta } from '@/actions/createSanta'
import { Room } from '@/types/room'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import CreateSantaForm from '@/components/forms/CreateSantaForm/CreateSantaForm'
import { CreateSantaType } from '@/components/forms/schemas/createSanta'

import SecondSantaStep from './SecondSantaStep'

export default function CreateSantaSection() {
  const [santaData, setSantaData] = useState<Room | null>(null)
  const queryClient = useQueryClient()

  const onCreateSanta = async (data: CreateSantaType) => {
    try {
      const result = await createSanta(data)
      setSantaData(result)

      queryClient.invalidateQueries({ queryKey: ['rooms'] })
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || 'Не вдалося створити санту')
      } else {
        toast.error('Не вдалося створити санту')
      }
    }
  }

  if (santaData) {
    return <SecondSantaStep santaUrl={santaData.url} />
  }

  return <CreateSantaForm onSubmit={onCreateSanta} />
}
