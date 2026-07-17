"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { ExternalLink } from "@/components/filament/external-link";
import {
  RepurchaseControls,
  RepurchaseQtyBadge,
} from "@/components/filament/repurchase-controls";
import { FilamentBuyButton } from "@/components/filament/filament-buy-button";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { displayUrlHost, formatNozzleMaterial, parseMultiSelect } from "@/lib/filament";
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

export default function FilamentDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const utils = api.useUtils();
  const { data: filament, isLoading } = api.filament.get.useQuery({
    id: params.id,
  });

  const remove = api.filament.delete.useMutation({
    onSuccess: async () => {
      await utils.filament.invalidate();
      toast.success("Filament deleted");
      router.push("/filaments");
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading…</p>;
  }

  if (!filament) {
    return <p className="text-muted-foreground text-sm">Filament not found.</p>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex gap-4">
          <ColorSwatch
            mode={filament.colorMode}
            colors={filament.colors}
            className="h-16 w-24"
          />
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              {filament.colorName ?? "Untitled filament"}
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              {filament.brand.name} · {filament.material.name} ·{" "}
              {filament.diameterMm}mm
              {filament.material.preferredNozzle
                ? ` · ${formatNozzleMaterial(filament.material.preferredNozzle)} nozzle`
                : ""}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              {filament.brand.websiteUrl && (
                <ExternalLink
                  href={filament.brand.websiteUrl}
                  className="text-muted-foreground text-xs"
                >
                  {displayUrlHost(filament.brand.websiteUrl)}
                </ExternalLink>
              )}
              {filament.productUrl && (
                <ExternalLink
                  href={filament.productUrl}
                  className="text-muted-foreground text-xs"
                >
                  Product page
                </ExternalLink>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="secondary">
                {filament.colorMode.toLowerCase()}
              </Badge>
              <Badge variant="outline">
                default {filament.defaultWeightG}g
              </Badge>
              {filament.defaultEmptyWeightG != null && (
                <Badge variant="outline">
                  empty {filament.defaultEmptyWeightG}g
                </Badge>
              )}
              <Badge variant="outline">
                {filament._count.spools} spool
                {filament._count.spools === 1 ? "" : "s"}
              </Badge>
              <RepurchaseQtyBadge quantity={filament.repurchaseQty} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilamentBuyButton
            productUrl={filament.productUrl}
            brandWebsiteUrl={filament.brand.websiteUrl}
            quantity={filament.repurchaseQty > 0 ? filament.repurchaseQty : undefined}
          />
          <RepurchaseControls
            filamentId={filament.id}
            repurchaseQty={filament.repurchaseQty}
          />
          <Link
            href={`/spools/new?filamentId=${filament.id}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Open spool
          </Link>
          <Link
            href={`/filaments/${filament.id}/edit`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Edit
          </Link>
          <Button
            variant="destructive"
            onClick={() => {
              if (confirm("Delete this filament definition?")) {
                remove.mutate({ id: filament.id });
              }
            }}
            disabled={remove.isPending || filament._count.spools > 0}
            title={
              filament._count.spools > 0
                ? "Remove all spools first"
                : undefined
            }
          >
            Delete
          </Button>
        </div>
      </div>

      {filament.colors.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Color stops</h2>
          <ul className="flex flex-wrap gap-2">
            {filament.colors.map((stop) => (
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

      {filament.customFieldValues.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Custom fields</h2>
          <dl className="grid gap-2 sm:grid-cols-2">
            {filament.customFieldValues.map((cv) => (
              <div key={cv.id} className="border-border border px-3 py-2">
                <dt className="text-muted-foreground text-xs">{cv.field.label}</dt>
                <dd className="mt-0.5 text-sm">{formatCustomValue(cv)}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {filament.notes && (
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Notes</h2>
          <p className="text-sm whitespace-pre-wrap">{filament.notes}</p>
        </section>
      )}
    </div>
  );
}
