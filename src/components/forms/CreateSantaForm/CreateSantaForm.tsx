'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'

import Input from '../Input'
import { createSantaSchema, CreateSantaType } from '../schemas/createSanta'
import CheckboxLimit from './CheckboxLimit'

export default function CreateSantaForm({
  onSubmit
}: {
  onSubmit: (data: CreateSantaType) => void
}) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<CreateSantaType>({
    resolver: zodResolver(createSantaSchema)
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='contents'>
      <p className='text-center text-md'>крок 1 з 2</p>
      <h2 className='text-center text-lg'>Додайте назву свого Санти</h2>
      <Input
        placeholder='Назва'
        control={control}
        name='title'
        className='mx-[35px] w-[90%]'
      />
      <p className='text-lg'>
        Можете встановити обмеження на вартість подарунків
      </p>
      <CheckboxLimit control={control} />
      <Button
        type='submit'
        variant='filled'
        disabled={isSubmitting}
        className='mx-auto w-[90%]'>
        {isSubmitting ? 'Очікуємо...' : 'Створити'}
      </Button>
    </form>
  )
}
