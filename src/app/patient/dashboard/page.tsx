"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import Navbar from "@/components/doctor/Navbar";
import PatientSidebar from "@/components/patient/PatientSidebar";

const DashboardPage = () => {
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
      title: "Total Visits",
      value: "24",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Prescriptions",
      value: "8",
      change: "+5%",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Payments",
      value: "$1,240",
      change: "+18%",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Consultations",
      value: "12",
      change: "+8%",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentVisits = [
    {
      id: 1,
      department: "Cardiology",
      date: "2024-07-15",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: 2,
      department: "Neurology",
      date: "2024-07-12",
      time: "2:30 PM",
      status: "Scheduled",
    },
    {
      id: 3,
      department: "Orthopedics",
      date: "2024-07-10",
      time: "9:15 AM",
      status: "Completed",
    },
  ];

  const upcomingAppointment = {
    department: "Cardiology",
    date: "2024-07-20",
    time: "11:00 AM",
    doctor: "Dr. Sarah Johnson",
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PatientSidebar />
        <div className="pt-20 px-4 space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {card.value}
                      </p>
                      <p className="text-sm text-green-600">{card.change}</p>
                    </div>
                    <div
                      className={`p-3 rounded-full ${card.bgColor} ${card.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Visits
            </h3>
            <div className="space-y-3">
              {recentVisits.map((visit) => (
                <div
                  key={visit.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {visit.department}
                    </p>
                    <p className="text-sm text-gray-600">
                      {visit.date} at {visit.time}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      visit.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {visit.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming Appointment
            </h3>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-gray-900">
                {upcomingAppointment.department}
              </p>
              <p className="text-sm text-gray-600">
                {upcomingAppointment.date} at {upcomingAppointment.time}
              </p>
              <p className="text-sm text-gray-600">
                {upcomingAppointment.doctor}
              </p>
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
          <PatientSidebar />
        </div>
        <div className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {card.value}
                      </p>
                      <p className="text-sm text-green-600">{card.change}</p>
                    </div>
                    <div
                      className={`p-3 rounded-full ${card.bgColor} ${card.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Visits
              </h3>
              <div className="space-y-3">
                {recentVisits.map((visit) => (
                  <div
                    key={visit.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {visit.department}
                      </p>
                      <p className="text-sm text-gray-600">
                        {visit.date} at {visit.time}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        visit.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {visit.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Appointment
              </h3>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-gray-900">
                  {upcomingAppointment.department}
                </p>
                <p className="text-sm text-gray-600">
                  {upcomingAppointment.date} at {upcomingAppointment.time}
                </p>
                <p className="text-sm text-gray-600">
                  {upcomingAppointment.doctor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
