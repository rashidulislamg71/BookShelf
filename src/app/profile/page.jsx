

"use client";

import React from "react";
import Link from "next/link";
import { FaUser, FaCamera, FaArrowLeft, FaSave, FaImage } from "react-icons/fa";

function ProfilePage() {

  const handleImageChange = (e) => {


  };

  const onSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-36 pb-20 md:px-16 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-xl  border border-gray-100 overflow-hidden">

        {/* Header with Back Button */}
        <div className="bg-teal-600 p-6 text-white relative">
          <Link
            href="/"
            className="absolute left-4 top-6 p-2 hover:bg-teal-700 rounded-full transition-colors"
          >
            <FaArrowLeft />
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold">Edit Profile</h1>
            <p className="text-teal-100 text-sm">Personalize your bookshelf account</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-8">
          {/* Profile Image Upload Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="w-28 h-28 bg-gray-100 rounded-full  ">
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <FaUser size={48} />
                </div>

              </div>
              <label
                className="absolute bottom-1 right-1 bg-teal-600 p-2 rounded-full text-white cursor-pointer shadow hover:bg-teal-700 transition-transform active:scale-90"
              >
                <FaCamera size={14} />
                <input
                  id="image-upload"
                  name="profileImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider font-semibold">Change Photo</p>
          </div>

          <div className="space-y-6">
            {/* Name Input */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                Image Source
              </label>
              <div className="relative">
                <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  name="image_url"
                  type="text"
                  placeholder="Or paste an image URL"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg mt-4 hover:bg-teal-700 shadow-md shadow-teal-100 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <FaSave />
              Update Information
            </button>
          </div>
        </form>

        <div className="px-8 pb-8 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            Cancel and go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;