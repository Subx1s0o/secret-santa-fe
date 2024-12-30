'use client'

import { register } from '@/actions/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { SignUpSchema, SignUpType } from '../schemas/auth'

export default function SignUpForm() {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema)
  })

  async function onSubmit(data: SignUpType) {
    try {
      await register(data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Unknown error occurred')
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        type='submit'
        className='mx-auto'>
        {isSubmitting ? 'Очікування' : 'Підтвердити'}
      </Button>
    </form>
  )
}
