export type RoomUser = {
  name: string
  email: string
  wishes: Array<{
    content: string
  }>
  addresses: Array<{
    content: string
  }>
  statusses: Array<{
    status: boolean
  }>
}

export type Room = {
  id: string
  title: string
  owner: string
  limit?: number
  url: string
  randomizer: boolean
  users: RoomUser[]
}
