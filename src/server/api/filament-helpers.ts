import { TRPCError } from "@trpc/server";
import type { PrismaClient } from "../../../generated/prisma";

import {
  DEFAULT_MATERIALS,
  normalizeUrlInput,
  parseMultiSelect,
  parseOptionsJson,
  serializeMultiSelect,
  type CustomFieldType,
} from "@/lib/filament";

export async function ensureDefaultMaterials(db: PrismaClient) {
  for (const material of DEFAULT_MATERIALS) {
    await db.material.upsert({
      where: { name: material.name },
      create: material,
      update: {
        density: material.density,
        minNozzleC: material.minNozzleC,
        maxNozzleC: material.maxNozzleC,
        minBedC: material.minBedC,
        maxBedC: material.maxBedC,
      },
    });
  }
}

type CustomValueInput = {
  fieldId: string;
  valueText?: string | null;
  valueNumber?: number | null;
  valueBoolean?: boolean | null;
  valueDate?: Date | null;
  valueMulti?: string[] | null;
};

type FieldDef = {
  id: string;
  type: string;
  required: boolean;
  label: string;
  options: string | null;
};

export function normalizeCustomValues(
  fields: FieldDef[],
  inputs: CustomValueInput[],
) {
  const byId = new Map(inputs.map((v) => [v.fieldId, v]));
  const rows: {
    fieldId: string;
    valueText: string | null;
    valueNumber: number | null;
    valueBoolean: boolean | null;
    valueDate: Date | null;
  }[] = [];

  for (const field of fields) {
    const input = byId.get(field.id);
    const type = field.type as CustomFieldType;

    if (!input) {
      if (field.required) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Missing required field: ${field.label}`,
        });
      }
      continue;
    }

    let valueText: string | null = null;
    let valueNumber: number | null = null;
    let valueBoolean: boolean | null = null;
    let valueDate: Date | null = null;

    switch (type) {
      case "TEXT":
      case "SELECT":
      case "URL":
        if (type === "URL") {
          const raw = input.valueText?.trim() ?? "";
          if (field.required && !raw) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Missing required field: ${field.label}`,
            });
          }
          if (!raw) {
            valueText = null;
            break;
          }
          const normalized = normalizeUrlInput(raw);
          if (!normalized) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Invalid URL for ${field.label}`,
            });
          }
          valueText = normalized;
          break;
        }
        valueText = input.valueText?.trim() ?? null;
        if (field.required && !valueText) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Missing required field: ${field.label}`,
          });
        }
        if (type === "SELECT" && valueText) {
          const opts = parseOptionsJson(field.options);
          if (!opts.includes(valueText)) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Invalid option for ${field.label}`,
            });
          }
        }
        break;
      case "MULTISELECT": {
        const multi = input.valueMulti ?? parseMultiSelect(input.valueText);
        if (field.required && multi.length === 0) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Missing required field: ${field.label}`,
          });
        }
        const opts = parseOptionsJson(field.options);
        if (multi.some((m) => !opts.includes(m))) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid option for ${field.label}`,
          });
        }
        valueText = serializeMultiSelect(multi);
        break;
      }
      case "NUMBER":
        valueNumber = input.valueNumber ?? null;
        if (field.required && valueNumber === null) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Missing required field: ${field.label}`,
          });
        }
        break;
      case "BOOLEAN":
        valueBoolean = input.valueBoolean ?? false;
        break;
      case "DATE":
        valueDate = input.valueDate ?? null;
        if (field.required && !valueDate) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Missing required field: ${field.label}`,
          });
        }
        break;
      default:
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Unknown field type: ${field.type}`,
        });
    }

    rows.push({
      fieldId: field.id,
      valueText,
      valueNumber,
      valueBoolean,
      valueDate,
    });
  }

  return rows;
}

export const spoolInclude = {
  brand: true,
  material: true,
  location: true,
  colors: { orderBy: { position: "asc" as const } },
  customFieldValues: { include: { field: true } },
  usages: { orderBy: { usedAt: "desc" as const }, take: 20 },
} as const;
