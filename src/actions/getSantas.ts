import { Santa } from '@/types/santa'
import Cookies from 'js-cookie'

import { getSession } from './getSession'

export async function getSantas(): Promise<{ data: Santa[] }> {
  let session: string | null

  if (typeof window !== 'undefined') {
    session = Cookies.get('session') || null
  } else {
    session = await getSession()
  }

  if (!session) {
    throw new Error('No session found. Please log in.')
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${session}`
      }
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data = await response.json()

    return { data }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    )
  }
}
