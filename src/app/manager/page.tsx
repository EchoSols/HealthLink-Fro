import CalendarCard from "@/components/doctor/CalendarCard";
import FinancialChart from "@/components/manager/FinancialChart";
import FinancialDetails from "@/components/manager/FinancialDetails";
import Greeting from "@/components/manager/Greeting";
import Notifications from "@/components/manager/Notification";
import StatsGrid from "@/components/manager/StatsGrid";
import React from "react";


export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <Greeting />
      <StatsGrid />

      {/* Graph + Financial details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FinancialChart />
        <FinancialDetails />
      </div>

      {/* Notifications + Calendar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Notifications />
        </div>
        <div className="w-full md:w-[510px]">
          <CalendarCard />
        </div>
      </div>
    </div>
  );
}
