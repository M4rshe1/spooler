"use client";

import { useParams } from "next/navigation";

import {
  SpoolForm,
  toDateInput,
} from "@/components/filament/spool-form";
import type { SpoolStatus } from "@/lib/filament";
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
          Update weight, status, location, and purchase details.
        </p>
      </div>
      <SpoolForm
        mode="edit"
        spoolId={spool.id}
        initial={{
          filamentId: spool.filamentId,
          locationId: spool.locationId,
          initialWeightG: spool.initialWeightG,
          remainingWeightG: spool.remainingWeightG,
          emptyWeightG: spool.emptyWeightG,
          status: spool.status as SpoolStatus,
          purchasedAt: toDateInput(spool.purchasedAt),
          priceCents: spool.priceCents,
          notes: spool.notes,
          lastDriedAt: toDateInput(spool.lastDriedAt),
        }}
      />
    </div>
  );
}
