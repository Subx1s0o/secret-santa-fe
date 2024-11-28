import { Room } from '@/types/room'

import AddressForm from '@/components/forms/WishAndAddressForms/AddressForm'
import WishForm from '@/components/forms/WishAndAddressForms/WishForm'
import SantaCopyingLinkButton from '@/components/ui/SantaCopyingLinkButton'

interface MembersListServerProps {
  santa: Room | undefined
  session: string | null
}

export default function MembersList({
  santa,
  session
}: MembersListServerProps) {
  return (
    <ul className='flex max-h-[400px] flex-col gap-2 overflow-y-auto overscroll-contain'>
      {santa?.users.map((user, index) => (
        <li
          key={user.email}
          className='relative flex items-center border-b border-grey px-2 py-3'>
          <SantaCopyingLinkButton
            link={user.name}
            initialText={`${index + 1}. ${user.name}`}
            className='flex max-w-[200px] gap-2 overflow-hidden text-ellipsis text-md'
          />
          <SantaCopyingLinkButton
            link={user.email}
            initialText={user.email}
            className='absolute left-[240px] max-w-[150px] overflow-hidden text-ellipsis text-md'
          />

          <WishForm
            roomId={santa.id}
            token={session}
            user={user}
          />
          <AddressForm
            roomId={santa.id}
            token={session}
            user={user}
          />
        </li>
      ))}
    </ul>
  )
}
