"use client"

import {
  Calendar,
  DollarSign,
  LayoutDashboard,
  Send,
  Stethoscope,
  Menu,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

const Sidebar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Overview", href: "/doctor/overview", icon: LayoutDashboard },
    { label: "Patient Queues", href: "/doctor/patients", icon: Calendar },
    { label: "Consultations", href: "/doctor/consultations", icon: Stethoscope },
    { label: "Referrals", href: "/doctor/referrals", icon: Send },
    { label: "Payments", href: "/doctor/payments", icon: DollarSign },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed z-50 p-2 bg-white border rounded-md shadow-md"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`h-[93vh] w-64 bg-white border-r flex flex-col justify-between z-40 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h1 className="font-semibold text-lg">Doctor Portal</h1>
            <button onClick={() => setOpen(false)} className="md:hidden">
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="mt-2">
            {links.map((link, idx) => {
              const isActive = pathname === link.href
              const Icon = link.icon

              return (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-2 text-sm rounded-r-md ${
                      isActive
                        ? "bg-[#E6F2FB] border-l-4 border-[#118CDB] font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <Link
            href="/doctor/settings"
            className="flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md"
          >
            <HelpCircle className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-100 px-2 py-2 rounded-md mt-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
