import Link from "next/link";
import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen md:pt-30 pt-20 md:pb-20 flex items-center justify-center px-6 overflow-hidden bg-linear-to-r from-[#00b894]/10 to-[#81ecec]/10">
            <div className="max-w-2xl w-full text-center relative z-10">

                {/* Visual Section */}
                <div className="flex justify-center">
                    <h1 className="text-5xl md:text-9xl font-black bg-linear-to-bl from-teal-600 
                     to-teal-50 bg-clip-text text-transparent leading-none select-none tracking-tighter">
                        404
                    </h1>
                </div>

                {/* Text Content */}
                <div className="space-y-5 mt-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 tracking-tight">
                        Oops! This page is{" "}
                        <span className="text-[#0C7779]">checked out</span>
                    </h2>

                    <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
                        The page you’re looking for might have been removed, renamed, or is temporarily unavailable.
                        <br />
                        <span className="font-medium text-[#249E94]">But your next great book is still waiting for you.</span>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-5">

                    <Link href="/" className="w-full sm:w-auto cursor-pointer">
                        <button className="cursor-pointer flex items-center justify-center gap-3 bg-[#0C7779] hover:bg-[#005461] text-white px-6 py-2 rounded-sm font-bold transition-all duration-300 shadow-xl shadow-[#0C7779]/20 active:scale-95">
                            <FaHome ize={18} className="hidden md:block" />
                            Back to Home
                        </button>
                    </Link>

                    <Link href="/allBook" className="w-full sm:w-auto ">
                        <button className="cursor-pointer flex items-center justify-center gap-3 bg-white border-2 border-gray-100 hover:border-[#3BC1A8] hover:text-[#3BC1A8] text-gray-700 px-6
                         py-2 rounded-sm font-bold transition-all duration-300 shadow-sm active:scale-95">
                            <FaSearch size={18} className="hidden md:block" />
                            Browse Books
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}