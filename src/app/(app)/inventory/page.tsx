"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { ExternalLink } from "@/components/filament/external-link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { parseMultiSelect, SPOOL_STATUSES } from "@/lib/filament";
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

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("");
  const [materialId, setMaterialId] = useState("");
  const [includeArchived, setIncludeArchived] = useState(false);

  const materialsQuery = api.catalog.materials.useQuery();
  const spoolsQuery = api.spool.list.useQuery({
    search: search || undefined,
    status: status
      ? (status as (typeof SPOOL_STATUSES)[number])
      : undefined,
    materialId: materialId || undefined,
    includeArchived,
  });

  const listColumns = useMemo(() => {
    const fields = new Map<string, string>();
    for (const spool of spoolsQuery.data ?? []) {
      for (const cv of spool.customFieldValues) {
        if (cv.field.showInList) fields.set(cv.field.id, cv.field.label);
      }
    }
    return [...fields.entries()];
  }, [spoolsQuery.data]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Inventory
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Filter and browse every spool you own.
          </p>
        </div>
        <Link href="/spools/new" className={cn(buttonVariants())}>
          Add spool
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
          value={status || "all"}
          onValueChange={(value) =>
            setStatus(value === "all" || value == null ? "" : value)
          }
          placeholder="Status…"
          options={[
            { value: "all", label: "All statuses" },
            ...SPOOL_STATUSES.map((s) => ({ value: s, label: s })),
          ]}
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
        <label className="text-muted-foreground flex min-h-11 items-center gap-2 text-sm sm:min-h-0 sm:text-xs">
          <input
            type="checkbox"
            className="size-4"
            checked={includeArchived}
            onChange={(e) => setIncludeArchived(e.target.checked)}
          />
          Include archived
        </label>
      </div>

      {spoolsQuery.isLoading ? (
        <p className="text-muted-foreground text-sm">Loading…</p>
      ) : (spoolsQuery.data?.length ?? 0) === 0 ? (
        <div className="border-border border border-dashed px-6 py-12 text-center">
          <p className="font-heading text-lg font-semibold">No spools yet</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Add your first roll to start tracking remaining filament.
          </p>
          <Link href="/spools/new" className={cn(buttonVariants(), "mt-4")}>
            Add spool
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-border border-border divide-y border md:hidden">
            {spoolsQuery.data?.map((spool) => (
              <li key={spool.id}>
                <Link
                  href={`/spools/${spool.id}`}
                  className="hover:bg-muted/30 flex items-center gap-3 px-3 py-3 active:bg-muted/50"
                >
                  <ColorSwatch
                    mode={spool.colorMode}
                    colors={spool.colors}
                    className="h-10 w-10 shrink-0"
                    title={spool.colorName ?? undefined}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">
                      {spool.colorName ?? "Untitled"}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {spool.brand.name} · {spool.material.name}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">
                        {spool.status}
                      </Badge>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {spool.remainingWeightG}g / {spool.initialWeightG}g
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-border hidden overflow-x-auto border md:block">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-muted/40 text-muted-foreground text-xs uppercase">
                <tr>
                  <th className="px-3 py-2 font-medium">Color</th>
                  <th className="px-3 py-2 font-medium">Spool</th>
                  <th className="px-3 py-2 font-medium">Material</th>
                  <th className="px-3 py-2 font-medium">Left</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Location</th>
                  {listColumns.map(([id, label]) => (
                    <th key={id} className="px-3 py-2 font-medium">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {spoolsQuery.data?.map((spool) => {
                  const byField = new Map(
                    spool.customFieldValues.map((v) => [v.fieldId, v]),
                  );
                  return (
                    <tr key={spool.id} className="hover:bg-muted/30">
                      <td className="px-3 py-2">
                        <ColorSwatch
                          mode={spool.colorMode}
                          colors={spool.colors}
                          className="h-7 w-14"
                          title={spool.colorName ?? undefined}
                        />
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          href={`/spools/${spool.id}`}
                          className="font-medium hover:underline"
                        >
                          {spool.colorName ?? "Untitled"}
                        </Link>
                        <div className="text-muted-foreground text-xs">
                          {spool.brand.name}
                        </div>
                      </td>
                      <td className="px-3 py-2">{spool.material.name}</td>
                      <td className="px-3 py-2 tabular-nums">
                        {spool.remainingWeightG}g
                        <span className="text-muted-foreground">
                          {" "}
                          / {spool.initialWeightG}g
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <Badge variant="outline">{spool.status}</Badge>
                      </td>
                      <td className="text-muted-foreground px-3 py-2">
                        {spool.location?.name ?? "—"}
                      </td>
                      {listColumns.map(([fieldId]) => {
                        const cv = byField.get(fieldId);
                        return (
                          <td key={fieldId} className="px-3 py-2 text-xs">
                            {cv ? formatCustomValue(cv) : "—"}
                          </td>
                        );
                      })}
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
