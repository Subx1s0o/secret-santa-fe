'use server'

import { Room } from '@/types/room'

import { CreateSantaType } from '@/components/forms/schemas/createSanta'

import { getSession } from './getSession'

export async function createSanta(data: CreateSantaType) {
  const session = await getSession()
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Помилка: ${response.statusText}`)
    }

    const result = (await response.json()) as Room

    return result
  } catch (error) {
    throw error
  }
}
