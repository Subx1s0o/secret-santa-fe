import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import StatusHandler from './StatusHandler'

interface PageProps {
  params: { status: 'success' | 'failed' }
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { status } = params

  if (status === 'success') {
    return {
      title: 'Успішно увійшли до санти :)',
      description:
        'Ця сторінка підтверджує успішний вхід до Санти. Насолоджуйтесь святковим настроєм!'
    }
  }

  if (status === 'failed') {
    return {
      title: 'Невдалося увійти до санти :(',
      description:
        'Ця сторінка відображається при невдалій спробі увійти до Санти. Спробуйте ще раз!'
    }
  }

  return notFound()
}

export default function StatusPage({ params }: PageProps) {
  return <StatusHandler status={params.status} />
}
