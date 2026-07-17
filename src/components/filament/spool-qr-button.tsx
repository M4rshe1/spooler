"use client";

import { useEffect, useMemo, useState } from "react";
import { RiDownloadLine, RiQrCodeLine } from "@remixicon/react";
import { QRCodeSVG } from "qrcode.react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SpoolQrButtonProps = {
  spoolId: string;
  label?: string;
  /** Compact outline icon/button for toolbars */
  compact?: boolean;
};

/** Deep link that opens the spool page ready to log usage. */
export function spoolLogUrl(spoolId: string, origin?: string): string {
  const base =
    origin ??
    (typeof window !== "undefined" ? window.location.origin : "");
  return `${base}/spools/${spoolId}?log=1`;
}

export function SpoolQrButton({
  spoolId,
  label,
  compact,
}: SpoolQrButtonProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!open) return;
    setUrl(spoolLogUrl(spoolId));
  }, [open, spoolId]);

  const fileName = useMemo(
    () => `spooler-${spoolId.slice(0, 8)}.svg`,
    [spoolId],
  );

  const downloadSvg = () => {
    const svg = document.getElementById(`spool-qr-${spoolId}`);
    if (!svg) return;
    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(href);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size={compact ? "sm" : "default"}
        onClick={() => setOpen(true)}
      >
        <RiQrCodeLine />
        {label ?? (compact ? "QR" : "QR code")}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Spool QR code</DialogTitle>
            <DialogDescription>
              Scan to open this spool and log usage. Print and stick it on the
              roll.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-3 py-2">
            {url ? (
              <div className="border-border bg-white p-3">
                <QRCodeSVG
                  id={`spool-qr-${spoolId}`}
                  value={url}
                  size={220}
                  level="M"
                  includeMargin
                />
              </div>
            ) : (
              <div className="bg-muted size-[244px]" />
            )}
            <p className="text-muted-foreground max-w-full break-all text-center text-xs">
              {url || "…"}
            </p>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={downloadSvg}
              disabled={!url}
            >
              <RiDownloadLine />
              Download
            </Button>
            <Button type="button" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
