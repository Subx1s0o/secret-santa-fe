'use client'

import { useEffect, useRef } from 'react'
import io, { Socket } from 'socket.io-client'

const RoomComponent = ({ params }: { params: { roomId: string } }) => {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    // Ініціалізація сокета
    const socket = io('http://localhost:4000', {})
    socketRef.current = socket

    // Логування при підключенні
    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    // Відправка події для сервера
    socket.emit('connected', 'next js')

    // Логування події user-joined
    socket.on('user-joined', updatedRoom => {
      if (updatedRoom.roomId === params.roomId) {
        console.log('User joined room, refetching data...')
      }
    })

    // Очищення ресурсу при розмонтуванні
    return () => {
      socket.disconnect()
      socketRef.current = null
    }
  }, [params.roomId])

  console.log(socketRef)

  return (
    <div>
      <h1>Room {params.roomId}</h1>
    </div>
  )
}

export default RoomComponent
