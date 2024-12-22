'use server'

import { Session } from '@/types/auth-response'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { SignUpType } from '@/components/forms/schemas/auth'

export async function register(data: SignUpType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Помилка: ${response.statusText}`)
    }

    const result = (await response.json()) as Session

    cookies().set({
      name: 'session',
      value: result.sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: result.sessionTokenValidUntil
    })
    cookies().set({
      name: 'user',
      value: JSON.stringify(result.user),
      secure: process.env.NODE_ENV === 'production',
      expires: result.sessionTokenValidUntil
    })

    redirect('/santas')
  } catch (error) {
    throw error
  }
}
