'use client'

import { getRooms } from '@/actions/getRooms'
import { Room } from '@/types/room'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

export default function SantasList() {
  const { data } = useQuery<{
    data: Room[]
  }>({
    queryKey: ['rooms'],
    queryFn: async () => getRooms()
  })

  return (
    <ul className='flex max-h-[400px] flex-col gap-2 overflow-y-auto overscroll-contain'>
      {data && data.data.length > 0 ? (
        data.data.map((room, index) => (
          <li
            className='border-b border-grey'
            key={room.id}>
            <Link
              className='flex items-center justify-between pb-[10px] pl-2 pt-2'
              href={`rooms/${room.id}`}>
              <div className='flex items-center gap-2'>
                <span className='text-md'>{index + 1}</span>
                <p className='text-md'>{room.title}</p>
              </div>

              <p className='pr-5 text-sm text-blue'> Детальніше</p>
            </Link>
          </li>
        ))
      ) : (
        <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-md'>
          Додайте свого першого санту!
        </p>
      )}
    </ul>
  )
}
