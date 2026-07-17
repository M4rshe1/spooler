"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiCalendarLine, RiFilter3Line } from "@remixicon/react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { Textarea } from "@/components/ui/textarea";
import { SPOOL_STATUSES, type SpoolStatus } from "@/lib/filament";
import { api } from "@/trpc/react";

type SpoolFormProps = {
  mode: "create" | "edit";
  spoolId?: string;
  /** Pre-select a filament when opening from the filament detail page */
  defaultFilamentId?: string;
  initial?: {
    filamentId: string;
    locationId: string | null;
    initialWeightG: number;
    remainingWeightG: number;
    emptyWeightG: number | null;
    status: SpoolStatus;
    purchasedAt: string | null;
    priceCents: number | null;
    notes: string | null;
    lastDriedAt: string | null;
  };
};

function toDateInput(value: Date | string | null | undefined) {
  if (!value) return "";
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export function SpoolForm({
  mode,
  spoolId,
  defaultFilamentId,
  initial,
}: SpoolFormProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const [filterBrandId, setFilterBrandId] = useState("");
  const [filterMaterialId, setFilterMaterialId] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [draftBrandId, setDraftBrandId] = useState("");
  const [draftMaterialId, setDraftMaterialId] = useState("");

  const filamentsQuery = api.filament.list.useQuery({
    brandId: filterBrandId || undefined,
    materialId: filterMaterialId || undefined,
  });
  const brandsQuery = api.catalog.brands.useQuery();
  const materialsQuery = api.catalog.materials.useQuery();
  const locationsQuery = api.catalog.locations.useQuery();

  const [filamentId, setFilamentId] = useState(
    initial?.filamentId ?? defaultFilamentId ?? "",
  );
  const [locationId, setLocationId] = useState(initial?.locationId ?? "");
  const [initialWeightG, setInitialWeightG] = useState(
    initial?.initialWeightG ?? 1000,
  );
  const [remainingWeightG, setRemainingWeightG] = useState(
    initial?.remainingWeightG ?? initial?.initialWeightG ?? 1000,
  );
  const [emptyWeightG, setEmptyWeightG] = useState(
    initial?.emptyWeightG != null ? String(initial.emptyWeightG) : "",
  );
  const [emptyTouched, setEmptyTouched] = useState(mode === "edit");
  const [status, setStatus] = useState<SpoolStatus>(
    initial?.status ?? "sealed",
  );
  const [purchasedAt, setPurchasedAt] = useState(initial?.purchasedAt ?? "");
  const [price, setPrice] = useState(
    initial?.priceCents != null ? (initial.priceCents / 100).toFixed(2) : "",
  );
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [lastDriedAt, setLastDriedAt] = useState(initial?.lastDriedAt ?? "");
  const [weightTouched, setWeightTouched] = useState(mode === "edit");
  const [count, setCount] = useState(1);

  const selectedFilament = (filamentsQuery.data ?? []).find(
    (f) => f.id === filamentId,
  );

  const activeFilterCount =
    (filterBrandId ? 1 : 0) + (filterMaterialId ? 1 : 0);
  const filterBrandName = (brandsQuery.data ?? []).find(
    (b) => b.id === filterBrandId,
  )?.name;
  const filterMaterialName = (materialsQuery.data ?? []).find(
    (m) => m.id === filterMaterialId,
  )?.name;

  const openFilterDialog = () => {
    setDraftBrandId(filterBrandId);
    setDraftMaterialId(filterMaterialId);
    setFilterOpen(true);
  };

  const applyFilters = () => {
    setFilterBrandId(draftBrandId);
    setFilterMaterialId(draftMaterialId);
    setFilterOpen(false);
  };

  const clearFilters = () => {
    setDraftBrandId("");
    setDraftMaterialId("");
    setFilterBrandId("");
    setFilterMaterialId("");
    setFilterOpen(false);
  };

  useEffect(() => {
    if (!filterBrandId && !filterMaterialId) return;
    if (!filamentId || filamentsQuery.isLoading || !filamentsQuery.data) return;
    if (!filamentsQuery.data.some((f) => f.id === filamentId)) {
      setFilamentId("");
      if (mode === "create") setWeightTouched(false);
    }
  }, [
    mode,
    filterBrandId,
    filterMaterialId,
    filamentId,
    filamentsQuery.data,
    filamentsQuery.isLoading,
  ]);

  useEffect(() => {
    if (mode !== "create" || weightTouched || !selectedFilament) return;
    setInitialWeightG(selectedFilament.defaultWeightG);
    setRemainingWeightG(selectedFilament.defaultWeightG);
  }, [mode, weightTouched, selectedFilament]);

  useEffect(() => {
    if (mode !== "create" || emptyTouched || !selectedFilament) return;
    setEmptyWeightG(
      selectedFilament.defaultEmptyWeightG != null
        ? String(selectedFilament.defaultEmptyWeightG)
        : "",
    );
  }, [mode, emptyTouched, selectedFilament]);

  const createSpool = api.spool.create.useMutation({
    onSuccess: async (result) => {
      await utils.spool.invalidate();
      await utils.filament.invalidate();
      await utils.stats.invalidate();
      if (result.count === 1 && result.spools[0]) {
        toast.success("Spool added");
        router.push(`/spools/${result.spools[0].id}`);
      } else {
        toast.success(`Added ${result.count} spools`);
        router.push("/inventory");
      }
    },
    onError: (err) => toast.error(err.message),
  });

  const updateSpool = api.spool.update.useMutation({
    onSuccess: async () => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      toast.success("Spool updated");
      if (spoolId) router.push(`/spools/${spoolId}`);
    },
    onError: (err) => toast.error(err.message),
  });

  const busy = createSpool.isPending || updateSpool.isPending;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!filamentId) {
      toast.error("Pick a filament");
      return;
    }

    const priceCents =
      price.trim() === "" ? null : Math.round(Number.parseFloat(price) * 100);

    const payload = {
      filamentId,
      locationId: locationId || null,
      initialWeightG,
      remainingWeightG,
      emptyWeightG: emptyWeightG.trim() === "" ? null : Number(emptyWeightG),
      status,
      purchasedAt: purchasedAt ? new Date(purchasedAt) : null,
      priceCents: Number.isFinite(priceCents) ? priceCents : null,
      notes: notes || null,
      lastDriedAt: lastDriedAt ? new Date(lastDriedAt) : null,
    };

    if (mode === "create") {
      const qty = Math.min(50, Math.max(1, Math.floor(count) || 1));
      createSpool.mutate({ ...payload, count: qty });
    } else if (spoolId) {
      updateSpool.mutate({ id: spoolId, ...payload });
    }
  };

  const submitLabel =
    mode === "create"
      ? count > 1
        ? `Add ${count} spools`
        : "Add spool"
      : "Save changes";

  const formActions = (
    <div className="flex justify-end gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={() => router.back()}
        disabled={busy}
      >
        Cancel
      </Button>
      <Button type="submit" disabled={busy}>
        {submitLabel}
      </Button>
    </div>
  );

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-2xl space-y-4 pb-28 sm:space-y-6 md:pb-6"
      >
        <div className="hidden md:block">{formActions}</div>

        <Card>
          <CardHeader>
            <CardTitle>Filament</CardTitle>
            <CardDescription>
              Choose an existing product definition, or{" "}
              <Link
                href="/filaments/new"
                className="text-foreground underline underline-offset-2"
              >
                create a new filament
              </Link>
              .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel>Filament *</FieldLabel>
                <div className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <SearchableSelect
                      value={filamentId || null}
                      onValueChange={(next) => {
                        setFilamentId(next ?? "");
                        if (mode === "create") setWeightTouched(false);
                      }}
                      placeholder="Search filaments…"
                      emptyText="No filaments found"
                      options={(filamentsQuery.data ?? []).map((f) => ({
                        value: f.id,
                        label: [
                          f.colorName ?? "Untitled",
                          f.brand.name,
                          f.material.name,
                        ].join(" · "),
                      }))}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="relative shrink-0"
                    onClick={openFilterDialog}
                    aria-label="Filter filaments"
                  >
                    <RiFilter3Line />
                    {activeFilterCount > 0 && (
                      <Badge
                        variant="secondary"
                        className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 text-[10px] leading-none"
                      >
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </div>
                {activeFilterCount > 0 && (
                  <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <span>
                      Filtered by{" "}
                      {[filterBrandName, filterMaterialName]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                    <button
                      type="button"
                      className="text-foreground underline underline-offset-2"
                      onClick={clearFilters}
                    >
                      Clear
                    </button>
                  </div>
                )}
                {(filamentsQuery.data?.length ?? 0) === 0 && (
                  <FieldDescription>
                    {activeFilterCount > 0
                      ? "No filaments match these filters."
                      : "No filaments yet — add one first, then open a physical spool."}
                  </FieldDescription>
                )}
              </Field>

              {selectedFilament && (
                <div className="border-border flex items-center gap-3 border px-3 py-2">
                  <ColorSwatch
                    mode={selectedFilament.colorMode}
                    colors={selectedFilament.colors}
                    className="h-10 w-14 shrink-0"
                  />
                  <div className="min-w-0 text-sm">
                    <div className="truncate font-medium">
                      {selectedFilament.colorName ?? "Untitled"}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {selectedFilament.brand.name} ·{" "}
                      {selectedFilament.material.name} ·{" "}
                      {selectedFilament.diameterMm}mm · default{" "}
                      {selectedFilament.defaultWeightG}g
                    </div>
                  </div>
                </div>
              )}
            </FieldGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spool instance</CardTitle>
            <CardDescription>
              Weights, status, location, and purchase details for this roll.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              {mode === "create" && (
                <Field>
                  <FieldLabel htmlFor="spool-count">Quantity</FieldLabel>
                  <Input
                    id="spool-count"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={50}
                    className="min-h-11 max-w-32 text-base sm:min-h-9 sm:text-sm"
                    value={count}
                    onChange={(e) =>
                      setCount(
                        Math.min(50, Math.max(1, Number(e.target.value) || 1)),
                      )
                    }
                  />
                  <FieldDescription>
                    Create multiple identical spools of this filament at once.
                  </FieldDescription>
                </Field>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel>Status</FieldLabel>
                  <SearchableSelect
                    value={status}
                    onValueChange={(value) => {
                      if (value) setStatus(value as SpoolStatus);
                    }}
                    placeholder="Search status…"
                    options={SPOOL_STATUSES.map((s) => ({
                      value: s,
                      label: s,
                    }))}
                  />
                </Field>
                <Field>
                  <FieldLabel>Location</FieldLabel>
                  <SearchableSelect
                    value={locationId || "none"}
                    onValueChange={(value) => {
                      if (value === "none" || value == null) setLocationId("");
                      else setLocationId(value);
                    }}
                    placeholder="Search locations…"
                    allowClear
                    options={[
                      { value: "none", label: "None" },
                      ...(locationsQuery.data ?? []).map((l) => ({
                        value: l.id,
                        label: l.name,
                      })),
                    ]}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Field>
                  <FieldLabel htmlFor="initial-weight">
                    Initial filament (g)
                  </FieldLabel>
                  <Input
                    id="initial-weight"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={initialWeightG}
                    onChange={(e) => {
                      const next = Number(e.target.value);
                      setWeightTouched(true);
                      setInitialWeightG(next);
                      if (mode === "create") setRemainingWeightG(next);
                    }}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="remaining-weight">
                    Remaining filament (g)
                  </FieldLabel>
                  <Input
                    id="remaining-weight"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={remainingWeightG}
                    onChange={(e) => {
                      setWeightTouched(true);
                      setRemainingWeightG(Number(e.target.value));
                    }}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="empty-weight">
                    Empty spool (g)
                  </FieldLabel>
                  <Input
                    id="empty-weight"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    placeholder="tare"
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={emptyWeightG}
                    onChange={(e) => {
                      setEmptyTouched(true);
                      setEmptyWeightG(e.target.value);
                    }}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Field>
                  <FieldLabel htmlFor="purchased">
                    Purchased{" "}
                    <button
                      type="button"
                      className="text-muted-foreground ml-auto cursor-pointer text-xs underline-offset-2 hover:underline"
                      onClick={() =>
                        setPurchasedAt(
                          new Date().toISOString().split("T")[0] ?? "",
                        )
                      }
                    >
                      set today
                    </button>
                  </FieldLabel>
                  <Input
                    id="purchased"
                    type="date"
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={purchasedAt}
                    onChange={(e) => setPurchasedAt(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="price">Price</FieldLabel>
                  <Input
                    id="price"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="0.01"
                    placeholder="0.00"
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dried">
                    Last dried{" "}
                    <button
                      type="button"
                      className="text-muted-foreground ml-auto cursor-pointer text-xs underline-offset-2 hover:underline"
                      onClick={() =>
                        setLastDriedAt(
                          new Date().toISOString().split("T")[0] ?? "",
                        )
                      }
                    >
                      set today
                    </button>
                  </FieldLabel>
                  <Input
                    id="dried"
                    type="date"
                    className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                    value={lastDriedAt}
                    onChange={(e) => setLastDriedAt(e.target.value)}
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="notes">Notes</FieldLabel>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="text-base sm:text-sm"
                />
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <div className="border-border bg-background/95 supports-backdrop-filter:bg-background/80 fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 border-t p-3 backdrop-blur md:static md:z-auto md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
          <div className="mx-auto max-w-2xl md:pb-0">{formActions}</div>
        </div>
      </form>

      <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter filaments</DialogTitle>
            <DialogDescription>
              Narrow the filament list by brand and material.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel>Brand</FieldLabel>
              <SearchableSelect
                value={draftBrandId || "all"}
                onValueChange={(value) =>
                  setDraftBrandId(value === "all" || value == null ? "" : value)
                }
                placeholder="All brands"
                options={[
                  { value: "all", label: "All brands" },
                  ...(brandsQuery.data ?? []).map((b) => ({
                    value: b.id,
                    label: b.name,
                  })),
                ]}
              />
            </Field>
            <Field>
              <FieldLabel>Material</FieldLabel>
              <SearchableSelect
                value={draftMaterialId || "all"}
                onValueChange={(value) =>
                  setDraftMaterialId(
                    value === "all" || value == null ? "" : value,
                  )
                }
                placeholder="All materials"
                options={[
                  { value: "all", label: "All materials" },
                  ...(materialsQuery.data ?? []).map((m) => ({
                    value: m.id,
                    label: m.name,
                  })),
                ]}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={clearFilters}>
              Clear
            </Button>
            <Button type="button" onClick={applyFilters}>
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { toDateInput };
