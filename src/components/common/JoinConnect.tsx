'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import io from 'socket.io-client'

interface SocketConnectProps {
  token: string
  session: string | undefined
}

const SocketConnect = ({ token, session }: SocketConnectProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!token || !session) {
      return
    }
    const socket = io(process.env.NEXT_PUBLIC_API_URL)

    socket.emit('join-room', { room: token, sessionToken: session })

    socket.on('room-joined', response => {
      if (response.success) {
        router.replace('/rooms/status/success')
      } else {
        router.replace('/rooms/status/failed')
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [token, session, router])

  return null
}

export default SocketConnect
