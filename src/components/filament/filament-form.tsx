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
import { findCatalogMatch, type NfcSpoolDraft } from "@/lib/nfc";
import { api } from "@/trpc/react";

type FilamentFormProps = {
  mode: "create" | "edit";
  filamentId?: string;
  initial?: {
    brandId: string;
    materialId: string;
    diameterMm: number;
    defaultWeightG: number;
    defaultEmptyWeightG: number | null;
    notes: string | null;
    productUrl: string | null;
    color: ColorEditorValue;
    customValues: CustomFieldFormValue[];
  };
};

export function FilamentForm({ mode, filamentId, initial }: FilamentFormProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const brandsQuery = api.catalog.brands.useQuery();
  const materialsQuery = api.catalog.materials.useQuery();
  const fieldsQuery = api.customField.list.useQuery();

  const ensureBrand = api.catalog.ensureBrand.useMutation();
  const ensureMaterial = api.catalog.ensureMaterial.useMutation();

  const [brandId, setBrandId] = useState(initial?.brandId ?? "");
  const [materialId, setMaterialId] = useState(initial?.materialId ?? "");
  const [diameterMm, setDiameterMm] = useState(initial?.diameterMm ?? 1.75);
  const [defaultWeightG, setDefaultWeightG] = useState(
    initial?.defaultWeightG ?? 1000,
  );
  const [defaultEmptyWeightG, setDefaultEmptyWeightG] = useState(
    initial?.defaultEmptyWeightG != null
      ? String(initial.defaultEmptyWeightG)
      : "",
  );
  const [notes, setNotes] = useState(initial?.notes ?? "");
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

  const createFilament = api.filament.create.useMutation({
    onSuccess: async (filament) => {
      await utils.filament.invalidate();
      toast.success("Filament added");
      router.push(`/filaments/${filament.id}`);
    },
    onError: (err) => toast.error(err.message),
  });

  const updateFilament = api.filament.update.useMutation({
    onSuccess: async () => {
      await utils.filament.invalidate();
      toast.success("Filament updated");
      if (filamentId) router.push(`/filaments/${filamentId}`);
    },
    onError: (err) => toast.error(err.message),
  });

  const busy =
    createFilament.isPending ||
    updateFilament.isPending ||
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
      setDefaultWeightG(draft.initialWeightG);
    }
    if (draft.productUrl) setProductUrl(draft.productUrl);
    if (draft.notes) {
      setNotes((prev) => (prev.trim() ? prev : draft.notes!));
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

    const payload = {
      brandId,
      materialId,
      diameterMm,
      defaultWeightG,
      defaultEmptyWeightG:
        defaultEmptyWeightG.trim() === ""
          ? null
          : Number(defaultEmptyWeightG),
      notes: notes || null,
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
      createFilament.mutate(payload);
    } else if (filamentId) {
      updateFilament.mutate({ id: filamentId, ...payload });
    }
  };

  const submitLabel = mode === "create" ? "Add filament" : "Save changes";

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
            Product definition shared by every physical spool of this filament.{" "}
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

            <div className="grid gap-4 sm:grid-cols-2">
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
                <FieldLabel htmlFor="default-weight">
                  Default filament weight (g)
                </FieldLabel>
                <Input
                  id="default-weight"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                  value={defaultWeightG}
                  onChange={(e) => setDefaultWeightG(Number(e.target.value))}
                />
                <FieldDescription>
                  Net filament when a new spool is opened (e.g. 1000).
                </FieldDescription>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="default-empty-weight">
                Empty spool weight (g)
              </FieldLabel>
              <Input
                id="default-empty-weight"
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="e.g. 180"
                className="min-h-11 text-base sm:min-h-9 sm:text-sm"
                value={defaultEmptyWeightG}
                onChange={(e) => setDefaultEmptyWeightG(e.target.value)}
              />
              <FieldDescription>
                Plastic spool tare. Used so scale readings become filament
                remaining (gross − empty).
              </FieldDescription>
            </Field>

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
