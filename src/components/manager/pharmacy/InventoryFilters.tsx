"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function InventoryFilters() {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter By Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="antibiotic">Antibiotic</SelectItem>
          <SelectItem value="painkiller">Painkiller</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Search..." className="w-64" />
    </div>
  );
}
