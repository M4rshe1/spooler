-- Add filament repurchase qty; migrate spool flags; drop spool needsRepurchase

PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Filament" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "colorMode" TEXT NOT NULL DEFAULT 'SOLID',
    "colorName" TEXT,
    "diameterMm" REAL NOT NULL DEFAULT 1.75,
    "defaultWeightG" INTEGER NOT NULL DEFAULT 1000,
    "productUrl" TEXT,
    "notes" TEXT,
    "repurchaseQty" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Filament_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Filament_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Filament_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO "new_Filament" ("brandId", "colorMode", "colorName", "createdAt", "defaultWeightG", "diameterMm", "id", "materialId", "notes", "productUrl", "repurchaseQty", "updatedAt", "userId")
SELECT
  f."brandId", f."colorMode", f."colorName", f."createdAt", f."defaultWeightG", f."diameterMm", f."id", f."materialId", f."notes", f."productUrl",
  COALESCE((
    SELECT COUNT(*) FROM "Spool" s
    WHERE s."filamentId" = f."id" AND s."needsRepurchase" = 1
  ), 0),
  f."updatedAt", f."userId"
FROM "Filament" f;

DROP TABLE "Filament";
ALTER TABLE "new_Filament" RENAME TO "Filament";
CREATE INDEX "Filament_userId_idx" ON "Filament"("userId");
CREATE INDEX "Filament_userId_repurchaseQty_idx" ON "Filament"("userId", "repurchaseQty");
CREATE INDEX "Filament_materialId_idx" ON "Filament"("materialId");
CREATE INDEX "Filament_brandId_idx" ON "Filament"("brandId");

CREATE TABLE "new_Spool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "filamentId" TEXT NOT NULL,
    "locationId" TEXT,
    "initialWeightG" INTEGER NOT NULL,
    "remainingWeightG" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'sealed',
    "purchasedAt" DATETIME,
    "priceCents" INTEGER,
    "notes" TEXT,
    "lastDriedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Spool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Spool_filamentId_fkey" FOREIGN KEY ("filamentId") REFERENCES "Filament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Spool_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO "new_Spool" ("createdAt", "filamentId", "id", "initialWeightG", "lastDriedAt", "locationId", "notes", "priceCents", "purchasedAt", "remainingWeightG", "status", "updatedAt", "userId")
SELECT "createdAt", "filamentId", "id", "initialWeightG", "lastDriedAt", "locationId", "notes", "priceCents", "purchasedAt", "remainingWeightG", "status", "updatedAt", "userId" FROM "Spool";

DROP TABLE "Spool";
ALTER TABLE "new_Spool" RENAME TO "Spool";
CREATE INDEX "Spool_userId_idx" ON "Spool"("userId");
CREATE INDEX "Spool_userId_status_idx" ON "Spool"("userId", "status");
CREATE INDEX "Spool_filamentId_idx" ON "Spool"("filamentId");

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
