import { getRooms } from '@/actions/getRooms'
import { getSession } from '@/actions/getSession'
import { Room } from '@/types/room'
import { cookies } from 'next/headers'
import Link from 'next/link'

import JoinConnect from '@/components/common/JoinConnect'

export default async function Rooms() {
  const token = cookies().get('join_token')?.value
  const session = await getSession()

  const { data, error } = await getRooms()
  if (error) {
    return <div className=''>{error}</div>
  }

  return (
    <section>
      <div
        className='absolute right-[120px] top-[100px] rounded-[20px] bg-primary-pink px-[80px]
          py-[50px]'>
        <div className='relative min-h-[350px] w-[486px] rounded-[20px] bg-white p-8'>
          <h2 className='mb-6 text-lg font-bold'>Всі ваші Санти</h2>
          <ul className='flex flex-col gap-2'>
            {data.length > 0 ? (
              data.map((room: Room, index: number) => (
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
              ))
            ) : (
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-md'>
                Додайте свого першого санту!
              </p>
            )}
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
