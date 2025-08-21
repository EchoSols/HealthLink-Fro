"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";

const departments = [
  {
    value: "general",
    label: "General Medicine",
    desc: "General health consultations and check-ups",
  },
  {
    value: "cardiology",
    label: "Cardiology",
    desc: "Heart-related consultations",
  },
  { value: "dental", label: "Dental", desc: "Dental care and check-ups" },
];

export default function CreateVisitPage() {
  const [selectedDept, setSelectedDept] = useState<string>("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="font-semibold text-2xl">Create A visit</h1>
        <p className="text-gray-600">Book An appointment Today</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="font-semibold mb-1">Visit Details</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please provide information about your visit
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Department
                </label>
                <Select value={selectedDept} onValueChange={setSelectedDept}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((d) => (
                      <SelectItem key={d.value} value={d.value}>
                        {d.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for visit
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please describe any symptoms, concerns or reasons for visit..."
                  className="w-full rounded border px-3 py-2 text-sm min-h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prefered Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="w-full flex items-center justify-between rounded border px-3 py-2 text-left text-sm">
                      <span>
                        {date ? date.toISOString().slice(0, 10) : "yyyy-mm-dd"}
                      </span>
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-auto">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button className="bg-[#118CDB] text-white">
                Confirm and Join Queue
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold mb-2">
              For better experience of this visit ...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Be there 10 minutes before your estimated time
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Bring your ID and any relevant medical documents
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                You will receive notifications about your queue status
              </li>
            </ul>
            <Button variant="outline" className="mt-4">
              I have questions
            </Button>
          </div>
        </div>

        {/* Right: Available Departments */}
        <div>
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Available Departments</h3>
            <div className="space-y-4 text-sm">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>
                  <p className="font-medium">● General Medicine</p>
                  <p className="text-gray-500">
                    General health consultations and check-ups
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
