"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiAddLine,
  RiArchiveLine,
  RiDashboardLine,
  RiLogoutBoxLine,
  RiPaletteLine,
  RiSettings3Line,
  RiShoppingCart2Line,
  RiStackLine,
} from "@remixicon/react";

import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/server/better-auth/client";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: RiDashboardLine },
  { href: "/inventory", label: "Inventory", icon: RiStackLine },
  { href: "/filaments", label: "Filaments", icon: RiPaletteLine },
  { href: "/cart", label: "Cart", icon: RiShoppingCart2Line },
  { href: "/spools/new", label: "Add spool", icon: RiAddLine },
  { href: "/settings", label: "Settings", icon: RiSettings3Line },
];

export function AppShell({
  children,
  userName,
}: {
  children: React.ReactNode;
  userName?: string | null;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-sidebar-border border-b px-4 py-4">
          <Link href="/dashboard" className="block">
            <span className="font-heading text-xl font-bold tracking-tight">
              Spooler
            </span>
            <span className="text-muted-foreground mt-0.5 block text-[11px]">
              Filament inventory
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Library</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/dashboard" &&
                      item.href !== "/spools/new" &&
                      pathname.startsWith(item.href)) ||
                    (item.href === "/spools/new" && pathname === "/spools/new");
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        isActive={active}
                        className={cn(active && "font-medium")}
                        render={<Link href={item.href} />}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-sidebar-border border-t p-3">
          <div className="mb-2 flex items-center justify-between gap-2 px-1">
            <div className="text-muted-foreground truncate text-xs">
              {userName ?? "Signed in"}
            </div>
            <ThemeSwitcher align="end" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() =>
              void authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    window.location.href = "/";
                  },
                },
              })
            }
          >
            <RiLogoutBoxLine />
            Sign out
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="min-h-svh">
        <header className="bg-background/95 supports-backdrop-filter:bg-background/80 border-border sticky top-0 z-20 flex h-12 shrink-0 items-center gap-2 border-b px-3 backdrop-blur sm:px-4">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-1 hidden h-4 sm:block"
          />
          <div className="text-muted-foreground hidden items-center gap-1 text-xs sm:flex">
            <RiArchiveLine className="size-3.5" />
            Track every roll
          </div>
          <div className="font-heading truncate text-sm font-semibold sm:hidden">
            Spooler
          </div>
          <div className="ml-auto">
            <ThemeSwitcher />
          </div>
        </header>
        <div className="flex-1 p-3 pb-[calc(5rem+env(safe-area-inset-bottom))] sm:p-4 md:p-6 md:pb-6">
          {children}
        </div>
      </SidebarInset>
      <MobileBottomNav />
    </SidebarProvider>
  );
}
