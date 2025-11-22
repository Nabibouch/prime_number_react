import { z } from "zod"

const numberSchema = z.object({
  number: z.number().min(0).max(999),
});

export async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const raw = { number: Math.floor(Math.random() * 1000) }
  return numberSchema.parse(raw)
}

