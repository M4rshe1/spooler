/** Perceptual color distance (CIEDE2000) for matching filaments by hex. */

export type Lab = { L: number; a: number; b: number };

const HEX_RE = /^#?[0-9A-Fa-f]{6}$/;

export function parseHexColor(hex: string): string | null {
  const cleaned = hex.trim();
  if (!HEX_RE.test(cleaned)) return null;
  const withHash = cleaned.startsWith("#") ? cleaned : `#${cleaned}`;
  return withHash.toUpperCase();
}

function srgbChannelToLinear(c: number): number {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

export function hexToLab(hex: string): Lab | null {
  const normalized = parseHexColor(hex);
  if (!normalized) return null;

  const r = srgbChannelToLinear(parseInt(normalized.slice(1, 3), 16));
  const g = srgbChannelToLinear(parseInt(normalized.slice(3, 5), 16));
  const b = srgbChannelToLinear(parseInt(normalized.slice(5, 7), 16));

  // sRGB D65 → XYZ
  const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
  const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;

  // D65 white point
  const xr = x / 0.95047;
  const yr = y / 1;
  const zr = z / 1.08883;

  const f = (t: number) =>
    t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116;

  const fx = f(xr);
  const fy = f(yr);
  const fz = f(zr);

  return {
    L: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}

/** CIEDE2000 ΔE — lower means closer. Typical “same color” is under ~2–3. */
export function deltaE2000(lab1: Lab, lab2: Lab): number {
  const { L: L1, a: a1, b: b1 } = lab1;
  const { L: L2, a: a2, b: b2 } = lab2;

  const kL = 1;
  const kC = 1;
  const kH = 1;

  const C1 = Math.hypot(a1, b1);
  const C2 = Math.hypot(a2, b2);
  const Cbar = (C1 + C2) / 2;

  const Cbar7 = Cbar ** 7;
  const G = 0.5 * (1 - Math.sqrt(Cbar7 / (Cbar7 + 25 ** 7)));

  const a1p = (1 + G) * a1;
  const a2p = (1 + G) * a2;
  const C1p = Math.hypot(a1p, b1);
  const C2p = Math.hypot(a2p, b2);

  const h = (ap: number, bp: number) => {
    if (ap === 0 && bp === 0) return 0;
    const angle = (Math.atan2(bp, ap) * 180) / Math.PI;
    return angle >= 0 ? angle : angle + 360;
  };

  const h1p = h(a1p, b1);
  const h2p = h(a2p, b2);

  const dLp = L2 - L1;
  const dCp = C2p - C1p;

  let dhp = 0;
  if (C1p * C2p !== 0) {
    const diff = h2p - h1p;
    if (Math.abs(diff) <= 180) dhp = diff;
    else if (diff > 180) dhp = diff - 360;
    else dhp = diff + 360;
  }
  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin((dhp * Math.PI) / 360);

  const Lbarp = (L1 + L2) / 2;
  const Cbarp = (C1p + C2p) / 2;

  let hbarp: number;
  if (C1p * C2p === 0) {
    hbarp = h1p + h2p;
  } else if (Math.abs(h1p - h2p) <= 180) {
    hbarp = (h1p + h2p) / 2;
  } else {
    hbarp =
      h1p + h2p < 360 ? (h1p + h2p + 360) / 2 : (h1p + h2p - 360) / 2;
  }

  const T =
    1 -
    0.17 * Math.cos(((hbarp - 30) * Math.PI) / 180) +
    0.24 * Math.cos((2 * hbarp * Math.PI) / 180) +
    0.32 * Math.cos(((3 * hbarp + 6) * Math.PI) / 180) -
    0.2 * Math.cos(((4 * hbarp - 63) * Math.PI) / 180);

  const dTheta = 30 * Math.exp(-(((hbarp - 275) / 25) ** 2));
  const Cbarp7 = Cbarp ** 7;
  const Rc = 2 * Math.sqrt(Cbarp7 / (Cbarp7 + 25 ** 7));
  const Sl =
    1 +
    (0.015 * (Lbarp - 50) ** 2) / Math.sqrt(20 + (Lbarp - 50) ** 2);
  const Sc = 1 + 0.045 * Cbarp;
  const Sh = 1 + 0.015 * Cbarp * T;
  const Rt = -Math.sin((2 * dTheta * Math.PI) / 180) * Rc;

  return Math.sqrt(
    (dLp / (kL * Sl)) ** 2 +
      (dCp / (kC * Sc)) ** 2 +
      (dHp / (kH * Sh)) ** 2 +
      Rt * (dCp / (kC * Sc)) * (dHp / (kH * Sh)),
  );
}

export function hexDeltaE(a: string, b: string): number | null {
  const labA = hexToLab(a);
  const labB = hexToLab(b);
  if (!labA || !labB) return null;
  return deltaE2000(labA, labB);
}

/** Closest stop distance for solid / gradient / multi filaments. */
export function closestColorDistance(
  targetHex: string,
  colors: { hex: string }[],
): number | null {
  const target = hexToLab(targetHex);
  if (!target || colors.length === 0) return null;

  let best: number | null = null;
  for (const stop of colors) {
    const lab = hexToLab(stop.hex);
    if (!lab) continue;
    const d = deltaE2000(target, lab);
    if (best == null || d < best) best = d;
  }
  return best;
}

export function formatColorDistance(distance: number): string {
  if (distance < 0.05) return "Δ0";
  return `Δ${distance.toFixed(1)}`;
}

export function colorDistanceLabel(distance: number): string {
  if (distance < 0.5) return "Exact match";
  if (distance < 2) return "Very close match";
  if (distance < 5) return "Close match";
  if (distance < 10) return "Similar";
  if (distance < 20) return "Related";
  return "Distant";
}
