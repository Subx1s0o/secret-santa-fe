'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types/auth-response'
import Cookies from 'js-cookie'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      const parsedUser = JSON.parse(userCookie)
      setUser(parsedUser)
    }
  }, [])

  return user
}
