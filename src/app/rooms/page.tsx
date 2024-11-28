import { getRooms } from '@/actions/getRooms'
import { Room } from '@/types/room'
import { cookies } from 'next/headers'
import Link from 'next/link'

import JoinConnect from '@/components/common/JoinConnect'

export default async function Rooms() {
  const token = cookies().get('join_token')?.value
  const session = cookies().get('session')?.value

  const { data, error } = await getRooms()

  if (error) {
    return <div className=''>{error}</div>
  }

  return (
    <section>
      <div
        className='absolute right-[120px] top-[100px] rounded-[20px] bg-primary-pink px-[80px]
          py-[50px]'>
        <div className='w-[486px] rounded-[20px] bg-white p-8'>
          <h2 className='mb-6 text-lg font-bold'>Всі ваші Санти</h2>
          <ul className='flex flex-col gap-2'>
            {data.map((room: Room, index: number) => (
              <li
                className='border-b border-grey'
                key={room.id}>
                <Link
                  className='flex items-center justify-between pb-[10px] pl-2 pt-2'
                  href={`rooms/${room.id}`}>
                  <div className='flex items-center gap-2'>
                    <span className='text-md'> {index + 1}</span>
                    <p className='text-md'>{room.title}</p>
                  </div>

                  <p className='pr-5 text-sm text-blue'> Детальніше</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {token && session && (
        <JoinConnect
          token={token}
          session={session}
        />
      )}
    </section>
  )
}
