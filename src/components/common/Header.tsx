import React from 'react'
import cn from '@/lib/cn'

const isLogged = false

export default function Header() {
  return (
    <header
      className={cn('flex bg-turquoise px-[120px] py-[34px] drop-shadow-xl', {
        'justify-center': !isLogged,
        'justify-start': isLogged
      })}>
      <h1 className='mr-[42px] text-xl'>Таємний Санта</h1>
      {isLogged && (
        <ul className='flex justify-between'>
          <ul className='flex'>
            <li className='px-6 py-3 text-blue'>Мій Санта</li>
            <li className='px-6 py-3 text-blue'>Створити</li>
            <li className='px-6 py-3 text-blue'>Трохи правил</li>
          </ul>
          <div className=''></div>
        </ul>
      )}
    </header>
  )
}
