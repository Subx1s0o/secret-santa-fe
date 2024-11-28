'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import Button from '../ui/Button'

export default function UserInfo() {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('user')
    Cookies.remove('session')
    router.replace('/sign-in')
  }

  return (
    <div className='flex items-center gap-4'>
      <p className='text-md text-blue'>Можливе Імʼя</p>
      <Button
        variant='bordered'
        onClick={handleLogout}>
        Вихід
      </Button>
    </div>
  )
}
