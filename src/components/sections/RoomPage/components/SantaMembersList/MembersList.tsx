import cn from '@/lib/cn'
import { Room, RoomUser } from '@/types/room'
import Image from 'next/image'

import AddressForm from '@/components/forms/WishAndAddressForms/AddressForm'
import WishForm from '@/components/forms/WishAndAddressForms/WishForm'
import SantaCopyingLinkButton from '@/components/ui/SantaCopyingLinkButton'

import UserGiftCheckbox from './UserGiftCheckbox'

export default function MembersList({
  santa,
  session,
  randomIndex,
  selectedUser,
  reset,
  indicesWithFalseStatus
}: {
  santa: Room | undefined
  session: string | null
  randomIndex: number | null
  selectedUser: RoomUser | null
  reset: () => void
  indicesWithFalseStatus: number[]
}) {
  return (
    <ul className='flex max-h-[400px] flex-col gap-2 overflow-y-auto overscroll-contain px-[18px]'>
      {santa?.users.map((user, index) => {
        return (
          <li
            key={user.email}
            className={cn(
              'relative flex items-center border-b border-grey px-2 py-3',
              {
                '!rounded-lg !border-2 !border-red': index === randomIndex
              }
            )}>
            <div className='flex items-center gap-2'>
              <UserGiftCheckbox
                reset={reset}
                selectedUser={selectedUser}
                status={user.statusses[0].status}
                userEmail={user.email}
                roomId={santa.id}
                users={santa.users}
                indicesWithFalseStatus={indicesWithFalseStatus}
                userIndex={index}
              />
              <SantaCopyingLinkButton
                link={user.name}
                initialText={`${user.name}`}
                className='max-w-[200px] gap-2 overflow-hidden text-ellipsis text-nowrap text-md'
              />
            </div>
            <SantaCopyingLinkButton
              link={user.email}
              initialText={user.email}
              className='absolute left-[225px] max-w-[150px] overflow-hidden text-ellipsis text-nowrap
                text-md'
            />
            <WishForm
              roomId={santa.id}
              token={session}
              user={user}
              random={santa.randomizer}
            />
            <AddressForm
              roomId={santa.id}
              token={session}
              user={user}
              random={santa.randomizer}
            />
            {index === randomIndex && (
              <div>
                <Image
                  src='/gift.webp'
                  width={50}
                  alt='gift'
                  className='absolute -left-[25px] -top-[3px] z-10'
                  height={50}
                />
                <Image
                  src='/gift.webp'
                  width={50}
                  alt='gift'
                  className='absolute -right-[25px] -top-[3px] z-10'
                  height={50}
                />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
