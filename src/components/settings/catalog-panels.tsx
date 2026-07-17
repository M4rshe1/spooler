"use client";

import { useState } from "react";
import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";
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
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import { Separator } from "@/components/ui/separator";
import {
  formatNozzleMaterial,
  NOZZLE_MATERIAL_LABELS,
  NOZZLE_MATERIALS,
} from "@/lib/filament";
import { api } from "@/trpc/react";

export function BrandsPanel() {
  const utils = api.useUtils();
  const brandsQuery = api.catalog.brands.useQuery();
  const [name, setName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const createBrand = api.catalog.createBrand.useMutation({
    onSuccess: async () => {
      await utils.catalog.brands.invalidate();
      setName("");
      setWebsiteUrl("");
      toast.success("Brand added");
    },
    onError: (err) => toast.error(err.message),
  });

  const updateBrand = api.catalog.updateBrand.useMutation({
    onSuccess: async () => {
      await utils.catalog.brands.invalidate();
      setEditingId(null);
      setName("");
      setWebsiteUrl("");
      toast.success("Brand updated");
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteBrand = api.catalog.deleteBrand.useMutation({
    onSuccess: async () => {
      await utils.catalog.brands.invalidate();
      toast.success("Brand deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = () => {
    if (!name.trim()) return;
    if (editingId) {
      updateBrand.mutate({
        id: editingId,
        name: name.trim(),
        websiteUrl: websiteUrl.trim() || null,
      });
      return;
    }
    createBrand.mutate({
      name: name.trim(),
      websiteUrl: websiteUrl.trim() || null,
    });
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit brand" : "Add brand"}</CardTitle>
          <CardDescription>
            Manufacturers like Bambu, Polymaker, or Prusament — optionally with
            a storefront link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="brand-name">Name</FieldLabel>
              <Input
                id="brand-name"
                placeholder="e.g. Polymaker"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSubmit();
                  }
                }}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="brand-url">Website / store</FieldLabel>
              <Input
                id="brand-url"
                type="url"
                placeholder="https://polymaker.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
              <FieldDescription>
                Optional link to the brand site or shop.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button
            disabled={
              !name.trim() || createBrand.isPending || updateBrand.isPending
            }
            onClick={onSubmit}
          >
            {editingId ? (
              "Save changes"
            ) : (
              <>
                <RiAddLine />
                Add brand
              </>
            )}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setEditingId(null);
                setName("");
                setWebsiteUrl("");
              }}
            >
              Cancel
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your brands</CardTitle>
          <CardDescription>
            Used when adding filaments. Delete only if unused.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          {(brandsQuery.data ?? []).length === 0 ? (
            <Empty className="border-0 py-10">
              <EmptyHeader>
                <EmptyTitle>No brands yet</EmptyTitle>
                <EmptyDescription>
                  Add your first manufacturer in the panel on the left.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <ul className="divide-y divide-border">
              {brandsQuery.data?.map((brand) => (
                <li
                  key={brand.id}
                  className="flex items-center justify-between gap-3 px-(--card-spacing) py-2.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {brand.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {brand._count.filaments} filament
                      {brand._count.filaments === 1 ? "" : "s"}
                      {brand.websiteUrl ? (
                        <>
                          {" · "}
                          <a
                            href={brand.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground underline-offset-2 hover:underline"
                          >
                            {brand.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </a>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingId(brand.id);
                        setName(brand.name);
                        setWebsiteUrl(brand.websiteUrl ?? "");
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      disabled={
                        brand._count.filaments > 0 || deleteBrand.isPending
                      }
                      onClick={() => {
                        if (confirm(`Delete brand “${brand.name}”?`)) {
                          deleteBrand.mutate({ id: brand.id });
                        }
                      }}
                      aria-label={`Delete ${brand.name}`}
                    >
                      <RiDeleteBinLine />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function optionalInt(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function optionalFloat(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : null;
}

export function MaterialsPanel() {
  const utils = api.useUtils();
  const materialsQuery = api.catalog.materials.useQuery();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [density, setDensity] = useState("");
  const [preferredNozzle, setPreferredNozzle] = useState<string>("");
  const [minNozzleC, setMinNozzleC] = useState("");
  const [maxNozzleC, setMaxNozzleC] = useState("");
  const [minBedC, setMinBedC] = useState("");
  const [maxBedC, setMaxBedC] = useState("");

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDensity("");
    setPreferredNozzle("");
    setMinNozzleC("");
    setMaxNozzleC("");
    setMinBedC("");
    setMaxBedC("");
  };

  const startEdit = (material: {
    id: string;
    name: string;
    density: number | null;
    preferredNozzle: string | null;
    minNozzleC: number | null;
    maxNozzleC: number | null;
    minBedC: number | null;
    maxBedC: number | null;
  }) => {
    setEditingId(material.id);
    setName(material.name);
    setDensity(material.density != null ? String(material.density) : "");
    setPreferredNozzle(material.preferredNozzle ?? "");
    setMinNozzleC(material.minNozzleC != null ? String(material.minNozzleC) : "");
    setMaxNozzleC(material.maxNozzleC != null ? String(material.maxNozzleC) : "");
    setMinBedC(material.minBedC != null ? String(material.minBedC) : "");
    setMaxBedC(material.maxBedC != null ? String(material.maxBedC) : "");
  };

  const createMaterial = api.catalog.createMaterial.useMutation({
    onSuccess: async () => {
      await utils.catalog.materials.invalidate();
      resetForm();
      toast.success("Material added");
    },
    onError: (err) => toast.error(err.message),
  });

  const updateMaterial = api.catalog.updateMaterial.useMutation({
    onSuccess: async () => {
      await utils.catalog.materials.invalidate();
      resetForm();
      toast.success("Material updated");
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteMaterial = api.catalog.deleteMaterial.useMutation({
    onSuccess: async () => {
      await utils.catalog.materials.invalidate();
      if (editingId) resetForm();
      toast.success("Material deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  const busy = createMaterial.isPending || updateMaterial.isPending;

  const materialPayload = () => ({
    name: name.trim(),
    density: optionalFloat(density),
    preferredNozzle: preferredNozzle
      ? (preferredNozzle as (typeof NOZZLE_MATERIALS)[number])
      : null,
    minNozzleC: optionalInt(minNozzleC),
    maxNozzleC: optionalInt(maxNozzleC),
    minBedC: optionalInt(minBedC),
    maxBedC: optionalInt(maxBedC),
  });

  const onSubmit = () => {
    if (!name.trim()) return;
    if (editingId) {
      updateMaterial.mutate({ id: editingId, ...materialPayload() });
      return;
    }
    createMaterial.mutate(materialPayload());
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,24rem)_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>
            {editingId ? "Edit material" : "Add material"}
          </CardTitle>
          <CardDescription>
            Filament types with optional density and temp ranges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="material-name">Name</FieldLabel>
              <Input
                id="material-name"
                placeholder="e.g. PLA-CF"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="material-density">Density (g/cm³)</FieldLabel>
              <Input
                id="material-density"
                type="number"
                step="0.01"
                min="0"
                placeholder="1.24"
                value={density}
                onChange={(e) => setDensity(e.target.value)}
              />
              <FieldDescription>Optional, for later volume math.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel>Preferred nozzle</FieldLabel>
              <SearchableSelect
                value={preferredNozzle || "none"}
                onValueChange={(value) => {
                  if (value === "none" || value == null) setPreferredNozzle("");
                  else setPreferredNozzle(value);
                }}
                placeholder="Select nozzle…"
                allowClear
                options={[
                  { value: "none", label: "Not set" },
                  ...NOZZLE_MATERIALS.map((n) => ({
                    value: n,
                    label: NOZZLE_MATERIAL_LABELS[n],
                  })),
                ]}
              />
            </Field>
            <Separator />
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="min-nozzle">Min nozzle °C</FieldLabel>
                <Input
                  id="min-nozzle"
                  type="number"
                  value={minNozzleC}
                  onChange={(e) => setMinNozzleC(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="max-nozzle">Max nozzle °C</FieldLabel>
                <Input
                  id="max-nozzle"
                  type="number"
                  value={maxNozzleC}
                  onChange={(e) => setMaxNozzleC(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="min-bed">Min bed °C</FieldLabel>
                <Input
                  id="min-bed"
                  type="number"
                  value={minBedC}
                  onChange={(e) => setMinBedC(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="max-bed">Max bed °C</FieldLabel>
                <Input
                  id="max-bed"
                  type="number"
                  value={maxBedC}
                  onChange={(e) => setMaxBedC(e.target.value)}
                />
              </Field>
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button disabled={!name.trim() || busy} onClick={onSubmit}>
            {editingId ? (
              "Save changes"
            ) : (
              <>
                <RiAddLine />
                Add material
              </>
            )}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={resetForm}
            >
              Cancel
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materials</CardTitle>
          <CardDescription>
            Defaults are seeded automatically; add custom types here.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          {(materialsQuery.data ?? []).length === 0 ? (
            <Empty className="border-0 py-10">
              <EmptyHeader>
                <EmptyTitle>No materials</EmptyTitle>
                <EmptyDescription>
                  Add PLA, PETG, or a custom blend.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <ul className="divide-y divide-border">
              {materialsQuery.data?.map((material) => (
                <li
                  key={material.id}
                  className="flex items-start justify-between gap-3 px-(--card-spacing) py-3"
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium">{material.name}</span>
                      <Badge variant="secondary">
                        {material._count.filaments} filament
                        {material._count.filaments === 1 ? "" : "s"}
                      </Badge>
                      {editingId === material.id && (
                        <Badge variant="default">editing</Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {material.density != null
                        ? `${material.density} g/cm³`
                        : "No density"}
                      {material.preferredNozzle && (
                        <>
                          {" · "}
                          {formatNozzleMaterial(material.preferredNozzle)} nozzle
                        </>
                      )}
                      {(material.minNozzleC != null ||
                        material.maxNozzleC != null) && (
                        <>
                          {" · "}
                          Nozzle {material.minNozzleC ?? "?"}–
                          {material.maxNozzleC ?? "?"}°C
                        </>
                      )}
                      {(material.minBedC != null ||
                        material.maxBedC != null) && (
                        <>
                          {" · "}
                          Bed {material.minBedC ?? "?"}–{material.maxBedC ?? "?"}
                          °C
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(material)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      disabled={
                        material._count.filaments > 0 || deleteMaterial.isPending
                      }
                      onClick={() => {
                        if (confirm(`Delete material “${material.name}”?`)) {
                          deleteMaterial.mutate({ id: material.id });
                        }
                      }}
                      aria-label={`Delete ${material.name}`}
                    >
                      <RiDeleteBinLine />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function LocationsPanel() {
  const utils = api.useUtils();
  const locationsQuery = api.catalog.locations.useQuery();
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const resetForm = () => {
    setEditingId(null);
    setName("");
  };

  const createLocation = api.catalog.createLocation.useMutation({
    onSuccess: async () => {
      await utils.catalog.locations.invalidate();
      resetForm();
      toast.success("Location added");
    },
    onError: (err) => toast.error(err.message),
  });

  const updateLocation = api.catalog.updateLocation.useMutation({
    onSuccess: async () => {
      await utils.catalog.locations.invalidate();
      resetForm();
      toast.success("Location updated");
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteLocation = api.catalog.deleteLocation.useMutation({
    onSuccess: async () => {
      await utils.catalog.locations.invalidate();
      if (editingId) resetForm();
      toast.success("Location deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  const busy = createLocation.isPending || updateLocation.isPending;

  const onSubmit = () => {
    if (!name.trim()) return;
    if (editingId) {
      updateLocation.mutate({ id: editingId, name: name.trim() });
      return;
    }
    createLocation.mutate({ name: name.trim() });
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>
            {editingId ? "Edit location" : "Add location"}
          </CardTitle>
          <CardDescription>
            Shelf, dryer, AMS slot, or any storage spot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="location-name">Name</FieldLabel>
              <Input
                id="location-name"
                placeholder="e.g. Dry box A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSubmit();
                  }
                }}
              />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button disabled={!name.trim() || busy} onClick={onSubmit}>
            {editingId ? (
              "Save changes"
            ) : (
              <>
                <RiAddLine />
                Add location
              </>
            )}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={resetForm}
            >
              Cancel
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Locations</CardTitle>
          <CardDescription>Where your spools live.</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          {(locationsQuery.data ?? []).length === 0 ? (
            <Empty className="border-0 py-10">
              <EmptyHeader>
                <EmptyTitle>No locations yet</EmptyTitle>
                <EmptyDescription>
                  Add shelves or dryers so you can assign spools.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <ul className="divide-y divide-border">
              {locationsQuery.data?.map((location) => (
                <li
                  key={location.id}
                  className="flex items-center justify-between gap-3 px-(--card-spacing) py-2.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {location.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {location._count.spools} spool
                      {location._count.spools === 1 ? "" : "s"}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingId(location.id);
                        setName(location.name);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      disabled={
                        location._count.spools > 0 || deleteLocation.isPending
                      }
                      onClick={() => {
                        if (confirm(`Delete location “${location.name}”?`)) {
                          deleteLocation.mutate({ id: location.id });
                        }
                      }}
                      aria-label={`Delete ${location.name}`}
                    >
                      <RiDeleteBinLine />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
