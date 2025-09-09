"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = ({ apiUrl }: { apiUrl: string }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // important for cookies
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await res.json();

      // ✅ Secure handling:
      // If backend sets HTTP-only cookies, no need to store token manually
      if (data.accessToken) {
        if (formData.rememberMe) {
          localStorage.setItem("accessToken", data.accessToken);
        } else {
          sessionStorage.setItem("accessToken", data.accessToken);
        }
      }

      console.log("Login successful:", data);

      // Redirect to dashboard
      router.push("/patient/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 lg:w-[70%] bg-white p-6 lg:p-12 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-gray-300"></div>
          <div className="w-16 h-0.5 bg-blue-600"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-blue-600 relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get To Dashboard!</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="example@gmail.com"
              className="mt-1 w-full"
              required
            />
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
              placeholder="••••••••"
              className="mt-1 w-full"
              required
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) =>
                  handleInputChange("rememberMe", e.target.checked)
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label
                htmlFor="rememberMe"
                className="text-sm font-medium text-gray-700"
              >
                Remember me
              </Label>
            </div>
            <a
              href="/patient/auth/forgot-password"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
          >
            {loading ? "Logging in..." : "LOGIN"}
            {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
          </Button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/patient/auth/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
