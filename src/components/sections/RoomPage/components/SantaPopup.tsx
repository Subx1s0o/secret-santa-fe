import { RoomUser } from '@/types/room'
import Popup from 'reactjs-popup'

export default function SantaPopup({
  user,
  reset
}: {
  user: RoomUser
  reset: () => void
}) {
  const handleClose = () => {
    reset() // Викликаємо reset вручну, коли закриваємо Popup
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
      open={true}
      modal
      onClose={handleClose}>
      {' '}
      {/* Перевіряємо, чи закривається Popup */}
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
      </div>
    </Popup>
  )
}
