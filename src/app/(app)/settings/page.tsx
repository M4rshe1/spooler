"use client";

import {
  BrandsPanel,
  LocationsPanel,
  MaterialsPanel,
} from "@/components/settings/catalog-panels";
import { CustomFieldsPanel } from "@/components/settings/custom-fields-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage brands, materials, locations, and custom fields in separate
          panels.
        </p>
      </div>

      <Tabs defaultValue="brands">
        <TabsList variant="line" className="w-full justify-start sm:w-auto">
          <TabsTrigger value="brands">Brands</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="fields">Filament fields</TabsTrigger>
        </TabsList>

        <TabsContent value="brands" className="mt-4">
          <BrandsPanel />
        </TabsContent>
        <TabsContent value="materials" className="mt-4">
          <MaterialsPanel />
        </TabsContent>
        <TabsContent value="locations" className="mt-4">
          <LocationsPanel />
        </TabsContent>
        <TabsContent value="fields" className="mt-4">
          <CustomFieldsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
