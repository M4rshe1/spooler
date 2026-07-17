/**
 * NFC tag parsing for Spooler.
 *
 * Supported NDEF payloads:
 * - OpenPrintTag CBOR (`application/vnd.openprinttag`) — Prusa open standard
 * - OpenSpool JSON (`protocol: "openspool"`) — common DIY filament tags
 * - Spooler JSON (`protocol: "spooler"`) — richer fields for round-trip
 * - openspool.io / query-string URLs with brand/type/color_hex params
 * - Plain JSON with brand + material/type fields
 */

import {
  decodeOpenPrintTagRecord,
  OPENPRINTTAG_MIME,
  type OpenPrintTagDecoded,
} from "@/lib/openprinttag";

export type NfcSpoolDraft = {
  brandName?: string;
  materialName?: string;
  colorHex?: string;
  colorName?: string;
  /** Extra colors from OpenPrintTag secondary slots */
  secondaryColors?: string[];
  diameterMm?: number;
  initialWeightG?: number;
  remainingWeightG?: number;
  productUrl?: string;
  notes?: string;
  minNozzleC?: number;
  maxNozzleC?: number;
  minBedC?: number;
  maxBedC?: number;
  locationName?: string;
  source: "openprinttag" | "openspool" | "spooler" | "url" | "json";
  rawLabel?: string;
};

export function isWebNfcSupported(): boolean {
  return typeof window !== "undefined" && "NDEFReader" in window;
}

function decodeRecordText(record: NDEFRecord): string | null {
  if (!record.data) return null;
  const encoding =
    record.encoding === "utf-16" || record.encoding === "utf-16be"
      ? "utf-16"
      : "utf-8";
  try {
    return new TextDecoder(encoding).decode(record.data);
  } catch {
    try {
      return new TextDecoder("utf-8").decode(record.data);
    } catch {
      return null;
    }
  }
}

function normalizeHex(raw: string | undefined | null): string | undefined {
  if (!raw) return undefined;
  const cleaned = raw.trim().replace(/^#/, "");
  if (!/^[0-9A-Fa-f]{6}$/.test(cleaned)) return undefined;
  return `#${cleaned.toUpperCase()}`;
}

function asPositiveNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return value;
  }
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return undefined;
}

function asInt(value: unknown): number | undefined {
  const n = asPositiveNumber(value);
  if (n == null) return undefined;
  return Math.round(n);
}

function pickString(
  obj: Record<string, unknown>,
  keys: string[],
): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

function draftFromUnknownJson(
  data: unknown,
  source: NfcSpoolDraft["source"],
): NfcSpoolDraft | null {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const obj = data as Record<string, unknown>;

  const protocol =
    typeof obj.protocol === "string" ? obj.protocol.toLowerCase() : "";

  if (protocol === "openspool" || source === "openspool") {
    const brandName = pickString(obj, ["brand", "vendor", "manufacturer"]);
    const materialName = pickString(obj, ["type", "material", "filament_type"]);
    const colorHex = normalizeHex(
      pickString(obj, ["color_hex", "colorHex", "color", "hex"]),
    );
    const colorName = pickString(obj, ["color_name", "colorName", "name"]);
    const diameterMm = asPositiveNumber(
      obj.diameter_mm ?? obj.diameterMm ?? obj.diameter,
    );
    const initialWeightG = asInt(
      obj.weight_g ?? obj.initialWeightG ?? obj.weight ?? obj.spool_weight,
    );
    const productUrl = pickString(obj, ["url", "product_url", "productUrl"]);
    const minNozzleC = asInt(obj.min_temp ?? obj.minNozzleC ?? obj.min_temp_c);
    const maxNozzleC = asInt(obj.max_temp ?? obj.maxNozzleC ?? obj.max_temp_c);
    const minBedC = asInt(obj.min_bed ?? obj.minBedC ?? obj.min_bed_c);
    const maxBedC = asInt(obj.max_bed ?? obj.maxBedC ?? obj.max_bed_c);

    if (!brandName && !materialName && !colorHex) return null;

    return {
      brandName,
      materialName,
      colorHex,
      colorName,
      diameterMm,
      initialWeightG,
      remainingWeightG: initialWeightG,
      productUrl,
      minNozzleC,
      maxNozzleC,
      minBedC,
      maxBedC,
      notes:
        minNozzleC != null || maxNozzleC != null
          ? [
              minNozzleC != null ? `Nozzle min ${minNozzleC}°C` : null,
              maxNozzleC != null ? `Nozzle max ${maxNozzleC}°C` : null,
            ]
              .filter(Boolean)
              .join(" · ")
          : undefined,
      source: "openspool",
      rawLabel: [brandName, materialName, colorName].filter(Boolean).join(" · "),
    };
  }

  if (protocol === "spooler" || source === "spooler") {
    const brandName = pickString(obj, ["brand", "brandName"]);
    const materialName = pickString(obj, ["material", "materialName", "type"]);
    const colorHex = normalizeHex(
      pickString(obj, ["colorHex", "color_hex", "color", "hex"]),
    );
    const colorName = pickString(obj, ["colorName", "color_name", "name"]);
    const diameterMm = asPositiveNumber(obj.diameterMm ?? obj.diameter_mm);
    const initialWeightG = asInt(
      obj.initialWeightG ?? obj.weight_g ?? obj.weight,
    );
    const remainingWeightG = asInt(
      obj.remainingWeightG ?? obj.remaining_g ?? initialWeightG,
    );
    const productUrl = pickString(obj, ["productUrl", "product_url", "url"]);
    const notes = pickString(obj, ["notes", "note"]);
    const minNozzleC = asInt(obj.minNozzleC ?? obj.min_temp);
    const maxNozzleC = asInt(obj.maxNozzleC ?? obj.max_temp);
    const minBedC = asInt(obj.minBedC ?? obj.min_bed);
    const maxBedC = asInt(obj.maxBedC ?? obj.max_bed);

    if (!brandName && !materialName && !colorHex) return null;

    return {
      brandName,
      materialName,
      colorHex,
      colorName,
      diameterMm,
      initialWeightG,
      remainingWeightG,
      productUrl,
      notes,
      minNozzleC,
      maxNozzleC,
      minBedC,
      maxBedC,
      source: "spooler",
      rawLabel: [brandName, materialName, colorName].filter(Boolean).join(" · "),
    };
  }

  // Generic JSON fallback
  const brandName = pickString(obj, ["brand", "vendor", "manufacturer", "brandName"]);
  const materialName = pickString(obj, [
    "material",
    "type",
    "filament_type",
    "materialName",
  ]);
  const colorHex = normalizeHex(
    pickString(obj, ["color_hex", "colorHex", "color", "hex"]),
  );
  if (!brandName && !materialName && !colorHex) return null;

  return {
    brandName,
    materialName,
    colorHex,
    colorName: pickString(obj, ["color_name", "colorName", "name"]),
    diameterMm: asPositiveNumber(obj.diameter_mm ?? obj.diameterMm ?? obj.diameter),
    initialWeightG: asInt(obj.weight_g ?? obj.initialWeightG ?? obj.weight),
    productUrl: pickString(obj, ["url", "product_url", "productUrl"]),
    source: "json",
    rawLabel: [brandName, materialName].filter(Boolean).join(" · "),
  };
}

function draftFromUrl(urlText: string): NfcSpoolDraft | null {
  let url: URL;
  try {
    url = new URL(urlText);
  } catch {
    return null;
  }

  const params = url.searchParams;
  const brandName =
    params.get("brand") ?? params.get("vendor") ?? params.get("manufacturer") ?? undefined;
  const materialName =
    params.get("type") ?? params.get("material") ?? params.get("filament_type") ?? undefined;
  const colorHex = normalizeHex(
    params.get("color_hex") ?? params.get("colorHex") ?? params.get("color"),
  );
  const colorName =
    params.get("color_name") ?? params.get("colorName") ?? params.get("name") ?? undefined;
  const diameterMm = asPositiveNumber(
    params.get("diameter_mm") ?? params.get("diameter"),
  );
  const initialWeightG = asInt(
    params.get("weight_g") ?? params.get("weight") ?? params.get("initialWeightG"),
  );
  const productUrl = params.get("url") ?? params.get("product_url") ?? undefined;
  const minNozzleC = asInt(params.get("min_temp") ?? params.get("minNozzleC"));
  const maxNozzleC = asInt(params.get("max_temp") ?? params.get("maxNozzleC"));

  if (!brandName && !materialName && !colorHex) {
    // Tag may only hold a deep link — keep URL as product link if it looks useful
    if (url.protocol === "http:" || url.protocol === "https:") {
      return {
        productUrl: url.toString(),
        source: "url",
        rawLabel: url.hostname,
      };
    }
    return null;
  }

  return {
    brandName: brandName ?? undefined,
    materialName: materialName ?? undefined,
    colorHex,
    colorName: colorName ?? undefined,
    diameterMm,
    initialWeightG,
    remainingWeightG: initialWeightG,
    productUrl: productUrl ?? undefined,
    minNozzleC,
    maxNozzleC,
    notes:
      minNozzleC != null || maxNozzleC != null
        ? [
            minNozzleC != null ? `Nozzle min ${minNozzleC}°C` : null,
            maxNozzleC != null ? `Nozzle max ${maxNozzleC}°C` : null,
          ]
            .filter(Boolean)
            .join(" · ")
        : undefined,
    source: "url",
    rawLabel: [brandName, materialName, colorName].filter(Boolean).join(" · "),
  };
}

function draftFromText(text: string): NfcSpoolDraft | null {
  const trimmed = text.trim();
  if (!trimmed) return null;

  if (/^https?:\/\//i.test(trimmed) || trimmed.includes("?")) {
    const fromUrl = draftFromUrl(
      /^https?:\/\//i.test(trimmed) ? trimmed : `https://openspool.io/tag_info?${trimmed.replace(/^\?/, "")}`,
    );
    if (fromUrl) return fromUrl;
  }

  try {
    const parsed: unknown = JSON.parse(trimmed);
    const protocol =
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      typeof (parsed as { protocol?: unknown }).protocol === "string"
        ? String((parsed as { protocol: string }).protocol).toLowerCase()
        : "";
    if (protocol === "openspool") {
      return draftFromUnknownJson(parsed, "openspool");
    }
    if (protocol === "spooler") {
      return draftFromUnknownJson(parsed, "spooler");
    }
    return draftFromUnknownJson(parsed, "json");
  } catch {
    // not JSON
  }

  return null;
}

function draftFromOpenPrintTag(decoded: OpenPrintTagDecoded): NfcSpoolDraft {
  const noteParts: string[] = [];
  if (decoded.minNozzleC != null || decoded.maxNozzleC != null) {
    noteParts.push(
      `Nozzle ${decoded.minNozzleC ?? "–"}–${decoded.maxNozzleC ?? "–"}°C`,
    );
  }
  if (decoded.minBedC != null || decoded.maxBedC != null) {
    noteParts.push(
      `Bed ${decoded.minBedC ?? "–"}–${decoded.maxBedC ?? "–"}°C`,
    );
  }
  if (decoded.dryingTemperatureC != null) {
    noteParts.push(
      decoded.dryingTimeMin != null
        ? `Dry ${decoded.dryingTemperatureC}°C / ${decoded.dryingTimeMin} min`
        : `Dry ${decoded.dryingTemperatureC}°C`,
    );
  }

  return {
    brandName: decoded.brandName,
    // Prefer coarse material type (PLA, PETG, …) for catalog matching
    materialName: decoded.materialType ?? decoded.materialAbbreviation,
    colorHex: decoded.colorHex,
    colorName: decoded.materialName,
    secondaryColors: decoded.secondaryColors,
    diameterMm: decoded.diameterMm,
    initialWeightG: decoded.initialWeightG,
    remainingWeightG: decoded.remainingWeightG,
    minNozzleC: decoded.minNozzleC,
    maxNozzleC: decoded.maxNozzleC,
    minBedC: decoded.minBedC,
    maxBedC: decoded.maxBedC,
    locationName: decoded.storageLocation,
    notes: noteParts.length > 0 ? noteParts.join(" · ") : undefined,
    source: "openprinttag",
    rawLabel: [decoded.brandName, decoded.materialName ?? decoded.materialType]
      .filter(Boolean)
      .join(" · "),
  };
}

/** Parse an NDEF reading into a spool form draft. */
export function parseNdefMessage(message: NDEFMessage): NfcSpoolDraft | null {
  // Prefer OpenPrintTag MIME records first (binary CBOR, not text)
  for (const record of message.records) {
    const media = record.mediaType?.toLowerCase() ?? "";
    if (
      media === OPENPRINTTAG_MIME ||
      media.includes("openprinttag")
    ) {
      const decoded = decodeOpenPrintTagRecord(record);
      if (decoded) return draftFromOpenPrintTag(decoded);
    }
  }

  for (const record of message.records) {
    const media = record.mediaType?.toLowerCase() ?? "";
    const type = record.recordType.toLowerCase();

    if (type === "url" || type === "absolute-url") {
      const text = decodeRecordText(record);
      if (text) {
        const draft = draftFromUrl(text) ?? draftFromText(text);
        if (draft) return draft;
      }
      continue;
    }

    if (
      type === "text" ||
      type === "mime" ||
      media.includes("json") ||
      media.includes("text")
    ) {
      // Skip OpenPrintTag binary — already tried above; decoding as text fails
      if (media === OPENPRINTTAG_MIME || media.includes("openprinttag")) {
        continue;
      }
      const text = decodeRecordText(record);
      if (text) {
        const draft = draftFromText(text);
        if (draft) return draft;
      }
      continue;
    }

    // Opaque MIME / unknown — try OpenPrintTag CBOR heuristic
    if (type === "mime" || media.includes("octet-stream") || !media) {
      const decoded = decodeOpenPrintTagRecord(record);
      if (decoded) return draftFromOpenPrintTag(decoded);
    }
  }

  // Last resort: decode any record as text
  for (const record of message.records) {
    const text = decodeRecordText(record);
    if (text) {
      const draft = draftFromText(text);
      if (draft) return draft;
    }
  }

  return null;
}

export function findCatalogMatch<T extends { id: string; name: string }>(
  items: T[],
  name: string | undefined,
): T | undefined {
  if (!name) return undefined;
  const needle = name.trim().toLowerCase();
  const exact = items.find((item) => item.name.toLowerCase() === needle);
  if (exact) return exact;
  // Prefer longer names that start with the tag value (e.g. "PLA" → "PLA")
  const starts = items
    .filter(
      (item) =>
        item.name.toLowerCase().startsWith(needle) ||
        needle.startsWith(item.name.toLowerCase()),
    )
    .sort((a, b) => a.name.length - b.name.length);
  return starts[0];
}
