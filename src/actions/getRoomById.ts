import { Room } from "@/types/room"
import { getSession } from "./getSession"

export const getRoomById = async (roomId: string): Promise<Room | null> => {
  try {
    const session = await getSession()
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`,
      {
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${session}`,
        },
      }
    )

    if (!response.ok) {

      return null
    }

    const room = (await response.json()) as Room

    return room
  } catch  {

    return null
  }
}
