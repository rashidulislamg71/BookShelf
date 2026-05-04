"use client";

import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import Button from "../ui/Button";
import Image from "next/image";

function FeaturedBookCard({ book }) {
    return (
        <div className="group">
            <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">

                <div className="flex justify-center">
                    <div className="relative w-33 h-48 overflow-hidden ">
                        <Image
                            src={book.image_url?.trim() || "/fallback-book.png"}
                            alt={book.title}
                            fill
                            className="object-cover hover:scale-105 transition duration-300"
                        />
                    </div>
                </div>
                {/* hover effect */}
                <div className="absolute inset-0  bg-linear-to-r from-teal-700/30 to-teal-400/30  opacity-0 
                        group-hover:opacity-100 transition-all duration-500 
                        flex items-center justify-center">

                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded 
                          flex items-center justify-center text-white border border-white/30">
                        <LuExternalLink size={18} />
                    </div>
                </div>
            </div>

              {/* Title */}
            <h3 className="text-xl font-semibold mt-3 text-gray-700 line-clamp-1">
                {book.title}
            </h3>

            {/* button */}
            <div className="mt-3">
                <Link href={`/allBook/${book.id}`} >
                    <Button className="w-full" >
                        View Details
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default FeaturedBookCard;