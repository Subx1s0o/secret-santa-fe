import { getRoomById } from '@/actions/getRoomById'
import { getSession } from '@/actions/getSession'

import RoomPage from '@/components/sections/RoomPage/RoomPage'

export default async function RoomIdPage({
  params
}: {
  params: { roomId: string }
}) {
  const [room, session] = await Promise.all([
    getRoomById(params.roomId),
    getSession()
  ])

  if (!room) {
    return (
      <div
        className='absolute right-[15.5%] top-[200px] flex h-[300px] w-[620px] flex-col gap-[36px]
          rounded-[20px] bg-white p-7 shadow-super shadow-pink'>
        <div className='absolute inset-0 flex items-center justify-center p-7'>
          <p className='text-lg'>Ойй!!, Такого санти немає, створи його!</p>
        </div>
      </div>
    )
  }

  return (
    <RoomPage
      session={session}
      roomId={params.roomId}
      room={room}
    />
  )
}
