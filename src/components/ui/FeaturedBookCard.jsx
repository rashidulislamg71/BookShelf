import Image from "next/image";
import React from "react";
function FeaturedBookCard({ book }) {
    return (
        <div className=" rounded-lg p-4 shadow-md hover:shadow-xl transition">
            {/* <Image
                src={book.image_url ? "" : ""}
                alt={book.title}
                className="h-40 w-full object-cover rounded"
            /> */}

            <h2 className="text-lg font-bold mt-2">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.author}</p>

            <p className="text-sm mt-2 line-clamp-3">
                {book.description}
            </p>

            <button className="mt-3  bg-linear-to-r from-teal-500 to-cyan-500 hover:to-teal-500 hover:from-cyan-500 transition-all duration-300 cursor-pointer shadow text-white px-4 py-1.5 rounded ">
                View Details
            </button>
        </div>
    );
}

export default FeaturedBookCard;