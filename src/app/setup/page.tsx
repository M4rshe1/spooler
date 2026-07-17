import { SetupWizard } from "@/app/setup/setup-wizard";
import { isSetupComplete } from "@/server/setup/install-datasets";
import { db } from "@/server/db";
import { redirect } from "next/navigation";

export default async function SetupPage() {
  const complete = await isSetupComplete(db);
  if (complete) {
    redirect("/");
  }

  return (
    <main className="bg-background min-h-screen px-4 py-12">
      <SetupWizard />
    </main>
  );
}
