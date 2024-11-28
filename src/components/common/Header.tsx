'use client'

import { useEffect, useState } from 'react'
import cn from '@/lib/cn'
import Cookies from 'js-cookie'

import Navigation from './Navigation'
import UserInfo from './UserInfo'

export default function Header() {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const checkSession = () => {
      const session = Cookies.get('session')
      setIsLogged(!!session)
    }

    checkSession()
    const cookieChangeListener = () => checkSession()

    window.addEventListener('cookiechange', cookieChangeListener)
    return () => {
      window.removeEventListener('cookiechange', cookieChangeListener)
    }
  }, [])

  return (
    <header
      className={cn(
        'flex gap-[42px] bg-turquoise px-[120px] py-[34px] shadow-bottom shadow-black',
        {
          'justify-center': !isLogged,
          'justify-start': isLogged
        }
      )}>
      <h1 className='text-xl'>Таємний Санта</h1>

      {isLogged && (
        <div className='flex flex-1 items-center justify-between'>
          <Navigation />
          <UserInfo />
        </div>
      )}
    </header>
  )
}
