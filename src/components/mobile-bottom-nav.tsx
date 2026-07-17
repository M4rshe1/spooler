"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiAddLine,
  RiDashboardLine,
  RiPaletteLine,
  RiShoppingCart2Line,
  RiStackLine,
} from "@remixicon/react";

import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Home", icon: RiDashboardLine },
  { href: "/inventory", label: "Stock", icon: RiStackLine },
  { href: "/filaments", label: "Filaments", icon: RiPaletteLine },
  { href: "/cart", label: "Cart", icon: RiShoppingCart2Line },
  { href: "/spools/new", label: "Add", icon: RiAddLine },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  if (href === "/spools/new") return pathname === "/spools/new";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Fixed tab bar for viewports below the `md` breakpoint. */
export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="border-border bg-background/95 supports-backdrop-filter:bg-background/85 fixed inset-x-0 bottom-0 z-50 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid h-16 max-w-lg grid-cols-5">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-muted-foreground flex min-h-16 flex-1 flex-col items-center justify-center gap-1 px-1 text-[10px] font-medium transition-colors",
                  active && "text-foreground",
                  "active:bg-muted/60",
                )}
              >
                <Icon className={cn("size-5", active && "stroke-[2.25px]")} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
