"use client";

import Navbar from "@/components/doctor/Navbar";
import Sidebar from "@/components/doctor/Sidebar";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const DoctorLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Match only /doctor/patients/[patientId]
  const isPatientChart =
    /^\/doctor\/patients\/[^/]+$/.test(pathname || "");

  if (isPatientChart) {
    // Fullscreen layout without Navbar/Sidebar
    return <div className="h-screen w-screen bg-white">{children}</div>;
  }

  // Default Doctor layout with Navbar + Sidebar
  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 w-full z-50"> 
        <Navbar />
      </div>

      <div className="flex flex-1 pt-16">
        <div className="fixed left-0 top-16 bottom-0 z-40">
          <Sidebar />
        </div>
        <main className="ml-64 flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
