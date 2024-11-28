import { Room } from '@/types/room'

import MembersList from './MembersList'
import SantaMembersHeader from './SantaMembersHeader'

export default function SantaMembersList({
  santa,
  session
}: {
  santa: Room | undefined
  session: string | null
}) {
  return (
    <div className='mb-2 px-[18px] py-3'>
      <SantaMembersHeader />
      <MembersList
        session={session}
        santa={santa}
      />
    </div>
  )
}
