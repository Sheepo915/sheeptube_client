import { z } from "zod";

const VideoUploadSchema = z.object({
  title: z.string().min(1, "Title is required").nonoptional(),
  description: z.string().min(10, "Description must be at least 10 characters").nonoptional(),
  thumbnail: z.instanceof(File).nonoptional(),
  video: z.instanceof(File).nonoptional(),
  tags: z.array(z.string()).nonoptional("The video need to have at least one tag"),
  models: z.array(z.string()).nonoptional("The video need to have at least one model")
});

export type VideoUploadSchemaType = z.infer<typeof VideoUploadSchema>;
export default VideoUploadSchema;
