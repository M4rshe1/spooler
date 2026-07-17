import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  DEFAULT_DATASET_SELECTION,
  SEED_DATASETS,
  type SeedDatasetId,
} from "@/lib/seed-datasets";
import { auth } from "@/server/better-auth";
import {
  getOrCreateSetup,
  installDatasets,
  parseInstalledDatasets,
} from "@/server/setup/install-datasets";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

const datasetIdSchema = z.enum([
  "materials-core",
  "materials-specialty",
  "brands-popular",
  "locations-common",
  "custom-fields-starter",
]);

export const setupRouter = createTRPCRouter({
  status: publicProcedure.query(async ({ ctx }) => {
    const setup = await getOrCreateSetup(ctx.db);
    const userCount = await ctx.db.user.count();
    return {
      completed: setup.completed,
      needsSetup: !setup.completed,
      hasAdmin: userCount > 0,
      userCount,
      installedDatasets: parseInstalledDatasets(setup.installedDatasets),
      datasets: SEED_DATASETS,
      defaultSelection: DEFAULT_DATASET_SELECTION,
    };
  }),

  createAdmin: publicProcedure
    .input(
      z.object({
        name: z.string().trim().min(1).max(64),
        email: z.string().trim().email(),
        password: z.string().min(8).max(128),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const setup = await getOrCreateSetup(ctx.db);
      if (setup.completed) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Setup is already complete",
        });
      }

      const userCount = await ctx.db.user.count();
      if (userCount > 0) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "An admin account already exists",
        });
      }

      const result = await auth.api.signUpEmail({
        body: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
        headers: ctx.headers,
      });

      if (!result?.user?.id) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create admin user",
        });
      }

      await ctx.db.user.update({
        where: { id: result.user.id },
        data: { role: "admin" },
      });

      return {
        user: {
          id: result.user.id,
          name: result.user.name,
          email: result.user.email,
        },
      };
    }),

  install: protectedProcedure
    .input(
      z.object({
        datasets: z.array(datasetIdSchema).default([]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const setup = await getOrCreateSetup(ctx.db);
      if (setup.completed) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Setup is already complete",
        });
      }

      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (!user || user.role !== "admin") {
        // First user during setup may not have role set yet — allow if only user
        const userCount = await ctx.db.user.count();
        if (userCount !== 1) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only the admin can finish setup",
          });
        }
        await ctx.db.user.update({
          where: { id: ctx.session.user.id },
          data: { role: "admin" },
        });
      }

      const { installed, datasetIds } = await installDatasets(
        ctx.db,
        ctx.session.user.id,
        input.datasets as SeedDatasetId[],
      );

      const previous = parseInstalledDatasets(setup.installedDatasets);
      const merged = [...new Set([...previous, ...datasetIds])];

      await ctx.db.appSetup.update({
        where: { id: 1 },
        data: {
          completed: true,
          completedAt: new Date(),
          installedDatasets: JSON.stringify(merged),
        },
      });

      return { installed, datasets: merged };
    }),
});
