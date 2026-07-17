"use client";

import { useParams } from "next/navigation";

import {
  SpoolForm,
  toDateInput,
} from "@/components/filament/spool-form";
import { parseMultiSelect } from "@/lib/filament";
import type { ColorMode, SpoolStatus } from "@/lib/filament";
import { api } from "@/trpc/react";

export default function EditSpoolPage() {
  const params = useParams<{ id: string }>();
  const { data: spool, isLoading } = api.spool.get.useQuery({ id: params.id });

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading…</p>;
  }

  if (!spool) {
    return <p className="text-muted-foreground text-sm">Spool not found.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Edit spool
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Update weight, color stops, and custom fields.
        </p>
      </div>
      <SpoolForm
        mode="edit"
        spoolId={spool.id}
        initial={{
          brandId: spool.brandId,
          materialId: spool.materialId,
          locationId: spool.locationId,
          diameterMm: spool.diameterMm,
          initialWeightG: spool.initialWeightG,
          remainingWeightG: spool.remainingWeightG,
          status: spool.status as SpoolStatus,
          purchasedAt: toDateInput(spool.purchasedAt),
          priceCents: spool.priceCents,
          notes: spool.notes,
          lastDriedAt: toDateInput(spool.lastDriedAt),
          productUrl: spool.productUrl,
          color: {
            colorMode: spool.colorMode as ColorMode,
            colorName: spool.colorName ?? "",
            colors: spool.colors.map((c) => ({
              hex: c.hex,
              name: c.name,
              position: c.position,
              weight: c.weight,
            })),
          },
          customValues: spool.customFieldValues.map((cv) => ({
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
