'use client'

import { useEffect } from 'react'
import io from 'socket.io-client'

interface SocketConnectProps {
  token: string
}

const SocketConnect = ({ token }: SocketConnectProps) => {
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL) // Підключення до вашого сервера сокетів
    socket.emit('connected', 'connect')

    // Після підключення, надсилаємо токен для приєднання до кімнати
    socket.emit('join-room', token) // Відправляємо токен через еміт, щоб приєднатися до кімнати

    return () => {
      socket.disconnect() // Не забувайте відключати сокет при виході
    }
  }, [token])

  return <></> // Цей компонент не потребує візуального відображення
}

export default SocketConnect
