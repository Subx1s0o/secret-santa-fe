import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Незнайдена сторінка Санти',
  description: 'Made by Subx1s0o :)'
}

export default function NotFound() {
  return (
    <div
      className='absolute right-[15.5%] top-[200px] flex h-[300px] w-[620px] flex-col gap-[36px]
        rounded-[20px] bg-white p-7 shadow-super shadow-pink'>
      <div className='absolute inset-0 flex items-center justify-center p-7'>
        <p className='text-center text-lg'>
          Не раджу шукати тут Діда мороза, його зʼїли Ельфи.
        </p>
      </div>
    </div>
  )
}
