import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email('Невірний формат емейлу'),
  password: z.string().min(1, 'Пароль не може бути порожнім')
})

export const SignUpSchema = SignInSchema.extend({
  name: z.string().min(1, 'Імʼя не може бути порожнім'),
  password: z.string().min(7, 'Пароль має юути більшим 5 символів')
})

export type SignInType = z.infer<typeof SignInSchema>
export type SignUpType = z.infer<typeof SignUpSchema>
