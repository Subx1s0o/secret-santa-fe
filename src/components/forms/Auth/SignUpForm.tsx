'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { SignInSchema, SignInType } from '../schemas/sign-in'

export default function SignUpForm() {
  const { control } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  })

  return (
    <form
      action=''
      className='flex flex-col gap-9'>
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
      <Button>button</Button>
    </form>
  )
}
