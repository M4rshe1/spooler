import { FilamentForm } from "@/components/filament/filament-form";

export default function NewFilamentPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Add filament
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Scan an OpenPrintTag / OpenSpool NFC tag on Android Chrome, or fill
          the form manually.
        </p>
      </div>
      <FilamentForm mode="create" />
    </div>
  );
}
