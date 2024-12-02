'use client'

import React from 'react'

import Button from '@/components/ui/Button'

export default function SantasRandomizer({
  randomize,
  array,
  disabled
}: {
  disabled: boolean
  randomize: (array: number[], delay: number) => void
  array: number[]
}) {
  return (
    <div>
      <Button
        disabled={disabled}
        variant='filled'
        onClick={() => randomize(array, 150)}>
        Пошарудіти Подарунками
      </Button>
    </div>
  )
}
