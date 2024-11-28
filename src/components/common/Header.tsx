import cn from '@/lib/cn'
import { cookies } from 'next/headers'

import Navigation from './Navigation'
import UserInfo from './UserInfo'

const isLogged = cookies().get('session')

export default function Header() {
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
