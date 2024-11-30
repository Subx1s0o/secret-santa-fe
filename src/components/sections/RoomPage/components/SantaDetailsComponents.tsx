'use client'

import { Room } from '@/types/room'

import useFilteredUserIndices from '@/hooks/useFilteredUserIndices'
import { useRandomIndex } from '@/hooks/useRandomIndex'

import 'reactjs-popup/dist/index.css'

import dynamic from 'next/dynamic'

import MembersList from './SantaMembersList/MembersList'
import SantaMembersHeader from './SantaMembersList/SantaMembersHeader'
import SantasRandomizer from './SantasRandomizer'

const SantaPopup = dynamic(() => import('./SantaPopup'), { ssr: false })
export default function SantaDetailsComponents({
  session,
  santa
}: {
  santa: Room | undefined
  session: string | null
}) {
  const indicesWithFalseStatus = useFilteredUserIndices(santa)

  const { randomIndex, selectedUser, randomize, reset } = useRandomIndex()
  console.log(selectedUser)
  return (
    <div className='mb-2 py-3'>
      <div className='mb-10'>
        <SantaMembersHeader />
        <MembersList
          session={session}
          santa={santa}
          randomIndex={randomIndex}
        />
      </div>
      <div className='flex justify-end'>
        {santa?.randomizer && (
          <SantasRandomizer
            randomize={() =>
              randomize(indicesWithFalseStatus, 150, santa.users)
            }
            array={indicesWithFalseStatus}
          />
        )}
      </div>

      {selectedUser && (
        <SantaPopup
          reset={reset}
          user={selectedUser}
        />
      )}
    </div>
  )
}
