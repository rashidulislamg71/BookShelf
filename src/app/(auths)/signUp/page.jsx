

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Form,
  TextField,
  Input,
  Label,
  FieldError,
  Button,
  InputGroup,
} from "@heroui/react";

import { FaUser, FaEnvelope, FaLock, FaBookOpen, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

function SignupPage() {
  const router = useRouter();


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: "/login"

    })

    if (error) {
      alert(error.message || "Something went wrong");
    }

    if (data) {
      router.push("/login");
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center pb-20 pt-36 md:px-16">
      <div className="max-w-xl w-full bg-white rounded-xl">

        {/* top bar */}
        <div className="h-2 bg-teal-600 w-full"></div>

        <div className="p-4">
          {/* header */}
          <div className="text-center mb-5">
            <div className="flex justify-center">
              <div className="p-3 bg-teal-50 rounded-full">
                <FaBookOpen className="text-4xl text-teal-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-500 mt-1">Start your reading journey today</p>
          </div>

          {/* google */}
          <button className="cursor-pointer w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700 shadow-sm">
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </button>

          {/* divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-xs text-gray-400">Or</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* form */}
          <Form
            className="space-y-3 "
            render={(props) => <form {...props} />}
            onSubmit={onSubmit}
          >

            {/* name */}
            <TextField
              className="group"
              name="name"
              isRequired
              validate={(value) => {
                if (value.length < 3) return "Name must be 3+ characters";
              }}
            >

              <Label className="block text-sm font-medium text-gray-700">Full Name</Label>
              <div className="relative">


                <Input name="name" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all" placeholder="John Doe" />

                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
              </div>
              <FieldError className="text-sm text-red-500 mt-1 ml-1" />
            </TextField>

            {/* email */}
            <div>
              <TextField
                className="group"
                name="email"
                type="email"
                isRequired
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Enter valid email";
                  }
                }}
              >
                <Label className="block text-sm font-medium text-gray-700">Email</Label>
                <div className="relative">

                  <Input name="email" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all" placeholder="you@example.com" />

                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                </div>
                <FieldError className="text-sm text-red-500 mt-1 ml-1" />
              </TextField>
            </div>

            {/* image url */}
            {/* <TextField
              name="image_url"
              type="url"
              // isRequired
              validate={(value) => {
                if (!value.startsWith("http")) {
                  return "Enter a valid image URL";
                }
              }}
            >
              <Label>Image URL</Label>
              <Input className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all" placeholder="https://example.com/image.jpg" />
              <FieldError />
            </TextField> */}

            {/* password */}
            <TextField
              name="password"
              type="password"
              className="group"
              isRequired
              validate={(value) => {
                if (value.length < 8) return "Min 8 characters";
                if (!/[A-Z]/.test(value)) return "1 uppercase required";
                if (!/[0-9]/.test(value)) return "1 number required";
              }}
            >
              <Label className="block text-sm font-medium text-gray-700">Password</Label>
              <div className="relative">

                <Input className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all" placeholder="••••••••" />

                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
              </div>
              <FieldError className="text-sm text-red-500 mt-1 ml-1" />
            </TextField>

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-2.5 rounded-lg mt-4 hover:bg-teal-700 shadow-md transition-all flex items-center justify-center gap-2"
            >
              Get Started
              <FaArrowRight />
            </button>

          </Form>

          {/* footer */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?
            <Link href="/login" className="text-teal-600 font-bold ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;