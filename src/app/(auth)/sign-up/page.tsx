import React from 'react'
import Link from 'next/link'

import SignUpForm from '@/components/forms/Auth/SignUpForm'

export default function SignUp() {
  return (
    <div
      className='absolute right-[120px] top-[100px] rounded-[20px] bg-white px-4 py-6
        shadow-super shadow-pink'>
      <div className='mb-9 flex justify-between'>
        <Link
          href='/sign-in'
          className='text-lg text-blue'>
          Увійти
        </Link>
        <Link
          href='/sign-up'
          className='text-lg text-blue underline'>
          Зареєструватися
        </Link>
      </div>
      <SignUpForm />
    </div>
  )
}
