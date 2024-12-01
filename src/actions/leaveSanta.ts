'use server'

import { Room } from '@/types/room'

import { getSession } from './getSession'

export async function leaveSanta(roomId: string) {
  const session = await getSession()
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}/leave`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session}`
        }
      }
    )

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
