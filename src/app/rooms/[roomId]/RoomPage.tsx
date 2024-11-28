'use client'

import { FormEvent, useEffect, useState } from 'react'
import { Room } from '@/types/room'
import io, { Socket } from 'socket.io-client'

interface RoomComponentProps {
  roomId: string
  room: Room
  session: string | undefined
}

export default function RoomComponent({
  roomId,
  room,
  session
}: RoomComponentProps) {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [currentRoom, setCurrentRoom] = useState<Room>(room)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      socket?.emit('wish', { roomId, token: session, content: inputValue })
      setInputValue('')
    }
  }
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL)
    setSocket(socket)

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    socket.emit('connect-room', roomId)

    socket.on('room', room => console.log(room))

    socket.on('room-updated', updatedRoom => {
      console.log('User joined room:', updatedRoom)
      setCurrentRoom(updatedRoom)
    })

    return () => {
      socket.off('connect-room')
      socket.off('user-joined')
      socket.off('room')
      socket.disconnect()
      setSocket(null)
    }
  }, [roomId])

  return (
    <div>
      <h1>Room {roomId}</h1>
      <ul>
        {currentRoom?.users.map(user => (
          <li key={user.email}>
            {user.name} - {user.wishes[0]?.content || 'Поки немає'}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => {
            setInputValue(e.target.value)
            console.log(inputValue)
          }}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
