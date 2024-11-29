import cn from '@/lib/cn'
import { Room } from '@/types/room'

import SantaCopyingLinkButton from '@/components/ui/SantaCopyingLinkButton'

export default function SantasInfo({ santa }: { santa: Room }) {
  return (
    <div className='mb-[42px] flex items-center justify-between'>
      <h1
        className={cn(
          'max-w-[500px] overflow-hidden text-ellipsis text-nowrap text-xl',
          {
            'max-w-[300px]': santa.limit
          }
        )}>
        {santa.title}
      </h1>
      {santa.limit && (
        <p className='absolute left-1/2 -translate-x-1/2 text-md'>
          Грошове обмеження - {santa.limit}грн
        </p>
      )}
      <SantaCopyingLinkButton
        className='text-md text-blue'
        initialText='Скопіювати посилання санти'
        link={santa.url}
      />
    </div>
  )
}
