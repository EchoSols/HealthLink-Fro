"use client";

import Image from "next/image";
import LoginForm from "./LoginForm";
export interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function PatientLoginPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  console.log(apiUrl)
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-[30%] bg-blue-600 flex-col justify-between p-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="HealthLink Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="text-white text-xl font-semibold">HealthLink</span>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            Welcome back! Log in to stay in control of your health.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Manage appointments, access records, and stay healthy – all in one
            secure place.
          </p>
        </div>

        <div className="flex items-end justify-between">
          <Image
            src="/patients/boxImage.png"
            alt="First Aid Kit"
            width={100}
            height={100}
            className="object-contain"
          />
          <Image
            src="/patients/doctorImage.png"
            alt="Doctor"
            width={180}
            height={180}
            className="object-contain"
          />
          <Image
            src="/patients/doctorTool.png"
            alt="Stethoscope"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
      <LoginForm apiUrl={apiUrl}/>
    </div>
  );
}
