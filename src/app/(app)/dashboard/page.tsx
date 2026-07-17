"use client";

import Link from "next/link";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { DashboardCharts } from "@/components/filament/dashboard-charts";
import { RepurchaseCard } from "@/components/filament/repurchase-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";

export default function DashboardPage() {
  const { data, isLoading } = api.stats.overview.useQuery();

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading dashboard…</p>;
  }

  if (!data) {
    return <p className="text-muted-foreground text-sm">No data yet.</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            What’s on the shelf right now.
          </p>
        </div>
        <Link href="/spools/new" className={cn(buttonVariants())}>
          Add spool
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Spools", value: data.totalSpools, href: "/inventory" },
          {
            label: "Grams left",
            value: data.totalGrams.toLocaleString(),
            href: "/inventory",
          },
          {
            label: "To repurchase",
            value: data.repurchaseCount,
            href: "/cart",
          },
          {
            label: "Used (30d)",
            value: `${data.totalUsageGrams.toLocaleString()}g`,
          },
        ].map((stat) => {
          const body = (
            <>
              <div className="text-muted-foreground text-xs uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="font-heading mt-1 text-2xl font-semibold">
                {stat.value}
              </div>
            </>
          );
          return "href" in stat && stat.href ? (
            <Link
              key={stat.label}
              href={stat.href}
              className="border-border bg-muted/30 hover:bg-muted/50 border px-4 py-3 transition-colors"
            >
              {body}
            </Link>
          ) : (
            <div
              key={stat.label}
              className="border-border bg-muted/30 border px-4 py-3"
            >
              {body}
            </div>
          );
        })}
      </div>

      <DashboardCharts
        byMaterial={data.byMaterial}
        byBrand={data.byBrand}
        usageByDay={data.usageByDay}
        usageByMaterial={data.usageByMaterial}
        totalUsageGrams={data.totalUsageGrams}
        totalPrints={data.totalPrints}
      />

      <RepurchaseCard
        items={data.toRepurchase}
        thresholdG={data.lowStockThresholdG}
      />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold">Recently updated</h2>
          <Link
            href="/inventory"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            View all
          </Link>
        </div>
        {data.recent.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Add your first spool to get started.
          </p>
        ) : (
          <ul className="grid gap-2 sm:grid-cols-2">
            {data.recent.map((spool) => (
              <li key={spool.id}>
                <Link
                  href={`/spools/${spool.id}`}
                  className="border-border hover:bg-muted/40 flex items-center gap-3 border px-3 py-2.5 transition-colors"
                >
                  <ColorSwatch
                    mode={spool.filament.colorMode}
                    colors={spool.filament.colors}
                    className="size-9"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {spool.filament.colorName ?? "Untitled"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {spool.filament.material.name} · {spool.remainingWeightG}g ·{" "}
                      {spool.status}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
