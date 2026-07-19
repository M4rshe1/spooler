"use client";

import { useEffect, useMemo, useState } from "react";

export const DEFAULT_PAGE_SIZE = 25;

export function useClientPagination<T>(
  items: readonly T[],
  options?: {
    pageSize?: number;
    /** Change this when filters change to jump back to page 1. */
    resetKey?: string | number | boolean | null;
  },
) {
  const pageSize = options?.pageSize ?? DEFAULT_PAGE_SIZE;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [options?.resetKey, pageSize]);

  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize) || 1);
  const safePage = Math.min(Math.max(1, page), pageCount);

  useEffect(() => {
    if (page !== safePage) setPage(safePage);
  }, [page, safePage]);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, safePage, pageSize]);

  return {
    page: safePage,
    pageSize,
    pageCount,
    total,
    pageItems,
    setPage,
    rangeStart: total === 0 ? 0 : (safePage - 1) * pageSize + 1,
    rangeEnd: Math.min(safePage * pageSize, total),
  };
}
