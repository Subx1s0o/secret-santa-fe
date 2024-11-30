import { Room } from '@/types/room'

import SantaDetailsComponents from './SantaDetailsComponents'

export default function SantaDetails({
  santa,
  session
}: {
  santa: Room | undefined
  session: string | null
}) {
  return (
    <SantaDetailsComponents
      santa={santa}
      session={session}
    />
  )
}
