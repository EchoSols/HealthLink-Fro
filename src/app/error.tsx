"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
      {/* Header */}
      {/* <div className="flex items-center space-x-2 mb-12">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Image src="/logo.svg" alt="HealthLink Logo" width={24} height={24} className="object-contain" />
        </div>
        <span className="text-blue-600 text-xl font-semibold">HealthLink</span>
      </div> */}

      {/* Main Content */}
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-red-500 mb-6 opacity-20">!</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
          Try Again
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 flex-1 bg-transparent"
        >
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
