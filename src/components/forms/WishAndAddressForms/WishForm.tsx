'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { WishSchema, WishType } from '../schemas/wish'

export default function WishForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<WishType>({
    resolver: zodResolver(WishSchema),
    mode: 'onBlur'
  })
  const { socket } = useSantaSocketStore()
  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder={errors.content?.message || 'написати'}
        {...register('content')}
        type='text'
        className='absolute left-[445px] top-1/2 w-[212px] -translate-y-1/2 rounded-[14px] border
          border-grey bg-white p-[10px] text-sm outline-none placeholder:text-grey'
      />
    </form>
  )
}
