import { twMerge } from "tailwind-merge";

export default function InputGroup({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge("space-y-1.5", props?.className)}>{props.children}</div>;
}
