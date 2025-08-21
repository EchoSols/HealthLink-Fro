"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navbar from "@/components/doctor/Navbar";

interface FormData {
  fullName: string;
  nationalId: string;
  dateOfBirth: Date | undefined;
  gender: string;
  phoneNumber: string;
  otp: string;
  email: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function PatientRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    nationalId: "",
    dateOfBirth: undefined,
    gender: "",
    phoneNumber: "",
    otp: "",
    email: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showAlert, setShowAlert] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleInputChange = (
    field: keyof FormData,
    value: string | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSendOTP = () => {
    if (formData.phoneNumber) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (formData.otp) {
      setOtpVerified(true);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
          Full Name *
        </Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          placeholder="Enter your full name"
          className="mt-1"
        />
      </div>

      <div>
        <Label
          htmlFor="nationalId"
          className="text-sm font-medium text-gray-700"
        >
          National ID/Passport Number *
        </Label>
        <Input
          id="nationalId"
          value={formData.nationalId}
          onChange={(e) => handleInputChange("nationalId", e.target.value)}
          placeholder="Enter your ID number"
          className="mt-1"
        />
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700">
          Date of birth *
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal mt-1",
                !formData.dateOfBirth && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.dateOfBirth
                ? format(formData.dateOfBirth, "PPP")
                : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.dateOfBirth}
              onSelect={(date) => handleInputChange("dateOfBirth", date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700">Gender *</Label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="phoneNumber"
          className="text-sm font-medium text-gray-700"
        >
          Phone Number *
        </Label>
        <div className="flex gap-2 mt-1">
          <Input
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            placeholder="Enter your phone number"
            className="flex-1"
          />
          <Button
            onClick={handleSendOTP}
            disabled={!formData.phoneNumber || otpSent}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            {otpSent ? "Sent" : "Send OTP"}
          </Button>
        </div>
      </div>

      {otpSent && (
        <div>
          <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
            Enter OTP *
          </Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="otp"
              value={formData.otp}
              onChange={(e) => handleInputChange("otp", e.target.value)}
              placeholder="Enter OTP"
              className="flex-1"
            />
            <Button
              onClick={handleVerifyOTP}
              disabled={!formData.otp || otpVerified}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              {otpVerified ? "Verified" : "Verify OTP"}
            </Button>
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Address *
        </Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="Enter your address"
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="username" className="text-sm font-medium text-gray-700">
          Username *
        </Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          placeholder="Choose a username"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password *
        </Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          placeholder="Create a password"
          className="mt-1"
        />
      </div>

      <div>
        <Label
          htmlFor="confirmPassword"
          className="text-sm font-medium text-gray-700"
        >
          Confirm password *
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
          placeholder="Confirm your password"
          className="mt-1"
        />
      </div>
    </div>
  );

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "1 Basic Information";
      case 2:
        return "2 Contact Information";
      case 3:
        return "3 Account Setup";
      default:
        return "";
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "Tell Us about yourself";
      case 2:
        return "Tell Us how to reach you";
      case 3:
        return "set up your account";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Create An account
          </h1>

          {showAlert && (
            <div className="inline-flex items-center p-4 mb-6 bg-red-50 border-l-4 border-red-400 text-red-700 rounded shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <div className="ml-3 text-sm">
                  <p className="font-medium">Patient Registration Only</p>
                  <p>
                    This signup is for patients accessing healthcare services.
                    Healthcare professionals should contact their facility
                    administrator for account setup.
                  </p>
                </div>
                <button
                  onClick={() => setShowAlert(false)}
                  className="ml-4 text-red-400 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step === currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  )}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={cn(
                      "w-16 h-0.5 mx-2",
                      step < currentStep ? "bg-blue-600" : "bg-gray-200"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {getStepTitle()}
            </h2>
            <p className="text-gray-600 mt-1">{getStepSubtitle()}</p>
          </div>

          <form className="space-y-6">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6"
              >
                Back
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6"
                >
                  Sign Up
                </Button>
              )}
            </div>
          </form>

          <div className="text-center mt-6 pt-6 border-t">
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
    </div>
  );
}
