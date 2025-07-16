import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video/VideoPlayer";
import { DownloadIcon, HeartIcon, Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Video() {
  const [searchParams] = useSearchParams();
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const src = searchParams.get("v");
    if (src !== null) {
      setVideoSrc(src);
    }
  }, [searchParams]);

  return (
    <section className="grid grid-cols-[0.7fr_0.3fr] grid-rows-2 grid-flow-col-dense gap-x-5 gap-y-2 px-3 pt-2">
      <AspectRatio ratio={16 / 9}>
        <VideoPlayer
          src={videoSrc}
          poster="https://placehold.co/1920x1080"
          className="h-full w-full"
        />
      </AspectRatio>
      <Skeleton className="h-full w-full row-span-full" />
      <div className="flex flex-col h-36">
        <div className="h-auto w-full space-y-2">
          <Skeleton className="w-full h-6" />
          <div className="grid grid-cols-[auto_0.4fr] grid-rows-2 gap-x-3 gap-y-2 h-fit">
            <div className="flex flex-col flex-1">
              <div className="flex flex-row w-full h-full gap-x-4">
                <Skeleton className="size-16 rounded-full" />
                <div className="flex flex-col w-full h-full space-y-2">
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-full h-6" />
                </div>
              </div>
            </div>
            <div className="col-start-2 row-span-1 w-full space-x-2 justify-self-end">
              <Button className="w-8 md:w-10 xl:w-22">
                <HeartIcon className="size-5" />
                <Separator orientation="vertical" className="hidden xl:block" />
                <span className="hidden xl:block">123</span>
              </Button>
              <Button className="w-8 md:w-10 xl:w-22">
                <Share2Icon className="size-5" />
                <Separator orientation="vertical" className="hidden xl:block" />
                <span className="hidden xl:block">123</span>
              </Button>
              <Button className="w-8 md:w-10 xl:w-auto">
                <DownloadIcon className="size-5" />
                <Separator orientation="vertical" className="hidden xl:block" />
                <span className="hidden xl:block">Download</span>
              </Button>
            </div>
            <Skeleton className="w-full h-6 col-start-1 col-span-2" />
          </div>
        </div>
        <Skeleton className="h-full w-full" />
      </div>
    </section>
  );
}
