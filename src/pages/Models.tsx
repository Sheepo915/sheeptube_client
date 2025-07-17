import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  SortAsc,
  SortDesc,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const MotionInput = motion(Input);

const test = new Array(30).fill(1);

interface PaginationProps {
  total: number;
  offset: number;
  start: number;
  end: number;
}

export default function Models() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [paginate, setPaginate] = useState<PaginationProps>({
    total: test.length,
    offset: 0,
    start: 0,
    end: test.length,
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginated = test.slice(paginate.start, paginate.end);

  function handleNext() {
    const newOffset = paginate.offset + itemsPerPage;
    if (newOffset >= test.length) return;
    setPaginate({
      ...paginate,
      offset: newOffset,
      start: newOffset,
      end: Math.min(newOffset + itemsPerPage, test.length),
    });
  }

  function handlePrev() {
    const newOffset = Math.max(0, paginate.offset - itemsPerPage);
    setPaginate({
      ...paginate,
      offset: newOffset,
      start: newOffset,
      end: newOffset + itemsPerPage,
    });
  }

  useEffect(() => {
    function calculateItemsPerPage() {
      if (!gridRef.current) return;

      const itemHeight = 100; // Estimate or measure one item's height
      const gridHeight = gridRef.current.offsetHeight;
      const rows = Math.floor(gridHeight / itemHeight);
      const columns = 5; // Adjust if responsive
      const visibleItems = rows * columns;

      setItemsPerPage(visibleItems || 1); // Avoid 0
    }

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);

    return () => window.removeEventListener("resize", calculateItemsPerPage);
  }, []);

  useEffect(() => {
    setPaginate({
      total: paginated.length,
      offset: 0,
      start: 0,
      end: itemsPerPage,
    });
  }, [paginated.length, itemsPerPage]);

  return (
    <section className="px-3 py-2 space-y-2 max-h-full w-full">
      <div className="flex justify-between items-center">
        <h1>{searchValue ? `Searching: "${searchValue}"` : "Model"}</h1>
        <div className="flex gap-2">
          <div className="relative">
            <MotionInput
              type="search"
              initial={{ width: "32px" }}
              animate={{
                width: isExpanded ? "180px" : "32px",
              }}
              transition={{ ease: "linear", duration: 0.3 }}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => {
                if (!searchValue) setIsExpanded(false);
              }}
              onChange={(e) => setSearchValue(e.target.value)}
              className={isExpanded ? "pl-8" : ""}
            />
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          </div>
          <Select>
            <SelectTrigger className="w-20">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a_z">
                <SortAsc />
                A-Z
              </SelectItem>
              <SelectItem value="z_a">
                <SortDesc />
                Z-A
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div ref={gridRef} className="grid grid-cols-5 gap-3">
        {paginated.map((_, i) => (
          <AspectRatio key={i} ratio={3 / 4}>
            <Skeleton className="w-full h-full" />
          </AspectRatio>
        ))}
      </div>
      <div className="flex w-full justify-end items-center gap-8 lg:w-fit">
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {paginate.start + 1} of {Math.ceil(paginate.total / itemsPerPage)}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => setPaginate({ ...paginate, offset: 0, start: 0, end: itemsPerPage })}
            disabled={paginate.start == 0}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={handlePrev}
            disabled={paginate.start == 0}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={handleNext}
            disabled={paginate.end == paginate.total}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 lg:flex"
            size="icon"
            onClick={() =>
              setPaginate({
                ...paginate,
                offset: test.length - itemsPerPage,
                start: test.length - itemsPerPage,
                end: test.length,
              })
            }
            disabled={paginate.end == paginate.total}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
