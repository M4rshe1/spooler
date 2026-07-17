/**
 * OpenPrintTag CBOR decoder (read path).
 * Spec: https://specs.openprinttag.org/#/nfc_data_format
 * MIME: application/vnd.openprinttag
 */

export const OPENPRINTTAG_MIME = "application/vnd.openprinttag";

/** Main-region integer keys (data/main_fields.yaml) */
const MAIN = {
  MATERIAL_TYPE: 9,
  MATERIAL_NAME: 10,
  BRAND_NAME: 11,
  NOMINAL_NETTO_FULL_WEIGHT: 16,
  ACTUAL_NETTO_FULL_WEIGHT: 17,
  EMPTY_CONTAINER_WEIGHT: 18,
  PRIMARY_COLOR: 19,
  SECONDARY_COLOR_0: 20,
  SECONDARY_COLOR_1: 21,
  SECONDARY_COLOR_2: 22,
  SECONDARY_COLOR_3: 23,
  SECONDARY_COLOR_4: 24,
  DENSITY: 29,
  FILAMENT_DIAMETER: 30,
  MIN_PRINT_TEMPERATURE: 34,
  MAX_PRINT_TEMPERATURE: 35,
  MIN_BED_TEMPERATURE: 37,
  MAX_BED_TEMPERATURE: 38,
  MATERIAL_ABBREVIATION: 52,
  DRYING_TEMPERATURE: 57,
  DRYING_TIME: 58,
} as const;

/** Meta-region keys (data/meta_fields.yaml) */
const META = {
  MAIN_REGION_OFFSET: 0,
  MAIN_REGION_SIZE: 1,
  AUX_REGION_OFFSET: 2,
  AUX_REGION_SIZE: 3,
} as const;

/** Aux-region keys (data/aux_fields.yaml) */
const AUX = {
  CONSUMED_WEIGHT: 0,
  STORAGE_LOCATION: 4,
} as const;

/** material_type_enum.yaml abbreviations by key */
const MATERIAL_TYPE_BY_KEY: Record<number, string> = {
  0: "PLA",
  1: "PETG",
  2: "TPU",
  3: "ABS",
  4: "ASA",
  5: "PC",
  6: "PCTG",
  7: "PP",
  8: "PA6",
  9: "PA11",
  10: "PA12",
  11: "PA66",
  12: "CPE",
  13: "TPE",
  14: "HIPS",
  15: "PHA",
  16: "PET",
  17: "PEI",
  18: "PBT",
  19: "PVB",
  20: "PVA",
  21: "PEKK",
  22: "PEEK",
  23: "BVOH",
  24: "TPC",
  25: "PPS",
  26: "PPSU",
  27: "PVC",
  28: "PEBA",
  29: "PVDF",
  30: "PPA",
  31: "PCL",
  32: "PES",
  33: "PMMA",
  34: "POM",
  35: "PPE",
  36: "PS",
  37: "PSU",
  38: "TPI",
  39: "SBS",
  40: "OBC",
  41: "EVA",
  42: "PA612",
};

export type OpenPrintTagDecoded = {
  brandName?: string;
  /** Catalog material key — prefers material_type abbreviation */
  materialType?: string;
  /** Full product/display name from the tag (often includes color) */
  materialName?: string;
  materialAbbreviation?: string;
  colorHex?: string;
  secondaryColors: string[];
  diameterMm?: number;
  density?: number;
  initialWeightG?: number;
  remainingWeightG?: number;
  emptyContainerWeightG?: number;
  minNozzleC?: number;
  maxNozzleC?: number;
  minBedC?: number;
  maxBedC?: number;
  dryingTemperatureC?: number;
  dryingTimeMin?: number;
  storageLocation?: string;
  consumedWeightG?: number;
};

function decodeFloat16(bits: number): number {
  const sign = bits >> 15 ? -1 : 1;
  const exp = (bits >> 10) & 0x1f;
  const frac = bits & 0x3ff;
  if (exp === 0) {
    return sign * Math.pow(2, -14) * (frac / Math.pow(2, 10));
  }
  if (exp === 0x1f) {
    return frac ? NaN : sign * Infinity;
  }
  return sign * Math.pow(2, exp - 15) * (1 + frac / Math.pow(2, 10));
}

function decodeCborItem(
  data: Uint8Array,
  offset: number,
): [unknown, number] {
  if (offset >= data.length) {
    throw new Error("OpenPrintTag: unexpected end of CBOR data");
  }

  const initial = data[offset++]!;
  const majorType = (initial >> 5) & 0x07;
  const additional = initial & 0x1f;

  let argument: number;
  if (additional < 24) {
    argument = additional;
  } else if (additional === 24) {
    argument = data[offset++]!;
  } else if (additional === 25) {
    argument = (data[offset]! << 8) | data[offset + 1]!;
    offset += 2;
  } else if (additional === 26) {
    argument =
      (((data[offset]! << 24) >>> 0) |
        (data[offset + 1]! << 16) |
        (data[offset + 2]! << 8) |
        data[offset + 3]!) >>>
      0;
    offset += 4;
  } else if (additional === 27) {
    const hi =
      (((data[offset]! << 24) >>> 0) |
        (data[offset + 1]! << 16) |
        (data[offset + 2]! << 8) |
        data[offset + 3]!) >>>
      0;
    offset += 4;
    const lo =
      (((data[offset]! << 24) >>> 0) |
        (data[offset + 1]! << 16) |
        (data[offset + 2]! << 8) |
        data[offset + 3]!) >>>
      0;
    offset += 4;
    argument = hi * 0x1_0000_0000 + lo;
  } else if (additional === 31) {
    argument = -1;
  } else {
    throw new Error(`OpenPrintTag: reserved CBOR additional ${additional}`);
  }

  switch (majorType) {
    case 0:
      return [argument, offset];
    case 1:
      return [-(argument + 1), offset];
    case 2: {
      if (argument < 0) throw new Error("OpenPrintTag: indefinite bytes");
      const bytes = data.slice(offset, offset + argument);
      return [bytes, offset + argument];
    }
    case 3: {
      if (argument < 0) throw new Error("OpenPrintTag: indefinite text");
      const text = new TextDecoder().decode(
        data.slice(offset, offset + argument),
      );
      return [text, offset + argument];
    }
    case 4: {
      const arr: unknown[] = [];
      if (argument < 0) {
        while (offset < data.length && data[offset] !== 0xff) {
          const [item, next] = decodeCborItem(data, offset);
          arr.push(item);
          offset = next;
        }
        offset += 1;
      } else {
        for (let i = 0; i < argument; i++) {
          const [item, next] = decodeCborItem(data, offset);
          arr.push(item);
          offset = next;
        }
      }
      return [arr, offset];
    }
    case 5: {
      const map = new Map<number | string, unknown>();
      if (argument < 0) {
        while (offset < data.length && data[offset] !== 0xff) {
          const [key, keyNext] = decodeCborItem(data, offset);
          const [value, valNext] = decodeCborItem(data, keyNext);
          map.set(key as number | string, value);
          offset = valNext;
        }
        offset += 1;
      } else {
        for (let i = 0; i < argument; i++) {
          const [key, keyNext] = decodeCborItem(data, offset);
          const [value, valNext] = decodeCborItem(data, keyNext);
          map.set(key as number | string, value);
          offset = valNext;
        }
      }
      return [map, offset];
    }
    case 6: {
      const [value, next] = decodeCborItem(data, offset);
      return [value, next];
    }
    case 7: {
      if (additional === 20) return [false, offset];
      if (additional === 21) return [true, offset];
      if (additional === 22) return [null, offset];
      if (additional === 23) return [undefined, offset];
      if (additional === 25) return [decodeFloat16(argument), offset];
      if (additional === 26) {
        const view = new DataView(new ArrayBuffer(4));
        view.setUint32(0, argument);
        return [view.getFloat32(0), offset];
      }
      if (additional === 27) {
        const view = new DataView(
          data.buffer,
          data.byteOffset + offset - 8,
          8,
        );
        return [view.getFloat64(0), offset];
      }
      return [argument, offset];
    }
    default:
      throw new Error(`OpenPrintTag: unknown CBOR major type ${majorType}`);
  }
}

function asMap(value: unknown): Map<number | string, unknown> | null {
  return value instanceof Map ? value : null;
}

function mapGet(map: Map<number | string, unknown>, key: number): unknown {
  if (map.has(key)) return map.get(key);
  if (map.has(String(key))) return map.get(String(key));
  return undefined;
}

function asNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  return undefined;
}

function asString(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) return value.trim();
  return undefined;
}

function colorBytesToHex(value: unknown): string | undefined {
  if (!(value instanceof Uint8Array) || value.length < 3) return undefined;
  const r = value[0]!.toString(16).padStart(2, "0");
  const g = value[1]!.toString(16).padStart(2, "0");
  const b = value[2]!.toString(16).padStart(2, "0");
  return `#${r}${g}${b}`.toUpperCase();
}

function recordDataToBytes(data: DataView): Uint8Array {
  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}

/**
 * Decode an OpenPrintTag NDEF MIME payload into spool-oriented fields.
 * Returns null if the bytes are not a valid OpenPrintTag payload.
 */
export function decodeOpenPrintTagPayload(
  payload: Uint8Array,
): OpenPrintTagDecoded | null {
  if (payload.length < 2) return null;

  try {
    const [metaRaw, metaEnd] = decodeCborItem(payload, 0);
    const meta = asMap(metaRaw);
    if (!meta) return null;

    const mainOffsetRaw = asNumber(mapGet(meta, META.MAIN_REGION_OFFSET));
    const mainOffset =
      mainOffsetRaw != null && mainOffsetRaw >= 0 ? mainOffsetRaw : metaEnd;

    if (mainOffset >= payload.length) return null;

    const [mainRaw] = decodeCborItem(payload, mainOffset);
    const main = asMap(mainRaw);
    if (!main) return null;

    const brandName = asString(mapGet(main, MAIN.BRAND_NAME));
    const materialName = asString(mapGet(main, MAIN.MATERIAL_NAME));
    const materialAbbreviation = asString(
      mapGet(main, MAIN.MATERIAL_ABBREVIATION),
    );
    const materialTypeKey = asNumber(mapGet(main, MAIN.MATERIAL_TYPE));
    const materialType =
      materialTypeKey != null
        ? (MATERIAL_TYPE_BY_KEY[materialTypeKey] ?? materialAbbreviation)
        : materialAbbreviation;

    const colorHex = colorBytesToHex(mapGet(main, MAIN.PRIMARY_COLOR));
    const secondaryColors = [
      MAIN.SECONDARY_COLOR_0,
      MAIN.SECONDARY_COLOR_1,
      MAIN.SECONDARY_COLOR_2,
      MAIN.SECONDARY_COLOR_3,
      MAIN.SECONDARY_COLOR_4,
    ]
      .map((key) => colorBytesToHex(mapGet(main, key)))
      .filter((hex): hex is string => Boolean(hex));

    const nominal = asNumber(mapGet(main, MAIN.NOMINAL_NETTO_FULL_WEIGHT));
    const actual = asNumber(mapGet(main, MAIN.ACTUAL_NETTO_FULL_WEIGHT));
    const initialWeightG =
      actual != null
        ? Math.round(actual)
        : nominal != null
          ? Math.round(nominal)
          : undefined;

    let consumedWeightG: number | undefined;
    let storageLocation: string | undefined;
    const auxOffset = asNumber(mapGet(meta, META.AUX_REGION_OFFSET));
    if (
      auxOffset != null &&
      Number.isInteger(auxOffset) &&
      auxOffset >= 0 &&
      auxOffset < payload.length
    ) {
      try {
        const [auxRaw] = decodeCborItem(payload, auxOffset);
        const aux = asMap(auxRaw);
        if (aux) {
          const consumed = asNumber(mapGet(aux, AUX.CONSUMED_WEIGHT));
          if (consumed != null) consumedWeightG = consumed;
          storageLocation = asString(mapGet(aux, AUX.STORAGE_LOCATION));
        }
      } catch {
        // Aux region optional / may be empty
      }
    }

    let remainingWeightG: number | undefined;
    if (initialWeightG != null) {
      remainingWeightG = Math.max(
        0,
        Math.round(initialWeightG - (consumedWeightG ?? 0)),
      );
    }

    if (
      !brandName &&
      !materialType &&
      !materialName &&
      !colorHex &&
      secondaryColors.length === 0
    ) {
      return null;
    }

    const diameter = asNumber(mapGet(main, MAIN.FILAMENT_DIAMETER));
    const empty = asNumber(mapGet(main, MAIN.EMPTY_CONTAINER_WEIGHT));

    return {
      brandName,
      materialType,
      materialName,
      materialAbbreviation,
      colorHex,
      secondaryColors,
      diameterMm: diameter,
      density: asNumber(mapGet(main, MAIN.DENSITY)),
      initialWeightG,
      remainingWeightG,
      emptyContainerWeightG:
        empty != null ? Math.round(empty) : undefined,
      minNozzleC: asNumber(mapGet(main, MAIN.MIN_PRINT_TEMPERATURE)),
      maxNozzleC: asNumber(mapGet(main, MAIN.MAX_PRINT_TEMPERATURE)),
      minBedC: asNumber(mapGet(main, MAIN.MIN_BED_TEMPERATURE)),
      maxBedC: asNumber(mapGet(main, MAIN.MAX_BED_TEMPERATURE)),
      dryingTemperatureC: asNumber(mapGet(main, MAIN.DRYING_TEMPERATURE)),
      dryingTimeMin: asNumber(mapGet(main, MAIN.DRYING_TIME)),
      storageLocation,
      consumedWeightG,
    };
  } catch {
    return null;
  }
}

export function decodeOpenPrintTagRecord(
  record: NDEFRecord,
): OpenPrintTagDecoded | null {
  const media = record.mediaType?.toLowerCase() ?? "";
  const isOptMime =
    media === OPENPRINTTAG_MIME ||
    media.includes("openprinttag") ||
    record.recordType.toLowerCase() === "mime";

  if (!record.data) return null;

  // Prefer explicit MIME; also try opaque binary payloads that look like CBOR maps
  if (!isOptMime && media && !media.includes("octet-stream")) {
    return null;
  }

  const bytes = recordDataToBytes(record.data);
  // OpenPrintTag payloads start with a CBOR map (major type 5)
  const major = (bytes[0]! >> 5) & 0x07;
  if (major !== 5) return null;

  if (media === OPENPRINTTAG_MIME || media.includes("openprinttag")) {
    return decodeOpenPrintTagPayload(bytes);
  }

  // Heuristic: only attempt for application/octet-stream / empty media when
  // decode succeeds with brand/material fields
  if (!media || media.includes("octet-stream") || record.recordType === "mime") {
    return decodeOpenPrintTagPayload(bytes);
  }

  return null;
}
