"use client";

import type React from "react";
import { useState } from "react";
import type { FormData } from "./page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowRight, X, CalendarIcon } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const RegisterForm = ({ apiUrl }: { apiUrl: string }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    nationalId: "",
    dateOfBirth: "",
  });
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const res = await fetch(`${apiUrl}/auth/patient/signup
`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }
    window.location.href = "/patient/auth/login";
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    // Right Panel - White Background (70% width, full width on mobile)
    <div className="flex-1 lg:w-[70%] bg-white p-6 lg:p-12 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-blue-600"></div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-gray-300"></div>
        </div>

        {/* Alert Message */}
        {showAlert && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-red-700">
                <p className="font-medium">Patient Registration Only.</p>
                <p className="text-red-600 mt-1">
                  This signup is for patients accessing healthcare services...
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-red-400 hover:text-red-600 ml-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Form Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Let&apos;s Get Started!
          </h2>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <Label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Enter your first name"
              className="mt-1 w-full"
            />
          </div>

          {/* Last Name */}
          <div>
            <Label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Enter your last name"
              className="mt-1 w-full"
            />
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full"
            />
          </div>

          {/* Country of Residence */}
          <div>
            <Label
              htmlFor="country"
              className="text-sm font-medium text-gray-700"
            >
              Country of Residence
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rwanda">Rwanda</SelectItem>
                <SelectItem value="kenya">Kenya</SelectItem>
                <SelectItem value="uganda">Uganda</SelectItem>
                <SelectItem value="tanzania">Tanzania</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phone Number */}
          <div>
            <Label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <div className="mt-1">
              <PhoneInput
                international
                defaultCountry="RW"
                value={formData.phoneNumber}
                onChange={(value) =>
                  handleInputChange("phoneNumber", value || "")
                }
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
          </div>

          {/* National ID */}
          <div>
            <Label
              htmlFor="nationalId"
              className="text-sm font-medium text-gray-700"
            >
              National ID
            </Label>
            <Input
              id="nationalId"
              value={formData.nationalId}
              onChange={(e) => handleInputChange("nationalId", e.target.value)}
              placeholder="Enter your national ID"
              className="mt-1 w-full"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <Label
              htmlFor="dateOfBirth"
              className="text-sm font-medium text-gray-700"
            >
              Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full mt-1 justify-start text-left font-normal h-11",
                    !formData.dateOfBirth && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-3 h-4 w-4 text-gray-500" />
                  {formData.dateOfBirth ? (
                    <span className="text-gray-900">
                      {format(new Date(formData.dateOfBirth), "PPP")}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Select your date of birth
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 shadow-lg border-0"
                align="start"
              >
                <div className="bg-white rounded-lg border shadow-xl">
                  <Calendar
                    mode="single"
                    selected={
                      formData.dateOfBirth
                        ? new Date(formData.dateOfBirth)
                        : undefined
                    }
                    onSelect={(date) =>
                      handleInputChange(
                        "dateOfBirth",
                        date ? date.toISOString().split("T")[0] : ""
                      )
                    }
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="rounded-lg"
                    classNames={{
                      months:
                        "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center",
                      caption_label: "text-sm font-medium text-gray-900",
                      nav: "space-x-1 flex items-center",
                      nav_button: cn(
                        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-gray-100"
                      ),
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex",
                      head_cell:
                        "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
                      row: "flex w-full mt-2",
                      cell: cn(
                        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
                        "h-8 w-8"
                      ),
                      day: cn(
                        "inline-flex items-center justify-center rounded-md text-sm font-normal",
                        "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      ),
                      day_selected:
                        "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                      day_today: "bg-gray-100 text-gray-900 font-medium",
                      day_outside: "text-gray-400 opacity-50",
                      day_disabled:
                        "text-gray-400 opacity-50 cursor-not-allowed",
                      day_range_middle:
                        "aria-selected:bg-gray-100 aria-selected:text-gray-900",
                      day_hidden: "invisible",
                    }}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Password */}
          <div>
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Create a password"
              className="mt-1 w-full"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="Confirm your password"
              className="mt-1 w-full"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
          >
            GET STARTED
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/patient/auth/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
