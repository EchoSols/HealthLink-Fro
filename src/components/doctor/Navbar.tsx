"use client"

import Image from "next/image"
import React from "react"
import { Input } from "@/components/ui/input"
import { BellDotIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-sm px-6 py-4 bg-white flex items-center justify-between z-30 border-b border-gray-100">
      <div className="flex gap-12 items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Logo" width={35} height={35} />
          <div className="hidden sm:block">
            <h1 className="font-semibold text-black text-lg">HealthLink</h1>
            <p className="text-[#6B6B6B] text-xs mt-0.5">
              Your health care assistant
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <Input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:ring-2 focus:ring-[#118CDB] focus:border-transparent"
            placeholder="Search patients, appointments..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-3">
          <span className="text-lg font-bold">ᶾᴀ</span>

          <Select defaultValue="en">
            <SelectTrigger className="w-[100px] border-none shadow-none px-0 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <BellDotIcon className="h-5 w-5 text-gray-600" />
        </div>

        <Avatar className="h-9 w-9">
          <AvatarFallback className="flex items-center justify-center bg-[#118CDB] text-white font-semibold">
            I
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
