
"use client";

import React, { useState } from "react";
import Link from "next/link";

function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="">

      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mt-2 mb-6">
            Join our book club & get special discounts 📚
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#3BC1A8]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:ring-[#3BC1A8]"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://your-image.com"
                value={form.photo}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:ring-[#3BC1A8]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:ring-[#3BC1A8]"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl bg-[#0C7779] hover:bg-[#249E94] text-white font-semibold transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 text-sm">OR</div>

          {/* Google Button */}
          <button className="btn w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700">
            Continue with Google
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0C7779] font-semibold hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignupPage;