-- AlterTable
ALTER TABLE "Filament" ADD COLUMN "minNozzleC" INTEGER;
ALTER TABLE "Filament" ADD COLUMN "maxNozzleC" INTEGER;
ALTER TABLE "Filament" ADD COLUMN "minBedC" INTEGER;
ALTER TABLE "Filament" ADD COLUMN "maxBedC" INTEGER;
ALTER TABLE "Filament" ADD COLUMN "preferredNozzle" TEXT;
