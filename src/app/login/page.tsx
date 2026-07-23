"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhoneAlt,
} from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-200 flex items-center justify-center p-4">

      {/* Mobile Frame */}
      <div className="w-full max-w-[430px] min-h-screen bg-slate-100 rounded-[35px] border-[5px] border-gray-700 shadow-2xl overflow-hidden flex flex-col">

        {/* Login Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">

          <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/Comit-logo.webp"
                alt="COMITS"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-indigo-950">
                Welcome Back
              </h1>

              <p className="text-gray-500 mt-2">
                Sign in to access your account.
              </p>
            </div>

            {/* Mobile */}
            <label className="block mb-2 text-sm font-semibold text-indigo-950">
              MOBILE
            </label>

            <div className="flex items-center border rounded-xl overflow-hidden mb-5">

              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border-r">
                <FaPhoneAlt className="text-gray-500" />
              </div>

              <input
                type="text"
                placeholder="01XXXXXXXXX"
                className="flex-1 h-12 px-4 outline-none"
              />

            </div>

            {/* Password */}
            <label className="block mb-2 text-sm font-semibold text-indigo-950">
              PASSWORD
            </label>

            <div className="flex items-center border rounded-xl overflow-hidden">

              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border-r">
                <FaLock className="text-gray-500" />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 h-12 px-4 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-12 h-12 flex items-center justify-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>

            </div>

            {/* Remember */}
            <div className="flex justify-between items-center mt-5 mb-6">

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-[#25d184] font-medium text-sm"
              >
                Forgot password?
              </Link>

            </div>

            {/* Button */}
            <button className="w-full bg-[#25d184] hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t"></div>

              <span className="mx-4 text-gray-400 text-sm">
                or
              </span>

              <div className="flex-1 border-t"></div>
            </div>

            {/* Register */}
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-indigo-950"
              >
                Create one
              </Link>
            </p>

            {/* Skip */}
            <div className="text-center mt-5">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:underline"
              >
                Skip to Dashboard →
              </Link>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}