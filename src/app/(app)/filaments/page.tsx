"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { ExternalLink } from "@/components/filament/external-link";
import { FilamentBuyButton } from "@/components/filament/filament-buy-button";
import {
  RepurchaseControls,
  RepurchaseQtyBadge,
} from "@/components/filament/repurchase-controls";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { parseMultiSelect } from "@/lib/filament";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";

function formatCustomValue(value: {
  valueText: string | null;
  valueNumber: number | null;
  valueBoolean: boolean | null;
  valueDate: Date | null;
  field: { type: string; label: string };
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
        <ExternalLink href={value.valueText} className="text-xs" />
      ) : (
        "—"
      );
    default:
      return value.valueText ?? "—";
  }
}

export default function FilamentsPage() {
  const [search, setSearch] = useState("");
  const [materialId, setMaterialId] = useState("");

  const materialsQuery = api.catalog.materials.useQuery();
  const filamentsQuery = api.filament.list.useQuery({
    search: search || undefined,
    materialId: materialId || undefined,
  });

  const listColumns = useMemo(() => {
    const fields = new Map<string, string>();
    for (const filament of filamentsQuery.data ?? []) {
      for (const cv of filament.customFieldValues) {
        if (cv.field.showInList) fields.set(cv.field.id, cv.field.label);
      }
    }
    return [...fields.entries()];
  }, [filamentsQuery.data]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Filaments
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Product definitions — brand, material, color, and defaults.
          </p>
        </div>
        <Link href="/filaments/new" className={cn(buttonVariants())}>
          Add filament
        </Link>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Input
          className="min-h-11 w-full text-base sm:min-h-9 sm:max-w-xs sm:text-sm"
          placeholder="Search color, brand, notes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchableSelect
          className="w-full sm:w-44"
          value={materialId || "all"}
          onValueChange={(value) =>
            setMaterialId(value === "all" || value == null ? "" : value)
          }
          placeholder="Material…"
          options={[
            { value: "all", label: "All materials" },
            ...(materialsQuery.data ?? []).map((m) => ({
              value: m.id,
              label: m.name,
            })),
          ]}
        />
      </div>

      {filamentsQuery.isLoading ? (
        <p className="text-muted-foreground text-sm">Loading…</p>
      ) : (filamentsQuery.data?.length ?? 0) === 0 ? (
        <div className="border-border border border-dashed px-6 py-12 text-center">
          <p className="font-heading text-lg font-semibold">No filaments yet</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Define a filament product, then open physical spools from inventory.
          </p>
          <Link href="/filaments/new" className={cn(buttonVariants(), "mt-4")}>
            Add filament
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-border border-border divide-y border md:hidden">
            {filamentsQuery.data?.map((filament) => (
              <li
                key={filament.id}
                className="flex items-center gap-2 px-3 py-3"
              >
                <Link
                  href={`/filaments/${filament.id}`}
                  className="hover:bg-muted/30 active:bg-muted/50 -mx-1 flex min-w-0 flex-1 items-center gap-3 rounded-none px-1 py-1"
                >
                  <ColorSwatch
                    mode={filament.colorMode}
                    colors={filament.colors}
                    className="h-10 w-10 shrink-0"
                    title={filament.colorName ?? undefined}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">
                      {filament.colorName ?? "Untitled"}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {filament.brand.name} · {filament.material.name}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-[10px]">
                        {filament.colorMode.toLowerCase()}
                      </Badge>
                      <RepurchaseQtyBadge quantity={filament.repurchaseQty} />
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {filament._count.spools} spool
                        {filament._count.spools === 1 ? "" : "s"} ·{" "}
                        {filament.defaultWeightG}g
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <FilamentBuyButton
                    productUrl={filament.productUrl}
                    brandWebsiteUrl={filament.brand.websiteUrl}
                    quantity={
                      filament.repurchaseQty > 0
                        ? filament.repurchaseQty
                        : undefined
                    }
                    size="sm"
                  />
                  <RepurchaseControls
                    filamentId={filament.id}
                    repurchaseQty={filament.repurchaseQty}
                    compact
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="border-border hidden overflow-x-auto border md:block">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-muted/40 text-muted-foreground text-xs uppercase">
                <tr>
                  <th className="px-3 py-2 font-medium">Color</th>
                  <th className="px-3 py-2 font-medium">Filament</th>
                  <th className="px-3 py-2 font-medium">Material</th>
                  <th className="px-3 py-2 font-medium">Defaults</th>
                  <th className="px-3 py-2 font-medium">Spools</th>
                  <th className="px-3 py-2 font-medium">Cart</th>
                  {listColumns.map(([id, label]) => (
                    <th key={id} className="px-3 py-2 font-medium">
                      {label}
                    </th>
                  ))}
                  <th className="px-3 py-2 font-medium">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filamentsQuery.data?.map((filament) => {
                  const byField = new Map(
                    filament.customFieldValues.map((v) => [v.fieldId, v]),
                  );
                  return (
                    <tr key={filament.id} className="hover:bg-muted/30">
                      <td className="px-3 py-2">
                        <ColorSwatch
                          mode={filament.colorMode}
                          colors={filament.colors}
                          className="h-7 w-14"
                          title={filament.colorName ?? undefined}
                        />
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          href={`/filaments/${filament.id}`}
                          className="font-medium hover:underline"
                        >
                          {filament.colorName ?? "Untitled"}
                        </Link>
                        <div className="text-muted-foreground text-xs">
                          {filament.brand.name} · {filament.diameterMm}mm
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        {filament.material.name}
                      </td>
                      <td className="px-3 py-2 tabular-nums">
                        {filament.defaultWeightG}g
                        {filament.defaultEmptyWeightG != null && (
                          <span className="text-muted-foreground">
                            {" "}
                            · empty {filament.defaultEmptyWeightG}g
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2 tabular-nums">
                        {filament._count.spools}
                      </td>
                      <td className="px-3 py-2">
                        <RepurchaseQtyBadge quantity={filament.repurchaseQty} />
                        {filament.repurchaseQty <= 0 && (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      {listColumns.map(([fieldId]) => {
                        const cv = byField.get(fieldId);
                        return (
                          <td key={fieldId} className="px-3 py-2 text-xs">
                            {cv ? formatCustomValue(cv) : "—"}
                          </td>
                        );
                      })}
                      <td className="px-3 py-2 text-right">
                        <div className="inline-flex flex-wrap items-center justify-end gap-1">
                          <FilamentBuyButton
                            productUrl={filament.productUrl}
                            brandWebsiteUrl={filament.brand.websiteUrl}
                            quantity={
                              filament.repurchaseQty > 0
                                ? filament.repurchaseQty
                                : undefined
                            }
                            size="sm"
                          />
                          <RepurchaseControls
                            filamentId={filament.id}
                            repurchaseQty={filament.repurchaseQty}
                            compact
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
