"use client";

import { useState } from "react";
import ReferralTable from "./ReferralTable";

export default function ReferralTabs() {
  const [activeTab, setActiveTab] = useState<"Outgoing" | "Incoming">("Outgoing");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-t-md font-medium ${
            activeTab === "Outgoing"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("Outgoing")}
        >
          Outgoing
        </button>
        <button
          className={`px-4 py-2 rounded-t-md font-medium ${
            activeTab === "Incoming"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("Incoming")}
        >
          Incoming
        </button>
      </div>

      {/* Tab Content */}
      <ReferralTable />
    </div>
  );
}
