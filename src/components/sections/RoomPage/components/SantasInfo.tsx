import { Room } from '@/types/room'

import SantaCopyingLinkButton from '@/components/ui/SantaCopyingLinkButton'

export default function SantasInfo({ santa }: { santa: Room }) {
  return (
    <div className='mb-[42px] flex items-center justify-between'>
      <h1 className='text-xl'>{santa.title}</h1>
      <p className='absolute left-1/2 -translate-x-1/2 text-md'>
        Грошове обмеження - {santa.limit}грн
      </p>
      <SantaCopyingLinkButton
        className='text-md text-blue'
        initialText='Скопіювати посилання санти'
        link={santa.url}
      />
    </div>
  )
}
