import { useState } from 'react'
import cn from '@/lib/cn'
import { RoomUser } from '@/types/room'
import dynamic from 'next/dynamic'

import { useChoosedUser } from '@/hooks/useChoosedUser'
import { useUser } from '@/hooks/useUser'

const SantaPopup = dynamic(() => import('../SantaPopup'), { ssr: false })

export default function UserGiftCheckbox({
  status,
  userEmail,
  roomId,

  reset,
  users,
  indicesWithFalseStatus,
  userIndex
}: {
  status: boolean
  userEmail: string
  roomId: string
  users: RoomUser[]
  reset: () => void
  indicesWithFalseStatus: number[]
  userIndex: number
}) {
  const [open, setOpen] = useState(false)
  const [choosedUser, setChoosedUser] = useState<RoomUser | null>(null)
  const storedUser = useUser()

  const chosen = useChoosedUser(users, indicesWithFalseStatus, userIndex)
  const handleClick = () => {
    if (!status) {
      setChoosedUser(chosen)
      setOpen(true)
    }
  }

  if (storedUser?.email !== userEmail) {
    return (
      <button
        disabled={status}
        onClick={handleClick}
        className={cn(
          'flex size-6 items-center justify-center rounded-lg border-2 border-grey',
          {
            'border-blue': status
          }
        )}>
        {status ? (
          <img
            loading='eager'
            src='/gift.svg'
            width={16}
            alt=''
            height={16}
          />
        ) : (
          <SantaPopup
            open={open}
            setOpen={setOpen}
            user={choosedUser}
            reset={reset}
            roomId={roomId}
          />
        )}
      </button>
    )
  }

  return null
}
