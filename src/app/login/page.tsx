"use client";

import Image from "next/image";
import Link from "next/link";
import {FaPhoneAlt, FaLock, FaEye, FaHome, FaSignInAlt, FaUserPlus, FaBook, FaPhone} from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center py-4">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-sm min-h-screen bg-[#F3F5F8] rounded-[35px] border-[5px] border-gray-700 overflow-hidden flex flex-col">

        {/* Logo */}
        <div className="flex justify-center items-center p-8">
          <Image
            src="/logo.jpg"
            alt="WB Software"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Login Card */}
        <div className="px-5 mb-5">
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h1 className="text-4xl font-semibold text-center text-blue-500 mb-8">
              Login
            </h1>

            {/* Mobile */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-5">

              <div className="bg-gray-100 py-4">
                <FaPhoneAlt className="text-gray-600 text-lg" />
              </div>

              <input
                type="text"
                placeholder="Mobile"
                className="flex-1 px-4 py-4 outline-none"
              />

            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-5">

              <div className="bg-gray-100 px-5 py-4">
                <FaLock className="text-gray-600 text-lg" />
              </div>

              <input
                type="password"
                placeholder="Password"
                className="flex-1 px-4 py-4 outline-none"
              />

              <button className="px-5">
                <FaEye className="text-gray-500 text-lg" />
              </button>

            </div>

            {/* Remember */}
            <div className="flex justify-between items-center mb-6">

              <label className="flex items-center gap-2 text-[17px]">

                <input
                  type="checkbox"
                  className="w-5 h-5"
                />

                Remember me

              </label>

              <Link
                href="/forgot-password"
                className="text-blue-500 text-[17px]"
              >
                Forgot Password
              </Link>

            </div>

            {/* Login Button */}

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold text-xl transition">

              Login

            </button>

            {/* Register */}

            <p className="text-center mt-6 text-lg">

              Don't have an account?{" "}

              <Link
                href="/register"
                className="text-blue-500"
              >
                Register
              </Link>

            </p>

          </div>
        </div>

        {/* Bottom Navigation */}

        <nav className="bg-white border-t shadow-md py-3">

          <div className="grid grid-cols-5">

            <Link
              href="/"
              className="flex flex-col items-center text-gray-800"
            >
              <FaHome className="text-xl" />
              <span className="text-sm mt-1">Home</span>
            </Link>

            <Link
              href="/login"
              className="flex flex-col items-center text-blue-500"
            >
              <FaSignInAlt className="text-xl" />
              <span className="text-sm mt-1">Login</span>
            </Link>

            <Link
              href="/register"
              className="flex flex-col items-center text-gray-800"
            >
              <FaUserPlus className="text-xl" />
              <span className="text-sm mt-1">Register</span>
            </Link>

            <Link
              href="/blog"
              className="flex flex-col items-center text-gray-800"
            >
              <FaBook className="text-xl" />
              <span className="text-sm mt-1">Blog</span>
            </Link>

            <Link
              href="/contact"
              className="flex flex-col items-center text-gray-800"
            >
              <FaPhone className="text-xl" />
              <span className="text-sm mt-1">Contact</span>
            </Link>

          </div>

        </nav>

      </div>
    </main>
  );
}