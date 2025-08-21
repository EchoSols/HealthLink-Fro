"use client";

import InventoryCard from "./InventoryCard";

const items = [
  {
    name: "Amoxicillin 500mg",
    type: "Antibiotic",
    stock: "450/1000",
    supplier: "PharmaCorp",
    status: "In stock",
    lastRestocked: "2024-07-05",
  },
  {
    name: "Amoxicillin 500mg",
    type: "Antibiotic",
    stock: "450/1000",
    supplier: "PharmaCorp",
    status: "In stock",
    lastRestocked: "2024-07-05",
  },
  {
    name: "Amoxicillin 500mg",
    type: "Antibiotic",
    stock: "450/1000",
    supplier: "PharmaCorp",
    status: "In stock",
    lastRestocked: "2024-07-05",
  },
];

export default function InventoryList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <InventoryCard key={i} {...item} />
      ))}
    </div>
  );
}
