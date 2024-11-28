import { z } from 'zod'

export const WishSchema = z.object({
  wish: z.string().min(1, 'Бажання не може бути пусте')
})

export type WishType = z.infer<typeof WishSchema>
