import { redirect } from "next/navigation";

import { AppShell } from "@/components/app-shell";
import { db } from "@/server/db";
import { getSession } from "@/server/better-auth/server";
import { isSetupComplete } from "@/server/setup/install-datasets";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const complete = await isSetupComplete(db);
  if (!complete) {
    redirect("/setup");
  }

  const session = await getSession();
  if (!session) {
    redirect("/");
  }

  return <AppShell userName={session.user.name}>{children}</AppShell>;
}
