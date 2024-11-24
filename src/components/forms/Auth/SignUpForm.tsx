'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { SignUpSchema, SignUpType } from '../schemas/auth'

export default function SignUpForm() {
  const { control } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onBlur'
  })

  return (
    <form
      action=''
      className='mx-auto max-w-[378px]'>
      <div className='mb-9 flex flex-col gap-5'>
        <Input
          control={control}
          placeholder='Введіть імʼя'
          name='name'
        />
        <Input
          control={control}
          placeholder='Введіть email'
          name='email'
        />
        <Input
          control={control}
          placeholder='Введіть пароль'
          name='password'
        />
      </div>
      <Button
        variant='filled'
        className='mx-auto'>
        Підтвердити
      </Button>
    </form>
  )
}
