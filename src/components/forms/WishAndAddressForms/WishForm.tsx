'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { RoomUser } from '@/types/room'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import 'reactjs-popup/dist/index.css'

import { useUser } from '@/hooks/useUser'

import { WishSchema, WishType } from '../schemas/wish'

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false })

interface WishFormProps {
  user: RoomUser
  roomId: string
  token: string | null
}

export default function WishForm({ user, roomId, token }: WishFormProps) {
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
    <div className='absolute left-[445px] top-1/2 -translate-y-1/2'>
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
      ) : (
        <Popup
          modal
          contentStyle={{
            borderRadius: '20px',
            overflowY: 'auto',
            width: '600px',
            height: '600px',
            overscrollBehavior: 'contain'
          }}
          trigger={
            <p className='cursor-pointer text-md text-grey'>
              {user.wishes[0]?.content || 'Немає бажання'}
            </p>
          }>
          <div className='bg-white p-5'>
            <h3 className='mb-3 w-full text-center text-lg font-bold'>
              Бажання ельфа: {user.name}
            </h3>
            <p className='text-lg text-grey'>
              {user.wishes[0]?.content || 'Немає бажання'}
            </p>
          </div>
        </Popup>
      )}
    </div>
  )
}
