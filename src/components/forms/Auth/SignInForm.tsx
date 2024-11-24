'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Input from '../Input'
import { SignInSchema, SignInType } from '../schemas/sign-in'

export default function SignInForm() {
  const { control } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  })

  return (
    <form action=''>
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
    </form>
  )
}
