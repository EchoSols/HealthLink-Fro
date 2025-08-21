"use client";

import React, { ReactNode } from "react";
import PatientSidebar from "@/components/patient/Sidebar";
import PatientTopbar from "@/components/patient/Topbar";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      <div className="flex">
        <PatientSidebar />
        <div className="flex-1 min-h-screen flex flex-col">
          <PatientTopbar />
          <main className="p-6 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
