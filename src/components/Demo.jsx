"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import Rating from "./ui/Rating";
import { FaArrowRight } from "react-icons/fa";

export default function Demo({ book }) {
    //   const handleBorrow = () => {
    //     toast.success(`"${book.title}" borrowed successfully! 📚`);
    //   };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 md:p-10">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-6xl w-full overflow-hidden">

                {/* Left - Book Cover */}
                <figure className="lg:w-2/5 bg-neutral p-8 flex justify-center items-center">
                    <div className="relative w-ful h-full border">

                    </div>
                </figure>

                {/* Right - Book Info */}
                <div className="card-body lg:w-3/5 gap-4">
                    {/* Title and Author */}
                    <div>
                        <div className="">
                            <h1 className="text-3xl md:text-3xl font-extrabold text-gray-700 ">Eak Nojore Quaren</h1>
                        </div>
                        <p className="font-semibold text-[15px] text-gray-500">
                            by <span className="">Dr. Mejanur Rahman </span>
                        </p>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center gap-2">
                        <Rating rating={4} />
                        <span className="text-gray-400 text-sm">| 124 Reviews</span>
                    </div>

                    {/* Categories/Tags */}
                    <div className=" mt-1">
                        <div className="badge badge-ghost rounded-full badge-outline">Fiction</div>
                    </div>

                    <div className="divider"></div>

                    {/* Description */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Description</h3>
                        <p className="text-base leading-relaxed opacity-80 italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem beatae eius doloremque ducimus dolorum, recusandae laudantium voluptas aspernatur officiis repudiandae? Quis porro cumque rem. Excepturi autem asperiores accusantium minus?
                        </p>
                    </div>

                    {/* Availability & Action */}
                    <div className="mt-auto pt-6">
                        <div className="group flex items-center justify-between bg-base-200 p-4 rounded-md">
                            <div>
                                <p className="text-sm opacity-60">Availability</p>
                                <p className={`font-bold ${[].available_quantity > 0 ? 'text-success' : 'text-error'}`}>
                                    {[].available_quantity > 0
                                        ? `${[].available_quantity} copies available`
                                        : "Out of Stock"}
                                </p>
                            </div>


                            <button
                                disabled={[].available_quantity <= 0}
                                className="btn lg:btn-wide bg-teal-600 text-white 
  hover:bg-teal-700 shadow-md transition-all duration-300 
  flex items-center gap-2 group"
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