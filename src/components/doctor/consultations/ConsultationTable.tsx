"use client";

import { Download } from "lucide-react";

const consultations = [
  {
    date: "2020-04-05",
    patient: "King Faisal",
    department: "Pediatrics",
    doctor: "Dr John Doe",
    diagnosis: "Heart follow up",
    duration: "penicillin 2",
    status: "completed",
    cost: "150 000 rwf",
  },
  {
    date: "2020-04-05",
    patient: "King Faisal",
    department: "Pediatrics",
    doctor: "Dr John Doe",
    diagnosis: "Heart follow up",
    duration: "penicillin 2",
    status: "completed",
    cost: "150 000 rwf",
  },
  // repeat or fetch dynamically
];

export default function ConsultationTable() {
  return (
    <div className="bg-white shadow rounded-lg border p-4">
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
          Export Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Patient</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Doctor</th>
              <th className="px-4 py-2 text-left">Diagnosis</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">{c.date}</td>
                <td className="px-4 py-2">{c.patient}</td>
                <td className="px-4 py-2">{c.department}</td>
                <td className="px-4 py-2">{c.doctor}</td>
                <td className="px-4 py-2">{c.diagnosis}</td>
                <td className="px-4 py-2">{c.duration}</td>
                <td className="px-4 py-2">{c.status}</td>
                <td className="px-4 py-2">
                  <button className="p-2 rounded hover:bg-gray-100">
                    <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
