import { useState } from 'react'
import { useSantaSocketStore } from '@/stores/useSantaSocketStore'
import { RoomUser } from '@/types/room'
import Popup from 'reactjs-popup'

import Button from '@/components/ui/Button'

export default function SantaPopup({
  user,
  reset,
  roomId
}: {
  roomId: string | undefined
  user: RoomUser
  reset: () => void
}) {
  const { socket } = useSantaSocketStore()
  const [open, setOpen] = useState(true)

  const checkedStatus = () => {
    setOpen(false)
    socket?.emit('checked-status', { roomId, userId: user.id })
  }
  return (
    <Popup
      contentStyle={{
        borderRadius: '20px',
        overflowY: 'auto',
        width: '600px',
        height: '600px',
        overscrollBehavior: 'contain',
        padding: '20px'
      }}
      open={open}
      modal
      onClose={() => reset()}>
      <div className='flex h-full flex-col'>
        <h3 className='mb-3 text-center text-xl'>{user.name}</h3>
        <div className='grid flex-1 grid-rows-2'>
          <div>
            <p className='mb-2 text-center text-lg'>Мріє про: </p>
            <p className='mb-3 text-md'>
              {user.wishes[0]?.content || 'Поки бажання немає('}
            </p>
          </div>
          <div>
            <p className='mb-3 text-center text-lg'>
              Відправляти з Лапландії сюди:
            </p>
            <p className='text-md'>
              {user.addresses[0]?.content || 'Поки Адреси немає('}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <Button
            variant='filled'
            className='text-md font-bold'
            onClick={() => setOpen(false)}>
            Спробувати ще раз
          </Button>
          <Button
            variant='filled'
            className='text-md font-bold'
            onClick={checkedStatus}>
            Взятися за Поадрунок
          </Button>
        </div>
      </div>
    </Popup>
  )
}
