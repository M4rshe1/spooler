import { LOW_STOCK_THRESHOLD_G } from "@/lib/filament";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export const statsRouter = createTRPCRouter({
  overview: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const spools = await ctx.db.spool.findMany({
      where: { userId, status: { not: "archived" } },
      include: {
        filament: {
          include: {
            brand: true,
            material: true,
            colors: { orderBy: { position: "asc" }, take: 6 },
          },
        },
      },
    });

    const totalSpools = spools.length;
    const totalGrams = spools.reduce((sum, s) => sum + s.remainingWeightG, 0);
    const lowStock = spools
      .filter(
        (s) =>
          s.status !== "empty" &&
          s.remainingWeightG > 0 &&
          s.remainingWeightG <= LOW_STOCK_THRESHOLD_G,
      )
      .sort((a, b) => a.remainingWeightG - b.remainingWeightG);

    const filamentAgg = new Map<
      string,
      {
        filament: (typeof spools)[number]["filament"];
        emptyCount: number;
        lowCount: number;
        remainingGrams: number;
        spoolCount: number;
      }
    >();

    for (const spool of spools) {
      const existing = filamentAgg.get(spool.filamentId) ?? {
        filament: spool.filament,
        emptyCount: 0,
        lowCount: 0,
        remainingGrams: 0,
        spoolCount: 0,
      };
      existing.spoolCount += 1;
      existing.remainingGrams += spool.remainingWeightG;
      if (spool.status === "empty" || spool.remainingWeightG <= 0) {
        existing.emptyCount += 1;
      } else if (spool.remainingWeightG <= LOW_STOCK_THRESHOLD_G) {
        existing.lowCount += 1;
      }
      filamentAgg.set(spool.filamentId, existing);
    }

    // Also include filaments marked for repurchase that have no active spools
    const markedFilaments = await ctx.db.filament.findMany({
      where: { userId, repurchaseQty: { gt: 0 } },
      include: {
        brand: true,
        material: true,
        colors: { orderBy: { position: "asc" }, take: 6 },
      },
    });

    const toRepurchaseMap = new Map<
      string,
      {
        id: string;
        quantity: number;
        /** Actual cart qty on the filament (0 if only suggested by stock). */
        repurchaseQty: number;
        reason: "empty" | "low" | "marked";
        emptyCount: number;
        lowCount: number;
        remainingGrams: number;
        colorMode: string;
        colorName: string | null;
        brand: { name: string; websiteUrl: string | null };
        material: { name: string };
        colors: {
          hex: string;
          name: string | null;
          position: number;
          weight: number | null;
        }[];
        productUrl: string | null;
      }
    >();

    for (const filament of markedFilaments) {
      const agg = filamentAgg.get(filament.id);
      toRepurchaseMap.set(filament.id, {
        id: filament.id,
        quantity: filament.repurchaseQty,
        repurchaseQty: filament.repurchaseQty,
        reason: "marked",
        emptyCount: agg?.emptyCount ?? 0,
        lowCount: agg?.lowCount ?? 0,
        remainingGrams: agg?.remainingGrams ?? 0,
        colorMode: filament.colorMode,
        colorName: filament.colorName,
        brand: filament.brand,
        material: filament.material,
        colors: filament.colors,
        productUrl: filament.productUrl,
      });
    }

    for (const [filamentId, agg] of filamentAgg) {
      if (agg.emptyCount === 0 && agg.lowCount === 0) continue;
      const existing = toRepurchaseMap.get(filamentId);
      if (existing) {
        if (agg.emptyCount > 0) existing.reason = "empty";
        else if (agg.lowCount > 0 && existing.reason === "marked") {
          existing.reason = "low";
        }
        continue;
      }
      const suggested = Math.max(1, agg.emptyCount);
      toRepurchaseMap.set(filamentId, {
        id: filamentId,
        quantity: suggested,
        repurchaseQty: 0,
        reason: agg.emptyCount > 0 ? "empty" : "low",
        emptyCount: agg.emptyCount,
        lowCount: agg.lowCount,
        remainingGrams: agg.remainingGrams,
        colorMode: agg.filament.colorMode,
        colorName: agg.filament.colorName,
        brand: agg.filament.brand,
        material: agg.filament.material,
        colors: agg.filament.colors,
        productUrl: agg.filament.productUrl,
      });
    }

    const toRepurchase = [...toRepurchaseMap.values()].sort((a, b) => {
      const rank = { empty: 0, low: 1, marked: 2 };
      const diff = rank[a.reason] - rank[b.reason];
      if (diff !== 0) return diff;
      return b.quantity - a.quantity;
    });

    const repurchaseCount = toRepurchase.reduce((sum, r) => sum + r.quantity, 0);

    const byMaterialMap = new Map<
      string,
      { materialId: string; name: string; count: number; grams: number }
    >();
    const byBrandMap = new Map<
      string,
      { brandId: string; name: string; count: number; grams: number }
    >();

    for (const spool of spools) {
      const materialId = spool.filament.materialId;
      const materialRow = byMaterialMap.get(materialId) ?? {
        materialId,
        name: spool.filament.material.name,
        count: 0,
        grams: 0,
      };
      materialRow.count += 1;
      materialRow.grams += spool.remainingWeightG;
      byMaterialMap.set(materialId, materialRow);

      const brandId = spool.filament.brandId;
      const brandRow = byBrandMap.get(brandId) ?? {
        brandId,
        name: spool.filament.brand.name,
        count: 0,
        grams: 0,
      };
      brandRow.count += 1;
      brandRow.grams += spool.remainingWeightG;
      byBrandMap.set(brandId, brandRow);
    }

    const since = startOfDay(new Date());
    since.setDate(since.getDate() - 29);

    const usages = await ctx.db.usage.findMany({
      where: {
        usedAt: { gte: since },
        spool: { userId },
      },
      include: {
        spool: {
          include: {
            filament: {
              include: { material: true, brand: true },
            },
          },
        },
      },
      orderBy: { usedAt: "asc" },
    });

    const usageByDayMap = new Map<string, { grams: number; prints: number }>();
    for (let i = 0; i < 30; i++) {
      const d = new Date(since);
      d.setDate(since.getDate() + i);
      usageByDayMap.set(formatDayKey(d), { grams: 0, prints: 0 });
    }

    const usageByMaterialMap = new Map<
      string,
      { materialId: string; name: string; grams: number; prints: number }
    >();

    for (const usage of usages) {
      const key = formatDayKey(usage.usedAt);
      const day = usageByDayMap.get(key) ?? { grams: 0, prints: 0 };
      day.grams += usage.gramsUsed;
      day.prints += 1;
      usageByDayMap.set(key, day);

      const material = usage.spool.filament.material;
      const row = usageByMaterialMap.get(material.id) ?? {
        materialId: material.id,
        name: material.name,
        grams: 0,
        prints: 0,
      };
      row.grams += usage.gramsUsed;
      row.prints += 1;
      usageByMaterialMap.set(material.id, row);
    }

    const usageByDay = [...usageByDayMap.entries()].map(([date, row]) => ({
      date,
      grams: row.grams,
      prints: row.prints,
    }));

    const totalUsageGrams = usages.reduce((sum, u) => sum + u.gramsUsed, 0);
    const totalPrints = usages.length;

    return {
      totalSpools,
      totalGrams,
      openCount: spools.filter((s) => s.status === "open").length,
      sealedCount: spools.filter((s) => s.status === "sealed").length,
      emptyCount: spools.filter((s) => s.status === "empty").length,
      lowStock,
      toRepurchase,
      repurchaseCount,
      byMaterial: [...byMaterialMap.values()].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
      byBrand: [...byBrandMap.values()].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
      usageByDay,
      usageByMaterial: [...usageByMaterialMap.values()].sort(
        (a, b) => b.grams - a.grams,
      ),
      totalUsageGrams,
      totalPrints,
      recent: spools
        .slice()
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        .slice(0, 6),
      lowStockThresholdG: LOW_STOCK_THRESHOLD_G,
    };
  }),
});
