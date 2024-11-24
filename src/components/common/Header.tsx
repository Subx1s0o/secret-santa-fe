import cn from '@/lib/cn'
import Link from 'next/link'

import Button from '../ui/Button'
import Navigation from './Navigation'

const isLogged = true

export default function Header() {
  return (
    <header
      className={cn(
        'shadow-bottom flex gap-[42px] bg-turquoise px-[120px] py-[34px] shadow-black',
        {
          'justify-center': !isLogged,
          'justify-start': isLogged
        }
      )}>
      <Link href='/'>
        <h1 className='text-xl'>Таємний Санта</h1>
      </Link>
      {isLogged && (
        <div className='flex flex-1 items-center justify-between'>
          <Navigation />
          <div className='flex items-center gap-4'>
            <p className='text-md text-blue'>Можливе Імʼя</p>
            <Button variant='bordered'>
              <p>Вихід</p>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
