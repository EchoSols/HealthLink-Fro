"use client";

import {
  Calendar,
  DollarSign,
  LayoutDashboard,
  Pill,
  Menu,
  HelpCircle,
  LogOut,
  X,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface PatientSidebarProps {
  isCollapsed?: boolean;
}

const PatientSidebar = ({ isCollapsed = false }: PatientSidebarProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Overview", href: "/patient/dashboard", icon: LayoutDashboard },
    {
      label: "Visit Details",
      href: "/patient/visits",
      icon: Calendar,
      hasDropdown: true,
    },
    { label: "Prescriptions", href: "/patient/prescriptions", icon: Pill },
    { label: "Payments", href: "/patient/payments", icon: DollarSign },
  ];

  const subLinks = [
    { label: "Create visit", href: "/patient/visits/create" },
    { label: "View visits", href: "/patient/visits" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-white border rounded-md shadow-md"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={`bg-white border-r flex flex-col justify-between z-50 transform transition-all duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${
          isCollapsed ? "w-16" : "w-64"
        } ${
          open
            ? "fixed inset-y-0 left-0 h-screen"
            : "relative h-full hidden md:flex"
        }`}
      >
        <div>
          <div className="flex items-center justify-between px-4 py-4 border-b">
            {!isCollapsed && (
              <h1 className="font-semibold text-lg">Patient Portal</h1>
            )}
            <button onClick={() => setOpen(false)} className="md:hidden">
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <ul className="mt-2">
            {links.map((link, idx) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/patient/visits" &&
                  pathname.startsWith("/patient/visits"));
              const Icon = link.icon;

              return (
                <li key={idx}>
                  <div>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm ${
                        isActive
                          ? "bg-[#E6F2FB] border-r-4 border-[#118CDB] font-medium text-gray-900"
                          : "text-gray-700 hover:bg-gray-100"
                      } ${isCollapsed ? "justify-center" : ""}`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{link.label}</span>}
                      {!isCollapsed && link.hasDropdown && (
                        <svg
                          className="ml-auto h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {link.hasDropdown && !isCollapsed && (
                      <div className="ml-8 border-l border-gray-200">
                        {subLinks.map((subLink, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subLink.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            <FileText className="h-3 w-3" />
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t px-4 py-3">
          <Link
            href="/patient/settings"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <HelpCircle className="h-4 w-4 flex-shrink-0" />
            {!isCollapsed && "Settings"}
          </Link>
          <Link
            href="/logout"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {!isCollapsed && "Logout"}
          </Link>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default PatientSidebar;
