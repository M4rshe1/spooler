import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  filamentCreateSchema,
  filamentUpdateSchema,
} from "@/lib/filament";
import {
  filamentInclude,
  normalizeCustomValues,
} from "@/server/api/filament-helpers";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const filamentRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({
          materialId: z.string().optional(),
          brandId: z.string().optional(),
          search: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const search = input?.search?.trim();

      return ctx.db.filament.findMany({
        where: {
          userId,
          materialId: input?.materialId,
          brandId: input?.brandId,
          OR: search
            ? [
                { colorName: { contains: search } },
                { notes: { contains: search } },
                { brand: { name: { contains: search } } },
                { material: { name: { contains: search } } },
              ]
            : undefined,
        },
        include: {
          brand: true,
          material: true,
          colors: { orderBy: { position: "asc" } },
          customFieldValues: {
            include: { field: true },
            where: { field: { showInList: true } },
          },
          _count: { select: { spools: true } },
        },
        orderBy: [{ updatedAt: "desc" }],
      });
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const filament = await ctx.db.filament.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: filamentInclude,
      });
      if (!filament) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Filament not found",
        });
      }
      return filament;
    }),

  create: protectedProcedure
    .input(filamentCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const [brand, material] = await Promise.all([
        ctx.db.brand.findFirst({ where: { id: input.brandId, userId } }),
        ctx.db.material.findUnique({ where: { id: input.materialId } }),
      ]);
      if (!brand) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid brand" });
      }
      if (!material) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid material",
        });
      }

      const fields = await ctx.db.customField.findMany({
        where: { userId, entity: "FILAMENT" },
      });
      const customRows = normalizeCustomValues(fields, input.customValues);

      return ctx.db.filament.create({
        data: {
          userId,
          brandId: input.brandId,
          materialId: input.materialId,
          colorMode: input.colorMode,
          colorName: input.colorName ?? null,
          diameterMm: input.diameterMm,
          defaultWeightG: input.defaultWeightG,
          defaultEmptyWeightG: input.defaultEmptyWeightG ?? null,
          productUrl: input.productUrl ?? null,
          notes: input.notes ?? null,
          colors: {
            create: input.colors.map((c) => ({
              hex: c.hex.toUpperCase(),
              name: c.name ?? null,
              position: c.position,
              weight: c.weight ?? null,
            })),
          },
          customFieldValues: {
            create: customRows,
          },
        },
        include: filamentInclude,
      });
    }),

  update: protectedProcedure
    .input(filamentUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const existing = await ctx.db.filament.findFirst({
        where: { id: input.id, userId },
      });
      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Filament not found",
        });
      }

      if (input.brandId) {
        const brand = await ctx.db.brand.findFirst({
          where: { id: input.brandId, userId },
        });
        if (!brand) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid brand" });
        }
      }
      if (input.materialId) {
        const material = await ctx.db.material.findUnique({
          where: { id: input.materialId },
        });
        if (!material) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid material",
          });
        }
      }

      let customRows: ReturnType<typeof normalizeCustomValues> | undefined;
      if (input.customValues) {
        const fields = await ctx.db.customField.findMany({
          where: { userId, entity: "FILAMENT" },
        });
        customRows = normalizeCustomValues(fields, input.customValues);
      }

      return ctx.db.$transaction(async (tx) => {
        if (input.colors && input.colorMode) {
          await tx.filamentColorStop.deleteMany({
            where: { filamentId: existing.id },
          });
          await tx.filamentColorStop.createMany({
            data: input.colors.map((c) => ({
              filamentId: existing.id,
              hex: c.hex.toUpperCase(),
              name: c.name ?? null,
              position: c.position,
              weight: c.weight ?? null,
            })),
          });
        }

        if (customRows) {
          await tx.customFieldValue.deleteMany({
            where: { filamentId: existing.id },
          });
          if (customRows.length > 0) {
            await tx.customFieldValue.createMany({
              data: customRows.map((row) => ({
                ...row,
                filamentId: existing.id,
              })),
            });
          }
        }

        return tx.filament.update({
          where: { id: existing.id },
          data: {
            brandId: input.brandId,
            materialId: input.materialId,
            diameterMm: input.diameterMm,
            defaultWeightG: input.defaultWeightG,
            defaultEmptyWeightG: input.defaultEmptyWeightG,
            productUrl: input.productUrl,
            notes: input.notes,
            colorMode: input.colorMode,
            colorName: input.colorName,
          },
          include: filamentInclude,
        });
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const filament = await ctx.db.filament.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: { _count: { select: { spools: true } } },
      });
      if (!filament) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Filament not found",
        });
      }
      if (filament._count.spools > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete a filament that still has spools",
        });
      }
      await ctx.db.filament.delete({ where: { id: filament.id } });
      return { ok: true };
    }),

  /** Set how many replacement spools to buy (0 clears the list). */
  setRepurchase: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        quantity: z.number().int().min(0).max(99),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const filament = await ctx.db.filament.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!filament) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Filament not found",
        });
      }
      return ctx.db.filament.update({
        where: { id: filament.id },
        data: { repurchaseQty: input.quantity },
        include: filamentInclude,
      });
    }),

  /** Clear repurchase qty after buying; add new sealed spools and optionally archive empties. */
  markBought: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        /** How many new spools to add; defaults to the filament’s cart qty (min 1). */
        quantity: z.number().int().min(1).max(99).optional(),
        archiveEmpty: z.boolean().default(true),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const filament = await ctx.db.filament.findFirst({
        where: { id: input.id, userId },
      });
      if (!filament) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Filament not found",
        });
      }

      const count = Math.min(
        99,
        Math.max(1, input.quantity ?? (filament.repurchaseQty || 1)),
      );
      const weightG = filament.defaultWeightG;
      const emptyWeightG = filament.defaultEmptyWeightG ?? null;

      return ctx.db.$transaction(async (tx) => {
        if (input.archiveEmpty) {
          await tx.spool.updateMany({
            where: {
              filamentId: filament.id,
              userId,
              OR: [{ status: "empty" }, { remainingWeightG: { lte: 0 } }],
            },
            data: { status: "archived" },
          });
        }

        await tx.spool.createMany({
          data: Array.from({ length: count }, () => ({
            userId,
            filamentId: filament.id,
            initialWeightG: weightG,
            remainingWeightG: weightG,
            emptyWeightG,
            status: "sealed",
            purchasedAt: new Date(),
          })),
        });

        const updated = await tx.filament.update({
          where: { id: filament.id },
          data: { repurchaseQty: 0 },
          include: filamentInclude,
        });

        return { filament: updated, addedCount: count };
      });
    }),
});
