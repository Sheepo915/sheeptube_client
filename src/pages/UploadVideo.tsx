import InputGroup from "@/components/form/InputGroup";
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
import { VideoMetadataSchema, type VideoMetadataSchemaType } from "@/schemas";
import { MultiSelect } from "@/components/ui/multi-select";
import AddTagsDialog from "@/components/dialog/AddTagDialog";
import AddModelDialog from "@/components/dialog/AddModelDialog";
import UploadVideoDialog from "@/components/dialog/UploadVideoDialog";
import { useUploadStore } from "@/stores/useUploadStore";
import { randomString } from "@/utils";
import { Progress } from "@/components/ui/progress";
import WavyText from "@/components/animated/WavyText";

const alertContents = {
  title: "Replace thumbnail?",
  content: "You’re about to replace your previously uploaded thumbnail. Continue?",
};

const tags = [
  { label: "Tag A", value: "tag_a" },
  { label: "Tag B", value: "tag_b" },
  { label: "Tag C", value: "tag_c" },
  { label: "Tag D", value: "tag_d" },
  { label: "Tag E", value: "tag_e" },
];

const models = [
  { label: "Model A", value: "model_a" },
  { label: "Model B", value: "model_b" },
  { label: "Model C", value: "model_c" },
  { label: "Model D", value: "model_d" },
  { label: "Model E", value: "model_e" },
];

export default function UploadVideo() {
  const videoId = useMemo(() => randomString(), []);
  const { uploads } = useUploadStore();

  const { formState, ...form } = useForm<VideoMetadataSchemaType>({
    resolver: zodResolver(VideoMetadataSchema),
  });

  const thumbnailRef = useRef<HTMLInputElement>(null);
  const [thumbnail, setThumbnail] = useState<File>();
  const [showReplaceDialog, setShowReplaceDialog] = useState(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const thumbnailPreview = useMemo(() => {
    if (thumbnail) {
      return URL.createObjectURL(thumbnail as File);
    }
  }, [thumbnail]);

  const videoPreview = useMemo(() => {
    const video = uploads[videoId]?.video;
    if (video) {
      return URL.createObjectURL(video as File);
    }
  }, [uploads, videoId]);

  function onThumbnailUploadClick() {
    if (thumbnail) {
      setShowAlert(true);
      setShowReplaceDialog(true);
    } else {
      thumbnailRef.current?.click();
    }
  }

  function onConfirmReplace() {
    setShowReplaceDialog(false);
    if (showAlert) {
      setTimeout(() => thumbnailRef.current?.click(), 100);
    }
    setShowAlert(false);
  }

  function onThumbnailUpload(e: React.ChangeEvent<HTMLInputElement>): File | void {
    if (e.target.files) {
      setThumbnail(e.target.files[0]);
      return e.target.files[0];
    }
  }

  function onSubmit(data: VideoMetadataSchemaType) {
    console.log(data, thumbnail);
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

  useEffect(() => {
    if (uploads[videoId]) {
      form.setValue("title", uploads[videoId].name.replace(/\.[^/.]+$/, ""));
    }
  }, [uploads, videoId, form]);

  return (
    <>
      <section className="flex flex-col gap-y-2 px-3 py-2 h-full">
        <div className="font-bold text-2xl">Upload a new video</div>
        <Separator />
        <div className="flex-1 grid grid-cols-[0.5fr_min-content_0.5fr] grid-rows-1 gap-x-3 px-1 overflow-scroll">
          <div>
            {!uploads[videoId] && <UploadVideoDialog videoId={videoId} />}
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
                  render={({ field }) => (
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
                          {...form.register("thumbnail")}
                          ref={thumbnailRef}
                          type="file"
                          id="thumbnail"
                          accept="image/*"
                          hidden
                          disabled={field.disabled}
                          name={field.name}
                          onBlur={field.onBlur}
                          onChange={(e) => field.onChange(onThumbnailUpload(e))}
                        />
                      </InputGroup>
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <InputGroup>
                        <FormLabel>Tags</FormLabel>
                        <MultiSelect
                          {...field}
                          options={tags}
                          onValueChange={(e) => field.onChange(e)}
                          noResultRender={<AddTagsDialog />}
                        />
                      </InputGroup>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <FormField
                    control={form.control}
                    name="models"
                    render={({ field }) => (
                      <InputGroup>
                        <FormLabel>Models</FormLabel>
                        <MultiSelect
                          {...field}
                          options={models}
                          onValueChange={(e) => field.onChange(e)}
                          noResultRender={<AddModelDialog />}
                        />
                      </InputGroup>
                    )}
                  />
                </FormItem>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
          <Separator orientation="vertical" />
          <div className="w-full space-y-1">
            {uploads[videoId]?.progress < 100 && (
              <div className="relative">
                <video src={videoPreview} controls disablePictureInPicture className="z-10" />
                <div className="absolute top-0 left-0 z-20 w-full h-full bg-black/80 flex flex-col flex-1 justify-center items-center">
                  <WavyText
                    className="text-white"
                    text="Uploading"
                    y={[2, -2]}
                    staggerDelay={0.05}
                  />
                  <Progress value={uploads[videoId].progress} className="w-[60%]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {showAlert && (
        <AlertDialog open={showReplaceDialog} onOpenChange={setShowReplaceDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertContents.title}</AlertDialogTitle>
              <AlertDialogDescription>{alertContents.content}</AlertDialogDescription>
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
