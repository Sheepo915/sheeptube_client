import { z } from "zod";

const VideoUploadSchema = z.object({
  video: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      error: "Upload a valid video file",
    }),
});

export type VideoUploadSchemaType = z.infer<typeof VideoUploadSchema>;
export default VideoUploadSchema;
