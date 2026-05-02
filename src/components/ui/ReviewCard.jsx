
import React from "react";

function ReviewCard({ review }) {
    const { name, country, comment, rating, image } = review;

    return (
        <div className="relative w-[380px] md:w-[420px] md:p-6 rounded-xl backdrop-blur-md border border-gray-300 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

            {/* Soft Gradient Glow (Bottom Left) */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-linear-to-tr from-amber-400/30 to-transparent blur-2xl"></div>

            {/* Soft Gradient Glow (Bottom Left) */}
            <div className="absolute bottom-0 -right-10 w-40 h-40 bg-linear-to-tr from-teal-400/30   to-transparent blur-2xl"></div>

            {/* Top Section */}
            <div className="flex justify-between items-start relative z-10">

                {/* User Info */}
                <div className="flex items-center gap-4">

                    <img
                        src={image}
                        alt={name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-300 shadow"
                    />

                    <div>
                        <h3 className="font-semibold text-gray-900">{name}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                            {country}
                        </p>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>
                            {i < rating ? "★" : "☆"}
                        </span>
                    ))}
                </div>
            </div>

            {/* Comment */}
            <div className="mt-4 relative z-10">
                <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3 border-l-2 border-teal-400 pl-3">
                    “{comment}”
                </p>
            </div>
        </div>
    );
}

export default ReviewCard;