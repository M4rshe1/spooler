"use client";

import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";

import { ColorSwatch } from "@/components/filament/color-swatch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  defaultColorsForMode,
  type ColorStopLike,
} from "@/lib/color-preview";
import { COLOR_MODES, type ColorMode } from "@/lib/filament";
import { cn } from "@/lib/utils";

export type ColorEditorValue = {
  colorMode: ColorMode;
  colorName: string;
  colors: ColorStopLike[];
};

export function ColorEditor({
  value,
  onChange,
}: {
  value: ColorEditorValue;
  onChange: (value: ColorEditorValue) => void;
}) {
  const setMode = (mode: ColorMode) => {
    if (mode === value.colorMode) return;
    onChange({
      ...value,
      colorMode: mode,
      colors: defaultColorsForMode(mode),
    });
  };

  const updateStop = (index: number, patch: Partial<ColorStopLike>) => {
    const colors = value.colors.map((c, i) =>
      i === index ? { ...c, ...patch } : c,
    );
    onChange({ ...value, colors });
  };

  const addStop = () => {
    if (value.colors.length >= 12) return;
    const colors = [
      ...value.colors,
      {
        hex: "#808080",
        name: null,
        position: 1,
        weight: value.colorMode === "MULTI" ? 1 : null,
      },
    ];
    // redistribute positions evenly
    const redistributed = colors.map((c, i) => ({
      ...c,
      position: colors.length === 1 ? 0 : i / (colors.length - 1),
    }));
    onChange({ ...value, colors: redistributed });
  };

  const removeStop = (index: number) => {
    if (value.colors.length <= (value.colorMode === "SOLID" ? 1 : 2)) return;
    const colors = value.colors
      .filter((_, i) => i !== index)
      .map((c, i, arr) => ({
        ...c,
        position: arr.length === 1 ? 0 : i / (arr.length - 1),
      }));
    onChange({ ...value, colors });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Color mode</Label>
        <div className="flex flex-wrap gap-1">
          {COLOR_MODES.map((mode) => (
            <Button
              key={mode}
              type="button"
              size="sm"
              variant={value.colorMode === mode ? "default" : "outline"}
              onClick={() => setMode(mode)}
            >
              {mode === "SOLID"
                ? "Solid"
                : mode === "GRADIENT"
                  ? "Gradient"
                  : "Multi"}
            </Button>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          {value.colorMode === "SOLID" && "One constant color."}
          {value.colorMode === "GRADIENT" &&
            "Smooth blend along the spool (e.g. sunset filament)."}
          {value.colorMode === "MULTI" &&
            "Hard color bands (striped / segmented filament)."}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="colorName">Color name</Label>
        <Input
          id="colorName"
          placeholder="e.g. Galaxy Purple, Patriot"
          value={value.colorName}
          onChange={(e) => onChange({ ...value, colorName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Preview</Label>
        <ColorSwatch
          mode={value.colorMode}
          colors={value.colors}
          className="h-10 w-full"
          title={value.colorName || undefined}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Color stops</Label>
          {value.colorMode !== "SOLID" && (
            <Button
              type="button"
              size="xs"
              variant="outline"
              onClick={addStop}
              disabled={value.colors.length >= 12}
            >
              <RiAddLine />
              Add stop
            </Button>
          )}
        </div>

        {value.colors.map((stop, index) => (
          <div
            key={index}
            className={cn(
              "grid gap-2 border border-border p-3",
              value.colorMode === "MULTI"
                ? "sm:grid-cols-[auto_1fr_1fr_auto]"
                : value.colorMode === "GRADIENT"
                  ? "sm:grid-cols-[auto_1fr_1fr_auto]"
                  : "sm:grid-cols-[auto_1fr_auto]",
            )}
          >
            <Input
              type="color"
              className="h-8 w-12 cursor-pointer p-1"
              value={stop.hex}
              onChange={(e) => updateStop(index, { hex: e.target.value })}
              aria-label={`Stop ${index + 1} color`}
            />
            <Input
              placeholder="Label (optional)"
              value={stop.name ?? ""}
              onChange={(e) =>
                updateStop(index, { name: e.target.value || null })
              }
            />
            {value.colorMode === "GRADIENT" && (
              <Input
                type="number"
                min={0}
                max={100}
                step={1}
                value={Math.round(stop.position * 100)}
                onChange={(e) =>
                  updateStop(index, {
                    position: Math.min(
                      1,
                      Math.max(0, Number(e.target.value) / 100),
                    ),
                  })
                }
                aria-label="Position percent"
              />
            )}
            {value.colorMode === "MULTI" && (
              <Input
                type="number"
                min={0.1}
                step={0.1}
                value={stop.weight ?? 1}
                onChange={(e) =>
                  updateStop(index, {
                    weight: Math.max(0.1, Number(e.target.value) || 1),
                  })
                }
                aria-label="Band weight"
              />
            )}
            {value.colorMode !== "SOLID" && (
              <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                onClick={() => removeStop(index)}
                disabled={value.colors.length <= 2}
                aria-label="Remove stop"
              >
                <RiDeleteBinLine />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
