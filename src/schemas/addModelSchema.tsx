import { z } from "zod"

const AddModelSchema = z.object({
  model: z.string()
})

export type AddModelSchemaType = z.infer<typeof AddModelSchema>;
export default AddModelSchema;