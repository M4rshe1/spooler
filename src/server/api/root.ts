import { catalogRouter } from "@/server/api/routers/catalog";
import { customFieldRouter } from "@/server/api/routers/custom-field";
import { setupRouter } from "@/server/api/routers/setup";
import { spoolRouter } from "@/server/api/routers/spool";
import { statsRouter } from "@/server/api/routers/stats";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  catalog: catalogRouter,
  customField: customFieldRouter,
  setup: setupRouter,
  spool: spoolRouter,
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
