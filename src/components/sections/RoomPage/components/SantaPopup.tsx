'use client'

import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { RoomUser } from '@/types/room'
import Popup from 'reactjs-popup'

import Button from '@/components/ui/Button'

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export default function SantaPopup({
  user,
  reset,
  roomId,
  open,
  setOpen
}: {
  roomId: string | undefined
  user: RoomUser | null
  reset: () => void
  open: boolean
  setOpen: (bool: boolean) => void
}) {
  const { socket } = useSantaSocketStore()

  useLockBodyScroll(open)

  const checkedStatus = () => {
    setOpen(false)
    socket?.emit('checked-status', { roomId, userId: user?.id })
  }

  const handleClose = () => {
    reset()
    setOpen(false)
  }

  return (
    <Popup
      contentStyle={{
        borderRadius: '20px',
        overflowY: 'auto',
        width: '650px',
        height: '650px',
        padding: '20px'
      }}
      open={open}
      modal
      onClose={handleClose}>
      <div className='flex h-full flex-col'>
        <h3 className='mb-3 text-center text-xl'>{user?.name}</h3>
        <div className='mb-5'>
          <div className='flex h-[230px] flex-col'>
            <h2 className='mb-2 flex justify-center text-lg'>Мріє про: </h2>
            <p className='mb-3 overflow-y-auto overscroll-contain whitespace-normal break-words text-md'>
              {user?.wishes[0]?.content || 'Поки бажання немає('}
            </p>
          </div>
          <div className='flex h-[230px] flex-col'>
            <h2 className='mb-3 flex justify-center text-lg'>
              Відправляти з Лапландії сюди:
            </h2>
            <p className='overflow-y-auto overscroll-contain whitespace-normal break-words text-md'>
              {user?.addresses[0]?.content || 'Поки Адреси немає('}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Button
            variant='filled'
            className='text-md font-bold'
            onClick={() => setOpen(false)}>
            Сховати
          </Button>
          <Button
            variant='filled'
            className='text-md font-bold'
            onClick={checkedStatus}>
            Потішити Подаруночком
          </Button>
        </div>
      </div>
    </Popup>
  )
}
