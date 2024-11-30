'use client'

import React from 'react'

export default function error() {
  return (
    <div
      className='absolute right-[15.5%] top-[200px] flex h-[300px] w-[620px] flex-col gap-[36px]
        rounded-[20px] bg-white p-7 shadow-super shadow-pink'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <p className='text-lg'>Ойй!!, Такого санти немає(, створи його!</p>
      </div>
    </div>
  )
}
