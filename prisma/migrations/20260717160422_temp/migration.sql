/*
  Warnings:

  - You are about to drop the column `defaultBedC` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `defaultNozzleC` on the `Material` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Material" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "density" REAL,
    "maxNozzleC" INTEGER,
    "maxBedC" INTEGER,
    "minNozzleC" INTEGER,
    "minBedC" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Material" ("createdAt", "density", "id", "name", "updatedAt") SELECT "createdAt", "density", "id", "name", "updatedAt" FROM "Material";
DROP TABLE "Material";
ALTER TABLE "new_Material" RENAME TO "Material";
CREATE UNIQUE INDEX "Material_name_key" ON "Material"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
