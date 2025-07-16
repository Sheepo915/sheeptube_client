import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useForm, type ControllerRenderProps } from "react-hook-form";
import { VideoUploadSchema, type VideoUploadSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Loader2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios"
import type { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useUploadStore } from "@/stores/useUploadStore";
import { randomString } from "@/utils";

interface UploadVideoDialogProps extends DialogProps {
  className?: string,
}

const MotionLoader = motion(Loader2)

export default function UploadVideoDialog({ ...props }: UploadVideoDialogProps) {
  const navigate = useNavigate()
  const { addUpload, setProgress, setStatus } = useUploadStore.getState()

  const { formState, ...form } = useForm<VideoUploadSchemaType>({
    resolver: zodResolver(VideoUploadSchema)
  })

  const closeRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLInputElement>(null)
  const [video, setVideo] = useState<File>();
  const videoPreview = useMemo(() => {
    if (video) {
      return URL.createObjectURL(video as File);
    }
  }, [video]);

  function onDivClick() {
    if (videoRef.current !== null) {
      videoRef.current.click()
    }
  }

  function onDivKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault()
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onDivClick();
    }
  }

  function onVideoDrop(field: ControllerRenderProps<{
    video: File;
  }, "video">) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) {
        setVideo(file);
        field.onChange(file);
      }
    };
  }

  function onVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setVideo(e.target.files[0]);
      return e.target.files[0]
    }
  }

  async function onSubmit(data: VideoUploadSchemaType) {
    try {
      const videoId = randomString()

      addUpload({ videoId, name: data.video.name })

      const response = await axios.post("http://localhost:8080/upload", {
        video: data.video
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (e) => {
          const p = Math.round((e.loaded * 100) / (e.total || 1))
          setProgress(videoId, p)
        }
      })

      if (response.status !== 200) {
        setStatus(videoId, "error")
        toast("Upload failed", {
          duration: 5 * 1000,
          icon: <AlertTriangle />
        })
      } else {
        setStatus(videoId, "processing");
        toast("Upload will continue in the background", {
          duration: 5 * 1000,
          icon: <MotionLoader
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity
            }}
            className="size-4" />
        })
        if (closeRef.current !== null) {
          closeRef.current.click()
        }
      }

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview as string);
      }
    };
  }, [videoPreview]);

  return (
    <Dialog defaultOpen {...props}>
      <DialogContent
        className={twMerge("!max-w-[70vw]", props?.className)}
        showCloseButton={false}
        onInteractOutside={(e) => { e.preventDefault() }}
        onEscapeKeyDown={(e) => { e.preventDefault() }}
      >
        <DialogHeader>
          <DialogTitle>Upload your video</DialogTitle>
          <DialogDescription>Share your video with the public</DialogDescription>
        </DialogHeader>
        <Form formState={formState} {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-full">
            <AspectRatio ratio={4 / 2}>
              <FormField
                control={form.control}
                name="video"
                render={({ field }) =>
                  <FormItem
                    tabIndex={0}
                    className="flex flex-col flex-1 items-center justify-center gap-y-1 h-full border border-gray-400 border-dashed rounded-lg overflow-hidden ring-offset-background focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
                    onClick={onDivClick}
                    onKeyDown={onDivKeyDown}
                    onDrop={onVideoDrop(field)}
                    onDragOver={(e) => e.preventDefault()}>
                    {
                      form.getValues("video") && !formState.errors.video ?
                        <>
                          <video
                            src={videoPreview}
                            disablePictureInPicture
                            controls={false}
                            autoPlay={false}
                          />
                        </> :
                        <>
                          {
                            formState.errors.video ? (
                              <>
                                {formState.errors.video && (
                                  <p className="text-red-500 text-sm">
                                    {formState.errors.video.message}
                                  </p>
                                )}
                              </>
                            ) : (
                              <>
                                <Upload className="size-8 opacity-50" />
                                <span className="text-sm select-none">Drag and drop your video here</span>
                              </>
                            )
                          }
                        </>
                    }
                    <FormControl>
                      <Input
                        {...form.register("video")}
                        ref={videoRef}
                        type="file"
                        id="thumbnail"
                        accept="video/*"
                        hidden
                        disabled={field.disabled}
                        name={field.name}
                        onBlur={field.onBlur}
                        onChange={(e) => field.onChange(onVideoUpload(e))} />
                    </FormControl>
                  </FormItem>
                }
              />
              {video && <FormDescription>{(video as File).name}</FormDescription>}
            </AspectRatio>
            <DialogFooter className="mt-3">
              <Button type="button" variant="ghost" onClick={() => { navigate(-1) }}>Go back</Button>
              <Button type="submit" disabled={!video}>Upload</Button>
              <DialogClose ref={closeRef} hidden></DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog >
  )
}


