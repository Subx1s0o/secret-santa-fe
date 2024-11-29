import { z } from "zod";

export const createSantaSchema = z.object({
  title: z.string().min(1, "Поле Імені Санти не може бути порожнім"),
  limit: z
    .preprocess(
      (value) => (value === "" || value === null ? undefined : Number(value)), 
      z.number().optional()
    ),
  randomizer: z.boolean(),
});

export type CreateSantaType = z.infer<typeof createSantaSchema>