import Button from '../ui/Button'

export default function Success() {
  return (
    <section className='relative'>
      <div
        className='absolute right-[16.5%] top-[100px] w-[486px] rounded-[20px] bg-white p-6
          shadow-super shadow-pink'>
        <p className='text-lg mb-9'>
          Нарешті починається магія обміну подарунками 🎁
          <br />
          Долучайтеся, тягніть свого Санту та даруйте радість!
        </p>
        <Button
          variant='filled'
          type='submit'
          className='mx-auto'>
          Мій Санта
        </Button>
      </div>
    </section>
  )
}
