'use client'

import { logout } from '@/actions/logout'

import { useUser } from '@/hooks/useUser'

import Button from '../../ui/Button'

export default function UserInfo() {
  const user = useUser()

  return (
    <div className='flex items-center gap-4'>
      <p className='text-md text-blue'>{user?.name}</p>
      <Button
        variant='bordered'
        onClick={async () => await logout()}>
        Вихід
      </Button>
    </div>
  )
}
