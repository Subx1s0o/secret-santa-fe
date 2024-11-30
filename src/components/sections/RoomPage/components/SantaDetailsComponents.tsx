'use client'

import { Room } from '@/types/room'

import { useRandomIndex } from '@/hooks/useRandomIndex'
import { useUser } from '@/hooks/useUser'

import MembersList from './SantaMembersList/MembersList'
import SantaMembersHeader from './SantaMembersList/SantaMembersHeader'
import SantasRandomizer from './SantasRandomizer'

export default function SantaDetailsComponents({
  session,
  santa
}: {
  santa: Room | undefined
  session: string | null
}) {
  const me = useUser()

  // Отримуємо індекси користувачів, у яких статус = false та виключаємо себе
  const indicesWithFalseStatus =
    santa?.users
      .map((user, index) => {
        return user.statusses[0]?.status === false && user.id !== me?.id
          ? index
          : -1
      })
      .filter(index => index !== -1) || []

  const { randomIndex, selectedUser, randomize } = useRandomIndex()
  console.log(selectedUser)
  return (
    <div className='mb-2 px-[18px] py-3'>
      <SantaMembersHeader />
      <MembersList
        session={session}
        santa={santa}
        randomIndex={randomIndex}
      />
      {santa?.randomizer && (
        <SantasRandomizer
          randomize={() => randomize(indicesWithFalseStatus, 150, santa.users)} // Передаємо користувачів для визначення обраного
          array={indicesWithFalseStatus}
        />
      )}

      {/* Виведення вибраного користувача */}

      {selectedUser && (
        <div>
          <h3>Обраний користувач:</h3>
          <p>{selectedUser.name}</p>
        </div>
      )}
    </div>
  )
}
