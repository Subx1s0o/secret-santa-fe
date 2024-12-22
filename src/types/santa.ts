export type SantaUser = {
  id: string
  name: string
  email: string
  choosed: Array<{
    choosed: boolean
  }>
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

export type Santa = {
  id: string
  title: string
  owner: string
  limit?: number
  url: string
  randomizer: boolean
  users: SantaUser[]
}
