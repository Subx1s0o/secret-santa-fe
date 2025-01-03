import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Правила Санти',
  description: 'Made by Subx1s0o :)'
}

export default function page() {
  return (
    <section>
      <div
        className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px]
          bg-primary-pink px-[80px] py-[50px]'>
        <div className='w-[996px] rounded-[20px] bg-white p-8'>
          <h2 className='mb-6 text-center text-lg font-bold'>
            Щоб розібратись
          </h2>
          <ol className='flex flex-col gap-3'>
            <li>
              <p className='text-lg'>
                1. Для початку вам треба увійти або зареєструватись.
              </p>
            </li>
            <li>
              <p className='text-lg'>
                2. Далі ви можете створити свого таємного Санту або взяти участь
                за запрошенням. Ваше запрошення буде у виглляді посилання, яку
                вкаже організатор. Тепер вам треба навпроти свого імені написати
                бажаний подарунок та вказати дані для його відправки.
              </p>
            </li>
            <li>
              <p className='text-lg'>
                3.Можна провести жеребкування;) після того, як всі учасники
                Санти заповнять свої поля, або ж окремо не чекаючи цього.
              </p>
            </li>
            <li>
              <p className='text-lg'>
                4. Приготуйте подарунок для людини, яку обрало для вас
                жеребкування, та відправте його на зазначену адресу (до речі, з
                подарунком можете вказати своє ім’я або залишитись таємним
                Сантою).
              </p>
            </li>
            <li>
              <p className='text-lg'>
                5. Ну, от і все! Тепер залишилось дочекатись на свій подарунок;)
                З прийдешніми святами!
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
