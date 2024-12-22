'use server'

import { Santa } from '@/types/santa'

import { getSession } from './getSession'

export async function deleteSanta(santaId: string) {
  const session = await getSession()
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${santaId}`,
      {
        method: 'DELETE',
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

    const result = (await response.json()) as Santa

    return result
  } catch (error) {
    throw error
  }
}
