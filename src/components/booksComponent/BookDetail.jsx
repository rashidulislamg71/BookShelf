"use client";

import { toast } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import Rating from "../ui/Rating";
import Image from "next/image";

export default function BookDetail({ book }) {
  const handleBorrow = () => {
    toast.success(`"${book.title}" borrowed successfully! 📚`);
  };

  return (
    <div className="min-h-auto p-0 md:p-10 md:bg-gray-100">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* img */}
        <div className="col-span-1 md:col-span-4 flex justify-center">

          <div className="relative h-48 w-36 lg:h-64 lg:w-48">

            <Image
              src={book.image_url?.trim() || "/fallback-book.png"}
              alt={book.title}
              fill
              className="rounded shadow"
            />

          </div>
        </div>

        {/* detail */}
        <div className="col-span-1 md:col-span-8 text-gray-800">

          {/* title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#005461]">
              {book.title}
            </h1>

            <p className="text-sm md:text-base font-medium text-gray-600 mt-1">
              by <span className="text-[#0C7779] font-semibold">{book.author}</span>
            </p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
            <Rating rating={book.rating} />
            <span className="text-gray-400 text-sm">| 1024 Reviews</span>
          </div>

          {/* category */}
          <div>
            <div className="badge text-white border-none px-3 py-2 rounded-full bg-linear-to-r from-[#249E94] to-[#3BC1A8]">
              {book.category}
            </div>
          </div>

          <div className="divider"></div>

          {/* description */}
          <div>
            <h3 className="text-lg font-bold text-[#005461] mb-2">
              Description
            </h3>
            <p className="">
              {book.description}
            </p>
          </div>

          {/* button and Availability */}
          <div className="mt-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#f0fdfa] p-4 rounded-xl border border-[#3BC1A8]">

              {/* Availability */}
              <div>
                <p className="text-xs text-gray-500">Availability</p>
                <p className={`font-bold ${book.available_quantity > 0 ? 'text-[#0C7779]' : 'text-red-500'}`}>
                  {book.available_quantity > 0
                    ? `${book.available_quantity} copies available`
                    : "Out of Stock"}
                </p>
              </div>

              {/* button */}
              <button
                onClick={handleBorrow}
                disabled={book.available_quantity <= 0}
                className="btn text-white border-none px-6 flex items-center gap-2 transition-all duration-300 group
            bg-[#0C7779] hover:bg-[#249E94]
            disabled:opacity-50"
              >
                Borrow Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}