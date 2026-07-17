import { cn } from "@/lib/utils";
import { colorPreviewStyle, type ColorStopLike } from "@/lib/color-preview";

export function ColorSwatch({
  mode,
  colors,
  className,
  title,
}: {
  mode: string;
  colors: ColorStopLike[];
  className?: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={cn(
        "border-border inline-block shrink-0 border shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]",
        className,
      )}
      style={colorPreviewStyle(mode, colors)}
    />
  );
}
