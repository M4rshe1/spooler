import { DEFAULT_MATERIALS } from "@/lib/filament";

export type SeedDatasetId =
  | "materials-core"
  | "materials-specialty"
  | "brands-popular"
  | "locations-common"
  | "custom-fields-starter";

export type SeedDataset = {
  id: SeedDatasetId;
  title: string;
  description: string;
  recommended?: boolean;
  itemCount: number;
};

export const SPECIALTY_MATERIALS = [
  {
    name: "PLA-CF",
    density: 1.3,
    minNozzleC: 190,
    maxNozzleC: 230,
    minBedC: 45,
    maxBedC: 70,
  },
  {
    name: "PETG-CF",
    density: 1.3,
    minNozzleC: 230,
    maxNozzleC: 260,
    minBedC: 70,
    maxBedC: 90,
  },
  {
    name: "PA-CF",
    density: 1.15,
    minNozzleC: 260,
    maxNozzleC: 290,
    minBedC: 80,
    maxBedC: 110,
  },
  {
    name: "Wood PLA",
    density: 1.28,
    minNozzleC: 190,
    maxNozzleC: 220,
    minBedC: 50,
    maxBedC: 70,
  },
  {
    name: "Silk PLA",
    density: 1.24,
    minNozzleC: 200,
    maxNozzleC: 230,
    minBedC: 50,
    maxBedC: 70,
  },
  {
    name: "HIPS",
    density: 1.04,
    minNozzleC: 220,
    maxNozzleC: 250,
    minBedC: 90,
    maxBedC: 110,
  },
  {
    name: "PVA",
    density: 1.23,
    minNozzleC: 190,
    maxNozzleC: 220,
    minBedC: 45,
    maxBedC: 60,
  },
] as const;

export const POPULAR_BRANDS = [
  { name: "Bambu Lab", websiteUrl: "https://bambulab.com" },
  { name: "Polymaker", websiteUrl: "https://polymaker.com" },
  { name: "Prusament", websiteUrl: "https://prusament.com" },
  { name: "eSun", websiteUrl: "https://www.esun3d.com" },
  { name: "Sunlu", websiteUrl: "https://www.sunlu.com" },
  { name: "Hatchbox", websiteUrl: "https://www.hatchbox3d.com" },
  { name: "Overture", websiteUrl: "https://www.overture3d.com" },
  { name: "Eryone", websiteUrl: "https://eryone3d.com" },
  { name: "Elegoo", websiteUrl: "https://www.elegoo.com" },
  { name: "Creality", websiteUrl: "https://www.creality.com" },
  { name: "Fillamentum", websiteUrl: "https://fillamentum.com" },
  { name: "ColorFabb", websiteUrl: "https://colorfabb.com" },
] as const;

export const COMMON_LOCATIONS = [
  "Shelf",
  "Dry box",
  "Filament dryer",
  "AMS",
  "Open spool holder",
] as const;

export const STARTER_CUSTOM_FIELDS = [
  {
    key: "finish",
    label: "Finish",
    type: "MULTISELECT" as const,
    required: false,
    showInList: true,
    options: ["matte", "silk", "glossy", "glitter", "translucent"],
  },
  {
    key: "sku",
    label: "SKU",
    type: "TEXT" as const,
    required: false,
    showInList: false,
    options: null as string[] | null,
  },
  {
    key: "diameter_tolerance",
    label: "Diameter tolerance",
    type: "SELECT" as const,
    required: false,
    showInList: false,
    options: ["±0.02mm", "±0.03mm", "±0.04mm", "±0.05mm", "±0.06mm", "Unknown"],
  },
  {
    key: "nozzel_diameter",
    label: "Nozzel diameter (mm)",
    type: "NUMBER" as const,
    required: false,
    showInList: false,
    options: null as string[] | null,
  },
  {
    key: "print_sheet_material",
    label: "Print Sheet Material",
    type: "SELECT" as const,
    required: false,
    showInList: false,
    options: ["Satin PC", "Textured PC", "Smooth PEI", "PP PC", "PA Nylon"],
  },
] as const;

export const SEED_DATASETS: SeedDataset[] = [
  {
    id: "materials-core",
    title: "Core materials",
    description: "PLA, PETG, ABS, ASA, TPU, Nylon, PC, and PLA+.",
    recommended: true,
    itemCount: DEFAULT_MATERIALS.length,
  },
  {
    id: "materials-specialty",
    title: "Specialty materials",
    description: "Carbon-fiber blends, wood, silk, HIPS, and PVA.",
    itemCount: SPECIALTY_MATERIALS.length,
  },
  {
    id: "brands-popular",
    title: "Popular brands",
    description:
      "Common manufacturers so you can pick them when adding spools.",
    recommended: true,
    itemCount: POPULAR_BRANDS.length,
  },
  {
    id: "locations-common",
    title: "Common locations",
    description: "Shelf, dry box, dryer, AMS, and open holder.",
    recommended: true,
    itemCount: COMMON_LOCATIONS.length,
  },
  {
    id: "custom-fields-starter",
    title: "Starter custom fields",
    description: "Finish tags, SKU, and diameter tolerance.",
    itemCount: STARTER_CUSTOM_FIELDS.length,
  },
];

export const DEFAULT_DATASET_SELECTION: SeedDatasetId[] = [
  "materials-core",
  "brands-popular",
  "locations-common",
];
