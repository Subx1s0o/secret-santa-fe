'use client'

import { Santa } from '@/types/santa'

import useFilteredUserIndices from '@/hooks/useFilteredUserIndices'
import { useRandomIndex } from '@/hooks/useRandomIndex'

import 'reactjs-popup/dist/index.css'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import SantasRandomizer from '@/components/features/SantasRandomizer'

import useIsButtonDisabled from '@/hooks/useIsButtonDisabled'
import { useUser } from '@/hooks/useUser'

import MembersList from '../SantaMembersList/MembersList'
import SantaMembersHeader from '../SantaMembersList/SantaMembersHeader'

const SantaPopup = dynamic(() => import('@/components/features/SantaPopup'), {
  ssr: false
})

export default function SantaDetails({
  session,
  santa
}: {
  santa: Santa | undefined
  session: string | null
}) {
  const indicesWithFalseStatus = useFilteredUserIndices(santa)
  const [open, setOpen] = useState(false)
  const { randomIndex, selectedUser, randomize, reset } = useRandomIndex()
  const me = useUser()
  useEffect(() => {
    reset()
  }, [reset, santa])

  useEffect(() => {
    if (selectedUser) {
      setOpen(true)
    }
  }, [selectedUser])

  const isAlredyChoosedSomeone = useIsButtonDisabled(santa, me?.id)

  return (
    <div className='mb-2 py-3'>
      <div className='mb-10'>
        <SantaMembersHeader />
        <MembersList
          disableChoosingUser={isAlredyChoosedSomeone}
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
            disabled={
              indicesWithFalseStatus.length === 0 || isAlredyChoosedSomeone
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
          santaId={santa?.id}
          reset={reset}
          user={selectedUser}
        />
      )}
    </div>
  )
}
