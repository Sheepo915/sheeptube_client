import { useEffect, useState } from "react";

export interface Pagination {
  total: number;
  offset: number;
  start: number;
  end: number;
  itemsPerPage: number;
  // rawTotal: number;
}

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage?: number;
}

interface UsePaginationResult<T> {
  paginated: T[];
  pagination: Pagination;
  handleNext: () => void;
  handlePrev: () => void;
  handleFirst: () => void;
  handleLast: () => void;
}

export function usePagination<T>({
  data,
  itemsPerPage = 10,
}: UsePaginationProps<T>): UsePaginationResult<T> {
  const [paginate, setPaginate] = useState<Pagination>({
    total: data.length,
    offset: 0,
    start: 0,
    end: data.length,
    itemsPerPage: Math.min(itemsPerPage, data.length),
    // rawTotal: data.length,
  });

  const paginated = data.slice(paginate.start, paginate.end);

  function handleNext() {
    const newOffset = paginate.offset + itemsPerPage;
    if (newOffset >= data.length) return;
    setPaginate({
      ...paginate,
      offset: newOffset,
      start: newOffset,
      end: Math.min(newOffset + itemsPerPage, data.length),
    });
  }

  function handlePrev() {
    const newOffset = Math.max(0, paginate.offset - itemsPerPage);
    setPaginate({
      ...paginate,
      offset: newOffset,
      start: newOffset,
      end: Math.min(newOffset + itemsPerPage, data.length),
    });
  }

  function handleFirst() {
    setPaginate({
      ...paginate,
      offset: 0,
      start: 0,
      end: Math.min(itemsPerPage, data.length),
    });
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
    setPaginate({
      total: data.length,
      offset: 0,
      start: 0,
      end: Math.min(itemsPerPage, data.length),
      itemsPerPage,
    });
  }, [data, itemsPerPage]);

  return {
    paginated,
    pagination: paginate,
    handleNext,
    handlePrev,
    handleFirst,
    handleLast,
  };
}
