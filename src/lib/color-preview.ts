import type { CSSProperties } from "react";

import type { ColorMode } from "@/lib/filament";

export type ColorStopLike = {
  hex: string;
  name?: string | null;
  position: number;
  weight?: number | null;
};

export function normalizeHex(hex: string): string {
  const cleaned = hex.trim();
  if (/^#[0-9A-Fa-f]{6}$/.test(cleaned)) return cleaned.toUpperCase();
  if (/^[0-9A-Fa-f]{6}$/.test(cleaned)) return `#${cleaned.toUpperCase()}`;
  return "#808080";
}

export function colorPreviewStyle(
  mode: string,
  colors: ColorStopLike[],
): CSSProperties {
  const stops = [...colors].sort((a, b) => a.position - b.position);
  if (stops.length === 0) {
    return { backgroundColor: "#808080" };
  }

  if (mode === "SOLID" || stops.length === 1) {
    return { backgroundColor: normalizeHex(stops[0]!.hex) };
  }

  if (mode === "GRADIENT") {
    const parts = stops.map((s) => {
      const pct = Math.round(s.position * 100);
      return `${normalizeHex(s.hex)} ${pct}%`;
    });
    return {
      backgroundImage: `linear-gradient(90deg, ${parts.join(", ")})`,
    };
  }

  // MULTI — hard bands, weighted or equal
  const totalWeight = stops.reduce((sum, s) => sum + (s.weight ?? 1), 0);
  let cursor = 0;
  const parts: string[] = [];
  for (const stop of stops) {
    const w = (stop.weight ?? 1) / totalWeight;
    const start = Math.round(cursor * 100);
    cursor += w;
    const end = Math.round(cursor * 100);
    const hex = normalizeHex(stop.hex);
    parts.push(`${hex} ${start}%`, `${hex} ${end}%`);
  }
  return {
    backgroundImage: `linear-gradient(90deg, ${parts.join(", ")})`,
  };
}

export function defaultColorsForMode(mode: ColorMode): ColorStopLike[] {
  if (mode === "SOLID") {
    return [{ hex: "#3B82F6", name: null, position: 0, weight: null }];
  }
  if (mode === "GRADIENT") {
    return [
      { hex: "#2563EB", name: null, position: 0, weight: null },
      { hex: "#A855F7", name: null, position: 0.5, weight: null },
      { hex: "#EC4899", name: null, position: 1, weight: null },
    ];
  }
  return [
    { hex: "#EF4444", name: null, position: 0, weight: 1 },
    { hex: "#FFFFFF", name: null, position: 0.5, weight: 1 },
    { hex: "#3B82F6", name: null, position: 1, weight: 1 },
  ];
}
