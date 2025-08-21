"use client";

import {
  Bell,
  MessageCircle,
  Search,
  Globe,
  Info,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

export default function PatientTopbar() {
  return (
    <div className="w-full bg-white border-b sticky top-0 z-20">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="font-semibold text-black">HealthLink</h1>
              <p className="text-[#6B6B6B] text-xs">
                Your health care assistant
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              className="bg-transparent outline-none text-sm w-64"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Info className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
