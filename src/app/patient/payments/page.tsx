"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import Navbar from "@/components/doctor/Navbar";
import PatientSidebar from "@/components/patient/PatientSidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Invoice {
  id: string;
  hospital: string;
  doctor: string;
  serviceDate: string;
  dueDate: string;
  amount: string;
  status: "pending" | "overdue";
  serviceType: string;
}

const PaymentsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTab, setSelectedTab] = useState("pay-now");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pendingInvoices: Invoice[] = [
    {
      id: "1",
      hospital: "Kigali Hospital",
      doctor: "Dr. Sarah Johnson",
      serviceDate: "2024-01-15",
      dueDate: "2024-01-22",
      amount: "150 000 rwf",
      status: "pending",
      serviceType: "General Consultation",
    },
    {
      id: "2",
      hospital: "Kigali Hospital",
      doctor: "Dr. Sarah Johnson",
      serviceDate: "2024-01-15",
      dueDate: "2024-01-22",
      amount: "150 000 rwf",
      status: "overdue",
      serviceType: "General Consultation",
    },
    {
      id: "3",
      hospital: "Kigali Hospital",
      doctor: "Dr. Sarah Johnson",
      serviceDate: "2024-01-15",
      dueDate: "2024-01-22",
      amount: "150 000 rwf",
      status: "pending",
      serviceType: "General Consultation",
    },
  ];

  const currentBalance = "150 000 rwf";

  const handlePayNow = (invoiceId: string) => {
    console.log(`Processing payment for invoice ${invoiceId}`);
  };

  const InvoiceCard = ({ invoice }: { invoice: Invoice }) => (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {invoice.serviceType}
            </h3>
            <p className="text-gray-600 text-sm">
              {invoice.hospital} • {invoice.doctor}
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Service Date: {invoice.serviceDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Due: {invoice.dueDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                className={`${
                  invoice.status === "overdue"
                    ? "bg-red-100 text-red-800 border-red-200"
                    : "bg-blue-100 text-blue-800 border-blue-200"
                } px-3 py-1 rounded-full text-sm font-medium w-fit`}
              >
                {invoice.status === "overdue" ? "Overdue" : "pending"}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{invoice.amount}</p>
          </div>
          <Button
            onClick={() => handlePayNow(invoice.id)}
            className={`${
              invoice.status === "overdue"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            } px-6 py-2 rounded-md font-medium`}
          >
            Pay now
          </Button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case "pay-now":
        return (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Pending invoices
              </h2>
              <p className="text-gray-600 mt-1">
                {pendingInvoices.length} invoices awaiting payment
              </p>
            </div>

            <div className="space-y-4">
              {pendingInvoices.map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>
        );
      case "transactions":
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Transactions tab - Coming soon</p>
          </div>
        );
      case "wallet":
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Wallet tab - Coming soon</p>
          </div>
        );
      case "methods":
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Methods tab - Coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PatientSidebar />
        <div className="pt-20 px-4 space-y-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
              <p className="text-gray-600 mt-1">
                Manage your payments, wallet balance, and payment methods
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border shadow-sm w-full">
              <p className="text-sm text-gray-600">Current balance</p>
              <p className="text-xl font-bold text-gray-900">
                {currentBalance}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Select value={selectedTab} onValueChange={setSelectedTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select tab" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pay-now">Pay now</SelectItem>
                <SelectItem value="transactions">Transactions</SelectItem>
                <SelectItem value="wallet">Wallet</SelectItem>
                <SelectItem value="methods">Methods</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 flex">
        <div className="w-64 flex-shrink-0">
          <PatientSidebar />
        </div>
        <div className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
              <p className="text-gray-600 mt-2">
                Manage your payments, wallet balance, and payment methods
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <p className="text-sm text-gray-600">Current balance</p>
              <p className="text-2xl font-bold text-gray-900">
                {currentBalance}
              </p>
            </div>
          </div>

          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 h-12">
              <TabsTrigger value="pay-now" className="text-sm font-medium">
                Pay now
              </TabsTrigger>
              <TabsTrigger value="transactions" className="text-sm font-medium">
                Transactions
              </TabsTrigger>
              <TabsTrigger value="wallet" className="text-sm font-medium">
                Wallet
              </TabsTrigger>
              <TabsTrigger value="methods" className="text-sm font-medium">
                Methods
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pay-now" className="mt-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Pending invoices
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {pendingInvoices.length} invoices awaiting payment
                  </p>
                </div>

                <div className="space-y-6">
                  {pendingInvoices.map((invoice) => (
                    <InvoiceCard key={invoice.id} invoice={invoice} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="mt-8">
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Transactions tab - Coming soon
                </p>
              </div>
            </TabsContent>

            <TabsContent value="wallet" className="mt-8">
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Wallet tab - Coming soon
                </p>
              </div>
            </TabsContent>

            <TabsContent value="methods" className="mt-8">
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Methods tab - Coming soon
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
