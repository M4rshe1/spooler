"use client";

import { useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
] as const;

type Slice = {
  name: string;
  count: number;
  grams: number;
};

type UsageDay = {
  date: string;
  grams: number;
  prints: number;
};

type UsageMaterial = {
  name: string;
  grams: number;
  prints: number;
};

function withFill(rows: Slice[]) {
  return rows.map((row, index) => ({
    ...row,
    fill: CHART_COLORS[index % CHART_COLORS.length]!,
  }));
}

function pieConfig(rows: { name: string }[]): ChartConfig {
  const config: ChartConfig = {
    grams: { label: "Grams left" },
    count: { label: "Spools" },
  };
  for (const [index, row] of rows.entries()) {
    config[row.name] = {
      label: row.name,
      color: CHART_COLORS[index % CHART_COLORS.length],
    };
  }
  return config;
}

function DistributionPie({
  title,
  description,
  data,
  emptyLabel,
}: {
  title: string;
  description: string;
  data: Slice[];
  emptyLabel: string;
}) {
  const chartData = useMemo(() => withFill(data), [data]);
  const config = useMemo(() => pieConfig(data), [data]);
  const totalGrams = data.reduce((sum, row) => sum + row.grams, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 || totalGrams === 0 ? (
          <p className="text-muted-foreground py-10 text-center text-sm">
            {emptyLabel}
          </p>
        ) : (
          <ChartContainer config={config} className="mx-auto aspect-square max-h-[260px]">
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    nameKey="name"
                    formatter={(value, _name, item) => {
                      const payload = item.payload as Slice;
                      return (
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium tabular-nums">
                            {Number(value).toLocaleString()}g left
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {payload.count} spool
                            {payload.count === 1 ? "" : "s"}
                          </span>
                        </div>
                      );
                    }}
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="grams"
                nameKey="name"
                innerRadius={58}
                outerRadius={90}
                strokeWidth={2}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-1 flex-wrap gap-2"
              />
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

function UsageTrendChart({ data }: { data: UsageDay[] }) {
  const config = {
    grams: { label: "Grams used", color: "var(--chart-1)" },
    prints: { label: "Prints", color: "var(--chart-3)" },
  } satisfies ChartConfig;

  const hasData = data.some((d) => d.grams > 0 || d.prints > 0);

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-base">Usage (30 days)</CardTitle>
        <CardDescription>
          Grams logged per day across all spools.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!hasData ? (
          <p className="text-muted-foreground py-10 text-center text-sm">
            Log usage on a spool to see the trend.
          </p>
        ) : (
          <ChartContainer config={config} className="aspect-[2/1] max-h-[280px] w-full">
            <AreaChart
              data={data}
              margin={{ left: 4, right: 8, top: 8, bottom: 0 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={28}
                tickFormatter={(value: string) => {
                  const [, m, d] = value.split("-");
                  return `${m}/${d}`;
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={40}
                tickFormatter={(value: number) => `${value}`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(label) => {
                      const raw = String(label);
                      const date = new Date(`${raw}T12:00:00`);
                      return date.toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="grams"
                stroke="var(--color-grams)"
                fill="var(--color-grams)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

function PrintsByMaterialChart({ data }: { data: UsageMaterial[] }) {
  const config = {
    prints: { label: "Prints", color: "var(--chart-2)" },
    grams: { label: "Grams", color: "var(--chart-4)" },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-base">
          Prints by material
        </CardTitle>
        <CardDescription>Usage logs in the last 30 days.</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <p className="text-muted-foreground py-10 text-center text-sm">
            No prints logged yet.
          </p>
        ) : (
          <ChartContainer config={config} className="aspect-[4/3] max-h-[280px] w-full">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ left: 4, right: 8, top: 4, bottom: 0 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                axisLine={false}
                width={64}
              />
              <XAxis type="number" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="prints"
                fill="var(--color-prints)"
                radius={2}
                name="Prints"
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardCharts({
  byMaterial,
  byBrand,
  usageByDay,
  usageByMaterial,
  totalUsageGrams,
  totalPrints,
}: {
  byMaterial: Slice[];
  byBrand: Slice[];
  usageByDay: UsageDay[];
  usageByMaterial: UsageMaterial[];
  totalUsageGrams: number;
  totalPrints: number;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-heading text-lg font-semibold">Insights</h2>
          <p className="text-muted-foreground text-sm">
            Stock mix and recent print activity.
          </p>
        </div>
        <p className="text-muted-foreground text-xs tabular-nums">
          Last 30 days · {totalPrints} print{totalPrints === 1 ? "" : "s"} ·{" "}
          {totalUsageGrams.toLocaleString()}g used
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <DistributionPie
          title="Material stock"
          description="Remaining grams by material."
          data={byMaterial}
          emptyLabel="Add spools to see material mix."
        />
        <DistributionPie
          title="Brand stock"
          description="Remaining grams by brand."
          data={byBrand}
          emptyLabel="Add spools to see brand mix."
        />
        <UsageTrendChart data={usageByDay} />
        <PrintsByMaterialChart data={usageByMaterial} />
      </div>
    </div>
  );
}
