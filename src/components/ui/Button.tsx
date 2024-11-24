import React, { ReactNode } from 'react'
import cn from '@/lib/cn'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  variant: 'filled' | 'bordered'
}

export default function Button({
  children,
  type,
  variant,
  className
}: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      className={cn(`block rounded-[20px] px-6 py-3 text-lg ${className}`, {
        'bg-blue-gradient text-white': variant === 'filled',
        'border border-blue text-blue': variant === 'bordered'
      })}>
      {children}
    </button>
  )
}
