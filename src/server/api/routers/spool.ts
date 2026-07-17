import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  filamentFromGrossWeight,
  LOW_STOCK_THRESHOLD_G,
  SPOOL_STATUSES,
  spoolCreateSchema,
  spoolUpdateSchema,
  spoolWeighSchema,
} from "@/lib/filament";
import { spoolInclude } from "@/server/api/filament-helpers";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const spoolRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({
          status: z.enum(SPOOL_STATUSES).optional(),
          materialId: z.string().optional(),
          brandId: z.string().optional(),
          filamentId: z.string().optional(),
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
          filamentId: input?.filamentId,
          filament:
            input?.materialId || input?.brandId
              ? {
                  materialId: input?.materialId,
                  brandId: input?.brandId,
                }
              : undefined,
          OR: search
            ? [
                { notes: { contains: search } },
                { filament: { colorName: { contains: search } } },
                { filament: { notes: { contains: search } } },
                { filament: { brand: { name: { contains: search } } } },
                { filament: { material: { name: { contains: search } } } },
              ]
            : undefined,
        },
        include: {
          filament: {
            include: {
              brand: true,
              material: true,
              colors: { orderBy: { position: "asc" } },
              customFieldValues: {
                include: { field: true },
                where: { field: { showInList: true } },
              },
            },
          },
          location: true,
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

      const filament = await ctx.db.filament.findFirst({
        where: { id: input.filamentId, userId },
      });
      if (!filament) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid filament",
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

      const initialWeightG = input.initialWeightG ?? filament.defaultWeightG;
      const remainingWeightG = input.remainingWeightG ?? initialWeightG;
      const emptyWeightG =
        input.emptyWeightG !== undefined
          ? input.emptyWeightG
          : (filament.defaultEmptyWeightG ?? null);
      const count = input.count ?? 1;

      const row = {
        userId,
        filamentId: input.filamentId,
        locationId: input.locationId ?? null,
        initialWeightG,
        remainingWeightG,
        emptyWeightG,
        status: input.status,
        purchasedAt: input.purchasedAt ?? null,
        priceCents: input.priceCents ?? null,
        notes: input.notes ?? null,
        lastDriedAt: input.lastDriedAt ?? null,
      };

      if (count === 1) {
        const spool = await ctx.db.spool.create({
          data: row,
          include: spoolInclude,
        });
        return { count: 1, spools: [spool] };
      }

      await ctx.db.spool.createMany({
        data: Array.from({ length: count }, () => ({ ...row })),
      });

      const spools = await ctx.db.spool.findMany({
        where: { userId, filamentId: input.filamentId },
        include: spoolInclude,
        orderBy: { createdAt: "desc" },
        take: count,
      });

      return { count, spools };
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

      if (input.filamentId) {
        const filament = await ctx.db.filament.findFirst({
          where: { id: input.filamentId, userId },
        });
        if (!filament) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid filament",
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

      return ctx.db.spool.update({
        where: { id: existing.id },
        data: {
          filamentId: input.filamentId,
          locationId:
            input.locationId === undefined ? undefined : input.locationId,
          initialWeightG: input.initialWeightG,
          remainingWeightG: input.remainingWeightG,
          emptyWeightG:
            input.emptyWeightG === undefined ? undefined : input.emptyWeightG,
          status: input.status,
          purchasedAt: input.purchasedAt,
          priceCents: input.priceCents,
          notes: input.notes,
          lastDriedAt: input.lastDriedAt,
        },
        include: spoolInclude,
      });
    }),

  /** Set remaining filament from a scale reading: gross − empty tare */
  weigh: protectedProcedure
    .input(spoolWeighSchema)
    .mutation(async ({ ctx, input }) => {
      const spool = await ctx.db.spool.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!spool) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Spool not found" });
      }

      const emptyWeightG =
        input.emptyWeightG !== undefined
          ? input.emptyWeightG
          : spool.emptyWeightG;

      if (emptyWeightG == null) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Set an empty spool weight before weighing",
        });
      }

      const remaining = filamentFromGrossWeight(
        input.grossWeightG,
        emptyWeightG,
      );
      if (remaining == null) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid scale reading",
        });
      }

      if (input.grossWeightG < emptyWeightG) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Scale reading (${input.grossWeightG}g) is below empty spool weight (${emptyWeightG}g)`,
        });
      }

      const status =
        remaining === 0
          ? "empty"
          : spool.status === "sealed"
            ? "open"
            : spool.status;

      const shouldSuggestRepurchase =
        remaining === 0 || remaining <= LOW_STOCK_THRESHOLD_G;

      return ctx.db.$transaction(async (tx) => {
        if (shouldSuggestRepurchase) {
          const filament = await tx.filament.findFirst({
            where: { id: spool.filamentId, userId: ctx.session.user.id },
          });
          if (filament && filament.repurchaseQty === 0) {
            await tx.filament.update({
              where: { id: filament.id },
              data: { repurchaseQty: 1 },
            });
          }
        }

        return tx.spool.update({
          where: { id: spool.id },
          data: {
            remainingWeightG: remaining,
            emptyWeightG,
            status,
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

      const shouldSuggestRepurchase =
        remaining === 0 || remaining <= LOW_STOCK_THRESHOLD_G;

      return ctx.db.$transaction(async (tx) => {
        await tx.usage.create({
          data: {
            spoolId: spool.id,
            gramsUsed: input.gramsUsed,
            note: input.note ?? null,
          },
        });

        if (shouldSuggestRepurchase) {
          const filament = await tx.filament.findFirst({
            where: { id: spool.filamentId, userId: ctx.session.user.id },
          });
          if (filament && filament.repurchaseQty === 0) {
            await tx.filament.update({
              where: { id: filament.id },
              data: { repurchaseQty: 1 },
            });
          }
        }

        return tx.spool.update({
          where: { id: spool.id },
          data: { remainingWeightG: remaining, status },
          include: spoolInclude,
        });
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
