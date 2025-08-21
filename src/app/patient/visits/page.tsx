"use client";

import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

type Visit = {
  date: string;
  facility: string;
  department: string;
  doctor: string;
  diagnosis: string;
  prescription: string;
  payment: string;
};

const rows: Visit[] = Array.from({ length: 9 }).map(() => ({
  date: "2020-04-5",
  facility: "King Faisal",
  department: "Pediatrics",
  doctor: "Dr John Doe",
  diagnosis: "Heart follow up",
  prescription: "penicillin 2",
  payment: "150 000 rwf",
}));

export default function VisitsListPage() {
  const [dept, setDept] = useState<string>("all");

  const filtered = useMemo(() => {
    if (dept === "all") return rows;
    return rows.filter((r) => r.department.toLowerCase() === dept);
  }, [dept]);

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Visit Details</h1>
        <p className="text-gray-600">See appointment details</p>
      </div>

      <div className="flex items-center gap-3 justify-end">
        <Select value={dept} onValueChange={setDept}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Filter Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="general">General</SelectItem>
          </SelectContent>
        </Select>

        <input
          className="border rounded px-3 py-2 text-sm w-40"
          placeholder="Search..."
        />
      </div>

      <div className="bg-white rounded-lg border shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-700">
              <th className="py-4 px-4">Date</th>
              <th className="py-4 px-4">Facility</th>
              <th className="py-4 px-4">Department</th>
              <th className="py-4 px-4">Doctor</th>
              <th className="py-4 px-4">Diagnosis</th>
              <th className="py-4 px-4">Prescription</th>
              <th className="py-4 px-4">Payment</th>
              <th className="py-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="py-4 px-4">{r.date}</td>
                <td className="py-4 px-4">{r.facility}</td>
                <td className="py-4 px-4">{r.department}</td>
                <td className="py-4 px-4">{r.doctor}</td>
                <td className="py-4 px-4">{r.diagnosis}</td>
                <td className="py-4 px-4">{r.prescription}</td>
                <td className="py-4 px-4">{r.payment}</td>
                <td className="py-4 px-4">
                  <button
                    className="p-2 rounded hover:bg-gray-100"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
