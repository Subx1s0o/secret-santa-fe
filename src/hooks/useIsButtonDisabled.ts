import { useEffect, useState } from 'react'
import { Santa } from '@/types/santa'

export default function useIsButtonDisabled(
  santa: Santa | undefined,
  userId: string | undefined
) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    if (santa?.users) {
      const currentUserChoosed = santa.users.some(
        user =>
          user.id === userId &&
          user.choosed.some(choice => choice.choosed === true)
      )
      setIsButtonDisabled(currentUserChoosed)
    } else {
      setIsButtonDisabled(false)
    }
  }, [santa, userId])

  return isButtonDisabled
}
