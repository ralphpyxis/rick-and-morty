import { TextInput, Select, Group, Button, Paper } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export interface FilterField {
  name: string;
  label: string;
  type: "text" | "select";
  options?: { value: string; label: string }[];
}

interface FiltersProps {
  fields: FilterField[];
  values: Record<string, string | undefined>;
  onChange: (name: string, value: string) => void;
  onReset: () => void;
}

export const Filters = ({
  fields,
  values,
  onChange,
  onReset,
}: FiltersProps) => {
  const [localValues, setLocalValues] = useState<Record<string, string>>(
    values as Record<string, string>
  );
  const debouncedValues = useDebounce(localValues, 500);

  useEffect(() => {
    setLocalValues(values as Record<string, string>);
  }, [values]);

  useEffect(() => {
    Object.entries(debouncedValues).forEach(([key, value]) => {
      if (values[key] !== value) {
        onChange(key, value);
      }
    });
  }, [debouncedValues]);

  const handleTextChange = (name: string, value: string) => {
    setLocalValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Paper p="md" mb="xl" withBorder>
      <Group gap="md" align="flex-end">
        {fields.map((field) =>
          field.type === "text" ? (
            <TextInput
              key={field.name}
              label={field.label}
              placeholder={`Filter by ${field.label.toLowerCase()}`}
              value={localValues[field.name] || ""}
              onChange={(e) =>
                handleTextChange(field.name, e.currentTarget.value)
              }
              style={{ flex: 1, minWidth: 200 }}
            />
          ) : (
            <Select
              key={field.name}
              label={field.label}
              placeholder={`Select ${field.label.toLowerCase()}`}
              value={values[field.name] || null}
              onChange={(value) => onChange(field.name, value || "")}
              data={field.options || []}
              clearable
              style={{ flex: 1, minWidth: 200 }}
            />
          )
        )}
        <Button onClick={onReset} variant="light">
          Reset Filters
        </Button>
      </Group>
    </Paper>
  );
};
