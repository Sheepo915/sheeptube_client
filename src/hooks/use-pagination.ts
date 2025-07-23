import {useEffect, useRef, useState} from "react";
import type {Pagintation} from "@/components/common/Pagination.tsx";

export interface Pagination {
  total: number;
  offset: number;
  start: number;
  end: number;
}

interface UsePaginationProps<T> {
  data: T[];
  defaultCols?: number;
  itemHeight?: number;
}

interface UsePaginationResult<T> {
  paginated: T[];
  pagination: Pagination;
  itemsPerPage: number;
  handleNext: () => void
  handlePrev: () => void;
  handleFirst: () => void;
  handleLast: () => void;
}

export function usePagination<T>({data, defaultCols = 5, itemHeight = 100}: UsePaginationProps<T>): UsePaginationResult<T> {
  const gridRef = useRef<HTMLDivElement>(null);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginate, setPaginate] = useState<Pagintation>({
    total: data.length,
    offset: 0,
    start: 0,
    end: data.length,
  });

  const paginated = data.slice(paginate.start, paginate.end);

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

  function handleFirst() {
    setPaginate({
      ...paginate,
      offset: 0,
      start: 0,
      end: itemsPerPage
    })
  }

  function handleLast() {
    const lastPageStart = Math.max(0, data.length - itemsPerPage);
    setPaginate({
      ...paginate,
      offset: lastPageStart,
      start: lastPageStart,
      end: data.length,
    });
  }

  useEffect(() => {
    function calculateItemsPerPage() {
      if (!gridRef.current) return;
      const gridHeight = gridRef.current.offsetHeight;
      const rows = Math.floor(gridHeight / itemHeight);
      const visibleItems = rows * defaultCols;

      setItemsPerPage(visibleItems || 1); // Avoid 0
    }

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);

    return () => window.removeEventListener("resize", calculateItemsPerPage);
  }, [defaultCols, itemHeight]);

  useEffect(() => {
    setPaginate({
      total: paginated.length,
      offset: 0,
      start: 0,
      end: itemsPerPage,
    });
  }, [paginated.length, itemsPerPage]);

  return {
    paginated,
    paginate,
    itemsPerPage,
    gridRef,
    handleNext,
    handlePrev,
    handleFirst,
    handleLast,
  };
}