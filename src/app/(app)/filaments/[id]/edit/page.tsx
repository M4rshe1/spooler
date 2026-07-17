"use client";

import { useParams } from "next/navigation";

import { FilamentForm } from "@/components/filament/filament-form";
import { parseMultiSelect } from "@/lib/filament";
import type { ColorMode } from "@/lib/filament";
import { api } from "@/trpc/react";

function toDateInput(value: Date | string | null | undefined) {
  if (!value) return "";
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export default function EditFilamentPage() {
  const params = useParams<{ id: string }>();
  const { data: filament, isLoading } = api.filament.get.useQuery({
    id: params.id,
  });

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading…</p>;
  }

  if (!filament) {
    return <p className="text-muted-foreground text-sm">Filament not found.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Edit filament
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Update brand, material, color, and custom fields.
        </p>
      </div>
      <FilamentForm
        mode="edit"
        filamentId={filament.id}
        initial={{
          brandId: filament.brandId,
          materialId: filament.materialId,
          diameterMm: filament.diameterMm,
          defaultWeightG: filament.defaultWeightG,
          defaultEmptyWeightG: filament.defaultEmptyWeightG,
          minNozzleC: filament.minNozzleC,
          maxNozzleC: filament.maxNozzleC,
          minBedC: filament.minBedC,
          maxBedC: filament.maxBedC,
          preferredNozzle: filament.preferredNozzle,
          notes: filament.notes,
          productUrl: filament.productUrl,
          color: {
            colorMode: filament.colorMode as ColorMode,
            colorName: filament.colorName ?? "",
            colors: filament.colors.map((c) => ({
              hex: c.hex,
              name: c.name,
              position: c.position,
              weight: c.weight,
            })),
          },
          customValues: filament.customFieldValues.map((cv) => ({
            fieldId: cv.fieldId,
            valueText: cv.valueText,
            valueNumber: cv.valueNumber,
            valueBoolean: cv.valueBoolean,
            valueDate: toDateInput(cv.valueDate) || null,
            valueMulti:
              cv.field.type === "MULTISELECT"
                ? parseMultiSelect(cv.valueText)
                : undefined,
          })),
        }}
      />
    </div>
  );
}
