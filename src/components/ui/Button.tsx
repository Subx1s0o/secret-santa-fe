import React, { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}
