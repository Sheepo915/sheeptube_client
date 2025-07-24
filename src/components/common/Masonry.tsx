import { useMemo, type HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface MasonryProps<T> extends HTMLProps<HTMLDivElement> {
  data: T[];
  colNumber: number;
  orientation?: "vertical" | "horizontal";
  render: (item: T, index: number) => React.ReactNode;
}

export default function Masonry<T>({
  data,
  colNumber,
  orientation = "horizontal",
  render,
  ...props
}: MasonryProps<T>) {
  const template = useMemo(() => {
    const t: Map<number, T[]> = new Map();
    switch (orientation) {
      case "horizontal": {
        for (let i = 0; i < colNumber; i++) {
          t.set(
            i,
            data.filter((_, index) => index % colNumber === i)
          );
        }
        break;
      }
      case "vertical": {
        let start = 0;
        const chunkSize = Math.ceil(data.length / colNumber);
        for (let i = 0; i < colNumber; i++) {
          const end = start + chunkSize;
          t.set(i, data.slice(start, end));
          start = end;
        }
        break;
      }
    }
    return t;
  }, [colNumber, data, orientation]);

  return (
    <div
      {...props}
      className={twMerge("grid grid-flow-rows grid-cols-2 md:grid-cols-3 gap-4", props?.className)}
    >
      {[...template.entries()].map(([cols, value]) => (
        <div key={cols} className="grid gap-4">
          {value.map((item, i) => render(item, i))}
        </div>
      ))}
    </div>
  );
}
