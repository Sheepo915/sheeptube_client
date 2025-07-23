import { ModelShowcaseCard } from "@/components/model";
import type { ModelData } from "@/types/model";
import type { HTMLProps } from "react";

interface ModelShowcaseProps extends HTMLProps<HTMLDivElement> {
  models: ModelData[];
}

export default function ModelShowcase({
  models,
  ...props
}: ModelShowcaseProps) {
  return (
    <>
      {models.map((model, index) => (
        <ModelShowcaseCard
          key={index}
          name={model.name}
          pic={"https://placehold.co/600"}
          videos={100}
          views={1000}
          {...props}
        />
      ))}
    </>
  );
}
