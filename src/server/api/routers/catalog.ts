import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { NOZZLE_MATERIALS, optionalUrlSchema } from "@/lib/filament";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const materialInputSchema = z.object({
  name: z.string().trim().min(1).max(64),
  density: z.number().positive().optional().nullable(),
  minNozzleC: z.number().int().optional().nullable(),
  maxNozzleC: z.number().int().optional().nullable(),
  minBedC: z.number().int().optional().nullable(),
  maxBedC: z.number().int().optional().nullable(),
  preferredNozzle: z.enum(NOZZLE_MATERIALS).optional().nullable(),
});

const brandInputSchema = z.object({
  name: z.string().trim().min(1).max(64),
  websiteUrl: optionalUrlSchema,
});

export const catalogRouter = createTRPCRouter({
  brands: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.brand.findMany({
      where: { userId: ctx.session.user.id },
      include: { _count: { select: { filaments: true } } },
      orderBy: { name: "asc" },
    });
  }),

  createBrand: protectedProcedure
    .input(brandInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.brand.create({
          data: {
            name: input.name,
            websiteUrl: input.websiteUrl ?? null,
            userId: ctx.session.user.id,
          },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A brand with that name already exists",
        });
      }
    }),

  /** Find brand by name (case-insensitive) or create it — used by NFC autofill. */
  ensureBrand: protectedProcedure
    .input(z.object({ name: z.string().trim().min(1).max(64) }))
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.brand.findFirst({
        where: {
          userId: ctx.session.user.id,
          name: { equals: input.name },
        },
      });
      if (existing) return existing;

      const all = await ctx.db.brand.findMany({
        where: { userId: ctx.session.user.id },
      });
      const ci = all.find(
        (b) => b.name.toLowerCase() === input.name.toLowerCase(),
      );
      if (ci) return ci;

      return ctx.db.brand.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
        },
      });
    }),

  updateBrand: protectedProcedure
    .input(brandInputSchema.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const brand = await ctx.db.brand.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!brand) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Brand not found" });
      }
      try {
        return await ctx.db.brand.update({
          where: { id: brand.id },
          data: {
            name: input.name,
            websiteUrl: input.websiteUrl ?? null,
          },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A brand with that name already exists",
        });
      }
    }),

  deleteBrand: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const brand = await ctx.db.brand.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: { _count: { select: { filaments: true } } },
      });
      if (!brand) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Brand not found" });
      }
      if (brand._count.filaments > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete a brand that has filaments",
        });
      }
      await ctx.db.brand.delete({ where: { id: brand.id } });
      return { ok: true };
    }),

  materials: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.material.findMany({
      include: { _count: { select: { filaments: true } } },
      orderBy: { name: "asc" },
    });
  }),

  createMaterial: protectedProcedure
    .input(materialInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.material.create({
          data: {
            name: input.name,
            density: input.density ?? null,
            minNozzleC: input.minNozzleC ?? null,
            maxNozzleC: input.maxNozzleC ?? null,
            minBedC: input.minBedC ?? null,
            maxBedC: input.maxBedC ?? null,
            preferredNozzle: input.preferredNozzle ?? null,
          },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A material with that name already exists",
        });
      }
    }),

  /** Find material by name (case-insensitive) or create it — used by NFC autofill. */
  ensureMaterial: protectedProcedure
    .input(
      z.object({
        name: z.string().trim().min(1).max(64),
        minNozzleC: z.number().int().optional().nullable(),
        maxNozzleC: z.number().int().optional().nullable(),
        minBedC: z.number().int().optional().nullable(),
        maxBedC: z.number().int().optional().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const all = await ctx.db.material.findMany();
      const ci = all.find(
        (m) => m.name.toLowerCase() === input.name.toLowerCase(),
      );
      if (ci) {
        const shouldFill =
          (input.minNozzleC != null && ci.minNozzleC == null) ||
          (input.maxNozzleC != null && ci.maxNozzleC == null) ||
          (input.minBedC != null && ci.minBedC == null) ||
          (input.maxBedC != null && ci.maxBedC == null);
        if (shouldFill) {
          return ctx.db.material.update({
            where: { id: ci.id },
            data: {
              minNozzleC: ci.minNozzleC ?? input.minNozzleC ?? null,
              maxNozzleC: ci.maxNozzleC ?? input.maxNozzleC ?? null,
              minBedC: ci.minBedC ?? input.minBedC ?? null,
              maxBedC: ci.maxBedC ?? input.maxBedC ?? null,
            },
          });
        }
        return ci;
      }

      return ctx.db.material.create({
        data: {
          name: input.name,
          minNozzleC: input.minNozzleC ?? null,
          maxNozzleC: input.maxNozzleC ?? null,
          minBedC: input.minBedC ?? null,
          maxBedC: input.maxBedC ?? null,
        },
      });
    }),

  updateMaterial: protectedProcedure
    .input(materialInputSchema.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const material = await ctx.db.material.findUnique({
        where: { id: input.id },
      });
      if (!material) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Material not found",
        });
      }
      try {
        return await ctx.db.material.update({
          where: { id: input.id },
          data: {
            name: input.name,
            density: input.density ?? null,
            minNozzleC: input.minNozzleC ?? null,
            maxNozzleC: input.maxNozzleC ?? null,
            minBedC: input.minBedC ?? null,
            maxBedC: input.maxBedC ?? null,
            preferredNozzle: input.preferredNozzle ?? null,
          },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A material with that name already exists",
        });
      }
    }),

  deleteMaterial: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const material = await ctx.db.material.findUnique({
        where: { id: input.id },
        include: { _count: { select: { filaments: true } } },
      });
      if (!material) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Material not found",
        });
      }
      if (material._count.filaments > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete a material that has filaments",
        });
      }
      await ctx.db.material.delete({ where: { id: material.id } });
      return { ok: true };
    }),

  locations: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.location.findMany({
      where: { userId: ctx.session.user.id },
      include: { _count: { select: { spools: true } } },
      orderBy: { name: "asc" },
    });
  }),

  createLocation: protectedProcedure
    .input(z.object({ name: z.string().trim().min(1).max(64) }))
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.location.create({
          data: {
            name: input.name,
            userId: ctx.session.user.id,
          },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A location with that name already exists",
        });
      }
    }),

  deleteLocation: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const location = await ctx.db.location.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: { _count: { select: { spools: true } } },
      });
      if (!location) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Location not found",
        });
      }
      if (location._count.spools > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete a location that still has spools",
        });
      }
      await ctx.db.location.delete({ where: { id: location.id } });
      return { ok: true };
    }),
});
