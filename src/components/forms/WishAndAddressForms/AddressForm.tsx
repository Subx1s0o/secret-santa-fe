'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AddressSchema, AddressType } from '../schemas/address'

export default function AddressForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<AddressType>({
    resolver: zodResolver(AddressSchema),
    mode: 'onBlur'
  })
  const { socket } = useSantaSocketStore()
  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder={errors.address?.message}
        {...register('address')}
        type='text'
        className='absolute right-0 top-1/2 w-[212px] -translate-y-1/2 rounded-[14px] border
          border-grey bg-white p-[10px] text-sm outline-none placeholder:text-grey'
      />
    </form>
  )
}
