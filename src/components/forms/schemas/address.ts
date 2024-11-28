import { z } from "zod";


export const AddressSchema = z.object({
  address: z.string().min(1,"Адреса не може бути пуста"),
 })

export type AddressType = z.infer<typeof AddressSchema>;

