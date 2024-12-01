import { getRooms } from '@/actions/getRooms'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import SantasList from './SantasList'

export default async function SantasSection() {
  const client = new QueryClient()

  await client.prefetchQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
    staleTime: 1000 * 60 * 60 * 1
  })

  return (
    <div
      className='absolute right-[120px] top-[100px] rounded-[20px] bg-primary-pink px-[80px]
        py-[50px]'>
      <div className='relative min-h-[350px] w-[600px] rounded-[20px] bg-white p-8'>
        <h2 className='mb-6 text-lg font-bold'>Всі ваші Санти</h2>
        <HydrationBoundary state={dehydrate(client)}>
          <SantasList />
        </HydrationBoundary>
      </div>
    </div>
  )
}
