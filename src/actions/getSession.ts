'use server'

import { cookies } from 'next/headers'

export async function getSession() {
  const sessionCookie = cookies().get('session')

  return sessionCookie ? sessionCookie.value : null
}
