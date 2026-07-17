"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { SpoolForm } from "@/components/filament/spool-form";

function NewSpoolContent() {
  const searchParams = useSearchParams();
  const filamentId = searchParams.get("filamentId") ?? undefined;

  return <SpoolForm mode="create" defaultFilamentId={filamentId} />;
}

export default function NewSpoolPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Add spool
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Open a physical roll from an existing filament definition.
        </p>
      </div>
      <Suspense fallback={<p className="text-muted-foreground text-sm">Loading…</p>}>
        <NewSpoolContent />
      </Suspense>
    </div>
  );
}
