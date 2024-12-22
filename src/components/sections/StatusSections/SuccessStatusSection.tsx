import Button from '../../ui/Button'

export default function SuccessStatusSection() {
  return (
    <section className='relative'>
      <div
        className='absolute right-[16.5%] top-[100px] w-[486px] rounded-[20px] bg-white p-6
          shadow-super shadow-pink'>
        <p className='mb-9 text-lg'>
          Нарешті починається магія обміну подарунками 🎁
          <br />
          Долучайтеся, тягніть свого Санту та даруйте радість!
        </p>
        <Button
          variant='filled'
          href='/santas'
          activate='link'
          className='mx-auto table'>
          Мій Санта
        </Button>
      </div>
    </section>
  )
}
