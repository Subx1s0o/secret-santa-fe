import { Santa } from '@/types/santa'

import { getSession } from './getSession'

export const getSantaById = async (roomId: string): Promise<Santa | null> => {
  try {
    const session = await getSession()
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`,
      {
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${session}`
        }
      }
    )

    if (!response.ok) {
      return null
    }

    const santa = (await response.json()) as Santa

    return santa
  } catch {
    return null
  }
}
