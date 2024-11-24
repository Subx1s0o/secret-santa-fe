'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { SignInSchema, SignInType } from '../schemas/auth'

export default function SignInForm() {
  const { control } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    mode: 'onBlur'
  })

  return (
    <form
      action=''
      className='mx-auto max-w-[378px]'>
      <div className='mb-9 flex flex-col gap-5'>
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
        Підствердити
      </Button>
    </form>
  )
}
