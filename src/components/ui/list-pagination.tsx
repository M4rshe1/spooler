"use client";

import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function pageNumbers(page: number, pageCount: number): (number | "…")[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, pageCount, page - 1, page, page + 1]);
  if (page <= 3) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
  }
  if (page >= pageCount - 2) {
    pages.add(pageCount - 1);
    pages.add(pageCount - 2);
    pages.add(pageCount - 3);
  }

  const sorted = [...pages].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);
  const result: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push("…");
    result.push(p);
    prev = p;
  }
  return result;
}

export function ListPagination({
  page,
  pageCount,
  total,
  rangeStart,
  rangeEnd,
  onPageChange,
  className,
  itemLabel = "items",
}: {
  page: number;
  pageCount: number;
  total: number;
  rangeStart: number;
  rangeEnd: number;
  onPageChange: (page: number) => void;
  className?: string;
  itemLabel?: string;
}) {
  if (total === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <p className="text-muted-foreground text-xs tabular-nums">
        {rangeStart}–{rangeEnd} of {total} {itemLabel}
      </p>

      {pageCount > 1 && (
        <div className="flex flex-wrap items-center gap-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            aria-label="Previous page"
          >
            <RiArrowLeftSLine data-icon="inline-start" />
            <span className="hidden sm:inline">Prev</span>
          </Button>

          {pageNumbers(page, pageCount).map((entry, index) =>
            entry === "…" ? (
              <span
                key={`e-${index}`}
                className="text-muted-foreground px-1 text-xs"
                aria-hidden
              >
                …
              </span>
            ) : (
              <Button
                key={entry}
                type="button"
                variant={entry === page ? "outline" : "ghost"}
                size="icon-sm"
                aria-label={`Page ${entry}`}
                aria-current={entry === page ? "page" : undefined}
                onClick={() => onPageChange(entry)}
                className="tabular-nums"
              >
                {entry}
              </Button>
            ),
          )}

          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={page >= pageCount}
            onClick={() => onPageChange(page + 1)}
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <RiArrowRightSLine data-icon="inline-end" />
          </Button>
        </div>
      )}
    </div>
  );
}
