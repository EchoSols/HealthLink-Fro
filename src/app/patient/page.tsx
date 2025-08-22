"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

// SEO metadata for this page
export const metadata = {
  title: "Patient Dashboard",
  description:
    "Access your health overview, recent visits, upcoming appointments, and manage your healthcare journey.",
  keywords: [
    "patient dashboard",
    "health overview",
    "medical appointments",
    "healthcare management",
  ],
};

const summaryCards = [
  {
    title: "Current Queue Status",
    subtitle: "General",
    detail: "position #3 . 12 mins",
  },
  { title: "Assigned Doctor", subtitle: "Kabalisa Jean", detail: "General" },
  {
    title: "Total Visits",
    subtitle: "General",
    detail: "position #3 . 12 mins",
  },
  {
    title: "Amount in wallet",
    subtitle: "General",
    detail: "position #3 . 12 mins",
  },
];

const recentVisits = [
  {
    hospital: "Kigali Hospital",
    department: "Cardiology",
    doctor: "Dr. John Doe",
    date: "Today",
    status: "waiting",
  },
  {
    hospital: "Kigali Hospital",
    department: "Cardiology",
    doctor: "Dr. John Doe",
    date: "2024-05-9",
    status: "completed",
  },
  {
    hospital: "Kigali Hospital",
    department: "Cardiology",
    doctor: "Dr. John Doe",
    date: "2025-05-0",
    status: "cancelled",
  },
];

export default function PatientPage() {
  return (
    <div className="w-full space-y-6">
      <header>
        <h1 className="font-semibold text-2xl">Welcome back, John</h1>
        <p className="text-gray-600">Here's your health overview for today</p>
      </header>

      {/* Summary Cards */}
      <section aria-label="Health Summary">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card, idx) => (
            <article key={idx} className="bg-white rounded-lg border shadow-sm">
              <div className="p-4 border-l-4 border-[#118CDB] rounded-lg">
                <h2 className="font-medium text-sm text-gray-700">
                  {card.title}
                </h2>
                <p className="text-sm font-semibold mt-1">{card.subtitle}</p>
                <p className="text-xs text-gray-500 mt-1">{card.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Visits */}
        <section
          className="lg:col-span-2 space-y-6"
          aria-label="Recent Healthcare Activity"
        >
          <article className="bg-white rounded-lg border p-6 shadow-sm">
            <header className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Recent Visits</h2>
              <button className="text-sm text-[#118CDB] hover:underline">
                View more
              </button>
            </header>
            <p className="text-sm text-gray-600 mb-4">
              Here are your recent healthcare visits.
            </p>

            <div className="space-y-4">
              {recentVisits.map((visit, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{visit.hospital}</h3>
                    <p className="text-sm text-gray-600">
                      {visit.department} • {visit.doctor}
                    </p>
                    <p className="text-xs text-gray-500">{visit.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View details
                    </Button>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        visit.status === "waiting"
                          ? "bg-blue-100 text-blue-700"
                          : visit.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {visit.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Recent Medications */}
          <article className="bg-white rounded-lg border p-6 shadow-sm">
            <header className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Recent medications</h2>
              <button className="text-sm text-[#118CDB] hover:underline">
                View more
              </button>
            </header>
            <p className="text-sm text-gray-600">
              Here are your recent medications.
            </p>
            <div className="mt-4 text-center text-gray-500 py-8">
              <p>No medications found</p>
            </div>
          </article>
        </section>

        {/* Right Column */}
        <aside className="space-y-6" aria-label="Quick Actions">
          {/* Upcoming Appointment */}
          <article className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Upcoming appointment</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Kigali Hospital</h3>
                <time className="text-sm text-gray-500">2025-07-9</time>
              </div>
              <div className="text-sm text-gray-600">
                <p>Department: Cardiology</p>
                <p>Doctor Name: Dr. John Doe</p>
              </div>
              <Button className="w-full bg-[#118CDB] text-white hover:bg-[#0F7BC0]">
                Create new appointment
              </Button>
            </div>
          </article>

          {/* Notifications */}
          <article className="bg-white rounded-lg border p-6 shadow-sm">
            <header className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-semibold text-lg">Notifications</h2>
            </header>
            <div className="text-center text-gray-500 py-8">
              <p>No notifications</p>
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
}
