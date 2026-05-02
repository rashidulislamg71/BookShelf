"use client";

import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import Button from "../ui/Button";

function FeaturedBookCard({ book }) {
    return (
        <div className="group">

            <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">

                <img
                    src={book.image_url}
                    alt={book.title}
                    className="w-auto h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />

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

            {/* button */}
            <div className="mt-3">
                <Link href={`/books/${book.id}`} >
                  <Button className="w-full" >
                    View Details
                  </Button>
                </Link>
            </div>

        </div>
    );
}

export default FeaturedBookCard;