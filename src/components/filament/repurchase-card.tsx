"use client";

import Link from "next/link";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "@remixicon/react";
import { toast } from "sonner";

import { ColorSwatch } from "@/components/filament/color-swatch";
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

type RepurchaseItem = {
  id: string;
  colorMode: string;
  colorName: string | null;
  remainingWeightG: number;
  status: string;
  reason: "empty" | "low" | "marked";
  brand: { name: string };
  material: { name: string };
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
  const markRepurchased = api.spool.markRepurchased.useMutation({
    onSuccess: async () => {
      await utils.stats.invalidate();
      await utils.spool.invalidate();
      toast.success("Cleared from repurchase list");
    },
    onError: (err) => toast.error(err.message),
  });

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
                Empty, ≤{thresholdG}g remaining, or manually marked.
              </CardDescription>
            </div>
          </div>
          <Badge variant={items.length > 0 ? "destructive" : "secondary"}>
            {items.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {items.length === 0 ? (
          <p className="text-muted-foreground py-6 text-sm">
            Nothing to buy right now. You’re stocked.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {items.map((spool) => (
              <li
                key={spool.id}
                className="flex flex-wrap items-center gap-3 py-3 first:pt-4 last:pb-0"
              >
                <Link
                  href={`/spools/${spool.id}`}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <ColorSwatch
                    mode={spool.colorMode}
                    colors={spool.colors}
                    className="size-9 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {spool.colorName ?? spool.material.name}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {spool.brand.name} · {spool.material.name} ·{" "}
                      {spool.remainingWeightG}g left
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      spool.reason === "empty" ? "destructive" : "outline"
                    }
                  >
                    {reasonLabel(spool.reason)}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={markRepurchased.isPending}
                    onClick={() =>
                      markRepurchased.mutate({
                        id: spool.id,
                        archiveIfEmpty: true,
                      })
                    }
                    title="Mark as repurchased"
                  >
                    <RiCheckboxCircleLine />
                    Bought
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
