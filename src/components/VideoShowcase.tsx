import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

interface VideoShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  poster: string;
  source: string;
  views: number;
  channel_name: string;
  channel_pic: string;
}

export default function VideoShowcase({
  title,
  poster,
  source,
  views,
  channel_name,
  channel_pic,
  ...props
}: VideoShowcaseProps) {
  const [isPlaying, setPlay] = useState<boolean>(false);
  const [isHovered, setOnHover] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      timeout = setTimeout(() => {
        setPlay(true);
      }, 0.5 * 1000);
    } else {
      setPlay(false);
    }

    return () => clearTimeout(timeout);
  }, [isHovered]);

  return (
    <div
      className={twMerge(
        "grid grid-cols-1 grid-rows-[0.8fr_0.2fr] grid-flow-row-dense gap-y-3",
        props?.className
      )}
      {...props}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <AspectRatio ratio={16 / 9}>
        {isPlaying ? <VideoPlayer src={source} controls={false} autoPlay /> : <img src={poster} />}
      </AspectRatio>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 grid-flow-col-dense space-x-2 justify-center">
        <img src={channel_pic} className="size-14 rounded-full self-center" />
        <div className="flex flex-col">
          <Link to={"/"} className="font-semibold">
            {title}
          </Link>
          <Link to={"/"} className="font-light">
            {channel_name}
          </Link>
          <div className="flex space-x-1.5 font-extralight text-[10pt]">
            <span>{views} views</span>
            <Separator orientation="vertical" />
            <span>10 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
