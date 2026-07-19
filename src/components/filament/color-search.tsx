"use client";

import { RiCloseLine, RiPaletteLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  colorDistanceLabel,
  formatColorDistance,
  parseHexColor,
} from "@/lib/color-distance";
import { cn } from "@/lib/utils";

export function ColorSearch({
  value,
  onChange,
  className,
}: {
  value: string | null;
  onChange: (hex: string | null) => void;
  className?: string;
}) {
  const active = value != null;

  return (
    <div
      className={cn(
        "border-input flex h-11 items-center gap-1.5 border px-1.5 sm:h-9",
        active && "border-ring",
        className,
      )}
    >
      <label
        className="relative flex size-8 shrink-0 cursor-pointer items-center justify-center sm:size-7"
        title={active ? `Match color ${value}` : "Search by color"}
      >
        <span
          className="border-border absolute inset-1 rounded-none border"
          style={{ backgroundColor: value ?? "transparent" }}
        />
        {!active && (
          <RiPaletteLine className="text-muted-foreground relative size-4" />
        )}
        <input
          type="color"
          className="absolute inset-0 cursor-pointer opacity-0"
          value={value ?? "#808080"}
          onChange={(e) => {
            const hex = parseHexColor(e.target.value);
            if (hex) onChange(hex);
          }}
          aria-label="Search by color"
        />
      </label>
      <span className="text-muted-foreground min-w-0 flex-1 truncate text-xs tabular-nums">
        {active ? value : "By color"}
      </span>
      {active && (
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={() => onChange(null)}
          aria-label="Clear color search"
        >
          <RiCloseLine />
        </Button>
      )}
    </div>
  );
}

export function ColorDistanceBadge({
  distance,
  className,
}: {
  distance: number | null | undefined;
  className?: string;
}) {
  if (distance == null) return null;

  return (
    <span
      className={cn(
        "text-muted-foreground inline-flex items-center gap-1 text-[10px] tabular-nums uppercase tracking-wide",
        distance < 5 && "text-foreground",
        className,
      )}
      title={`${colorDistanceLabel(distance)} (CIEDE2000 ΔE ${distance.toFixed(2)})`}
    >
      <span
        className={cn(
          "inline-block size-1.5 shrink-0",
          distance < 2
            ? "bg-emerald-600"
            : distance < 10
              ? "bg-amber-500"
              : "bg-muted-foreground/50",
        )}
      />
      {formatColorDistance(distance)}
    </span>
  );
}
