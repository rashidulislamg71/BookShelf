"use client";

import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock, FaBookOpen, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Login Attempt:", data);
    alert("Welcome back to BookShelf!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pb-20 pt-36 md:px-16">
      <div className="max-w-xl w-full bg-white rounded-xl  ">

        {/* Top Decorative Bar */}
        <div className="h-2 bg-teal-600 w-full"></div>

        <div className="p-4">
          {/* Header */}
          <div className="text-center mb-5">
            <div className="flex justify-center ">
              <div className="p-3 bg-teal-50 rounded-full">
                <FaBookOpen className="text-4xl text-teal-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-500 mt-1">Start your reading journey today</p>
          </div>

          {/* Google Button */}
          <button
            onClick={() => console.log("Google Login")}
            className="cursor-pointer w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700 shadow-sm active:scale-[0.98]"
          >
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-xs uppercase tracking-widest text-gray-400 font-semibold">Or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>


          {/* Login Form */}
          <form onSubmit={onSubmit} className="space-y-3">

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <div className="flex justify-between items-center ">
                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Password</label>
                <a href="#" className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Remember Me Toggle (Optional) */}
            <div className="flex items-center space-x-2 ml-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 select-none cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-3.5
               rounded-lg mt-4 hover:bg-teal-700 shadow-md shadow-teal-100 hover:shadow-teal-200 transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
            >
              Sign In
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account yet?{" "}
            <Link href="/signup" className="text-teal-600 font-bold hover:text-teal-700 transition-colors">
              Create one now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;