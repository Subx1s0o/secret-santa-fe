import Button from '../ui/Button'

export default function UserInfo() {
  return (
    <div className='flex items-center gap-4'>
      <p className='text-md text-blue'>Можливе Імʼя</p>
      <Button variant='bordered'>
        <p>Вихід</p>
      </Button>
    </div>
  )
}
