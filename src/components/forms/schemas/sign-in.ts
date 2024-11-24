import { z } from "zod";

export const SignInSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(5, "Пароль має бути більше 5 символів")
})

export type SignInType = z.infer<typeof SignInSchema>;