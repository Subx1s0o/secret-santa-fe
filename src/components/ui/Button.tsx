import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from '@/lib/cn'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  variant: 'filled' | 'bordered'
  activate?: 'button' | 'link'
  href?: Url
}

export default function Button({
  children,
  type = 'button',
  activate = 'button',
  variant,
  href,
  className,
  ...buttonProps
}: ButtonProps) {
  if (activate === 'button') {
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
  if (activate === 'link') {
    if (!href) {
      throw new Error(
        "The 'href' prop is required when 'activate' is set to 'link'"
      )
    }

    return (
      <Link
        href={href}
        className={cn(`block rounded-[20px] px-6 py-3 text-lg ${className}`, {
          'bg-blue-gradient text-white': variant === 'filled',
          'border border-blue text-blue': variant === 'bordered'
        })}>
        {children}
      </Link>
    )
  }
}
