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
import { Switch } from "@/components/ui/switch";
import { CUSTOM_FIELD_TYPES, type CustomFieldType } from "@/lib/filament";
import { api } from "@/trpc/react";

export function CustomFieldsPanel() {
  const utils = api.useUtils();
  const fieldsQuery = api.customField.list.useQuery();

  const [label, setLabel] = useState("");
  const [type, setType] = useState<CustomFieldType>("TEXT");
  const [required, setRequired] = useState(false);
  const [showInList, setShowInList] = useState(false);
  const [optionsText, setOptionsText] = useState("");

  const createField = api.customField.create.useMutation({
    onSuccess: async () => {
      await utils.customField.list.invalidate();
      setLabel("");
      setOptionsText("");
      setRequired(false);
      setShowInList(false);
      setType("TEXT");
      toast.success("Custom field created");
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteField = api.customField.delete.useMutation({
    onSuccess: async () => {
      await utils.customField.list.invalidate();
      toast.success("Field deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  const needsOptions = type === "SELECT" || type === "MULTISELECT";

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,24rem)_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Add custom field</CardTitle>
          <CardDescription>
            Extra filament attributes like finish, SKU, or tags.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="field-label">Label</FieldLabel>
              <Input
                id="field-label"
                placeholder="e.g. Finish"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel>Type</FieldLabel>
              <SearchableSelect
                value={type}
                onValueChange={(value) => {
                  if (value) setType(value as CustomFieldType);
                }}
                placeholder="Search field types…"
                options={CUSTOM_FIELD_TYPES.map((t) => ({
                  value: t,
                  label: t,
                }))}
              />
            </Field>
            {needsOptions && (
              <Field>
                <FieldLabel htmlFor="field-options">Options</FieldLabel>
                <Input
                  id="field-options"
                  placeholder="matte, silk, glitter"
                  value={optionsText}
                  onChange={(e) => setOptionsText(e.target.value)}
                />
                <FieldDescription>Comma-separated for select types.</FieldDescription>
              </Field>
            )}
            <Field orientation="horizontal">
              <FieldLabel htmlFor="field-required">Required</FieldLabel>
              <Switch
                id="field-required"
                checked={required}
                onCheckedChange={setRequired}
              />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="field-list">Show in inventory</FieldLabel>
              <Switch
                id="field-list"
                checked={showInList}
                onCheckedChange={setShowInList}
              />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button
            disabled={!label.trim() || createField.isPending}
            onClick={() =>
              createField.mutate({
                label: label.trim(),
                type,
                required,
                showInList,
                options: needsOptions
                  ? optionsText
                      .split(",")
                      .map((o) => o.trim())
                      .filter(Boolean)
                  : undefined,
              })
            }
          >
            <RiAddLine />
            Create field
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom fields</CardTitle>
          <CardDescription>
            These appear on filament forms and optionally in the inventory table.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          {(fieldsQuery.data ?? []).length === 0 ? (
            <Empty className="border-0 py-10">
              <EmptyHeader>
                <EmptyTitle>No custom fields</EmptyTitle>
                <EmptyDescription>
                  Create fields for finishes, tags, or SKUs.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <ul className="divide-y divide-border">
              {fieldsQuery.data?.map((field) => (
                <li
                  key={field.id}
                  className="flex items-center justify-between gap-3 px-(--card-spacing) py-2.5"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                      {field.label}
                      <Badge variant="outline">{field.type}</Badge>
                      {field.required && (
                        <Badge variant="secondary">required</Badge>
                      )}
                      {field.showInList && (
                        <Badge variant="secondary">in list</Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {field.key}
                      {field.options ? ` · ${field.options}` : ""}
                    </div>
                  </div>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => {
                      if (confirm(`Delete field “${field.label}”?`)) {
                        deleteField.mutate({ id: field.id });
                      }
                    }}
                    aria-label={`Delete ${field.label}`}
                  >
                    <RiDeleteBinLine />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
