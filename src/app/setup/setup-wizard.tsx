"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { RiCheckLine } from "@remixicon/react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { SeedDatasetId } from "@/lib/seed-datasets";
import { cn } from "@/lib/utils";
import { authClient } from "@/server/better-auth/client";
import { api } from "@/trpc/react";

type Step = "admin" | "datasets" | "done";

export function SetupWizard() {
  const router = useRouter();
  const utils = api.useUtils();
  const statusQuery = api.setup.status.useQuery();
  const { data: session } = authClient.useSession();

  const [step, setStep] = useState<Step>("admin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState<SeedDatasetId[]>([]);
  const [selectionReady, setSelectionReady] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!statusQuery.data) return;
    if (statusQuery.data.completed) {
      router.replace("/");
      return;
    }
    if (statusQuery.data.hasAdmin) {
      setStep(session?.user ? "datasets" : "admin");
    }
    if (!selectionReady) {
      setSelected(statusQuery.data.defaultSelection);
      setSelectionReady(true);
    }
  }, [statusQuery.data, router, session?.user, selectionReady]);

  const createAdmin = api.setup.createAdmin.useMutation();
  const install = api.setup.install.useMutation();

  const datasets = statusQuery.data?.datasets ?? [];
  const adminExists = statusQuery.data?.hasAdmin ?? false;

  const toggleDataset = (id: SeedDatasetId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const selectedCount = useMemo(() => selected.length, [selected]);

  const onCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      if (adminExists) {
        const signIn = await authClient.signIn.email({
          email: email.trim(),
          password,
        });
        if (signIn.error) {
          setError(signIn.error.message ?? "Sign-in failed");
          return;
        }
      } else {
        await createAdmin.mutateAsync({
          name: name.trim(),
          email: email.trim(),
          password,
        });
        const signIn = await authClient.signIn.email({
          email: email.trim(),
          password,
        });
        if (signIn.error) {
          setError(signIn.error.message ?? "Created admin but sign-in failed");
          return;
        }
        toast.success("Admin account created");
      }
      await utils.setup.status.invalidate();
      setStep("datasets");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create admin");
    } finally {
      setPending(false);
    }
  };

  const onInstall = async () => {
    setError(null);
    setPending(true);
    try {
      await install.mutateAsync({ datasets: selected });
      await utils.setup.status.invalidate();
      toast.success("Setup complete");
      setStep("done");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not finish setup");
    } finally {
      setPending(false);
    }
  };

  if (statusQuery.isLoading) {
    return (
      <p className="text-muted-foreground text-sm">Checking setup status…</p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div>
        <p className="text-muted-foreground text-xs uppercase tracking-wide">
          First-run setup
        </p>
        <h1 className="font-heading mt-1 text-3xl font-bold tracking-tight">
          Welcome to Spooler
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Create your admin account, then choose which starter data to install.
        </p>
      </div>

      <div className="flex gap-2">
        {[
          { id: "admin", label: "1. Admin" },
          { id: "datasets", label: "2. Data" },
          { id: "done", label: "3. Done" },
        ].map((item) => {
          const active = step === item.id;
          const done =
            (item.id === "admin" && (step === "datasets" || step === "done")) ||
            (item.id === "datasets" && step === "done");
          return (
            <div
              key={item.id}
              className={cn(
                "flex flex-1 items-center justify-center border px-2 py-2 text-xs",
                active && "border-foreground bg-foreground text-background",
                done && !active && "border-border bg-muted",
                !active && !done && "border-border text-muted-foreground",
              )}
            >
              {done && !active ? (
                <RiCheckLine className="mr-1 size-3.5" />
              ) : null}
              {item.label}
            </div>
          );
        })}
      </div>

      {step === "admin" && (
        <Card>
          <CardHeader>
            <CardTitle>
              {adminExists ? "Sign in as admin" : "Create admin"}
            </CardTitle>
            <CardDescription>
              {adminExists
                ? "An admin already exists. Sign in to finish choosing starter data."
                : "This is the first account. Sign-up stays closed after setup."}
            </CardDescription>
          </CardHeader>
          <form onSubmit={onCreateAdmin}>
            <CardContent>
              <FieldGroup>
                {!adminExists && (
                  <Field>
                    <FieldLabel htmlFor="setup-name">Name</FieldLabel>
                    <Input
                      id="setup-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                    />
                  </Field>
                )}
                <Field>
                  <FieldLabel htmlFor="setup-email">Email</FieldLabel>
                  <Input
                    id="setup-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="setup-password">Password</FieldLabel>
                  <Input
                    id="setup-password"
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete={
                      adminExists ? "current-password" : "new-password"
                    }
                  />
                  {!adminExists && (
                    <FieldDescription>At least 8 characters.</FieldDescription>
                  )}
                </Field>
              </FieldGroup>
              {error && (
                <p className="text-destructive mt-3 text-xs">{error}</p>
              )}
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                disabled={pending}
                className="w-full sm:w-auto"
              >
                {pending
                  ? "Please wait…"
                  : adminExists
                    ? "Sign in & continue"
                    : "Create admin & continue"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}

      {step === "datasets" && (
        <Card>
          <CardHeader>
            <CardTitle>Starter datasets</CardTitle>
            <CardDescription>
              Pick what to pre-install. You can always add more later in
              Settings. Recommended packs are pre-selected.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {datasets.map((dataset) => {
              const checked = selected.includes(dataset.id);
              return (
                <label
                  key={dataset.id}
                  className={cn(
                    "hover:bg-muted/40 flex cursor-pointer items-start gap-3 border border-border p-3 transition-colors",
                    checked && "border-foreground/40 bg-muted/30",
                  )}
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggleDataset(dataset.id)}
                    className="mt-0.5"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium">{dataset.title}</span>
                      {dataset.recommended && (
                        <Badge variant="secondary">Recommended</Badge>
                      )}
                      <Badge variant="outline">{dataset.itemCount} items</Badge>
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      {dataset.description}
                    </p>
                  </div>
                </label>
              );
            })}
            {error && <p className="text-destructive text-xs">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Button onClick={onInstall} disabled={pending}>
              {pending
                ? "Installing…"
                : selectedCount === 0
                  ? "Skip data & finish"
                  : `Install ${selectedCount} dataset${selectedCount === 1 ? "" : "s"}`}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={pending}
              onClick={() => setSelected([])}
            >
              Clear selection
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
