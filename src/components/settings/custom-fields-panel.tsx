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
import {
  CUSTOM_FIELD_TYPES,
  parseOptionsJson,
  type CustomFieldType,
} from "@/lib/filament";
import { api, type RouterOutputs } from "@/trpc/react";

type CustomFieldRow = RouterOutputs["customField"]["list"][number];

export function CustomFieldsPanel() {
  const utils = api.useUtils();
  const fieldsQuery = api.customField.list.useQuery();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<CustomFieldType>("TEXT");
  const [required, setRequired] = useState(false);
  const [showInList, setShowInList] = useState(false);
  const [optionsText, setOptionsText] = useState("");

  const resetForm = () => {
    setEditingId(null);
    setLabel("");
    setOptionsText("");
    setRequired(false);
    setShowInList(false);
    setType("TEXT");
  };

  const startEdit = (field: CustomFieldRow) => {
    setEditingId(field.id);
    setLabel(field.label);
    setType(field.type as CustomFieldType);
    setRequired(field.required);
    setShowInList(field.showInList);
    setOptionsText(parseOptionsJson(field.options).join(", "));
  };

  const createField = api.customField.create.useMutation({
    onSuccess: async () => {
      await utils.customField.list.invalidate();
      resetForm();
      toast.success("Custom field created");
    },
    onError: (err) => toast.error(err.message),
  });

  const updateField = api.customField.update.useMutation({
    onSuccess: async () => {
      await utils.customField.list.invalidate();
      resetForm();
      toast.success("Custom field updated");
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteField = api.customField.delete.useMutation({
    onSuccess: async () => {
      await utils.customField.list.invalidate();
      if (editingId) resetForm();
      toast.success("Field deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  const needsOptions = type === "SELECT" || type === "MULTISELECT";
  const busy = createField.isPending || updateField.isPending;

  const onSubmit = () => {
    if (!label.trim()) return;
    const options = needsOptions
      ? optionsText
          .split(",")
          .map((o) => o.trim())
          .filter(Boolean)
      : undefined;

    if (editingId) {
      updateField.mutate({
        id: editingId,
        label: label.trim(),
        required,
        showInList,
        options: needsOptions ? options : undefined,
      });
      return;
    }

    createField.mutate({
      label: label.trim(),
      type,
      required,
      showInList,
      options,
    });
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,24rem)_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>
            {editingId ? "Edit custom field" : "Add custom field"}
          </CardTitle>
          <CardDescription>
            Extra filament attributes like finish, SKU, or tags.
            {editingId ? " Field type can’t be changed after creation." : ""}
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
                  if (value && !editingId) setType(value as CustomFieldType);
                }}
                placeholder="Search field types…"
                disabled={!!editingId}
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
                <FieldDescription>
                  Comma-separated for select types.
                </FieldDescription>
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
        <CardFooter className="flex flex-wrap gap-2">
          <Button
            disabled={!label.trim() || busy}
            onClick={onSubmit}
          >
            {editingId ? (
              "Save changes"
            ) : (
              <>
                <RiAddLine />
                Create field
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
                      {editingId === field.id && (
                        <Badge variant="default">editing</Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {field.key}
                      {field.options ? ` · ${field.options}` : ""}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(field)}
                    >
                      Edit
                    </Button>
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
