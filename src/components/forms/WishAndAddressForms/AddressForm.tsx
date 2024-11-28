'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { RoomUser } from '@/types/room'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import 'reactjs-popup/dist/index.css'

import { useUser } from '@/hooks/useUser'

import { AddressSchema, AddressType } from '../schemas/address'

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false })

interface AddressFromProps {
  user: RoomUser
  roomId: string
  token: string | null
}

export default function AddressFrom({ user, roomId, token }: AddressFromProps) {
  const storedUser = useUser()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<AddressType>({
    resolver: zodResolver(AddressSchema),
    mode: 'onBlur'
  })
  const { socket } = useSantaSocketStore()

  const onSubmit = ({ address }: AddressType) => {
    socket?.emit('address', {
      roomId,
      token,
      content: address
    })
  }

  return (
    <div className='absolute right-[4px] top-1/2 -translate-y-1/2'>
      {user.email === storedUser?.email ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex items-center gap-4'>
          <input
            defaultValue={user.addresses[0]?.content || ''}
            placeholder={errors.address?.message || 'Написати'}
            {...register('address')}
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
              {user.addresses[0]?.content || 'Немає адреси'}
            </p>
          }>
          <div className='bg-white p-5'>
            <h3 className='mb-3 w-full text-center text-lg font-bold'>
              Адреса ельфа: {user.name}
            </h3>
            <p className='text-lg text-grey'>
              {user.addresses[0]?.content || 'Немає адреси'}
            </p>
          </div>
        </Popup>
      )}
    </div>
  )
}
