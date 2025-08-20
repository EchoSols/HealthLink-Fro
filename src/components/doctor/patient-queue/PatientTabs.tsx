"use client";

import { useState } from "react";
import TodayVisitCard from "./TodayVisitCard";

const tabs = ["Today", "Notes", "Vitals", "Prescriptions", "Orders", "Alerts"];

export default function PatientTabs() {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Today" && <TodayVisitCard />}
        {activeTab !== "Today" && (
          <p className="text-gray-500 text-sm">No data available</p>
        )}
      </div>
    </div>
  );
}
