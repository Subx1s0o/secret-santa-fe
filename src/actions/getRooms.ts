import { Room } from '@/types/room'
import Cookies from 'js-cookie'

import { getSession } from './getSession'

export async function getRooms(): Promise<{ data: Room[] }> {
  let session: string | null

  // Check if we're on the client-side
  if (typeof window !== 'undefined') {
    session = Cookies.get('session') || null
  } else {
    session = await getSession()
  }

  // If there's no session, throw an error
  if (!session) {
    throw new Error('No session found. Please log in.')
  }

  try {
    // Make the API request
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${session}`
      }
    })

    // If the response isn't successful, throw an error
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    // Parse the response data
    const data = await response.json()

    return { data } // Return as { data: Room[] }
  } catch (error) {
    // If an error occurs, throw it
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    )
  }
}
