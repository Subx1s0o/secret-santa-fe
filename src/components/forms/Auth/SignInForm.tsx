'use client'

import { login } from '@/actions/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { SignInSchema, SignInType } from '../schemas/auth'

export default function SignInForm() {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit
  } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  })

  async function onSubmit(data: SignInType) {
    try {
      await login(data)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Щось пішло не так.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        className='mx-auto'
        type='submit'>
        {isSubmitting ? 'Очікування' : 'Підтвердити'}
      </Button>
    </form>
  )
}
