"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Invoice = {
  title: string;
  hospital: string;
  doctor: string;
  serviceDate: string;
  dueDate: string;
  amount: string;
  status: "pending" | "overdue" | "paid";
};

const invoices: Invoice[] = [
  {
    title: "General Consultation",
    hospital: "Kigali Hospital",
    doctor: "Dr. Sarah Johnson",
    serviceDate: "2024-01-15",
    dueDate: "2024-01-22",
    amount: "150 000 rwf",
    status: "pending",
  },
  {
    title: "General Consultation",
    hospital: "Kigali Hospital",
    doctor: "Dr. Sarah Johnson",
    serviceDate: "2024-01-15",
    dueDate: "2024-01-22",
    amount: "150 000 rwf",
    status: "overdue",
  },
  {
    title: "General Consultation",
    hospital: "Kigali Hospital",
    doctor: "Dr. Sarah Johnson",
    serviceDate: "2024-01-15",
    dueDate: "2024-01-22",
    amount: "150 000 rwf",
    status: "pending",
  },
];

const tabs = ["Pay now", "Transactions", "Wallet", "Methods"] as const;
type Tab = (typeof tabs)[number];

export default function PaymentsPage() {
  const [active, setActive] = useState<Tab>("Pay now");
  const [topupAmount, setTopupAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [topupMethod, setTopupMethod] = useState<string>("");
  const [withdrawMethod, setWithdrawMethod] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [provider, setProvider] = useState<string>("");
  const [methods, setMethods] = useState<
    { label: string; masked: string; isDefault?: boolean }[]
  >([
    { label: "MTN Mobile money", masked: "**** **** 1234", isDefault: true },
    { label: "Airtel money", masked: "**** **** 1234" },
  ]);

  const filtered = useMemo(() => invoices, []);

  const badge = (s: Invoice["status"]) => (
    <span
      className={`text-xs px-2 py-0.5 rounded-full border ${
        s === "pending"
          ? "text-blue-600 border-blue-200 bg-blue-50"
          : s === "overdue"
          ? "text-red-600 border-red-200 bg-red-50"
          : "text-green-700 border-green-200 bg-green-50"
      }`}
    >
      {s}
    </span>
  );

  return (
    <div className="w-full space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Payments</h1>
          <p className="text-gray-600">
            Manage your payments, wallet balance, and payment methods
          </p>
        </div>
        <div className="bg-white rounded-lg border shadow-sm px-4 py-3 text-right">
          <p className="text-xs text-gray-500">Current balance</p>
          <p className="font-semibold">150 000 rwf</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="flex items-center">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`flex-1 px-6 py-3 text-sm font-medium ${
                active === t
                  ? "text-[#118CDB] border-b-2 border-[#118CDB]"
                  : "text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {active === "Pay now" && (
          <div className="p-4">
            <h2 className="font-semibold mb-1">Pending invoices</h2>
            <p className="text-sm text-gray-600 mb-4">
              3 invoices awaiting payment
            </p>

            <div className="space-y-4">
              {filtered.map((inv, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="max-w-[70%]">
                    <h3 className="font-medium">{inv.title}</h3>
                    <p className="text-sm text-gray-600">
                      {inv.hospital} • {inv.doctor}
                    </p>
                    <p className="text-xs text-gray-500">
                      Service Date: {inv.serviceDate}
                    </p>
                    <p className="text-xs text-gray-500">Due: {inv.dueDate}</p>
                    <div className="mt-2">{badge(inv.status)}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold whitespace-nowrap">
                      {inv.amount}
                    </p>
                    <Button className="bg-[#118CDB] text-white">Pay now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "Transactions" && (
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-700">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Method</th>
                  <th className="py-3 px-4">Reference</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "2020-04-5",
                    desc: "King Faisal\nDr John Doe",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "-150 000 frw",
                    status: "completed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "Wallet Topup\nIncrease",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "+150 000 frw",
                    status: "completed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "King Faisal\nDr John Doe",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "-150 000 frw",
                    status: "completed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "Wallet Topup\nIncrease",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "+150 000 frw",
                    status: "Failed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "Wallet Topup\nIncrease",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "+150 000 frw",
                    status: "completed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "King Faisal\nDr John Doe",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "-150 000 frw",
                    status: "completed",
                  },
                  {
                    date: "2020-04-5",
                    desc: "Wallet Topup\nIncrease",
                    method: "MTN mobile money",
                    ref: "#REF123456789",
                    amount: "+150 000 frw",
                    status: "completed",
                  },
                ].map((r, i) => (
                  <tr key={i} className="border-t align-top">
                    <td className="py-3 px-4 whitespace-nowrap">{r.date}</td>
                    <td className="py-3 px-4 whitespace-pre-line">{r.desc}</td>
                    <td className="py-3 px-4">{r.method}</td>
                    <td className="py-3 px-4">{r.ref}</td>
                    <td
                      className={`py-3 px-4 ${
                        r.amount.startsWith("-")
                          ? "text-gray-800"
                          : "text-green-600"
                      }`}
                    >
                      {r.amount}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        r.status === "Failed" ? "text-red-600" : "text-gray-600"
                      }`}
                    >
                      {r.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "Wallet" && (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold mb-1">Top-up wallet</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add money to your wallet
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount(RWF)
                    </label>
                    <Input
                      value={topupAmount}
                      onChange={(e) => setTopupAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment method
                    </label>
                    <Select value={topupMethod} onValueChange={setTopupMethod}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mtn">MTN mobile money</SelectItem>
                        <SelectItem value="airtel">Airtel Money</SelectItem>
                        <SelectItem value="visa">VISA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-[#118CDB] text-white w-full">
                    Top Up
                  </Button>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold mb-1">Withdraw funds</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Transfer money from your wallet
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount(RWF)
                    </label>
                    <Input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment method
                    </label>
                    <Select
                      value={withdrawMethod}
                      onValueChange={setWithdrawMethod}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mtn">MTN mobile money</SelectItem>
                        <SelectItem value="airtel">Airtel Money</SelectItem>
                        <SelectItem value="visa">VISA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-[#118CDB] text-white w-full">
                    Withdraw
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "Methods" && (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Your payment methods</h3>
                <div className="space-y-3">
                  {methods.map((m, idx) => (
                    <div
                      key={idx}
                      className="border rounded-md px-4 py-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-sm">{m.label}</p>
                        <p className="text-xs text-gray-500">{m.masked}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {m.isDefault && (
                          <span className="text-xs text-gray-600">Default</span>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold mb-1">Add payment method</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Link a new mobile money account
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number
                    </label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Provider
                    </label>
                    <Select value={provider} onValueChange={setProvider}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mtn">MTN mobile money</SelectItem>
                        <SelectItem value="airtel">Airtel money</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="bg-[#118CDB] text-white w-full"
                    onClick={() => {
                      if (!phone || !provider) return;
                      const last4 = phone.slice(-4).padStart(4, "0");
                      const label =
                        provider === "mtn"
                          ? "MTN Mobile money"
                          : "Airtel money";
                      setMethods((prev) => [
                        ...prev,
                        { label, masked: `**** **** ${last4}` },
                      ]);
                      setPhone("");
                      setProvider("");
                    }}
                  >
                    Add method
                  </Button>
                  <p className="text-xs text-gray-500">
                    You'll receive an SMS to verify your phone number
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
