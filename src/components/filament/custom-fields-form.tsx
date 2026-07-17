"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  SearchableMultiSelect,
  SearchableSelect,
} from "@/components/ui/searchable-select";
import { Switch } from "@/components/ui/switch";
import type { CustomFieldType } from "@/lib/filament";

export type CustomFieldDef = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  options: string | null;
};

export type CustomFieldFormValue = {
  fieldId: string;
  valueText?: string | null;
  valueNumber?: number | null;
  valueBoolean?: boolean | null;
  valueDate?: string | null;
  valueMulti?: string[];
};

function parseOptions(options: string | null): string[] {
  if (!options) return [];
  try {
    const parsed: unknown = JSON.parse(options);
    if (Array.isArray(parsed)) {
      return parsed.filter((o): o is string => typeof o === "string");
    }
  } catch {
    // ignore
  }
  return [];
}

export function CustomFieldsFormSection({
  fields,
  values,
  onChange,
}: {
  fields: CustomFieldDef[];
  values: CustomFieldFormValue[];
  onChange: (values: CustomFieldFormValue[]) => void;
}) {
  if (fields.length === 0) return null;

  const getValue = (fieldId: string) =>
    values.find((v) => v.fieldId === fieldId);

  const setValue = (fieldId: string, patch: Partial<CustomFieldFormValue>) => {
    const existing = values.find((v) => v.fieldId === fieldId);
    if (existing) {
      onChange(
        values.map((v) => (v.fieldId === fieldId ? { ...v, ...patch } : v)),
      );
    } else {
      onChange([...values, { fieldId, ...patch }]);
    }
  };

  return (
    <FieldGroup>
      {fields.map((field) => {
        const type = field.type as CustomFieldType;
        const value = getValue(field.id);
        const options = parseOptions(field.options).map((opt) => ({
          value: opt,
          label: opt,
        }));

        return (
          <Field key={field.id}>
            <FieldLabel>
              {field.label}
              {field.required ? " *" : ""}
            </FieldLabel>

            {type === "TEXT" && (
              <Input
                value={value?.valueText ?? ""}
                onChange={(e) =>
                  setValue(field.id, { valueText: e.target.value })
                }
              />
            )}

            {type === "NUMBER" && (
              <Input
                type="number"
                value={value?.valueNumber ?? ""}
                onChange={(e) =>
                  setValue(field.id, {
                    valueNumber:
                      e.target.value === "" ? null : Number(e.target.value),
                  })
                }
              />
            )}

            {type === "BOOLEAN" && (
              <Field orientation="horizontal">
                <Switch
                  checked={value?.valueBoolean ?? false}
                  onCheckedChange={(checked) =>
                    setValue(field.id, { valueBoolean: checked })
                  }
                />
                <span className="text-muted-foreground text-xs">
                  {value?.valueBoolean ? "Yes" : "No"}
                </span>
              </Field>
            )}

            {type === "DATE" && (
              <Input
                type="date"
                value={value?.valueDate ?? ""}
                onChange={(e) =>
                  setValue(field.id, { valueDate: e.target.value || null })
                }
              />
            )}

            {type === "URL" && (
              <Input
                type="url"
                placeholder="https://"
                value={value?.valueText ?? ""}
                onChange={(e) =>
                  setValue(field.id, { valueText: e.target.value })
                }
              />
            )}

            {type === "SELECT" && (
              <SearchableSelect
                value={value?.valueText ?? null}
                onValueChange={(next) =>
                  setValue(field.id, { valueText: next ?? null })
                }
                placeholder="Search options…"
                allowClear={!field.required}
                options={options}
              />
            )}

            {type === "MULTISELECT" && (
              <SearchableMultiSelect
                value={value?.valueMulti ?? []}
                onValueChange={(next) =>
                  setValue(field.id, { valueMulti: next ?? [] })
                }
                placeholder="Search options…"
                options={options}
              />
            )}
          </Field>
        );
      })}
    </FieldGroup>
  );
}

export function customValuesToApiPayload(values: CustomFieldFormValue[]) {
  return values.map((v) => ({
    fieldId: v.fieldId,
    valueText: v.valueText ?? null,
    valueNumber: v.valueNumber ?? null,
    valueBoolean: v.valueBoolean ?? null,
    valueDate: v.valueDate ? new Date(v.valueDate) : null,
    valueMulti: v.valueMulti ?? null,
  }));
}
