import { getSession } from '@/actions/getSession'
import cn from '@/lib/cn'

import Navigation from './Navigation'
import UserInfo from './UserInfo'

export default async function Header() {
  const session = await getSession()

  return (
    <header
      className={cn(
        'flex gap-[42px] bg-turquoise px-[120px] py-[34px] shadow-bottom shadow-black',
        {
          'justify-center': !session,
          'justify-start': session
        }
      )}>
      <h1 className='text-xl'>Таємний Санта</h1>

      {session && (
        <div className='flex flex-1 items-center justify-between'>
          <Navigation />
          <UserInfo />
        </div>
      )}
    </header>
  )
}
