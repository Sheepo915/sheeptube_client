import InputGroup from "@/components/InputGroup";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VideoUploadSchema, type VideoUploadSchemaType } from "@/schemas";

const alertContents = {
  thumbnail: {
    title: "Replace thumbnail?",
    content: "You’re about to replace your previously uploaded thumbnail. Continue?",
  },
  video: {
    title: "Replace video?",
    content: "You’re about to replace your previously uploaded video file. Continue?",
  },
};

type AlertType = "thumbnail" | "video" | null;

export default function UploadVideo() {
  const { formState, ...form } = useForm<VideoUploadSchemaType>({
    resolver: zodResolver(VideoUploadSchema),
  });

  const thumbnailRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const [thumbnail, setThumbnail] = useState<File>();
  const [video, setVideo] = useState<File>();
  const [showReplaceDialog, setShowReplaceDialog] = useState(false);
  const [alertContent, setAlertContent] = useState<AlertType>(null);

  const thumbnailPreview = useMemo(() => {
    if (thumbnail) {
      return URL.createObjectURL(thumbnail as File);
    }
  }, [thumbnail]);

  const videoPreview = useMemo(() => {
    if (video) {
      return URL.createObjectURL(video as File);
    }
  }, [video]);

  function onThumbnailUploadClick() {
    if (thumbnail) {
      setAlertContent("thumbnail");
      setShowReplaceDialog(true);
    } else {
      thumbnailRef.current?.click();
    }
  }

  function onVideoUploadClick() {
    if (video) {
      setAlertContent("video");
      setShowReplaceDialog(true);
    } else {
      videoRef.current?.click();
    }
  }

  function onConfirmReplace() {
    setShowReplaceDialog(false);
    if (alertContent === "thumbnail") {
      setTimeout(() => thumbnailRef.current?.click(), 100);
    } else if (alertContent === "video") {
      setTimeout(() => videoRef.current?.click(), 100);
    }
    setAlertContent(null);
  }

  function onThumbnailUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setThumbnail(e.target.files[0]);
    }
  }

  function onVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setVideo(e.target.files[0]);
    }
  }

  function onSubmit(data: VideoUploadSchemaType) {
    console.log(data, thumbnail, videoPreview);
  }

  useEffect(() => {
    return () => {
      if (thumbnailPreview) {
        URL.revokeObjectURL(thumbnailPreview as string);
      }
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview as string);
      }
    };
  }, [thumbnailPreview, videoPreview]);

  return (
    <>
      <section className="space-y-2 px-3 py-2">
        <div className="font-bold text-2xl">Upload a new video</div>
        <Separator />
        <div className="grid grid-cols-2 grid-rows-1">
          <Form formState={formState} {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-2.5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <InputGroup>
                      <FormLabel>Video Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Video Title" {...field} />
                      </FormControl>
                      {formState.errors.title && (
                        <p className="text-red-500 text-sm">{formState.errors.title.message}</p>
                      )}
                    </InputGroup>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <InputGroup>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          id="description"
                          {...form.register("description")}
                          placeholder="Type your video description here."
                          rows={10}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      {formState.errors.description && (
                        <p className="text-red-500 text-sm">
                          {formState.errors.description.message}
                        </p>
                      )}
                    </InputGroup>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thumbnail"
                render={() => (
                  <FormItem>
                    <InputGroup>
                      <FormLabel>Upload your thumbnail</FormLabel>
                      <div className="flex gap-x-3">
                        <div className="w-64 cursor-pointer" onClick={onThumbnailUploadClick}>
                          <AspectRatio
                            ratio={16 / 9}
                            className="flex flex-col justify-center items-center px-12 outline-1 outline-gray-200 rounded-lg"
                          >
                            <Image className="size-6" />
                            <span className="font-thin text-sm text-center">
                              Upload a good thumbnail to attract views
                            </span>
                          </AspectRatio>
                        </div>
                        {thumbnail && (
                          <div className="w-64">
                            <AspectRatio
                              ratio={16 / 9}
                              className="flex justify-center items-center overflow-hidden bg-black outline-1 outline-gray-200 rounded-lg"
                            >
                              <img src={thumbnailPreview} />
                            </AspectRatio>
                          </div>
                        )}
                      </div>
                      {thumbnail && <FormDescription>{(thumbnail as File).name}</FormDescription>}
                      <Input
                        ref={thumbnailRef}
                        type="file"
                        id="thumbnail"
                        accept="image/*"
                        hidden
                        onChange={onThumbnailUpload}
                      />
                    </InputGroup>
                  </FormItem>
                )}
              />
              <FormItem>
                <FormField
                  control={form.control}
                  name="video"
                  render={() => (
                    <InputGroup>
                      <FormLabel>Upload your video</FormLabel>
                      <div className="flex gap-x-3">
                        <div className="w-64 cursor-pointer" onClick={onVideoUploadClick}>
                          <AspectRatio
                            ratio={16 / 9}
                            className="flex flex-col justify-center items-center px-12 outline-1 outline-gray-200 rounded-lg"
                          >
                            <Image className="size-6" />
                            <span className="font-thin text-sm text-center">Upload your video</span>
                          </AspectRatio>
                        </div>
                        {video && (
                          <div className="w-64">
                            <AspectRatio
                              ratio={16 / 9}
                              className="flex justify-center items-center overflow-hidden bg-black outline-1 outline-gray-200 rounded-lg"
                            >
                              <video
                                src={videoPreview}
                                disablePictureInPicture
                                controls={false}
                                autoPlay={false}
                              />
                            </AspectRatio>
                          </div>
                        )}
                      </div>
                      {video && <FormDescription>{(video as File).name}</FormDescription>}
                      <Input
                        ref={videoRef}
                        type="file"
                        id="thumbnail"
                        accept="video/*"
                        hidden
                        onChange={onVideoUpload}
                      />
                    </InputGroup>
                  )}
                />
              </FormItem>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </section>
      {alertContent && (
        <AlertDialog open={showReplaceDialog} onOpenChange={setShowReplaceDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertContents[alertContent].title}</AlertDialogTitle>
              <AlertDialogDescription>{alertContents[alertContent].content}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onConfirmReplace}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
