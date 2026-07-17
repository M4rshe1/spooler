import { RiExternalLinkLine } from "@remixicon/react";

import { displayUrlHost } from "@/lib/filament";
import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-foreground inline-flex max-w-full items-center gap-1 underline-offset-2 hover:underline",
        className,
      )}
    >
      <span className="truncate">{children ?? displayUrlHost(href)}</span>
      <RiExternalLinkLine className="size-3.5 shrink-0 opacity-70" />
    </a>
  );
}
