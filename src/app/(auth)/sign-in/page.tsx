import React from 'react'
import Link from 'next/link'

import SignInForm from '@/components/forms/Auth/SignInForm'

export default function SignIn() {
  return (
    <section>
      <div
        className='absolute right-[120px] top-[100px] w-[486px] rounded-[20px] bg-white px-4 py-6
          shadow-super shadow-pink'>
        <div className='mb-9 flex justify-between'>
          <Link
            href='/sign-in'
            className='text-lg text-blue underline'>
            Увійти
          </Link>
          <Link
            href='/sign-up'
            className='text-lg text-blue'>
            Зареєструватися
          </Link>
        </div>
        <SignInForm />
      </div>
    </section>
  )
}
