'use client'

import React from 'react'

import Button from '@/components/ui/Button'

export default function SantasRandomizer({
  randomize,
  array
}: {
  randomize: (array: number[], delay: number) => void
  array: number[]
}) {
  return (
    <div>
      <Button
        disabled={array.length === 0}
        variant='filled'
        onClick={() => randomize(array, 150)}>
        Пошарудіти Подарунками
      </Button>
    </div>
  )
}
