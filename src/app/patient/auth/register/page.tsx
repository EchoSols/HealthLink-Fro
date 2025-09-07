import Image from "next/image";
import RegisterForm from "./RegisterForm";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  nationalId?: string;
  dateOfBirth?: string;
  gender?: string;
}

export default async function PatientRegistrationPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Blue Background (30% width, hidden on mobile) */}
      <div className="hidden lg:flex lg:w-[30%] bg-blue-600 flex-col justify-between p-8">
        {/* Header */}
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            Let&apos;s set up your account to take control of your health.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Manage appointments, access records, and stay healthy – all in one
            secure place.
          </p>
        </div>

        {/* Bottom Images */}
        <div className="flex items-end justify-between">
          {/* Left Image - First Aid Kit */}
          <div className="relative">
            <Image
              src="/patients/boxImage.png"
              alt="First Aid Kit"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Middle Image - Doctor (Bigger) */}
          <div className="relative">
            <Image
              src="/patients/doctorImage.png"
              alt="Doctor"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Right Image - Stethoscope */}
          <div className="relative">
            <Image
              src="/patients/doctorTool.png"
              alt="Stethoscope"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <RegisterForm apiUrl={apiUrl} />
    </div>
  );
}
