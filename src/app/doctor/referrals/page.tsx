"use client";

import ReferralTabs from "@/components/doctor/referrals/ReferralTabs";

export default function ReferralsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Referrals & Transfers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          + New Referral
        </button>
      </div>

      <p className="text-gray-500 mb-6">
        Manage patient referrals and transfers
      </p>

      {/* Filters */}
      <div className="flex gap-3 mb-6 justify-end">
        <select className="border px-3 py-2 rounded-md text-sm">
          <option>Filter Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-md text-sm"
        />
      </div>

      {/* Tabs + Table */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6">
        <ReferralTabs />
      </div>
    </div>
  );
}

