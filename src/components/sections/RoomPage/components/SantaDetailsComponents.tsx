'use client'

import { Room } from '@/types/room'

import useFilteredUserIndices from '@/hooks/useFilteredUserIndices'
import { useRandomIndex } from '@/hooks/useRandomIndex'

import 'reactjs-popup/dist/index.css'

import { useEffect, useState } from 'react'
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
  const [open, setOpen] = useState(false)
  const { randomIndex, selectedUser, randomize, reset } = useRandomIndex()

  useEffect(() => {
    reset()
  }, [santa])

  useEffect(() => {
    if (selectedUser) {
      setOpen(true)
    }
  }, [selectedUser])

  return (
    <div className='mb-2 py-3'>
      <div className='mb-10'>
        <SantaMembersHeader />
        <MembersList
          reset={reset}
          session={session}
          santa={santa}
          randomIndex={randomIndex}
          indicesWithFalseStatus={indicesWithFalseStatus}
        />
      </div>
      <div className='mb-10 flex justify-end'>
        {santa?.randomizer && (
          <SantasRandomizer
            randomize={() =>
              randomize(indicesWithFalseStatus, 150, santa.users)
            }
            array={indicesWithFalseStatus}
          />
        )}
      </div>
      <p className='text-center text-md'>
        Примітка: якщо ви хочете самостійно обрати учасника, натисніть на
        доступний блок поруч з ім’ям людини
      </p>

      {selectedUser && (
        <SantaPopup
          open={open}
          setOpen={setOpen}
          roomId={santa?.id}
          reset={reset}
          user={selectedUser}
        />
      )}
    </div>
  )
}
