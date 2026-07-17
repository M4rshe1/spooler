"use client";

import { useEffect, useState } from "react";
import {
  RiComputerLine,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", label: "Light", icon: RiSunLine },
  { value: "dark", label: "Dark", icon: RiMoonLine },
  { value: "system", label: "System", icon: RiComputerLine },
] as const;

export function ThemeSwitcher({
  className,
  align = "end",
}: {
  className?: string;
  align?: "start" | "end" | "center";
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const TriggerIcon =
    !mounted
      ? RiSunLine
      : theme === "system"
        ? RiComputerLine
        : resolvedTheme === "dark"
          ? RiMoonLine
          : RiSunLine;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className={cn(className)}
            aria-label="Theme"
          />
        }
      >
        <TriggerIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="min-w-36">
        {themes.map((item) => {
          const Icon = item.icon;
          const selected = mounted && theme === item.value;
          return (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
              className={cn(selected && "bg-accent")}
            >
              <Icon />
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
