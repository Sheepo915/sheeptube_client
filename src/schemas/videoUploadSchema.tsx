import { z } from "zod";

const VideoUploadSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  thumbnail: z.instanceof(File).refine((file) => file instanceof File, "Thumbnail is required"),
  video: z.instanceof(File).refine((file) => file instanceof File, "Video is required"),
});

export type VideoUploadSchemaType = z.infer<typeof VideoUploadSchema>;
export default VideoUploadSchema;
