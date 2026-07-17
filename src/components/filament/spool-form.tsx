"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import {
  ColorEditor,
  type ColorEditorValue,
} from "@/components/filament/color-editor";
import {
  CustomFieldsFormSection,
  customValuesToApiPayload,
  type CustomFieldFormValue,
} from "@/components/filament/custom-fields-form";
import { NfcScanCard } from "@/components/filament/nfc-scan-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { Textarea } from "@/components/ui/textarea";
import { defaultColorsForMode } from "@/lib/color-preview";
import { SPOOL_STATUSES, type SpoolStatus } from "@/lib/filament";
import { findCatalogMatch, type NfcSpoolDraft } from "@/lib/nfc";
import { api } from "@/trpc/react";

type SpoolFormProps = {
  mode: "create" | "edit";
  spoolId?: string;
  initial?: {
    brandId: string;
    materialId: string;
    locationId: string | null;
    diameterMm: number;
    initialWeightG: number;
    remainingWeightG: number;
    status: SpoolStatus;
    purchasedAt: string | null;
    priceCents: number | null;
    notes: string | null;
    lastDriedAt: string | null;
    productUrl: string | null;
    color: ColorEditorValue;
    customValues: CustomFieldFormValue[];
  };
};

function toDateInput(value: Date | string | null | undefined) {
  if (!value) return "";
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export function SpoolForm({ mode, spoolId, initial }: SpoolFormProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const brandsQuery = api.catalog.brands.useQuery();
  const materialsQuery = api.catalog.materials.useQuery();
  const locationsQuery = api.catalog.locations.useQuery();
  const fieldsQuery = api.customField.list.useQuery();

  const ensureBrand = api.catalog.ensureBrand.useMutation();
  const ensureMaterial = api.catalog.ensureMaterial.useMutation();

  const [brandId, setBrandId] = useState(initial?.brandId ?? "");
  const [materialId, setMaterialId] = useState(initial?.materialId ?? "");
  const [locationId, setLocationId] = useState(initial?.locationId ?? "");
  const [diameterMm, setDiameterMm] = useState(initial?.diameterMm ?? 1.75);
  const [initialWeightG, setInitialWeightG] = useState(
    initial?.initialWeightG ?? 1000,
  );
  const [remainingWeightG, setRemainingWeightG] = useState(
    initial?.remainingWeightG ?? initial?.initialWeightG ?? 1000,
  );
  const [status, setStatus] = useState<SpoolStatus>(
    initial?.status ?? "sealed",
  );
  const [purchasedAt, setPurchasedAt] = useState(initial?.purchasedAt ?? "");
  const [price, setPrice] = useState(
    initial?.priceCents != null ? (initial.priceCents / 100).toFixed(2) : "",
  );
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [lastDriedAt, setLastDriedAt] = useState(initial?.lastDriedAt ?? "");
  const [productUrl, setProductUrl] = useState(initial?.productUrl ?? "");
  const [color, setColor] = useState<ColorEditorValue>(
    initial?.color ?? {
      colorMode: "SOLID",
      colorName: "",
      colors: defaultColorsForMode("SOLID"),
    },
  );
  const [customValues, setCustomValues] = useState<CustomFieldFormValue[]>(
    initial?.customValues ?? [],
  );

  const createSpool = api.spool.create.useMutation({
    onSuccess: async (spool) => {
      await utils.spool.invalidate();
      await utils.stats.invalidate();
      toast.success("Spool added");
      router.push(`/spools/${spool.id}`);
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

  const busy =
    createSpool.isPending ||
    updateSpool.isPending ||
    ensureBrand.isPending ||
    ensureMaterial.isPending;

  const applyNfcDraft = async (draft: NfcSpoolDraft) => {
    let nextBrandId = brandId;
    let nextMaterialId = materialId;

    if (draft.brandName) {
      const local = findCatalogMatch(brandsQuery.data ?? [], draft.brandName);
      if (local) {
        nextBrandId = local.id;
      } else {
        const brand = await ensureBrand.mutateAsync({ name: draft.brandName });
        nextBrandId = brand.id;
        await utils.catalog.brands.invalidate();
      }
    }

    if (draft.materialName) {
      const local = findCatalogMatch(
        materialsQuery.data ?? [],
        draft.materialName,
      );
      if (local) {
        nextMaterialId = local.id;
      } else {
        const material = await ensureMaterial.mutateAsync({
          name: draft.materialName,
          minNozzleC: draft.minNozzleC ?? null,
          maxNozzleC: draft.maxNozzleC ?? null,
        });
        nextMaterialId = material.id;
        await utils.catalog.materials.invalidate();
      }
    }

    setBrandId(nextBrandId);
    setMaterialId(nextMaterialId);

    if (draft.diameterMm != null) setDiameterMm(draft.diameterMm);
    if (draft.initialWeightG != null) {
      setInitialWeightG(draft.initialWeightG);
      setRemainingWeightG(draft.remainingWeightG ?? draft.initialWeightG);
    } else if (draft.remainingWeightG != null) {
      setRemainingWeightG(draft.remainingWeightG);
    }
    if (draft.productUrl) setProductUrl(draft.productUrl);
    if (draft.notes) {
      setNotes((prev) => (prev.trim() ? prev : draft.notes!));
    }

    if (draft.locationName) {
      const loc = findCatalogMatch(
        locationsQuery.data ?? [],
        draft.locationName,
      );
      if (loc) setLocationId(loc.id);
    }

    const secondary = draft.secondaryColors ?? [];
    if (draft.colorHex || draft.colorName || secondary.length > 0) {
      const primary = draft.colorHex ?? secondary[0] ?? "#808080";
      if (secondary.length >= 1) {
        const stops = [primary, ...secondary].slice(0, 12);
        setColor({
          colorMode: stops.length >= 3 ? "MULTI" : "GRADIENT",
          colorName: draft.colorName ?? "",
          colors: stops.map((hex, index, arr) => ({
            hex,
            name: index === 0 ? (draft.colorName ?? null) : null,
            position: arr.length === 1 ? 0 : index / (arr.length - 1),
            weight: null,
          })),
        });
      } else {
        setColor({
          colorMode: "SOLID",
          colorName: draft.colorName ?? "",
          colors: [
            {
              hex: primary,
              name: draft.colorName ?? null,
              position: 0,
              weight: null,
            },
          ],
        });
      }
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandId || !materialId) {
      toast.error("Brand and material are required");
      return;
    }

    const priceCents =
      price.trim() === "" ? null : Math.round(Number.parseFloat(price) * 100);

    const payload = {
      brandId,
      materialId,
      locationId: locationId || null,
      diameterMm,
      initialWeightG,
      remainingWeightG,
      status,
      purchasedAt: purchasedAt ? new Date(purchasedAt) : null,
      priceCents: Number.isFinite(priceCents) ? priceCents : null,
      notes: notes || null,
      lastDriedAt: lastDriedAt ? new Date(lastDriedAt) : null,
      productUrl: productUrl.trim() || null,
      colorMode: color.colorMode,
      colorName: color.colorName || null,
      colors: color.colors.map((c) => ({
        hex: c.hex,
        name: c.name ?? null,
        position: c.position,
        weight: c.weight ?? null,
      })),
      customValues: customValuesToApiPayload(customValues),
    };

    if (mode === "create") {
      createSpool.mutate(payload);
    } else if (spoolId) {
      updateSpool.mutate({ id: spoolId, ...payload });
    }
  };

  const submitLabel = mode === "create" ? "Add spool" : "Save changes";

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
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-2xl space-y-4 pb-28 sm:space-y-6 md:pb-6"
    >
      <div className="hidden md:block">{formActions}</div>

      {mode === "create" && <NfcScanCard onDraft={applyNfcDraft} />}

      <Card>
        <CardHeader>
          <CardTitle>Basics</CardTitle>
          <CardDescription>
            Pick brand and material from Settings if they aren’t listed yet.{" "}
            <Link
              href="/settings"
              className="text-foreground underline underline-offset-2"
            >
              Open settings
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel>Brand *</FieldLabel>
                <SearchableSelect
                  value={brandId || null}
                  onValueChange={(next) => setBrandId(next ?? "")}
                  placeholder="Search brands…"
                  emptyText="No brands found"
                  options={(brandsQuery.data ?? []).map((b) => ({
                    value: b.id,
                    label: b.name,
                  }))}
                />
                {(brandsQuery.data?.length ?? 0) === 0 && (
                  <FieldDescription>
                    No brands yet — add one in Settings → Brands, or scan an NFC
                    tag.
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel>Material *</FieldLabel>
                <SearchableSelect
                  value={materialId || null}
                  onValueChange={(next) => setMaterialId(next ?? "")}
                  placeholder="Search materials…"
                  emptyText="No materials found"
                  options={(materialsQuery.data ?? []).map((m) => ({
                    value: m.id,
                    label: m.name,
                  }))}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
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
                <FieldLabel htmlFor="diameter">Diameter (mm)</FieldLabel>
                <Input
                  id="diameter"
                  type="number"
                  inputMode="decimal"
                  step="0.05"
                  min="0.1"
                  className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                  value={diameterMm}
                  onChange={(e) => setDiameterMm(Number(e.target.value))}
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

            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="initial-weight">
                  Initial weight (g)
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
                    setInitialWeightG(next);
                    if (mode === "create") setRemainingWeightG(next);
                  }}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="remaining-weight">
                  Remaining weight (g)
                </FieldLabel>
                <Input
                  id="remaining-weight"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                  value={remainingWeightG}
                  onChange={(e) => setRemainingWeightG(Number(e.target.value))}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field>
                <FieldLabel htmlFor="purchased">Purchased</FieldLabel>
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
                <FieldLabel htmlFor="dried">Last dried</FieldLabel>
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
              <FieldLabel htmlFor="product-url">
                Product / store link
              </FieldLabel>
              <Input
                id="product-url"
                type="url"
                inputMode="url"
                placeholder="https://store.example.com/filament/…"
                className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />
              <FieldDescription>
                Optional product page or storefront listing for this spool.
              </FieldDescription>
            </Field>

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

      <Card>
        <CardHeader>
          <CardTitle>Color</CardTitle>
          <CardDescription>
            Solid, gradient, or multi-color band preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ColorEditor value={color} onChange={setColor} />
        </CardContent>
      </Card>

      {(fieldsQuery.data?.length ?? 0) > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Custom fields</CardTitle>
            <CardDescription>
              Values for fields defined in Settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CustomFieldsFormSection
              fields={fieldsQuery.data ?? []}
              values={customValues}
              onChange={setCustomValues}
            />
          </CardContent>
        </Card>
      )}

      <div className="border-border bg-background/95 supports-backdrop-filter:bg-background/80 fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 border-t p-3 backdrop-blur md:static md:z-auto md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
        <div className="mx-auto max-w-2xl md:pb-0">{formActions}</div>
      </div>
    </form>
  );
}

export { toDateInput };
