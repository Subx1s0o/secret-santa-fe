'use client'

import { deleteSanta } from '@/actions/deleteSanta'
import { getRooms } from '@/actions/getRooms'
import { Room } from '@/types/room'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
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
  const handleDeleteSanta = useMutation({
    mutationFn: async (roomId: string) => {
      await deleteSanta(roomId)
      socket.emit('delete-room', { roomId })
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
              <p className='max-w-[220px] overflow-hidden text-ellipsis text-nowrap text-md'>
                {room.title}
              </p>
            </div>
            <Link
              className=''
              href={`rooms/${room.id}`}>
              <p
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pr-5 text-sm
                  text-blue'>
                Детальніше
              </p>
            </Link>
            {room.owner === me?.id && (
              <button
                onClick={() => handleDeleteSanta.mutate(room.id)}
                className='flex items-center gap-2 text-red'>
                <Image
                  src='/cross.svg'
                  width={16}
                  height={16}
                  alt=''
                />
                Видалити
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
