'use client'

import { useEffect, useState } from 'react'
import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { Santa } from '@/types/santa'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import io from 'socket.io-client'

import SantaDetails from './components/SantaDetails'
import SantaInfo from './components/SantasInfo'

interface SantaPageProps {
  santaId: string
  santa: Santa
  session: string | null
}

export default function SantaPage({ santaId, santa, session }: SantaPageProps) {
  const [currentSanta, setCurrentSanta] = useState<Santa>(santa)

  const { setSocket } = useSantaSocketStore()
  const router = useRouter()

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL)
    setSocket(socket)

    socket.emit('connect-room', santaId)

    socket.on('room-updated', updatedSanta => {
      setCurrentSanta(prevSanta => ({ ...prevSanta, ...updatedSanta }))

      toast.success('Санта оновив свої сані')
    })

    socket.on('user-updated', updatedSanta => {
      setCurrentSanta(prevSanta => ({
        ...prevSanta,
        users: [...updatedSanta.users]
      }))
    })

    socket.on('user-updated-message', () => {
      toast.success('Санта оновив свої сані')
    })

    socket.on('not-updated', () => {
      toast.error('У Санти проблеми з Санями :(')
    })

    socket.on('room-deleted', () => {
      router.push('/santas')
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
  }, [router, santaId, setSocket])

  return (
    <section>
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px]
          bg-primary-pink px-[50px] py-[30px] xl:px-[80px] xl:py-[50px]'>
        <div className='w-[1065px] rounded-[20px] bg-white p-8'>
          <SantaInfo santa={currentSanta} />
          <SantaDetails
            session={session}
            santa={currentSanta}
          />
        </div>
      </div>
    </section>
  )
}
