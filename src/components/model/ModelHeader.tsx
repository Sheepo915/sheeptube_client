import {Search, SortAsc, SortDesc} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {motion} from "motion/react";
import {Input} from "@/components/ui/input.tsx";
import React from "react";

const MotionInput = motion(Input);

export default function ModelHeader(props: {
  searchValue: string | undefined,
  expanded: boolean,
  onFocus: () => void,
  onBlur: () => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return <div className="flex justify-between items-center">
    <h1>{props.searchValue ? `Searching: "${props.searchValue}"` : "Model"}</h1>
    <div className="flex gap-2">
      <div className="relative">
        <MotionInput
          type="search"
          initial={{width: "32px"}}
          animate={{
            width: props.expanded ? "180px" : "32px",
          }}
          transition={{ease: "linear", duration: 0.3}}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.expanded ? "pl-8" : ""}
        />
        <Search
          className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none"/>
      </div>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Sort"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a_z">
            <SortAsc/>
            A-Z
          </SelectItem>
          <SelectItem value="z_a">
            <SortDesc/>
            Z-A
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>;
}