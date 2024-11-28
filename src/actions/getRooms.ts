'use server'

import { getSession } from './getSession'

export async function getRooms() {
  const session = await getSession()

  if (!session) {
    return { error: 'No session found. Please log in.' }
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
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}
