"use client";

import { RiShoppingBag2Line } from "@remixicon/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Opens the product page, falling back to the brand site. */
export function FilamentBuyButton({
  productUrl,
  brandWebsiteUrl,
  quantity,
  size = "default",
  className,
}: {
  productUrl?: string | null;
  brandWebsiteUrl?: string | null;
  /** When > 0, label as “Buy N” for repurchase context */
  quantity?: number;
  size?: "default" | "sm" | "xs";
  className?: string;
}) {
  const href = productUrl?.trim() || brandWebsiteUrl?.trim() || null;
  if (!href) return null;

  const label =
    quantity != null && quantity > 0
      ? `Buy ${quantity}`
      : "Buy";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size }), className)}
      onClick={(e) => e.stopPropagation()}
    >
      <RiShoppingBag2Line />
      {label}
    </a>
  );
}
