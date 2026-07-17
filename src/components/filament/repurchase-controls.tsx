"use client";

import { useState } from "react";
import { RiShoppingCart2Line } from "@remixicon/react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";

export function RepurchaseQtyBadge({ quantity }: { quantity: number }) {
  if (quantity <= 0) return null;
  return <Badge variant="destructive">Cart {quantity}</Badge>;
}

export function RepurchaseControls({
  filamentId,
  repurchaseQty,
  compact,
  /** Prefill when adding a suggested qty that isn’t on the list yet */
  suggestedQty,
}: {
  filamentId: string;
  repurchaseQty: number;
  compact?: boolean;
  suggestedQty?: number;
}) {
  const utils = api.useUtils();
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(String(Math.max(1, repurchaseQty || 1)));

  const setRepurchase = api.filament.setRepurchase.useMutation({
    onSuccess: async (updated) => {
      await Promise.all([
        utils.filament.invalidate(),
        utils.spool.invalidate(),
        utils.stats.invalidate(),
      ]);
      setOpen(false);
      toast.success(
        updated.repurchaseQty > 0
          ? `Added ${updated.repurchaseQty} to list`
          : "Removed from list",
      );
    },
    onError: (err) => toast.error(err.message),
  });

  const markBought = api.filament.markBought.useMutation({
    onSuccess: async (result) => {
      await Promise.all([
        utils.filament.invalidate(),
        utils.spool.invalidate(),
        utils.stats.invalidate(),
      ]);
      toast.success(
        result.addedCount === 1
          ? "Added 1 spool to inventory"
          : `Added ${result.addedCount} spools to inventory`,
      );
    },
    onError: (err) => toast.error(err.message),
  });

  const busy = setRepurchase.isPending || markBought.isPending;

  const openDialog = () => {
    setQty(
      String(
        Math.max(
          1,
          repurchaseQty || suggestedQty || 1,
        ),
      ),
    );
    setOpen(true);
  };

  const buyQty = Math.max(1, repurchaseQty || suggestedQty || 1);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant={repurchaseQty > 0 ? "secondary" : "outline"}
          size={compact ? "sm" : "default"}
          disabled={busy}
          onClick={openDialog}
        >
          <RiShoppingCart2Line />
          {repurchaseQty > 0 ? "Update list" : "Add to list"}
        </Button>
        {repurchaseQty > 0 && (
          <Button
            variant="outline"
            size={compact ? "sm" : "default"}
            disabled={busy}
            onClick={() =>
              markBought.mutate({
                id: filamentId,
                quantity: buyQty,
                archiveEmpty: true,
              })
            }
          >
            Bought
          </Button>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add to cart</DialogTitle>
            <DialogDescription>
              How many spools of this filament do you want to buy?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-2">
            <Label htmlFor="repurchase-qty">Quantity</Label>
            <Input
              id="repurchase-qty"
              type="number"
              inputMode="numeric"
              min={1}
              max={99}
              className="min-h-11 text-base sm:min-h-9 sm:text-sm"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const quantity = Math.min(
                    99,
                    Math.max(1, Math.floor(Number(qty))),
                  );
                  if (!Number.isFinite(quantity)) {
                    toast.error("Enter a valid quantity");
                    return;
                  }
                  setRepurchase.mutate({ id: filamentId, quantity });
                }
              }}
            />
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            {repurchaseQty > 0 && (
              <Button
                type="button"
                variant="ghost"
                disabled={busy}
                onClick={() =>
                  setRepurchase.mutate({ id: filamentId, quantity: 0 })
                }
              >
                Remove
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              disabled={busy || !qty || Number(qty) < 1}
              onClick={() => {
                const quantity = Math.min(
                  99,
                  Math.max(1, Math.floor(Number(qty))),
                );
                if (!Number.isFinite(quantity)) {
                  toast.error("Enter a valid quantity");
                  return;
                }
                setRepurchase.mutate({ id: filamentId, quantity });
              }}
            >
              Add to cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
