"use client";

import Link from "next/link";
import { RiShoppingCart2Line } from "@remixicon/react";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { FilamentBuyButton } from "@/components/filament/filament-buy-button";
import {
  RepurchaseControls,
  RepurchaseQtyBadge,
} from "@/components/filament/repurchase-controls";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { toast } from "sonner";

function reasonLabel(reason: "empty" | "low" | "marked") {
  if (reason === "empty") return "Empty";
  if (reason === "low") return "Low stock";
  return "On list";
}

export default function CartPage() {
  const utils = api.useUtils();
  const { data, isLoading } = api.stats.overview.useQuery();

  const markBought = api.filament.markBought.useMutation({
    onSuccess: async (result) => {
      await Promise.all([
        utils.stats.invalidate(),
        utils.filament.invalidate(),
        utils.spool.invalidate(),
      ]);
      toast.success(
        result.addedCount === 1
          ? "Added 1 spool to inventory"
          : `Added ${result.addedCount} spools to inventory`,
      );
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading cart…</p>;
  }

  const items = data?.toRepurchase ?? [];
  const totalQty = data?.repurchaseCount ?? 0;
  const thresholdG = data?.lowStockThresholdG ?? 200;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Cart
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Filaments marked to buy, empty, or ≤{thresholdG}g remaining.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={totalQty > 0 ? "destructive" : "secondary"}>
            {totalQty} {totalQty === 1 ? "spool" : "spools"}
          </Badge>
          <Link
            href="/filaments"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse filaments
          </Link>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="border-border border border-dashed px-6 py-16 text-center">
          <div className="bg-muted mx-auto mb-4 flex size-12 items-center justify-center">
            <RiShoppingCart2Line className="size-5" />
          </div>
          <p className="font-heading text-lg font-semibold">Cart is empty</p>
          <p className="text-muted-foreground mx-auto mt-1 max-w-sm text-sm">
            Add filaments from inventory or the filament library when you need to
            restock.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link href="/inventory" className={cn(buttonVariants())}>
              Inventory
            </Link>
            <Link
              href="/filaments"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Filaments
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ul className="border-border divide-y divide-border border md:hidden">
            {items.map((item) => (
              <li key={item.id} className="space-y-3 p-3">
                <Link
                  href={`/filaments/${item.id}`}
                  className="flex items-start gap-3"
                >
                  <ColorSwatch
                    mode={item.colorMode}
                    colors={item.colors}
                    className="size-10 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">
                        {item.colorName ?? item.material.name}
                      </span>
                      <Badge variant="secondary">Buy {item.quantity}</Badge>
                      {item.repurchaseQty > 0 && (
                        <RepurchaseQtyBadge quantity={item.repurchaseQty} />
                      )}
                      <Badge
                        variant={
                          item.reason === "empty" ? "destructive" : "outline"
                        }
                      >
                        {reasonLabel(item.reason)}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-xs">
                      {item.brand.name} · {item.material.name}
                      {item.remainingGrams > 0
                        ? ` · ${item.remainingGrams}g left`
                        : ""}
                    </div>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center gap-2">
                  <FilamentBuyButton
                    productUrl={item.productUrl}
                    brandWebsiteUrl={item.brand.websiteUrl}
                    quantity={item.quantity}
                    size="sm"
                  />
                  <RepurchaseControls
                    filamentId={item.id}
                    repurchaseQty={item.repurchaseQty}
                    suggestedQty={item.quantity}
                    compact
                  />
                  {item.repurchaseQty <= 0 && (
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
                    >
                      Bought
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="border-border hidden overflow-x-auto border md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-border bg-muted/40 border-b text-left text-xs uppercase tracking-wide">
                  <th className="px-3 py-2.5 font-medium">Filament</th>
                  <th className="px-3 py-2.5 font-medium">Why</th>
                  <th className="px-3 py-2.5 font-medium">Qty</th>
                  <th className="px-3 py-2.5 font-medium">Stock</th>
                  <th className="px-3 py-2.5 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/30">
                    <td className="px-3 py-3">
                      <Link
                        href={`/filaments/${item.id}`}
                        className="flex items-center gap-3"
                      >
                        <ColorSwatch
                          mode={item.colorMode}
                          colors={item.colors}
                          className="size-9 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="truncate font-medium">
                            {item.colorName ?? item.material.name}
                          </div>
                          <div className="text-muted-foreground truncate text-xs">
                            {item.brand.name} · {item.material.name}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-3 py-3">
                      <Badge
                        variant={
                          item.reason === "empty" ? "destructive" : "outline"
                        }
                      >
                        {reasonLabel(item.reason)}
                      </Badge>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Badge variant="secondary">Buy {item.quantity}</Badge>
                        {item.repurchaseQty > 0 && (
                          <RepurchaseQtyBadge quantity={item.repurchaseQty} />
                        )}
                      </div>
                    </td>
                    <td className="text-muted-foreground px-3 py-3">
                      {item.remainingGrams > 0
                        ? `${item.remainingGrams}g left`
                        : "—"}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <FilamentBuyButton
                          productUrl={item.productUrl}
                          brandWebsiteUrl={item.brand.websiteUrl}
                          quantity={item.quantity}
                          size="sm"
                        />
                        <RepurchaseControls
                          filamentId={item.id}
                          repurchaseQty={item.repurchaseQty}
                          suggestedQty={item.quantity}
                          compact
                        />
                        {item.repurchaseQty <= 0 && (
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
                          >
                            Bought
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
