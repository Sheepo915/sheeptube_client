import { useMemo, type HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface MasonryProps<T> extends HTMLProps<HTMLDivElement> {
  data: T[];
  colNumber: number;
  render: (item: T, index: number) => React.ReactNode;
}

export default function Masonry<T>({ data, colNumber, render, ...props }: MasonryProps<T>) {
  const template = useMemo(() => {
    const t: Map<number, T[]> = new Map();
    for (let i = 0; i < colNumber; i++) {
      t.set(
        i,
        data.filter((_, index) => index % colNumber === i)
      );
    }
    return t;
  }, [colNumber, data]);

  return (
    <div
      {...props}
      className={twMerge("grid grid-cols-2 md:grid-cols-3 gap-4 mt-20", props?.className)}
    >
      {[...template.entries()].map(([cols, value]) => (
        <div key={cols} className="grid gap-4">
          {value.map((item, i) => render(item, i))}
        </div>
      ))}
    </div>
  );
}
