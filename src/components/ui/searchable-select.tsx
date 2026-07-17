"use client";

import { useMemo } from "react";

import {
  Combobox,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { cn } from "@/lib/utils";

export type SearchableOption = {
  value: string;
  label: string;
};

type SearchableSelectProps = {
  /** Always controlled — use `null` for no selection, never `undefined`. */
  value: string | null;
  onValueChange: (value: string | null) => void;
  options: SearchableOption[];
  placeholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
  allowClear?: boolean;
};

function useOptionLabels(options: SearchableOption[]) {
  return useMemo(() => {
    const labels = new Map<string, string>();
    for (const option of options) {
      labels.set(option.value, option.label);
    }
    return {
      labels,
      values: options.map((option) => option.value),
      getLabel: (itemValue: string) => labels.get(itemValue) ?? itemValue,
    };
  }, [options]);
}

export function SearchableSelect({
  value,
  onValueChange,
  options,
  placeholder = "Search…",
  emptyText = "No results",
  className,
  disabled,
  allowClear = false,
}: SearchableSelectProps) {
  const { values, getLabel } = useOptionLabels(options);
  // Base UI treats `undefined` as uncontrolled; keep `null` for empty.
  const controlledValue = value ?? null;

  return (
    <Combobox
      value={controlledValue}
      onValueChange={(next) => {
        onValueChange(next ?? null);
      }}
      items={values}
      itemToStringLabel={getLabel}
      disabled={disabled}
    >
      <ComboboxInput
        placeholder={placeholder}
        disabled={disabled}
        showClear={allowClear}
        className={cn("w-full min-w-0", className)}
      />
      <ComboboxContent className="w-(--anchor-width)">
        <ComboboxEmpty>{emptyText}</ComboboxEmpty>
        <ComboboxList>
          {(itemValue) => (
            <ComboboxItem key={itemValue} value={itemValue}>
              {getLabel(itemValue)}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

type SearchableMultiSelectProps = {
  /** Always controlled — use `[]` for none, never `undefined`. */
  value: string[];
  onValueChange: (value: string[]) => void;
  options: SearchableOption[];
  placeholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
};

export function SearchableMultiSelect({
  value,
  onValueChange,
  options,
  placeholder = "Search…",
  emptyText = "No results",
  className,
  disabled,
}: SearchableMultiSelectProps) {
  const anchor = useComboboxAnchor();
  const { values, getLabel } = useOptionLabels(options);
  const controlledValue = value ?? [];

  return (
    <Combobox
      multiple
      value={controlledValue}
      onValueChange={(next) => {
        onValueChange(next ?? []);
      }}
      items={values}
      itemToStringLabel={getLabel}
      disabled={disabled}
    >
      <ComboboxChips ref={anchor} className={cn("w-full", className)}>
        <ComboboxValue>
          {(selectedValues: string[]) => (
            <>
              {selectedValues.map((itemValue) => (
                <ComboboxChip key={itemValue}>{getLabel(itemValue)}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder={placeholder} disabled={disabled} />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>{emptyText}</ComboboxEmpty>
        <ComboboxList>
          {(itemValue) => (
            <ComboboxItem key={itemValue} value={itemValue}>
              {getLabel(itemValue)}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
