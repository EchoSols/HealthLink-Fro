"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

export type PrescriptionDetails = {
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy?: string;
  location: string;
  startDate: string;
  endDate: string;
};

export default function PrescriptionDetailsModal({
  open,
  onClose,
  details,
}: {
  open: boolean;
  onClose: () => void;
  details: PrescriptionDetails | null;
}) {
  if (!open || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Prescription details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3">Medical information</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Name:</span> {details.name}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Dosage:</span> {details.dosage}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Duration:</span> 2 weeks
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Frequency:</span>{" "}
                  {details.frequency}
                </span>
              </li>
            </ul>

            <h3 className="font-medium mt-6 mb-2">Instructions</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Taken with food
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Don’t drink milk in the mean time
              </li>
            </ul>

            <h3 className="font-medium mt-6 mb-2">Possible side-effects</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Nausea
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                Stomach upset
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Prescription information</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Prescribed by:</span>{" "}
                  {details.prescribedBy || "Dr Sharma"}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Location:</span>{" "}
                  {details.location}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">Start Date:</span>{" "}
                  {details.startDate}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <span>
                  <span className="font-medium">End date:</span>{" "}
                  {details.endDate}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button className="bg-black text-white hover:bg-gray-900">
            Download prescription
          </Button>
          <Button variant="outline" onClick={onClose}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
}
