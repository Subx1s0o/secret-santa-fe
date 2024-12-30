import { useMemo } from 'react'
import { SantaUser } from '@/types/santa'

export const useChoosedUser = (
  users: SantaUser[] | undefined,
  indicesWithFalseStatus: number[] | undefined,
  index: number
) => {
  return useMemo(() => {
    if (!users || !indicesWithFalseStatus) return null
    if (indicesWithFalseStatus.includes(index)) {
      return users[index]
    }

    return null
  }, [users, indicesWithFalseStatus, index])
}
