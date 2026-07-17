import { LOW_STOCK_THRESHOLD_G } from "@/lib/filament";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const statsRouter = createTRPCRouter({
  overview: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const spools = await ctx.db.spool.findMany({
      where: { userId, status: { not: "archived" } },
      include: {
        brand: true,
        material: true,
        colors: { orderBy: { position: "asc" }, take: 6 },
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

    const toRepurchase = spools
      .filter(
        (s) =>
          s.needsRepurchase ||
          s.status === "empty" ||
          s.remainingWeightG <= LOW_STOCK_THRESHOLD_G,
      )
      .map((s) => {
        let reason: "empty" | "low" | "marked" = "marked";
        if (s.status === "empty" || s.remainingWeightG <= 0) {
          reason = "empty";
        } else if (s.remainingWeightG <= LOW_STOCK_THRESHOLD_G) {
          reason = "low";
        }
        return { ...s, reason };
      })
      .sort((a, b) => {
        const rank = { empty: 0, low: 1, marked: 2 };
        const diff = rank[a.reason] - rank[b.reason];
        if (diff !== 0) return diff;
        return a.remainingWeightG - b.remainingWeightG;
      });

    const byMaterialMap = new Map<
      string,
      { materialId: string; name: string; count: number; grams: number }
    >();
    for (const spool of spools) {
      const existing = byMaterialMap.get(spool.materialId) ?? {
        materialId: spool.materialId,
        name: spool.material.name,
        count: 0,
        grams: 0,
      };
      existing.count += 1;
      existing.grams += spool.remainingWeightG;
      byMaterialMap.set(spool.materialId, existing);
    }

    return {
      totalSpools,
      totalGrams,
      openCount: spools.filter((s) => s.status === "open").length,
      sealedCount: spools.filter((s) => s.status === "sealed").length,
      emptyCount: spools.filter((s) => s.status === "empty").length,
      lowStock,
      toRepurchase,
      repurchaseCount: toRepurchase.length,
      byMaterial: [...byMaterialMap.values()].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
      recent: spools
        .slice()
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        .slice(0, 6),
      lowStockThresholdG: LOW_STOCK_THRESHOLD_G,
    };
  }),
});
