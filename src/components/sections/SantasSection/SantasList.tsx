'use client'

import { useState } from 'react'
import { deleteSanta } from '@/actions/deleteSanta'
import { getSantas } from '@/actions/getSantas'
import { leaveSanta } from '@/actions/leaveSanta'
import { Santa } from '@/types/santa'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { io } from 'socket.io-client'

import { useUser } from '@/hooks/useUser'

export default function SantasList() {
  const { data } = useQuery<{
    data: Santa[]
  }>({
    queryKey: ['santas'],
    queryFn: async () => getSantas()
  })
  const me = useUser()
  const socket = io(process.env.NEXT_PUBLIC_API_URL)
  const queryClient = useQueryClient()

  const [loadingSanta, setLoadingSanta] = useState<string | null>(null)

  const handleDeleteSanta = useMutation({
    mutationFn: async (santaId: string) => {
      setLoadingSanta(santaId)
      const toastId = toast.loading('Видаляємо...')
      const ok = await deleteSanta(santaId)
      socket.emit('delete-santa', { santaId })

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
      setLoadingSanta(null)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['santas'] })
    },
    onError: error => {
      console.error('Помилка видалення кімнати:', error)
    }
  })

  const handleLeaveSanta = useMutation({
    mutationFn: async (santaId: string) => {
      setLoadingSanta(santaId)
      const toastId = toast.loading('Виходимо...')
      const ok = await leaveSanta(santaId)
      socket.emit('leave-santa', { santaId })

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
      setLoadingSanta(null)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['santas'] })
    },
    onError: error => {
      console.error('Помилка видалення кімнати:', error)
    }
  })

  return (
    <ul className='flex max-h-[400px] flex-col gap-2 overflow-y-auto overscroll-contain'>
      {data && data.data.length > 0 ? (
        data.data.map((santa, index) => (
          <li
            className='relative flex items-center justify-between border-b border-grey pb-[10px] pl-2
              pt-2'
            key={santa.id}>
            <div className='flex items-center gap-2'>
              <span className='text-md'>{index + 1}.</span>
              <p className='max-w-[150px] overflow-hidden text-ellipsis text-nowrap text-md'>
                {santa.title}
              </p>
            </div>
            <Link href={`santas/${santa.id}`}>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-blue'>
                Детальніше
              </p>
            </Link>
            {santa.owner === me?.id ? (
              <button
                onClick={() => handleDeleteSanta.mutate(santa.id)}
                disabled={loadingSanta === santa.id}
                className='flex items-center gap-2 text-red'>
                <svg className='size-4 fill-red'>
                  <use href='/sprite.svg#icon-cross' />
                </svg>
                {loadingSanta === santa.id ? 'Видаляємо...' : 'Видалити'}
              </button>
            ) : (
              <button
                onClick={() => handleLeaveSanta.mutate(santa.id)}
                disabled={loadingSanta === santa.id}
                className='flex items-center gap-2 text-red'>
                <svg className='size-4 fill-red'>
                  <use href='/sprite.svg#icon-cross' />
                </svg>
                {loadingSanta === santa.id ? 'Виходимо...' : 'Вийти'}
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
