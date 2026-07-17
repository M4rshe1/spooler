-- CreateTable
CREATE TABLE "AppSetup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" DATETIME,
    "installedDatasets" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Spool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "locationId" TEXT,
    "colorMode" TEXT NOT NULL DEFAULT 'SOLID',
    "colorName" TEXT,
    "diameterMm" REAL NOT NULL DEFAULT 1.75,
    "initialWeightG" INTEGER NOT NULL,
    "remainingWeightG" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'sealed',
    "needsRepurchase" BOOLEAN NOT NULL DEFAULT false,
    "purchasedAt" DATETIME,
    "priceCents" INTEGER,
    "notes" TEXT,
    "lastDriedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Spool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Spool_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Spool_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Spool_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Spool" ("brandId", "colorMode", "colorName", "createdAt", "diameterMm", "id", "initialWeightG", "lastDriedAt", "locationId", "materialId", "notes", "priceCents", "purchasedAt", "remainingWeightG", "status", "updatedAt", "userId") SELECT "brandId", "colorMode", "colorName", "createdAt", "diameterMm", "id", "initialWeightG", "lastDriedAt", "locationId", "materialId", "notes", "priceCents", "purchasedAt", "remainingWeightG", "status", "updatedAt", "userId" FROM "Spool";
DROP TABLE "Spool";
ALTER TABLE "new_Spool" RENAME TO "Spool";
CREATE INDEX "Spool_userId_idx" ON "Spool"("userId");
CREATE INDEX "Spool_userId_status_idx" ON "Spool"("userId", "status");
CREATE INDEX "Spool_materialId_idx" ON "Spool"("materialId");
CREATE INDEX "Spool_brandId_idx" ON "Spool"("brandId");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_user" ("createdAt", "email", "emailVerified", "id", "image", "name", "updatedAt") SELECT "createdAt", "email", "emailVerified", "id", "image", "name", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
