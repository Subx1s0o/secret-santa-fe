import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from '@/lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  variant: 'filled' | 'bordered'
}

export default function Button({
  children,
  type = 'button',
  variant,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      {...buttonProps}
      className={cn(`block rounded-[20px] px-6 py-3 text-lg ${className}`, {
        'bg-blue-gradient text-white': variant === 'filled',
        'border border-blue text-blue': variant === 'bordered'
      })}>
      {children}
    </button>
  )
}
