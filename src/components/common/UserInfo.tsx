'use client'

import { useState } from 'react'
import { logout } from '@/actions/logout'

import Button from '../ui/Button'

export default function UserInfo() {
  return (
    <div className='flex items-center gap-4'>
      <p className='text-md text-blue'>Можливе Імʼя</p>
      <Button
        variant='bordered'
        onClick={async () => await logout()}>
        Вихід
      </Button>
    </div>
  )
}
