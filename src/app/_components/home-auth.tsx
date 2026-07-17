"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/server/better-auth/client";

function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await authClient.signIn.email({ email, password });
      if (res.error) {
        setError(res.error.message ?? "Sign in failed");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-border bg-background/80 w-full max-w-sm space-y-4 border p-6 backdrop-blur"
    >
      <div>
        <h2 className="font-heading text-xl font-semibold">Sign in</h2>
        <p className="text-muted-foreground mt-1 text-xs">
          Use the admin account created during setup.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Field>
      </FieldGroup>

      {error && <p className="text-destructive text-xs">{error}</p>}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Please wait…" : "Sign in"}
      </Button>
    </form>
  );
}

export function HomeAuth() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #1c1917 0%, #292524 42%, #44403c 100%),
            linear-gradient(90deg, #ef4444 0%, #ef4444 20%, #f8fafc 20%, #f8fafc 40%, #3b82f6 40%, #3b82f6 60%, #a855f7 60%, #ec4899 100%)
          `,
          backgroundSize: "100% 100%, 100% 28%",
          backgroundPosition: "0 0, 0 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.15), transparent 35%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md text-stone-100">
          <p className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
            Spooler
          </p>
          <p className="mt-4 text-lg text-stone-300">
            Inventory for every filament roll — solid, gradient, and striped
            multi-color, with custom fields that fit your workshop.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-stone-400">
            <li>Track remaining grams and log usage per print</li>
            <li>Color previews for gradients and hard multi-color bands</li>
            <li>Custom fields including multi-select tags</li>
          </ul>
        </div>
        <AuthForm />
      </div>
    </main>
  );
}
