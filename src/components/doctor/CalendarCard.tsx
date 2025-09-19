"use client"

import React from "react"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const CalendarCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow w-[350px]">
      <h2 className="font-semibold text-xl text-gray-900 mb-4">Calendar</h2>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-full"
      />      
    </div>
  )
} 

export default CalendarCard
