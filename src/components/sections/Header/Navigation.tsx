'use client'

import cn from '@/lib/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const path = usePathname()

  return (
    <ul className='flex items-center'>
      <li>
        <Link
          className={cn('px-6 py-3 text-lg text-blue', {
            'rounded-[20px] border-2 border-red': path === '/santas'
          })}
          href='/santas'>
          Мій Санта
        </Link>
      </li>

      <li>
        <Link
          className={cn('px-6 py-3 text-lg text-blue', {
            'rounded-[20px] border-2 border-red': path === '/rules'
          })}
          href='/rules'>
          Трохи правил
        </Link>
      </li>
      <li>
        <Link
          className={cn('px-6 py-3 text-lg text-blue', {
            'rounded-[20px] border-2 border-red': path === '/santas/create'
          })}
          href='/santas/create'>
          Створити
        </Link>
      </li>
    </ul>
  )
}
