import { z } from "zod"

const AddTagSchema = z.object({
  tag: z.string()
})

export type AddTagSchemaType = z.infer<typeof AddTagSchema>;
export default AddTagSchema;