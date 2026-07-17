import type { PrismaClient } from "../../../generated/prisma";

import { DEFAULT_MATERIALS } from "@/lib/filament";
import {
  COMMON_LOCATIONS,
  POPULAR_BRANDS,
  SPECIALTY_MATERIALS,
  STARTER_CUSTOM_FIELDS,
  type SeedDatasetId,
} from "@/lib/seed-datasets";

export async function getOrCreateSetup(db: PrismaClient) {
  const existing = await db.appSetup.findUnique({ where: { id: 1 } });
  if (existing) return existing;

  const userCount = await db.user.count();
  // Existing installs already have users — don't force the wizard again
  return db.appSetup.create({
    data: {
      id: 1,
      completed: userCount > 0,
      completedAt: userCount > 0 ? new Date() : null,
      installedDatasets: "[]",
    },
  });
}

export async function isSetupComplete(db: PrismaClient) {
  const setup = await getOrCreateSetup(db);
  return setup.completed;
}

export function parseInstalledDatasets(raw: string): SeedDatasetId[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every((v) => typeof v === "string")) {
      return parsed as SeedDatasetId[];
    }
  } catch {
    // ignore
  }
  return [];
}

async function upsertMaterials(
  db: PrismaClient,
  materials: readonly {
    name: string;
    density?: number | null;
    minNozzleC?: number | null;
    maxNozzleC?: number | null;
    minBedC?: number | null;
    maxBedC?: number | null;
    preferredNozzle?: string | null;
  }[],
) {
  let count = 0;
  for (const material of materials) {
    await db.material.upsert({
      where: { name: material.name },
      create: {
        name: material.name,
        density: material.density ?? null,
        minNozzleC: material.minNozzleC ?? null,
        maxNozzleC: material.maxNozzleC ?? null,
        minBedC: material.minBedC ?? null,
        maxBedC: material.maxBedC ?? null,
        preferredNozzle: material.preferredNozzle ?? null,
      },
      update: {
        density: material.density ?? null,
        minNozzleC: material.minNozzleC ?? null,
        maxNozzleC: material.maxNozzleC ?? null,
        minBedC: material.minBedC ?? null,
        maxBedC: material.maxBedC ?? null,
        preferredNozzle: material.preferredNozzle ?? null,
      },
    });
    count += 1;
  }
  return count;
}

export async function installDatasets(
  db: PrismaClient,
  userId: string,
  datasetIds: SeedDatasetId[],
) {
  const installed: Record<string, number> = {};
  const unique = [...new Set(datasetIds)];

  for (const id of unique) {
    switch (id) {
      case "materials-core":
        installed[id] = await upsertMaterials(db, DEFAULT_MATERIALS);
        break;
      case "materials-specialty":
        installed[id] = await upsertMaterials(db, SPECIALTY_MATERIALS);
        break;
      case "brands-popular": {
        let count = 0;
        for (const brand of POPULAR_BRANDS) {
          await db.brand.upsert({
            where: { userId_name: { userId, name: brand.name } },
            create: {
              name: brand.name,
              websiteUrl: brand.websiteUrl,
              userId,
            },
            update: {
              websiteUrl: brand.websiteUrl,
            },
          });
          count += 1;
        }
        installed[id] = count;
        break;
      }
      case "locations-common": {
        let count = 0;
        for (const name of COMMON_LOCATIONS) {
          await db.location.upsert({
            where: { userId_name: { userId, name } },
            create: { name, userId },
            update: {},
          });
          count += 1;
        }
        installed[id] = count;
        break;
      }
      case "custom-fields-starter": {
        let count = 0;
        let sortOrder = 0;
        for (const field of STARTER_CUSTOM_FIELDS) {
          await db.customField.upsert({
            where: {
              userId_entity_key: {
                userId,
                entity: "FILAMENT",
                key: field.key,
              },
            },
            create: {
              userId,
              entity: "FILAMENT",
              key: field.key,
              label: field.label,
              type: field.type,
              required: field.required,
              showInList: field.showInList,
              options: field.options ? JSON.stringify(field.options) : null,
              sortOrder,
            },
            update: {
              label: field.label,
              type: field.type,
              required: field.required,
              showInList: field.showInList,
              options: field.options ? JSON.stringify(field.options) : null,
            },
          });
          sortOrder += 1;
          count += 1;
        }
        installed[id] = count;
        break;
      }
      default:
        break;
    }
  }

  return { installed, datasetIds: unique };
}
