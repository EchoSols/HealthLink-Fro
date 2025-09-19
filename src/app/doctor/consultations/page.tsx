"use client";

import ConsultationStats from "@/components/doctor/consultations/ConsultationStats";
import ConsultationTable from "@/components/doctor/consultations/ConsultationTable";

export default function ConsultationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Consultation history</h1>
      <p className="text-gray-500 text-sm mb-6">
        View and manage your consultation records
      </p>

      {/* Stats cards */}
      <ConsultationStats />

      {/* Table */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <ConsultationTable />
      </div>
    </div>
  );
}
