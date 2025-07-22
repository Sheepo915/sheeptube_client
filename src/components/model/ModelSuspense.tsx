import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import type {HTMLProps} from "react";

interface ModelSuspenseProps<T> extends HTMLProps<HTMLDivElement> {
  paginated: T[];
}

export default function ModelSuspense<T>({paginated, ...props}: ModelSuspenseProps<T>) {
  return (
    <>
      {paginated.map((_, i) => (
        <AspectRatio  key={i} ratio={1} {...props}>
          <Skeleton className="w-full h-full"/>
        </AspectRatio>
      ))}
    </>
  )
}