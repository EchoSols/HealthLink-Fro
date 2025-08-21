"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Overview", href: "/patient", icon: LayoutDashboard },
  {
    label: "Visit Details",
    href: "/patient/visits",
    icon: Calendar,
    subItems: [
      { label: "Create visit", href: "/patient/visits/create" },
      { label: "View visits", href: "/patient/visits" },
    ],
  },
  { label: "Prescriptions", href: "/patient/prescriptions", icon: FileText },
  { label: "Payments", href: "/patient/payments", icon: CreditCard },
] as const;

export default function PatientSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const visitsOpenDefault = pathname?.startsWith("/patient/visits") ?? false;
  const [visitsOpen, setVisitsOpen] = useState(visitsOpenDefault);

  // Determine which item should be active
  const getActiveItem = () => {
    // Check for exact matches first
    const exactMatch = navItems.find((item) => pathname === item.href);
    if (exactMatch) return exactMatch.label;

    // Check for sub-items - return the parent item label
    const itemWithSubItems = navItems.find((item) => item.subItems);
    if (itemWithSubItems?.subItems) {
      const activeSubItem = itemWithSubItems.subItems.find(
        (sub) => pathname === sub.href
      );
      if (activeSubItem) return itemWithSubItems.label;
    }

    // Check for prefix matches (for nested routes)
    const prefixMatch = navItems.find(
      (item) =>
        pathname?.startsWith(item.href + "/") && item.href !== "/patient"
    );
    if (prefixMatch) return prefixMatch.label;

    // Default to Overview if no match
    return "Overview";
  };

  const activeItem = getActiveItem();

  return (
    <aside
      className={`h-screen bg-white border-r sticky top-0 left-0 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="px-6 py-5 border-b flex items-center justify-between">
        {!collapsed && (
          <h1 className="font-semibold text-lg text-gray-800">
            Patient Portal
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <nav className="px-3 py-4 space-y-4 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          if (item.subItems) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setVisitsOpen((v) => !v)}
                  className={`w-full flex items-center justify-between text-sm px-3 py-2 rounded-md hover:bg-gray-100 ${
                    isActive
                      ? "bg-[#E6F2FB] border-l-4 border-[#118CDB]"
                      : "text-gray-700"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {!collapsed && <span>{item.label}</span>}
                  </span>
                  {!collapsed && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        visitsOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {visitsOpen && !collapsed && (
                  <div className="ml-6 space-y-2 mt-1 relative">
                    {/* Connecting line */}
                    <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"></div>
                    {item.subItems.map((subItem, index) => {
                      const subActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block text-xs px-3 py-1 rounded relative ${
                            subActive
                              ? "text-gray-900 bg-[#E6F2FB]"
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 text-sm px-3 py-2 rounded-md hover:bg-gray-100 ${
                isActive
                  ? "bg-[#E6F2FB] border-l-4 border-[#118CDB]"
                  : "text-gray-700"
              }`}
            >
              <Icon className="h-4 w-4" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t mt-auto">
        <Link
          href="/patient/settings"
          className="flex items-center gap-3 text-sm px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
        >
          <Settings className="h-4 w-4" />
          {!collapsed && <span>Settings</span>}
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-3 text-sm px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 mt-2"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
