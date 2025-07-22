import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";

export interface Pagination {
  total: number;
  offset: number;
  start: number;
  end: number;
}

interface PaginationProps {
  paginate: Pagination,
  itemsPerPage: number,
  firstPageHandler: () => void,
  previousPageHandler: () => void,
  nextPageHandler: () => void,
  lastPageHandler: () => void
}

export default function Pagination(
  {
    paginate,
    itemsPerPage,
    firstPageHandler,
    previousPageHandler,
    nextPageHandle,
    lastPageHandler,
  }: PaginationProps
) {
  const {total, start, end} = paginate;
  const totalPages = Math.ceil(total / itemsPerPage);
  const currentPage = start + 1;

  const isFirstPage = start === 0;
  const isLastPage = end === total;

  return (
    <div className="flex w-full justify-end items-center gap-8">
      <div className="flex w-fit items-center justify-center text-sm font-medium">
        Page {currentPage} of {totalPages}
      </div>
      <div className="ml-auto flex items-center gap-2 lg:ml-0">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={firstPageHandler}
          disabled={isFirstPage}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft/>
        </Button>
        <Button
          variant="outline"
          className="size-8"
          size="icon"
          onClick={nextPageHandle}
          disabled={isFirstPage}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft/>
        </Button>
        <Button
          variant="outline"
          className="size-8"
          size="icon"
          onClick={previousPageHandler}
          disabled={isLastPage}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight/>
        </Button>
        <Button
          variant="outline"
          className="hidden size-8 lg:flex"
          size="icon"
          onClick={lastPageHandler}
          disabled={isLastPage}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRight/>
        </Button>
      </div>
    </div>
  );
}