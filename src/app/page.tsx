import { redirect } from "next/navigation";

import { HomeAuth } from "@/app/_components/home-auth";
import { db } from "@/server/db";
import { getSession } from "@/server/better-auth/server";
import { isSetupComplete } from "@/server/setup/install-datasets";

export default async function HomePage() {
  const complete = await isSetupComplete(db);
  if (!complete) {
    redirect("/setup");
  }

  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return <HomeAuth />;
}
