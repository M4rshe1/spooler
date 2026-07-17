"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { ExternalLink } from "@/components/filament/external-link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { displayUrlHost, parseMultiSelect } from "@/lib/filament";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";

function formatCustomValue(value: {
  valueText: string | null;
  valueNumber: number | null;
  valueBoolean: boolean | null;
  valueDate: Date | null;
  field: { type: string };
}): React.ReactNode {
  switch (value.field.type) {
    case "BOOLEAN":
      return value.valueBoolean ? "Yes" : "No";
    case "NUMBER":
      return value.valueNumber?.toString() ?? "—";
    case "DATE":
      return value.valueDate
        ? new Date(value.valueDate).toLocaleDateString()
        : "—";
    case "MULTISELECT":
      return parseMultiSelect(value.valueText).join(", ") || "—";
    case "URL":
      return value.valueText ? (
        <ExternalLink href={value.valueText} className="text-sm" />
      ) : (
        "—"
      );
    default:
      return value.valueText ?? "—";
  }
}

export default function SpoolDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const utils = api.useUtils();
  const { data: spool, isLoading } = api.spool.get.useQuery({ id: params.id });

  const [gramsUsed, setGramsUsed] = useState("");
  const [usageNote, setUsageNote] = useState("");

  const logUsage = api.spool.logUsage.useMutation({
    onSuccess: async () => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      setGramsUsed("");
      setUsageNote("");
      toast.success("Usage logged");
    },
    onError: (err) => toast.error(err.message),
  });

  const archive = api.spool.archive.useMutation({
    onSuccess: async () => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      toast.success("Spool archived");
      router.push("/inventory");
    },
    onError: (err) => toast.error(err.message),
  });

  const remove = api.spool.delete.useMutation({
    onSuccess: async () => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      toast.success("Spool deleted");
      router.push("/inventory");
    },
    onError: (err) => toast.error(err.message),
  });

  const setNeedsRepurchase = api.spool.setNeedsRepurchase.useMutation({
    onSuccess: async (updated) => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      toast.success(
        updated.needsRepurchase
          ? "Added to repurchase list"
          : "Removed from repurchase list",
      );
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading…</p>;
  }

  if (!spool) {
    return <p className="text-muted-foreground text-sm">Spool not found.</p>;
  }

  const pct = Math.round(
    (spool.remainingWeightG / Math.max(1, spool.initialWeightG)) * 100,
  );

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex gap-4">
          <ColorSwatch
            mode={spool.colorMode}
            colors={spool.colors}
            className="h-16 w-24"
          />
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              {spool.colorName ?? "Untitled spool"}
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              {spool.brand.name} · {spool.material.name} · {spool.diameterMm}mm
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              {spool.brand.websiteUrl && (
                <ExternalLink
                  href={spool.brand.websiteUrl}
                  className="text-muted-foreground text-xs"
                >
                  {displayUrlHost(spool.brand.websiteUrl)}
                </ExternalLink>
              )}
              {spool.productUrl && (
                <ExternalLink
                  href={spool.productUrl}
                  className="text-muted-foreground text-xs"
                >
                  Product page
                </ExternalLink>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">{spool.status}</Badge>
              <Badge variant="secondary">{spool.colorMode.toLowerCase()}</Badge>
              {spool.needsRepurchase && (
                <Badge variant="destructive">repurchase</Badge>
              )}
              {spool.location && (
                <Badge variant="outline">{spool.location.name}</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={spool.needsRepurchase ? "secondary" : "outline"}
            disabled={setNeedsRepurchase.isPending}
            onClick={() =>
              setNeedsRepurchase.mutate({
                id: spool.id,
                needsRepurchase: !spool.needsRepurchase,
              })
            }
          >
            {spool.needsRepurchase ? "Unmark repurchase" : "Mark to repurchase"}
          </Button>
          <Link
            href={`/spools/${spool.id}/edit`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Edit
          </Link>
          <Button
            variant="outline"
            onClick={() => archive.mutate({ id: spool.id })}
            disabled={archive.isPending || spool.status === "archived"}
          >
            Archive
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              if (confirm("Delete this spool permanently?")) {
                remove.mutate({ id: spool.id });
              }
            }}
            disabled={remove.isPending}
          >
            Delete
          </Button>
        </div>
      </div>

      <section className="space-y-2">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-muted-foreground text-xs uppercase">
              Remaining
            </div>
            <div className="font-heading text-2xl font-semibold tabular-nums">
              {spool.remainingWeightG}g
              <span className="text-muted-foreground text-base font-normal">
                {" "}
                / {spool.initialWeightG}g
              </span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm tabular-nums">{pct}%</div>
        </div>
        <div className="bg-muted h-2 w-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all"
            style={{ width: `${Math.min(100, pct)}%` }}
          />
        </div>
      </section>

      {spool.colors.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Color stops</h2>
          <ul className="flex flex-wrap gap-2">
            {spool.colors.map((stop) => (
              <li
                key={stop.id}
                className="border-border flex items-center gap-2 border px-2 py-1.5 text-xs"
              >
                <ColorSwatch
                  mode="SOLID"
                  colors={[stop]}
                  className="size-4"
                />
                <span className="font-mono">{stop.hex}</span>
                {stop.name && (
                  <span className="text-muted-foreground">{stop.name}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {spool.customFieldValues.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Custom fields</h2>
          <dl className="grid gap-2 sm:grid-cols-2">
            {spool.customFieldValues.map((cv) => (
              <div key={cv.id} className="border-border border px-3 py-2">
                <dt className="text-muted-foreground text-xs">{cv.field.label}</dt>
                <dd className="mt-0.5 text-sm">{formatCustomValue(cv)}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {spool.notes && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Notes</h2>
          <p className="text-sm whitespace-pre-wrap">{spool.notes}</p>
        </section>
      )}

      <section className="space-y-3 border-t border-border pt-6">
        <h2 className="font-heading text-lg font-semibold">Log usage</h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_2fr_auto]">
          <div className="space-y-2">
            <Label htmlFor="grams">Grams used</Label>
            <Input
              id="grams"
              type="number"
              min={1}
              value={gramsUsed}
              onChange={(e) => setGramsUsed(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">Print / note</Label>
            <Input
              id="note"
              value={usageNote}
              onChange={(e) => setUsageNote(e.target.value)}
              placeholder="Optional"
            />
          </div>
          <div className="flex items-end">
            <Button
              disabled={!gramsUsed || logUsage.isPending}
              onClick={() =>
                logUsage.mutate({
                  spoolId: spool.id,
                  gramsUsed: Number(gramsUsed),
                  note: usageNote || null,
                })
              }
            >
              Log
            </Button>
          </div>
        </div>

        {spool.usages.length > 0 && (
          <ul className="divide-y divide-border border border-border">
            {spool.usages.map((usage) => (
              <li
                key={usage.id}
                className="flex items-center justify-between px-3 py-2 text-sm"
              >
                <div>
                  <span className="font-medium tabular-nums">
                    −{usage.gramsUsed}g
                  </span>
                  {usage.note && (
                    <span className="text-muted-foreground"> · {usage.note}</span>
                  )}
                </div>
                <span className="text-muted-foreground text-xs">
                  {new Date(usage.usedAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
