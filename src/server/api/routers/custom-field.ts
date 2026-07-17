import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  customFieldCreateSchema,
  slugifyKey,
} from "@/lib/filament";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const customFieldRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({
          entity: z.literal("FILAMENT").default("FILAMENT"),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.customField.findMany({
        where: {
          userId: ctx.session.user.id,
          entity: input?.entity ?? "FILAMENT",
        },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      });
    }),

  create: protectedProcedure
    .input(customFieldCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const key = input.key ?? slugifyKey(input.label);
      if (!key) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Could not derive a valid key from the label",
        });
      }

      const maxOrder = await ctx.db.customField.aggregate({
        where: { userId: ctx.session.user.id, entity: "FILAMENT" },
        _max: { sortOrder: true },
      });

      return ctx.db.customField.create({
        data: {
          userId: ctx.session.user.id,
          entity: "FILAMENT",
          key,
          label: input.label,
          type: input.type,
          required: input.required,
          options:
            input.options && input.options.length > 0
              ? JSON.stringify(input.options)
              : null,
          showInList: input.showInList,
          sortOrder: (maxOrder._max.sortOrder ?? -1) + 1,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        label: z.string().trim().min(1).max(64).optional(),
        required: z.boolean().optional(),
        options: z.array(z.string().trim().min(1)).optional(),
        showInList: z.boolean().optional(),
        sortOrder: z.number().int().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const field = await ctx.db.customField.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!field) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Field not found" });
      }

      if (
        (field.type === "SELECT" || field.type === "MULTISELECT") &&
        input.options !== undefined &&
        input.options.length < 1
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Select fields require at least one option",
        });
      }

      return ctx.db.customField.update({
        where: { id: field.id },
        data: {
          label: input.label,
          required: input.required,
          showInList: input.showInList,
          sortOrder: input.sortOrder,
          options:
            input.options !== undefined
              ? JSON.stringify(input.options)
              : undefined,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const field = await ctx.db.customField.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      if (!field) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Field not found" });
      }
      await ctx.db.customField.delete({ where: { id: field.id } });
      return { ok: true };
    }),

  reorder: protectedProcedure
    .input(z.object({ orderedIds: z.array(z.string()).min(1) }))
    .mutation(async ({ ctx, input }) => {
      const fields = await ctx.db.customField.findMany({
        where: {
          userId: ctx.session.user.id,
          id: { in: input.orderedIds },
        },
      });
      if (fields.length !== input.orderedIds.length) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid field ids",
        });
      }

      await ctx.db.$transaction(
        input.orderedIds.map((id, index) =>
          ctx.db.customField.update({
            where: { id },
            data: { sortOrder: index },
          }),
        ),
      );

      return { ok: true };
    }),
});
