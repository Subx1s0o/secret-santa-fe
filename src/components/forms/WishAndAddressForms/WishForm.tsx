'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { RoomUser } from '@/types/room'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import { useUser } from '@/hooks/useUser'

import { WishSchema, WishType } from '../schemas/wish'

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false })

interface WishFormProps {
  user: RoomUser
  roomId: string
  token: string | null
  random: boolean
}

export default function WishForm({
  user,
  roomId,
  token,
  random
}: WishFormProps) {
  const storedUser = useUser()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<WishType>({
    resolver: zodResolver(WishSchema),
    mode: 'onBlur'
  })
  const { socket } = useSantaSocketStore()

  const onSubmit = ({ wish }: WishType) => {
    socket?.emit('wish', {
      roomId,
      token,
      content: wish
    })
  }

  return (
    <div className='absolute left-[430px] top-1/2 -translate-y-1/2'>
      {user.email === storedUser?.email ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex items-center gap-4'>
          <input
            defaultValue={user.wishes[0]?.content || ''}
            placeholder={errors.wish?.message || 'Написати'}
            {...register('wish')}
            type='text'
            className='w-[212px] rounded-[14px] border border-grey bg-white p-[10px] text-sm
              outline-none placeholder:text-grey'
          />
        </form>
      ) : !random ? (
        <Popup
          modal
          contentStyle={{
            borderRadius: '20px',
            overflowY: 'auto',
            width: '600px',
            height: '600px',
            overscrollBehavior: 'contain',
            padding: '20px'
          }}
          trigger={
            <p
              className='w-[212px] cursor-pointer overflow-hidden text-ellipsis text-nowrap text-md
                text-grey'>
              {user.wishes[0]?.content || 'Немає бажання'}
            </p>
          }>
          <div className='bg-white'>
            <h3 className='mb-3 w-full text-center text-lg font-bold'>
              Бажання ельфа: {user.name}
            </h3>
            <p className='text-lg text-grey'>
              {user.wishes[0]?.content || 'Немає бажання'}
            </p>
          </div>
        </Popup>
      ) : (
        <p className='w-[212px] text-md text-grey'>Приховано Сантою</p>
      )}
    </div>
  )
}
