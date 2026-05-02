import Image from "next/image";
import Link from "next/link";
import React from "react";
function FeaturedBookCard({ book }) {
    return (
        <div className=" rounded-xl border border-gray-200
        shadow-xl">
            <div className="py-4">
                <img
                    src={book.image_url}
                    alt={book.title}
                    className="h-40 w-30 rounded m-auto"
                />
            </div>

            {/* <div className="border-t-2 border-gray-300 p-4">
                <h2 className="text-lg font-bold ">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.author}</p>

                <p className="text-sm mt-2 line-clamp-2">
                    {book.description}
                </p> */}

            {/* <button className="mt-4 bg-linear-to-r from-teal-500 to-cyan-500 hover:to-teal-500 hover:from-cyan-500 hover:text-teal-950 transition-all duration-300 cursor-pointer shadow text-white px-4 py-1.5 rounded ">
                    View Details
                </button> */}

            {/* Button only */}
            <div className="p-4 flex justify-center border-t border-gray-100">
                <Link href={`/books/${book.id}`}>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
        // </div >
    );
}

export default FeaturedBookCard;