'use client'

import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

const RoomComponent = ({ params }: { params: { roomId: string } }) => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL)
    setSocket(socket)

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    socket.on('user-joined', updatedRoom => {
      console.log('User joined room:', updatedRoom)
      // Тут ви можете додати логіку для оновлення даних на клієнті
    })

    return () => {
      socket.disconnect()
      setSocket(null)
    }
  }, [params.roomId])

  return (
    <div>
      <h1>Room {params.roomId}</h1>
      {/* Додатковий контент, якщо необхідно */}
    </div>
  )
}

export default RoomComponent
