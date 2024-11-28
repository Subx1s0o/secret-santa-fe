import React from 'react'
import { Room } from '@/types/room'

import MembersList from './MembersList'
import SantaMembersHeader from './SantaMembersHeader'

export default function SantaMembersList({
  santa
}: {
  santa: Room | undefined
}) {
  return (
    <div className='mb-2 px-[18px] py-3'>
      <SantaMembersHeader />
      <MembersList santa={santa} />
    </div>
  )
}
