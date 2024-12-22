'use server'

import { cookies } from 'next/headers'

const deleteJoinToken = async () => {
  const cookie = cookies()
  cookie.delete('join_token')
  cookie.delete('join_token_created_at')
}
export default deleteJoinToken
