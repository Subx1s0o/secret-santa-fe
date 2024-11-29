export type RoomUser = {
  name: string
  email: string
  wishes: Array<{
    content: string
  }>
  addresses: Array<{
    content: string
  }>
}

export type Room = {
  id: string
  title: string
  owner: string
  limit?: number
  url: string
  users: RoomUser[]
}
