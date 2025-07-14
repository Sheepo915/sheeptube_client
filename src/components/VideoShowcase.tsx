import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function VideoShowcase({ data }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[0.8fr_0.2fr] grid-flow-row-dense gap-y-3">
      <AspectRatio ratio={16 / 9}>
        <img src={data.poster} />
      </AspectRatio>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 grid-flow-col-dense space-x-2 justify-center">
        <img src={data.channel.pic} className="size-14 rounded-full self-center" />
        <div className="flex flex-col">
          <Link to={"/"} className="font-semibold">
            {data.title}
          </Link>
          <Link to={"/"} className="font-light">
            {data.channel.name}
          </Link>
          <div className="flex space-x-1.5 font-extralight text-[10pt]">
            <span>{data.views} views</span>
            <Separator orientation="vertical" />
            <span>10 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
