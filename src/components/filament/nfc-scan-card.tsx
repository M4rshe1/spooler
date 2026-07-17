"use client";

import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSensorLine } from "@remixicon/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  isWebNfcSupported,
  parseNdefMessage,
  type NfcSpoolDraft,
} from "@/lib/nfc";
import { cn } from "@/lib/utils";

type NfcScanCardProps = {
  onDraft: (draft: NfcSpoolDraft) => void | Promise<void>;
  className?: string;
};

export function NfcScanCard({ onDraft, className }: NfcScanCardProps) {
  const [supported, setSupported] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const applyingRef = useRef(false);

  useEffect(() => {
    setSupported(isWebNfcSupported());
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const stopScan = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setScanning(false);
    setStatus(null);
  };

  const startScan = async () => {
    if (!isWebNfcSupported()) {
      toast.error("Web NFC needs Chrome on Android (HTTPS).");
      return;
    }

    stopScan();
    const abort = new AbortController();
    abortRef.current = abort;
    setScanning(true);
    setStatus("Hold your phone near the spool’s NFC tag…");

    try {
      const reader = new NDEFReader();
      reader.addEventListener("readingerror", () => {
        setStatus("Couldn’t read that tag. Try again.");
        toast.error("NFC read failed");
      });
      reader.addEventListener("reading", (event) => {
        void (async () => {
          if (applyingRef.current) return;
          const draft = parseNdefMessage(event.message);
          if (!draft) {
            setStatus("Tag read, but no filament data found.");
            toast.error("Unrecognized NFC tag format");
            return;
          }
          applyingRef.current = true;
          try {
            await onDraft(draft);
            toast.success(
              draft.rawLabel
                ? `Filled from tag: ${draft.rawLabel}`
                : "Form filled from NFC tag",
            );
            stopScan();
          } catch (err) {
            const message =
              err instanceof Error ? err.message : "Failed to apply tag data";
            toast.error(message);
            setStatus(message);
          } finally {
            applyingRef.current = false;
          }
        })();
      });

      await reader.scan({ signal: abort.signal });
    } catch (err) {
      stopScan();
      if (err instanceof DOMException && err.name === "AbortError") return;
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        toast.error("NFC permission denied");
        return;
      }
      toast.error(
        err instanceof Error ? err.message : "Could not start NFC scanning",
      );
    }
  };

  if (!supported) {
    return (
      <Card className={cn("border-dashed", className)}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <RiSensorLine className="size-5" />
            Scan NFC tag
          </CardTitle>
          <CardDescription>
            NFC autofill works in Chrome on Android over HTTPS. On this device
            you can still fill the form manually. OpenPrintTag, OpenSpool, and
            Spooler tags are supported.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        scanning && "border-primary ring-1 ring-primary/30",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <RiSensorLine className="size-5" />
          Scan NFC tag
        </CardTitle>
        <CardDescription>
          Tap a filament NFC tag to fill brand, material, color, and more.
          Supports OpenPrintTag (Prusa), OpenSpool, and Spooler tags.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {scanning ? (
          <>
            <div className="bg-primary/10 text-primary flex flex-1 items-center gap-3 rounded-none px-3 py-3 text-sm">
              <span className="relative flex size-2.5">
                <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-60" />
                <span className="bg-primary relative inline-flex size-2.5 rounded-full" />
              </span>
              <span>{status ?? "Scanning…"}</span>
            </div>
            <Button
              type="button"
              variant="outline"
              className="min-h-11 w-full sm:w-auto"
              onClick={stopScan}
            >
              <RiCloseLine className="size-4" />
              Cancel
            </Button>
          </>
        ) : (
          <Button
            type="button"
            className="min-h-11 w-full sm:w-auto"
            onClick={() => void startScan()}
          >
            <RiSensorLine className="size-4" />
            Scan tag
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
