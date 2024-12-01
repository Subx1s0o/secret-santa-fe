'use client'

import { useState } from 'react'
import { deleteSanta } from '@/actions/deleteSanta'
import { getRooms } from '@/actions/getRooms'
import { leaveSanta } from '@/actions/leaveSanta'
import { Room } from '@/types/room'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { io } from 'socket.io-client'

import { useUser } from '@/hooks/useUser'

export default function SantasList() {
  const { data } = useQuery<{
    data: Room[]
  }>({
    queryKey: ['rooms'],
    queryFn: async () => getRooms()
  })
  const me = useUser()
  const socket = io(process.env.NEXT_PUBLIC_API_URL)
  const queryClient = useQueryClient()

  const [loadingRoom, setLoadingRoom] = useState<string | null>(null)

  const handleDeleteSanta = useMutation({
    mutationFn: async (roomId: string) => {
      setLoadingRoom(roomId)
      const toastId = toast.loading('Видаляємо...')
      const ok = await deleteSanta(roomId)
      socket.emit('delete-room', { roomId })

      if (ok) {
        toast.update(toastId, {
          render: 'Видалили Санту ',
          type: 'success',
          isLoading: false,
          autoClose: 2000
        })
      } else {
        toast.update(toastId, {
          render: 'Не вдалося видалити санту ',
          type: 'error',
          isLoading: false,
          autoClose: 2000
        })
      }
      setLoadingRoom(null)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
    },
    onError: error => {
      console.error('Помилка видалення кімнати:', error)
    }
  })

  const handleLeaveSanta = useMutation({
    mutationFn: async (roomId: string) => {
      setLoadingRoom(roomId)
      const toastId = toast.loading('Виходимо...')
      const ok = await leaveSanta(roomId)
      socket.emit('leave-room', { roomId })

      if (ok) {
        toast.update(toastId, {
          render: 'Вийшли з гостей!',
          type: 'success',
          isLoading: false,
          autoClose: 2000
        })
      } else {
        toast.update(toastId, {
          render: 'Не вдалося вийти з кімнати',
          type: 'error',
          isLoading: false,
          autoClose: 2000
        })
      }
      setLoadingRoom(null)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
    },
    onError: error => {
      console.error('Помилка видалення кімнати:', error)
    }
  })

  return (
    <ul className='flex max-h-[400px] flex-col gap-2 overflow-y-auto overscroll-contain'>
      {data && data.data.length > 0 ? (
        data.data.map((room, index) => (
          <li
            className='relative flex items-center justify-between border-b border-grey pb-[10px] pl-2
              pt-2'
            key={room.id}>
            <div className='flex items-center gap-2'>
              <span className='text-md'>{index + 1}.</span>
              <p className='max-w-[150px] overflow-hidden text-ellipsis text-nowrap text-md'>
                {room.title}
              </p>
            </div>
            <Link href={`rooms/${room.id}`}>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-blue'>
                Детальніше
              </p>
            </Link>
            {room.owner === me?.id ? (
              <button
                onClick={() => handleDeleteSanta.mutate(room.id)}
                disabled={loadingRoom === room.id}
                className='flex items-center gap-2 text-red'>
                <Image
                  src='/cross.svg'
                  width={16}
                  height={16}
                  alt=''
                />
                {loadingRoom === room.id ? 'Видаляємо...' : 'Видалити'}
              </button>
            ) : (
              <button
                onClick={() => handleLeaveSanta.mutate(room.id)}
                disabled={loadingRoom === room.id}
                className='flex items-center gap-2 text-red'>
                <Image
                  src='/cross.svg'
                  width={16}
                  height={16}
                  alt=''
                />
                {loadingRoom === room.id ? 'Виходимо...' : 'Вийти'}
              </button>
            )}
          </li>
        ))
      ) : (
        <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-md'>
          Додайте свого першого санту!
        </p>
      )}
    </ul>
  )
}
