import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
      {/* Header */}
      {/* <div className="flex items-center space-x-2 mb-12">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <Image src="/logo.svg" alt="HealthLink Logo" width={24} height={24} className="object-contain" />
        </div>
        <span className="text-blue-600 text-xl font-semibold">HealthLink</span>
      </div> */}

      {/* Main Content */}
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-blue-600 mb-6 opacity-20">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
          <Link href="/">Go Home</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 flex-1 bg-transparent"
        >
          <Link href="/patient/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  )
}
