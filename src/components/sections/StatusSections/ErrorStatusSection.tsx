import Button from '@/components/ui/Button'

export default function ErrorStatusSection() {
  return (
    <section className='relative'>
      <div
        className='absolute right-[16.5%] top-[100px] w-[486px] rounded-[20px] bg-white p-6
          shadow-super shadow-pink'>
        <p className='mb-9 text-lg'>
          Сталася помилка при спробі прийти в гості до санти :(. <br /> <br />
          1. Можливо ви вже є гостем у санти. <br />
          2. Можливо ви приєдналися пізніше аніж посилання завершило свою дію
          (5хв) 3. Можливо Санта 🎅 пішов пити какао ☕ , Зачекайте трохи, поки
          він повернеться з технічних робіт.
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
