"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FiltersBarProps {
  filterLabel: string;
  filterOptions: { value: string; label: string }[];
  searchPlaceholder: string;
}

export default function FiltersBar({ filterLabel, filterOptions, searchPlaceholder }: FiltersBarProps) {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={filterLabel} />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input placeholder={searchPlaceholder} className="w-64" />
    </div>
  );
}
