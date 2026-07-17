"use client";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { FilamentBuyButton } from "@/components/filament/filament-buy-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/trpc/react";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import { toast } from "sonner";

type RepurchaseItem = {
  id: string;
  quantity: number;
  reason: "empty" | "low" | "marked";
  remainingGrams: number;
  colorMode: string;
  colorName: string | null;
  brand: { name: string; websiteUrl?: string | null };
  material: { name: string };
  productUrl: string | null;
  colors: {
    hex: string;
    name: string | null;
    position: number;
    weight: number | null;
  }[];
};

function reasonLabel(reason: RepurchaseItem["reason"]) {
  if (reason === "empty") return "Empty";
  if (reason === "low") return "Low stock";
  return "Marked";
}

export function RepurchaseCard({
  items,
  thresholdG,
}: {
  items: RepurchaseItem[];
  thresholdG: number;
}) {
  const utils = api.useUtils();
  const markBought = api.filament.markBought.useMutation({
    onSuccess: async (result) => {
      await utils.stats.invalidate();
      await utils.filament.invalidate();
      await utils.spool.invalidate();
      toast.success(
        result.addedCount === 1
          ? "Added 1 spool to inventory"
          : `Added ${result.addedCount} spools to inventory`,
      );
    },
    onError: (err) => toast.error(err.message),
  });

  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Card className="border-border bg-card ring-border ring-1">
      <CardHeader className="border-b border-border">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="bg-muted flex size-9 items-center justify-center">
              <RiShoppingCart2Line className="size-4" />
            </div>
            <div>
              <CardTitle className="font-heading text-base">
                To repurchase
              </CardTitle>
              <CardDescription>
                Filaments marked to buy, empty, or ≤{thresholdG}g remaining.
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={totalQty > 0 ? "destructive" : "secondary"}>
              {totalQty}
            </Badge>
            <Link
              href="/cart"
              className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2"
            >
              View cart
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {items.length === 0 ? (
          <p className="text-muted-foreground py-6 text-sm">
            Nothing to buy right now. You’re stocked.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {items.slice(0, 5).map((item) => (
              <li
                key={item.id}
                className="flex flex-wrap items-center gap-3 py-3 first:pt-4 last:pb-0"
              >
                <Link
                  href={`/filaments/${item.id}`}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <ColorSwatch
                    mode={item.colorMode}
                    colors={item.colors}
                    className="size-9 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {item.colorName ?? item.material.name}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {item.brand.name} · {item.material.name} · buy{" "}
                      {item.quantity}
                      {item.remainingGrams > 0
                        ? ` · ${item.remainingGrams}g left`
                        : ""}
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      item.reason === "empty" ? "destructive" : "outline"
                    }
                  >
                    {reasonLabel(item.reason)}
                  </Badge>
                  <FilamentBuyButton
                    productUrl={item.productUrl}
                    brandWebsiteUrl={item.brand.websiteUrl}
                    quantity={item.quantity}
                    size="sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={markBought.isPending}
                    onClick={() =>
                      markBought.mutate({
                        id: item.id,
                        quantity: item.quantity,
                        archiveEmpty: true,
                      })
                    }
                    title="Mark as bought"
                  >
                    <RiCheckboxCircleLine />
                    Bought
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {items.length > 5 && (
          <div className="border-border mt-2 border-t pt-3">
            <Link
              href="/cart"
              className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2"
            >
              View all {items.length} in cart
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
