'use client'

import { useEffect, useState } from 'react'
import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { Room } from '@/types/room'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import io from 'socket.io-client'

import SantaDetails from './components/SantaDetails'
import SantaInfo from './components/SantasInfo'

interface RoomComponentProps {
  roomId: string
  room: Room
  session: string | null
}

export default function RoomComponent({
  roomId,
  room,
  session
}: RoomComponentProps) {
  const [currentRoom, setCurrentRoom] = useState<Room>(room)
  const { setSocket } = useSantaSocketStore()
  const router = useRouter()
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL)
    setSocket(socket)

    socket.emit('connect-room', roomId)

    socket.on('room-updated', updatedRoom => {
      setCurrentRoom(prevRoom => ({ ...prevRoom, ...updatedRoom }))

      toast.success('Санта оновив свої сані')
    })

    socket.on('user-updated', updatedRoom => {
      setCurrentRoom(prevRoom => ({
        ...prevRoom,
        users: [...updatedRoom.users]
      }))
    })

    socket.on('user-updated-message', () => {
      toast.success('Санта оновив свої сані')
    })

    socket.on('not-updated', () => {
      toast.error('У Санти проблеми з Санями :(')
    })

    socket.on('room-deleted', () => {
      router.push('/rooms')
    })

    return () => {
      socket.off('user-updated-message')
      socket.off('not-updated')
      socket.off('room-deleted')
      socket.off('connect-room')
      socket.off('user-updated')
      socket.off('room-updated')
      socket.off('room-not-updated')
      socket.disconnect()
      setSocket(null)
    }
  }, [roomId])

  return (
    <section>
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px]
          bg-primary-pink px-[80px] py-[50px]'>
        <div className='w-[1065px] rounded-[20px] bg-white p-8'>
          <SantaInfo santa={currentRoom} />
          <SantaDetails
            session={session}
            santa={currentRoom}
          />
        </div>
      </div>
    </section>
  )
}
