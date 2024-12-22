import { getSantaById } from '@/actions/getSantaById'
import { getSession } from '@/actions/getSession'

import SantaPage from '@/components/sections/SantaPage/SantaPage'

export default async function SantaIdPage({
  params
}: {
  params: { santaId: string }
}) {
  const [santa, session] = await Promise.all([
    getSantaById(params.santaId),
    getSession()
  ])

  if (!santa) {
    return (
      <div
        className='absolute right-[15.5%] top-[200px] flex h-[300px] w-[620px] flex-col gap-[36px]
          rounded-[20px] bg-white p-7 shadow-super shadow-pink'>
        <div className='absolute inset-0 flex items-center justify-center p-7'>
          <p className='text-lg'>Ойй!!, Такого санти немає, створи його!</p>
        </div>
      </div>
    )
  }

  return (
    <SantaPage
      session={session}
      santaId={params.santaId}
      santa={santa}
    />
  )
}
