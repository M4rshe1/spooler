"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  RiArchiveLine,
  RiMoreLine,
  RiScales3Line,
  RiSubtractLine,
} from "@remixicon/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  filamentFromGrossWeight,
  grossFromFilamentWeight,
} from "@/lib/filament";
import { api } from "@/trpc/react";

type SpoolRow = {
  id: string;
  status: string;
  remainingWeightG: number;
  initialWeightG: number;
  emptyWeightG: number | null;
  filament: {
    colorName: string | null;
    defaultEmptyWeightG?: number | null;
  };
};

type WeightDialogMode = "usage" | "remaining" | "weigh" | null;

export function InventoryQuickActions({
  spool,
  dense,
}: {
  spool: SpoolRow;
  /** Compact layout for table rows */
  dense?: boolean;
}) {
  const utils = api.useUtils();
  const [mode, setMode] = useState<WeightDialogMode>(null);
  const [grams, setGrams] = useState("");
  const [emptyTare, setEmptyTare] = useState("");
  const [note, setNote] = useState("");

  const effectiveEmpty = useMemo(() => {
    if (emptyTare.trim() !== "") {
      const n = Number(emptyTare);
      return Number.isFinite(n) ? n : null;
    }
    return spool.emptyWeightG ?? spool.filament.defaultEmptyWeightG ?? null;
  }, [emptyTare, spool.emptyWeightG, spool.filament.defaultEmptyWeightG]);

  const previewRemaining = useMemo(() => {
    if (mode !== "weigh") return null;
    const gross = Math.floor(Number(grams));
    if (!Number.isFinite(gross)) return null;
    return filamentFromGrossWeight(gross, effectiveEmpty);
  }, [mode, grams, effectiveEmpty]);

  const logUsage = api.spool.logUsage.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.spool.invalidate(),
        utils.filament.invalidate(),
        utils.stats.invalidate(),
      ]);
      closeDialog();
      toast.success("Usage logged");
    },
    onError: (err) => toast.error(err.message),
  });

  const updateSpool = api.spool.update.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.spool.invalidate(),
        utils.stats.invalidate(),
      ]);
      closeDialog();
      toast.success("Remaining weight updated");
    },
    onError: (err) => toast.error(err.message),
  });

  const weighSpool = api.spool.weigh.useMutation({
    onSuccess: async (updated) => {
      await Promise.all([
        utils.spool.invalidate(),
        utils.filament.invalidate(),
        utils.stats.invalidate(),
      ]);
      closeDialog();
      toast.success(`Remaining set to ${updated.remainingWeightG}g`);
    },
    onError: (err) => toast.error(err.message),
  });

  const archive = api.spool.archive.useMutation({
    onSuccess: async () => {
      await Promise.all([utils.spool.invalidate(), utils.stats.invalidate()]);
      toast.success("Spool archived");
    },
    onError: (err) => toast.error(err.message),
  });

  const busy =
    logUsage.isPending ||
    updateSpool.isPending ||
    weighSpool.isPending ||
    archive.isPending;
  const canLog = spool.status !== "archived" && spool.status !== "empty";

  const closeDialog = () => {
    setMode(null);
    setGrams("");
    setEmptyTare("");
    setNote("");
  };

  const openUsage = () => {
    setGrams("");
    setNote("");
    setEmptyTare("");
    setMode("usage");
  };

  const openRemaining = () => {
    setGrams(String(spool.remainingWeightG));
    setNote("");
    setEmptyTare("");
    setMode("remaining");
  };

  const openWeigh = () => {
    const empty =
      spool.emptyWeightG ?? spool.filament.defaultEmptyWeightG ?? null;
    const gross = grossFromFilamentWeight(spool.remainingWeightG, empty);
    setGrams(gross != null ? String(gross) : "");
    setEmptyTare(empty != null ? String(empty) : "");
    setNote("");
    setMode("weigh");
  };

  const submit = () => {
    const value = Math.floor(Number(grams));
    if (!Number.isFinite(value) || value < 0) {
      toast.error("Enter a valid weight");
      return;
    }

    if (mode === "usage") {
      if (value < 1) {
        toast.error("Grams used must be at least 1");
        return;
      }
      logUsage.mutate({
        spoolId: spool.id,
        gramsUsed: value,
        note: note.trim() || null,
      });
      return;
    }

    if (mode === "remaining") {
      updateSpool.mutate({
        id: spool.id,
        remainingWeightG: value,
        status:
          value === 0
            ? "empty"
            : spool.status === "sealed"
              ? "open"
              : undefined,
      });
      return;
    }

    if (mode === "weigh") {
      const empty =
        emptyTare.trim() === ""
          ? (spool.emptyWeightG ?? spool.filament.defaultEmptyWeightG ?? null)
          : Math.floor(Number(emptyTare));
      if (empty == null || !Number.isFinite(empty)) {
        toast.error("Enter the empty spool weight");
        return;
      }
      weighSpool.mutate({
        id: spool.id,
        grossWeightG: value,
        emptyWeightG: empty,
      });
    }
  };

  const dialogTitle =
    mode === "usage"
      ? "Log usage"
      : mode === "remaining"
        ? "Set remaining"
        : mode === "weigh"
          ? "Weigh spool"
          : "";

  const dialogDescription =
    mode === "usage"
      ? `How many grams did you use from ${spool.filament.colorName ?? "this spool"}?`
      : mode === "remaining"
        ? `Net filament remaining for ${spool.filament.colorName ?? "this spool"} (currently ${spool.remainingWeightG}g).`
        : mode === "weigh"
          ? `Put the whole spool on a scale. Filament = reading − empty tare.`
          : "";

  return (
    <>
      <div
        className="flex shrink-0 items-center gap-1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {canLog && (
          <Button
            type="button"
            size={dense ? "xs" : "sm"}
            variant="outline"
            disabled={busy}
            onClick={openUsage}
          >
            <RiSubtractLine />
            Log
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                type="button"
                size={dense ? "icon-xs" : "icon-sm"}
                variant="ghost"
                aria-label="More actions"
                disabled={busy}
              />
            }
          >
            <RiMoreLine />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-48">
            {canLog && (
              <DropdownMenuItem onClick={openUsage}>
                <RiSubtractLine />
                Log usage
              </DropdownMenuItem>
            )}
            {spool.status !== "archived" && (
              <>
                <DropdownMenuItem onClick={openWeigh}>
                  <RiScales3Line />
                  Weigh spool
                </DropdownMenuItem>
                <DropdownMenuItem onClick={openRemaining}>
                  Set remaining filament
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem
              render={<Link href={`/spools/${spool.id}`} />}
            >
              Open spool
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              disabled={archive.isPending || spool.status === "archived"}
              onClick={() => archive.mutate({ id: spool.id })}
            >
              <RiArchiveLine />
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog
        open={mode != null}
        onOpenChange={(open) => {
          if (!open) closeDialog();
        }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-1">
            {mode === "weigh" && (
              <div className="space-y-2">
                <Label htmlFor={`empty-${spool.id}`}>Empty spool (g)</Label>
                <Input
                  id={`empty-${spool.id}`}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="tare weight"
                  className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                  value={emptyTare}
                  onChange={(e) => setEmptyTare(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor={`weight-${spool.id}`}>
                {mode === "usage"
                  ? "Grams used"
                  : mode === "weigh"
                    ? "Scale reading (g)"
                    : "Remaining filament (g)"}
              </Label>
              <Input
                id={`weight-${spool.id}`}
                type="number"
                inputMode="numeric"
                min={mode === "usage" ? 1 : 0}
                max={mode === "usage" ? spool.remainingWeightG : undefined}
                className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                autoFocus={mode !== "weigh"}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submit();
                  }
                }}
              />
            </div>
            {mode === "usage" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor={`note-${spool.id}`}>Print / note</Label>
                  <Input
                    id={`note-${spool.id}`}
                    placeholder="Optional"
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <p className="text-muted-foreground text-xs tabular-nums">
                  {spool.remainingWeightG}g left now
                </p>
              </>
            )}
            {mode === "weigh" && previewRemaining != null && (
              <p className="text-sm tabular-nums">
                Filament remaining:{" "}
                <span className="font-medium">{previewRemaining}g</span>
              </p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button
              type="button"
              disabled={busy || grams === ""}
              onClick={submit}
            >
              {mode === "usage" ? "Log" : mode === "weigh" ? "Apply" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
