"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { ExternalLink } from "@/components/filament/external-link";
import { InventoryQuickActions } from "@/components/filament/inventory-quick-actions";
import { RepurchaseQtyBadge } from "@/components/filament/repurchase-controls";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { parseMultiSelect, SPOOL_STATUSES } from "@/lib/filament";
import { cn } from "@/lib/utils";
import { api, type RouterOutputs } from "@/trpc/react";

type SpoolRow = RouterOutputs["spool"]["list"][number];

type GroupBy = "none" | "filament" | "material";

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

function spoolTotals(spools: SpoolRow[]) {
  return {
    count: spools.length,
    remainingG: spools.reduce((sum, s) => sum + s.remainingWeightG, 0),
    initialG: spools.reduce((sum, s) => sum + s.initialWeightG, 0),
  };
}

function SpoolMobileRow({ spool }: { spool: SpoolRow }) {
  return (
    <li className="flex items-center gap-2 px-3 py-3">
      <Link
        href={`/spools/${spool.id}`}
        className="hover:bg-muted/30 active:bg-muted/50 -mx-1 flex min-w-0 flex-1 items-center gap-3 rounded-none px-1 py-1"
      >
        <ColorSwatch
          mode={spool.filament.colorMode}
          colors={spool.filament.colors}
          className="h-10 w-10 shrink-0"
          title={spool.filament.colorName ?? undefined}
        />
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium">
            {spool.filament.colorName ?? "Untitled"}
          </div>
          <div className="text-muted-foreground truncate text-xs">
            {spool.filament.brand.name} · {spool.filament.material.name}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-[10px]">
              {spool.status}
            </Badge>
            <RepurchaseQtyBadge quantity={spool.filament.repurchaseQty} />
            <span className="text-muted-foreground text-xs tabular-nums">
              {spool.remainingWeightG}g / {spool.initialWeightG}g
            </span>
          </div>
        </div>
      </Link>
      <InventoryQuickActions spool={spool} />
    </li>
  );
}

function SpoolTableRow({
  spool,
  listColumns,
}: {
  spool: SpoolRow;
  listColumns: [string, string][];
}) {
  const byField = new Map(
    spool.filament.customFieldValues.map((v) => [v.fieldId, v]),
  );
  return (
    <tr className="hover:bg-muted/30">
      <td className="px-3 py-2">
        <ColorSwatch
          mode={spool.filament.colorMode}
          colors={spool.filament.colors}
          className="h-7 w-14"
          title={spool.filament.colorName ?? undefined}
        />
      </td>
      <td className="px-3 py-2">
        <Link
          href={`/spools/${spool.id}`}
          className="font-medium hover:underline"
        >
          {spool.filament.colorName ?? "Untitled"}
        </Link>
        <div className="text-muted-foreground text-xs">
          {spool.filament.brand.name}
        </div>
      </td>
      <td className="px-3 py-2">{spool.filament.material.name}</td>
      <td className="px-3 py-2 tabular-nums">
        {spool.remainingWeightG}g
        <span className="text-muted-foreground">
          {" "}
          / {spool.initialWeightG}g
        </span>
      </td>
      <td className="px-3 py-2">
        <Badge variant="outline">{spool.status}</Badge>
        {spool.filament.repurchaseQty > 0 && (
          <div className="mt-1">
            <RepurchaseQtyBadge quantity={spool.filament.repurchaseQty} />
          </div>
        )}
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
      <td className="px-3 py-2 text-right">
        <div className="inline-flex justify-end">
          <InventoryQuickActions spool={spool} dense />
        </div>
      </td>
    </tr>
  );
}

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("");
  const [materialId, setMaterialId] = useState("");
  const [includeArchived, setIncludeArchived] = useState(false);
  const [groupBy, setGroupBy] = useState<GroupBy>("none");

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
      for (const cv of spool.filament.customFieldValues) {
        if (cv.field.showInList) fields.set(cv.field.id, cv.field.label);
      }
    }
    return [...fields.entries()];
  }, [spoolsQuery.data]);

  const groups = useMemo(() => {
    const spools = spoolsQuery.data ?? [];
    if (groupBy === "none") return null;

    const map = new Map<
      string,
      {
        key: string;
        title: string;
        subtitle: string;
        colorMode?: string;
        colors?: SpoolRow["filament"]["colors"];
        href?: string;
        spools: SpoolRow[];
      }
    >();

    for (const spool of spools) {
      if (groupBy === "filament") {
        const key = spool.filamentId;
        const existing = map.get(key);
        if (existing) {
          existing.spools.push(spool);
        } else {
          map.set(key, {
            key,
            title: spool.filament.colorName ?? "Untitled",
            subtitle: `${spool.filament.brand.name} · ${spool.filament.material.name}`,
            colorMode: spool.filament.colorMode,
            colors: spool.filament.colors,
            href: `/filaments/${spool.filamentId}`,
            spools: [spool],
          });
        }
      } else {
        const key = spool.filament.materialId;
        const existing = map.get(key);
        if (existing) {
          existing.spools.push(spool);
        } else {
          map.set(key, {
            key,
            title: spool.filament.material.name,
            subtitle: "Material",
            spools: [spool],
          });
        }
      }
    }

    return [...map.values()].sort((a, b) => a.title.localeCompare(b.title));
  }, [spoolsQuery.data, groupBy]);

  const overall = useMemo(
    () => spoolTotals(spoolsQuery.data ?? []),
    [spoolsQuery.data],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Inventory
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Filter and browse every physical spool you own.
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
        <SearchableSelect
          className="w-full sm:w-48"
          value={groupBy}
          onValueChange={(value) =>
            setGroupBy((value as GroupBy | null) ?? "none")
          }
          placeholder="Group by…"
          options={[
            { value: "none", label: "No grouping" },
            { value: "filament", label: "Group by filament" },
            { value: "material", label: "Group by material" },
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
            Add a filament definition, then open your first physical spool.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Link
              href="/filaments/new"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Add filament
            </Link>
            <Link href="/spools/new" className={cn(buttonVariants())}>
              Add spool
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span>
              <span className="text-foreground font-medium tabular-nums">
                {overall.count}
              </span>{" "}
              {overall.count === 1 ? "spool" : "spools"}
            </span>
            <span>
              <span className="text-foreground font-medium tabular-nums">
                {overall.remainingG.toLocaleString()}g
              </span>{" "}
              remaining
            </span>
            <span>
              <span className="text-foreground font-medium tabular-nums">
                {overall.initialG.toLocaleString()}g
              </span>{" "}
              initial
            </span>
          </div>

          {groupBy === "none" ? (
            <>
              <ul className="divide-border border-border divide-y border md:hidden">
                {spoolsQuery.data?.map((spool) => (
                  <SpoolMobileRow key={spool.id} spool={spool} />
                ))}
              </ul>

              <div className="border-border hidden overflow-x-auto border md:block">
                <table className="w-full min-w-[720px] text-left text-sm">
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
                      <th className="px-3 py-2 font-medium">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {spoolsQuery.data?.map((spool) => (
                      <SpoolTableRow
                        key={spool.id}
                        spool={spool}
                        listColumns={listColumns}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {groups?.map((group) => {
                const totals = spoolTotals(group.spools);
                return (
                  <section
                    key={group.key}
                    className="border-border overflow-hidden border"
                  >
                    <div className="bg-muted/40 flex flex-wrap items-center gap-3 border-b border-border px-3 py-2.5">
                      {group.colors && group.colorMode && (
                        <ColorSwatch
                          mode={group.colorMode}
                          colors={group.colors}
                          className="h-8 w-10 shrink-0"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        {group.href ? (
                          <Link
                            href={group.href}
                            className="font-heading truncate text-sm font-semibold hover:underline"
                          >
                            {group.title}
                          </Link>
                        ) : (
                          <div className="font-heading truncate text-sm font-semibold">
                            {group.title}
                          </div>
                        )}
                        <div className="text-muted-foreground truncate text-xs">
                          {group.subtitle}
                        </div>
                      </div>
                      <div className="text-muted-foreground flex flex-wrap gap-x-3 gap-y-0.5 text-xs tabular-nums sm:text-sm">
                        <span>
                          <span className="text-foreground font-medium">
                            {totals.count}
                          </span>{" "}
                          {totals.count === 1 ? "spool" : "spools"}
                        </span>
                        <span>
                          <span className="text-foreground font-medium">
                            {totals.remainingG.toLocaleString()}g
                          </span>{" "}
                          left
                        </span>
                        <span>
                          <span className="text-foreground font-medium">
                            {totals.initialG.toLocaleString()}g
                          </span>{" "}
                          initial
                        </span>
                      </div>
                    </div>

                    <ul className="divide-border divide-y md:hidden">
                      {group.spools.map((spool) => (
                        <SpoolMobileRow key={spool.id} spool={spool} />
                      ))}
                    </ul>

                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full min-w-[720px] text-left text-sm">
                        <thead className="text-muted-foreground text-xs uppercase">
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
                            <th className="px-3 py-2 font-medium">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {group.spools.map((spool) => (
                            <SpoolTableRow
                              key={spool.id}
                              spool={spool}
                              listColumns={listColumns}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
