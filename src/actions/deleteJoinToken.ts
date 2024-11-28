'use server'

import { cookies } from 'next/headers'

const deleteJoinToken = async () => {
  const cookie = cookies()
  cookie.delete('join_token')
}
export default deleteJoinToken
