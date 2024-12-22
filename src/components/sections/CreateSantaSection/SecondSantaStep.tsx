import Button from '@/components/ui/Button'
import SantaCopyingLinkButton from '@/components/ui/SantaCopyingLinkButton'

export default function SecondSantaStep({ santaUrl }: { santaUrl: string }) {
  return (
    <div className='contents'>
      <p className='text-center text-md'>крок 2 з 2</p>
      <h2 className='text-center text-lg'>Вітаю</h2>

      <div className='flex flex-col items-center gap-3'>
        <p className='text-center text-md'>Ваше посилання на санту</p>
        <SantaCopyingLinkButton
          initialText={santaUrl}
          className='max-w-[500px] overflow-hidden text-ellipsis text-nowrap px-6 py-3 text-md
            text-blue'
          link={santaUrl}
        />

        <p className='max-w-[325px] text-center text-md'>
          Відправте його учасникам, щоб вони долучились
        </p>
      </div>
      <Button
        variant='filled'
        activate='link'
        href='/santas'
        className='mt-4 text-center'>
        Мої санти
      </Button>
    </div>
  )
}
