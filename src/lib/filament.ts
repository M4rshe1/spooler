import { z } from "zod";

export const SPOOL_STATUSES = ["sealed", "open", "empty", "archived"] as const;
export const COLOR_MODES = ["SOLID", "GRADIENT", "MULTI"] as const;
export const CUSTOM_FIELD_TYPES = [
  "TEXT",
  "NUMBER",
  "BOOLEAN",
  "DATE",
  "URL",
  "SELECT",
  "MULTISELECT",
] as const;

export type SpoolStatus = (typeof SPOOL_STATUSES)[number];
export type ColorMode = (typeof COLOR_MODES)[number];
export type CustomFieldType = (typeof CUSTOM_FIELD_TYPES)[number];

/** Spools at or below this remaining weight are suggested for repurchase */
export const LOW_STOCK_THRESHOLD_G = 200;

/** Common empty plastic spool tare weights (g) */
export const COMMON_EMPTY_SPOOL_WEIGHTS_G = [140, 160, 180, 200, 220, 250] as const;

/** Filament remaining from a scale reading of spool + filament */
export function filamentFromGrossWeight(
  grossG: number,
  emptyWeightG: number | null | undefined,
): number | null {
  if (emptyWeightG == null || !Number.isFinite(grossG) || !Number.isFinite(emptyWeightG)) {
    return null;
  }
  return Math.max(0, Math.round(grossG - emptyWeightG));
}

/** Scale reading implied by filament remaining + empty spool */
export function grossFromFilamentWeight(
  filamentG: number,
  emptyWeightG: number | null | undefined,
): number | null {
  if (emptyWeightG == null || !Number.isFinite(filamentG) || !Number.isFinite(emptyWeightG)) {
    return null;
  }
  return Math.round(filamentG + emptyWeightG);
}

/** Accepts http(s) URLs; empty string becomes null via optional helpers */
export const optionalUrlSchema = z
  .string()
  .trim()
  .max(2048)
  .optional()
  .nullable()
  .transform((value, ctx) => {
    if (value == null || value === "") return null;
    let normalized = value;
    if (!/^https?:\/\//i.test(normalized)) {
      normalized = `https://${normalized}`;
    }
    try {
      const url = new URL(normalized);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "URL must use http or https",
        });
        return z.NEVER;
      }
      return url.toString();
    } catch {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid URL",
      });
      return z.NEVER;
    }
  });

export function normalizeUrlInput(
  value: string | null | undefined,
): string | null {
  const parsed = optionalUrlSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

export function displayUrlHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const hexColor = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, "Color must be a #RRGGBB hex value");

export const colorStopSchema = z.object({
  hex: hexColor,
  name: z.string().trim().max(64).optional().nullable(),
  position: z.number().min(0).max(1),
  weight: z.number().positive().optional().nullable(),
});

export const colorsForModeSchema = z
  .object({
    colorMode: z.enum(COLOR_MODES),
    colorName: z.string().trim().max(128).optional().nullable(),
    colors: z.array(colorStopSchema).min(1).max(12),
  })
  .superRefine((data, ctx) => {
    if (data.colorMode === "SOLID" && data.colors.length !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Solid color requires exactly one stop",
        path: ["colors"],
      });
    }
    if (
      (data.colorMode === "GRADIENT" || data.colorMode === "MULTI") &&
      data.colors.length < 2
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${data.colorMode} requires at least two color stops`,
        path: ["colors"],
      });
    }
  });

export const customValueInputSchema = z.object({
  fieldId: z.string().min(1),
  valueText: z.string().optional().nullable(),
  valueNumber: z.number().optional().nullable(),
  valueBoolean: z.boolean().optional().nullable(),
  valueDate: z.coerce.date().optional().nullable(),
  /** For MULTISELECT: string array serialized by client or accepted here */
  valueMulti: z.array(z.string()).optional().nullable(),
});

export const filamentCreateSchema = z
  .object({
    brandId: z.string().min(1),
    materialId: z.string().min(1),
    diameterMm: z.number().positive().default(1.75),
    defaultWeightG: z.number().int().positive().default(1000),
    defaultEmptyWeightG: z.number().int().nonnegative().optional().nullable(),
    productUrl: optionalUrlSchema,
    notes: z.string().max(2000).optional().nullable(),
    customValues: z.array(customValueInputSchema).default([]),
  })
  .and(colorsForModeSchema);

export const filamentUpdateSchema = z
  .object({
    id: z.string().min(1),
    brandId: z.string().min(1).optional(),
    materialId: z.string().min(1).optional(),
    diameterMm: z.number().positive().optional(),
    defaultWeightG: z.number().int().positive().optional(),
    defaultEmptyWeightG: z.number().int().nonnegative().optional().nullable(),
    productUrl: optionalUrlSchema,
    notes: z.string().max(2000).optional().nullable(),
    customValues: z.array(customValueInputSchema).optional(),
    colorMode: z.enum(COLOR_MODES).optional(),
    colorName: z.string().trim().max(128).optional().nullable(),
    colors: z.array(colorStopSchema).min(1).max(12).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.colors !== undefined || data.colorMode !== undefined) {
      if (!data.colorMode || !data.colors) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "colorMode and colors must be provided together",
          path: ["colors"],
        });
        return;
      }
      const parsed = colorsForModeSchema.safeParse({
        colorMode: data.colorMode,
        colorName: data.colorName,
        colors: data.colors,
      });
      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          ctx.addIssue(issue);
        }
      }
    }
  });

export const spoolCreateSchema = z.object({
  filamentId: z.string().min(1),
  locationId: z.string().optional().nullable(),
  initialWeightG: z.number().int().positive().optional(),
  remainingWeightG: z.number().int().nonnegative().optional(),
  emptyWeightG: z.number().int().nonnegative().optional().nullable(),
  /** How many identical spool instances to create */
  count: z.number().int().min(1).max(50).default(1),
  status: z.enum(SPOOL_STATUSES).default("sealed"),
  purchasedAt: z.coerce.date().optional().nullable(),
  priceCents: z.number().int().nonnegative().optional().nullable(),
  notes: z.string().max(2000).optional().nullable(),
  lastDriedAt: z.coerce.date().optional().nullable(),
});

export const spoolUpdateSchema = z.object({
  id: z.string().min(1),
  filamentId: z.string().min(1).optional(),
  locationId: z.string().optional().nullable(),
  initialWeightG: z.number().int().positive().optional(),
  remainingWeightG: z.number().int().nonnegative().optional(),
  emptyWeightG: z.number().int().nonnegative().optional().nullable(),
  status: z.enum(SPOOL_STATUSES).optional(),
  purchasedAt: z.coerce.date().optional().nullable(),
  priceCents: z.number().int().nonnegative().optional().nullable(),
  notes: z.string().max(2000).optional().nullable(),
  lastDriedAt: z.coerce.date().optional().nullable(),
});

/** Weigh the whole spool on a scale; remaining filament = gross − empty tare */
export const spoolWeighSchema = z.object({
  id: z.string().min(1),
  grossWeightG: z.number().int().nonnegative(),
  /** Update empty tare at the same time if known */
  emptyWeightG: z.number().int().nonnegative().optional().nullable(),
});

export const customFieldCreateSchema = z
  .object({
    label: z.string().trim().min(1).max(64),
    key: z
      .string()
      .trim()
      .min(1)
      .max(64)
      .regex(
        /^[a-z][a-z0-9_]*$/,
        "Key must be snake_case starting with a letter",
      )
      .optional(),
    type: z.enum(CUSTOM_FIELD_TYPES),
    required: z.boolean().default(false),
    options: z.array(z.string().trim().min(1)).optional(),
    showInList: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (
      (data.type === "SELECT" || data.type === "MULTISELECT") &&
      (!data.options || data.options.length < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Select fields require at least one option",
        path: ["options"],
      });
    }
  });

export function slugifyKey(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/^(\d)/, "f_$1")
    .slice(0, 64);
}

export function serializeMultiSelect(values: string[]): string {
  return JSON.stringify(values);
}

export function parseMultiSelect(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed) && parsed.every((v) => typeof v === "string")) {
      return parsed;
    }
  } catch {
    // fall through
  }
  return [];
}

export function parseOptionsJson(options: string | null | undefined): string[] {
  return parseMultiSelect(options);
}

/** Preferred hotend nozzle tip material for a filament type */
export const NOZZLE_MATERIALS = [
  "brass",
  "stainless",
  "hardened",
  "ruby",
] as const;

export type NozzleMaterial = (typeof NOZZLE_MATERIALS)[number];

export const NOZZLE_MATERIAL_LABELS: Record<NozzleMaterial, string> = {
  brass: "Brass",
  stainless: "Stainless steel",
  hardened: "Hardened steel",
  ruby: "Ruby / jewel",
};

export function formatNozzleMaterial(
  value: string | null | undefined,
): string | null {
  if (!value) return null;
  if (value in NOZZLE_MATERIAL_LABELS) {
    return NOZZLE_MATERIAL_LABELS[value as NozzleMaterial];
  }
  return value;
}

export const DEFAULT_MATERIALS = [
  {
    name: "PLA",
    density: 1.24,
    minNozzleC: 190,
    maxNozzleC: 220,
    minBedC: 50,
    maxBedC: 70,
    preferredNozzle: "brass" as const,
  },
  {
    name: "PETG",
    density: 1.27,
    minNozzleC: 220,
    maxNozzleC: 250,
    minBedC: 70,
    maxBedC: 90,
    preferredNozzle: "brass" as const,
  },
  {
    name: "ABS",
    density: 1.04,
    minNozzleC: 230,
    maxNozzleC: 260,
    minBedC: 90,
    maxBedC: 110,
    preferredNozzle: "brass" as const,
  },
  {
    name: "ASA",
    density: 1.07,
    minNozzleC: 240,
    maxNozzleC: 270,
    minBedC: 90,
    maxBedC: 110,
    preferredNozzle: "brass" as const,
  },
  {
    name: "TPU",
    density: 1.21,
    minNozzleC: 210,
    maxNozzleC: 240,
    minBedC: 30,
    maxBedC: 60,
    preferredNozzle: "brass" as const,
  },
  {
    name: "Nylon",
    density: 1.14,
    minNozzleC: 240,
    maxNozzleC: 270,
    minBedC: 70,
    maxBedC: 100,
    preferredNozzle: "brass" as const,
  },
  {
    name: "PC",
    density: 1.2,
    minNozzleC: 260,
    maxNozzleC: 300,
    minBedC: 90,
    maxBedC: 120,
    preferredNozzle: "brass" as const,
  },
  {
    name: "PLA+",
    density: 1.24,
    minNozzleC: 195,
    maxNozzleC: 225,
    minBedC: 50,
    maxBedC: 70,
    preferredNozzle: "brass" as const,
  },
] as const;
