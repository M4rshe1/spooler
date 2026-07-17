import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  LOW_STOCK_THRESHOLD_G,
  SPOOL_STATUSES,
  spoolCreateSchema,
  spoolUpdateSchema,
} from "@/lib/filament";
import {
  normalizeCustomValues,
  spoolInclude,
} from "@/server/api/filament-helpers";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const spoolRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({
          status: z.enum(SPOOL_STATUSES).optional(),
          materialId: z.string().optional(),
          brandId: z.string().optional(),
          search: z.string().optional(),
          includeArchived: z.boolean().default(false),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const search = input?.search?.trim();

      return ctx.db.spool.findMany({
        where: {
          userId,
          status:
            input?.status ??
            (input?.includeArchived ? undefined : { not: "archived" }),
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
          location: true,
          colors: { orderBy: { position: "asc" } },
          customFieldValues: {
            include: { field: true },
            where: { field: { showInList: true } },
          },
        },
        orderBy: [{ updatedAt: "desc" }],
      });
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: spoolInclude,
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }
      return spool;
    }),

  create: protectedProcedure
    .input(spoolCreateSchema)
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
      if (input.locationId) {
        const location = await ctx.db.location.findFirst({
          where: { id: input.locationId, userId },
        });
        if (!location) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid location",
          });
        }
      }

      const fields = await ctx.db.customField.findMany({
        where: { userId, entity: "SPOOL" },
      });
      const customRows = normalizeCustomValues(fields, input.customValues);

      const remaining = input.remainingWeightG ?? input.initialWeightG;

      return ctx.db.spool.create({
        data: {
          userId,
          brandId: input.brandId,
          materialId: input.materialId,
          locationId: input.locationId ?? null,
          colorMode: input.colorMode,
          colorName: input.colorName ?? null,
          diameterMm: input.diameterMm,
          initialWeightG: input.initialWeightG,
          remainingWeightG: remaining,
          status: input.status,
          productUrl: input.productUrl ?? null,
          purchasedAt: input.purchasedAt ?? null,
          priceCents: input.priceCents ?? null,
          notes: input.notes ?? null,
          lastDriedAt: input.lastDriedAt ?? null,
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
        include: spoolInclude,
      });
    }),

  update: protectedProcedure
    .input(spoolUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const existing = await ctx.db.spool.findFirst({
        where: { id: input.id, userId },
      });
      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
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
      if (input.locationId) {
        const location = await ctx.db.location.findFirst({
          where: { id: input.locationId, userId },
        });
        if (!location) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid location",
          });
        }
      }

      let customRows:
        | ReturnType<typeof normalizeCustomValues>
        | undefined;
      if (input.customValues) {
        const fields = await ctx.db.customField.findMany({
          where: { userId, entity: "SPOOL" },
        });
        customRows = normalizeCustomValues(fields, input.customValues);
      }

      return ctx.db.$transaction(async (tx) => {
        if (input.colors && input.colorMode) {
          await tx.spoolColorStop.deleteMany({ where: { spoolId: existing.id } });
          await tx.spoolColorStop.createMany({
            data: input.colors.map((c) => ({
              spoolId: existing.id,
              hex: c.hex.toUpperCase(),
              name: c.name ?? null,
              position: c.position,
              weight: c.weight ?? null,
            })),
          });
        }

        if (customRows) {
          await tx.customFieldValue.deleteMany({
            where: { spoolId: existing.id },
          });
          if (customRows.length > 0) {
            await tx.customFieldValue.createMany({
              data: customRows.map((row) => ({
                ...row,
                spoolId: existing.id,
              })),
            });
          }
        }

        return tx.spool.update({
          where: { id: existing.id },
          data: {
            brandId: input.brandId,
            materialId: input.materialId,
            locationId: input.locationId === undefined ? undefined : input.locationId,
            diameterMm: input.diameterMm,
            initialWeightG: input.initialWeightG,
            remainingWeightG: input.remainingWeightG,
            status: input.status,
            productUrl: input.productUrl,
            purchasedAt: input.purchasedAt,
            priceCents: input.priceCents,
            notes: input.notes,
            lastDriedAt: input.lastDriedAt,
            colorMode: input.colorMode,
            colorName: input.colorName,
          },
          include: spoolInclude,
        });
      });
    }),

  logUsage: protectedProcedure
    .input(
      z.object({
        spoolId: z.string(),
        gramsUsed: z.number().int().positive(),
        note: z.string().max(256).optional().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.spoolId, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }

      const remaining = Math.max(0, spool.remainingWeightG - input.gramsUsed);
      const status =
        remaining === 0
          ? "empty"
          : spool.status === "sealed"
            ? "open"
            : spool.status;
      const needsRepurchase =
        spool.needsRepurchase ||
        remaining === 0 ||
        remaining <= LOW_STOCK_THRESHOLD_G;

      return ctx.db.$transaction(async (tx) => {
        await tx.usage.create({
          data: {
            spoolId: spool.id,
            gramsUsed: input.gramsUsed,
            note: input.note ?? null,
          },
        });
        return tx.spool.update({
          where: { id: spool.id },
          data: { remainingWeightG: remaining, status, needsRepurchase },
          include: spoolInclude,
        });
      });
    }),

  setNeedsRepurchase: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        needsRepurchase: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }
      return ctx.db.spool.update({
        where: { id: spool.id },
        data: { needsRepurchase: input.needsRepurchase },
        include: spoolInclude,
      });
    }),

  /** Clear repurchase flag (and archive empty spools) after you bought a replacement */
  markRepurchased: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        archiveIfEmpty: z.boolean().default(true),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }

      const shouldArchive =
        input.archiveIfEmpty &&
        (spool.status === "empty" || spool.remainingWeightG <= 0);

      return ctx.db.spool.update({
        where: { id: spool.id },
        data: {
          needsRepurchase: false,
          status: shouldArchive ? "archived" : spool.status,
        },
        include: spoolInclude,
      });
    }),

  archive: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }
      return ctx.db.spool.update({
        where: { id: spool.id },
        data: { status: "archived" },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }
      await ctx.db.spool.delete({ where: { id: spool.id } });
      return { ok: true };
    }),
});
