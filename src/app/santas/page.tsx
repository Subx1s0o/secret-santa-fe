import { getSession } from '@/actions/getSession'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import Image from 'next/image'

import JoinConnect from '@/components/common/JoinConnect'
import SantasSection from '@/components/sections/SantasSection/SantasSection'

export const metadata: Metadata = {
  title: 'Мій Санта',
  description: 'Made by Subx1s0o :)'
}

export default async function Rooms() {
  const token = cookies().get('join_token')?.value
  const session = await getSession()
  //Треба зробити перевірку на життя токену.

  return (
    <section>
      <SantasSection />

      {token && session && (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-turquoise text-xl'>
            <Image
              src='/santa-gif.webp'
              width={600}
              height={600}
              alt='Santa gif'
            />
          </div>
          <JoinConnect
            token={token}
            session={session}
          />
        </>
      )}
    </section>
  )
}
