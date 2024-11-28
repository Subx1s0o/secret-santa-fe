import { getSession } from '@/actions/getSession'
import { Room } from '@/types/room'

import RoomPage from '@/components/sections/RoomPage/RoomPage'

export default async function RoomIdPage({
  params
}: {
  params: { roomId: string }
}) {
  const session = await getSession()
  const roomWithId = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rooms/${params.roomId}`,
    {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${session}`
      }
    }
  )
  const room = (await roomWithId.json()) as Room

  return (
    <RoomPage
      session={session}
      roomId={params.roomId}
      room={room}
    />
  )
}
