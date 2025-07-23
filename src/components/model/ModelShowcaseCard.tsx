import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import React from "react";
import {twMerge} from "tailwind-merge";

interface ModelShowcaseCardProps extends React.HTMLProps<HTMLDivElement> {
  name: string;
  pic: string;
  videos: number;
  views: number;
}

export default function ModelShowcaseCard(
  {
    name,
    pic,
    videos,
    views,
    ...props
  }: ModelShowcaseCardProps) {
  return (
    <AspectRatio ref={props.ref} ratio={1} className={twMerge("overflow-hidden", props?.className)}>
      <div className="grid grid-rows-[0.8fr_0.2fr] grid-cols-1 h-full w-full">
        <div className="overflow-hidden">
          <img src={pic} alt={`Model ${name}`} className="w-full h-full object-cover object-center" />
        </div>
        <div>
          <p className="font-bold text-lg">Model {name}</p>
          <div className="flex justify-between">
            <p>{videos} Video{videos !== 1 ? 's' : ''}</p>
            <p>{views} View{views !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
    </AspectRatio>
  )
}