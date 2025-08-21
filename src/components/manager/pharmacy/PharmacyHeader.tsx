"use client";

import { Button } from "@/components/ui/button";

export default function PharmacyHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Pharmacy Management</h1>
        <p className="text-muted-foreground">Manage medical inventory</p>
      </div>
      <Button>Add medication</Button>
    </div>
  );
}
