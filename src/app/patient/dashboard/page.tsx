"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/doctor/Navbar";
import PatientSidebar from "@/components/patient/PatientSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PatientDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const statsCards = [
    {
      title: "Current Queue Status",
      subtitle: "General",
      content: "position #3 . 12 mins",
      bgColor: "bg-blue-50 border-l-4 border-blue-500",
    },
    {
      title: "Assigned Doctor",
      subtitle: "Kabalisa Jean",
      content: "General",
      bgColor: "bg-green-50 border-l-4 border-green-500",
    },
    {
      title: "Total Visits",
      subtitle: "General",
      content: "position #3 . 12 mins",
      bgColor: "bg-purple-50 border-l-4 border-purple-500",
    },
    {
      title: "Amount in wallet",
      subtitle: "General",
      content: "position #3 . 12 mins",
      bgColor: "bg-orange-50 border-l-4 border-orange-500",
    },
  ];

  const recentVisits = [
    {
      hospital: "Kigali Hospital",
      date: "Today",
      status: "waiting",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      hospital: "Kigali Hospital",
      department: "Cardiology",
      doctor: "Dr. John Doe",
      date: "2024-06-9",
      status: "completed",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      hospital: "Kigali Hospital",
      department: "Cardiology",
      doctor: "Dr. John Doe",
      date: "2025-06-9",
      status: "canceled",
      statusColor: "bg-red-100 text-red-800",
    },
  ];

  const upcomingAppointment = {
    hospital: "Kigali Hospital",
    date: "2025-07-9",
    department: "Cardiology",
    doctor: "Dr. John Doe",
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PatientSidebar isCollapsed={false} />
        <div className="pt-20 px-4 space-y-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Welcome back, John
            </h1>
            <p className="text-gray-600 mt-1">
              Here&apos;s your health overview for today
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-lg p-4 bg-white shadow-sm`}
              >
                <h3 className="font-medium text-gray-900 text-sm">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs mt-1">{card.subtitle}</p>
                <p className="text-gray-800 text-sm mt-2">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Visits
                  </h2>
                  <p className="text-sm text-gray-600">
                    Here are your recent healthcare visits.
                  </p>
                </div>
                <Link
                  href="/patient/visits"
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  View more
                </Link>
              </div>

              <div className="space-y-3">
                {recentVisits.map((visit, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 p-3 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {visit.hospital}
                      </h3>
                      {visit.department && (
                        <p className="text-sm text-gray-600">
                          {visit.department} • {visit.doctor}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">{visit.date}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <Badge
                        className={`${visit.statusColor} border-none w-fit`}
                      >
                        {visit.status}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming appointment
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    {upcomingAppointment.hospital}
                  </span>
                  <span className="text-sm text-gray-600">
                    {upcomingAppointment.date}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Department:</span>{" "}
                    {upcomingAppointment.department}
                  </p>
                  <p>
                    <span className="font-medium">Doctor Name:</span>{" "}
                    {upcomingAppointment.doctor}
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Create new appointment
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Notifications
              </h2>
              <p className="text-sm text-gray-500">No new notifications</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">💊</span>
                    Recent medications
                  </h2>
                  <p className="text-sm text-gray-600">
                    Here are your recent medications.
                  </p>
                </div>
                <Link
                  href="/patient/prescriptions"
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  View more
                </Link>
              </div>
              <div className="text-center py-8">
                <p className="text-gray-500">No recent medications found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 flex">
        <div className="w-64 flex-shrink-0">
          <PatientSidebar isCollapsed={false} />
        </div>

        <div className="flex-1 p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back, John
            </h1>
            <p className="text-gray-600 mt-1">
              Here&apos;s your health overview for today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-lg p-4 bg-white shadow-sm`}
              >
                <h3 className="font-medium text-gray-900 text-sm">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs mt-1">
                  {card.subtitle}
                </p>
                <p className="text-gray-800 text-sm mt-2">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Recent Visits
                    </h2>
                    <p className="text-sm text-gray-600">
                      Here are your recent healthcare visits.
                    </p>
                  </div>
                  <Link
                    href="/patient/visits"
                    className="text-blue-600 text-sm hover:text-blue-700"
                  >
                    View more
                  </Link>
                </div>

                <div className="space-y-3">
                  {recentVisits.map((visit, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {visit.hospital}
                        </h3>
                        {visit.department && (
                          <p className="text-sm text-gray-600">
                            {visit.department} • {visit.doctor}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          {visit.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${visit.statusColor} border-none`}>
                          {visit.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Upcoming appointment
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {upcomingAppointment.hospital}
                    </span>
                    <span className="text-sm text-gray-600">
                      {upcomingAppointment.date}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Department:</span>{" "}
                      {upcomingAppointment.department}
                    </p>
                    <p>
                      <span className="font-medium">Doctor Name:</span>{" "}
                      {upcomingAppointment.doctor}
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Create new appointment
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Notifications
                </h2>
                <p className="text-sm text-gray-500">No new notifications</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-xl">💊</span>
                  Recent medications
                </h2>
                <p className="text-sm text-gray-600">
                  Here are your recent medications.
                </p>
              </div>
              <Link
                href="/patient/prescriptions"
                className="text-blue-600 text-sm hover:text-blue-700"
              >
                View more
              </Link>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500">No recent medications found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
