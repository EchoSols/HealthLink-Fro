"use client";

import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PrescriptionDetailsModal, {
  PrescriptionDetails,
} from "@/components/patient/PrescriptionDetailsModal";

type Prescription = {
  name: string;
  dosage: string;
  frequency: string;
  prescribed: string;
  location: string;
  duration: string;
  endDate: string;
  status: "active" | "completed" | "expired";
};

const allPrescriptions: Prescription[] = [
  {
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "3 times daily",
    prescribed: "2024-07-05",
    location: "King Faisal",
    duration: "2 weeks",
    endDate: "2024-07-05",
    status: "active",
  },
  {
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "3 times daily",
    prescribed: "2024-07-05",
    location: "King Faisal",
    duration: "2 weeks",
    endDate: "2024-07-05",
    status: "active",
  },
  {
    name: "Ibuprofen",
    dosage: "200mg",
    frequency: "2 times daily",
    prescribed: "2024-06-20",
    location: "CHUK",
    duration: "10 days",
    endDate: "2024-06-30",
    status: "completed",
  },
  {
    name: "Cetirizine",
    dosage: "10mg",
    frequency: "1 time daily",
    prescribed: "2024-04-01",
    location: "KFH",
    duration: "7 days",
    endDate: "2024-04-08",
    status: "expired",
  },
];

const tabs = ["Active", "Completed", "Expired"] as const;
type Tab = (typeof tabs)[number];

export default function PrescriptionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Active");
  const [dept, setDept] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<PrescriptionDetails | null>(null);

  const data = useMemo(() => {
    const status = activeTab.toLowerCase();
    return allPrescriptions.filter((p) => {
      const matchesStatus = p.status === status;
      const matchesDept =
        dept === "all" || p.location.toLowerCase().includes(dept);
      const matchesQuery = `${p.name} ${p.location}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesStatus && matchesDept && matchesQuery;
    });
  }, [activeTab, dept, query]);

  const openModal = (p: Prescription) => {
    setSelected({
      name: p.name,
      dosage: p.dosage,
      frequency: p.frequency,
      location: p.location,
      startDate: p.prescribed,
      endDate: p.endDate,
    });
    setOpen(true);
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">My prescriptions</h1>
        <p className="text-gray-600">Manage your medications</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-8 text-sm">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`pb-2 ${
                activeTab === t
                  ? "text-[#118CDB] border-b-2 border-[#118CDB] font-medium"
                  : "text-gray-600"
              }`}
            >
              {t}(
              {
                allPrescriptions.filter((p) => p.status === t.toLowerCase())
                  .length
              }
              )
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Filter Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="king faisal">King Faisal</SelectItem>
              <SelectItem value="chuk">CHUK</SelectItem>
              <SelectItem value="kfh">KFH</SelectItem>
            </SelectContent>
          </Select>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-40"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-xs text-gray-600">
              {p.dosage} • {p.frequency}
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Prescribed: {p.prescribed}
              </div>
              <div className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Location: {p.location}
              </div>
              <div className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Duration: {p.duration}
              </div>
              <div className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                End date: {p.endDate}
              </div>
            </div>

            <Button
              variant="outline"
              className="mt-4"
              onClick={() => openModal(p)}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>

      <PrescriptionDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        details={selected}
      />
    </div>
  );
}
