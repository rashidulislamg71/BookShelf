import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { LuStar } from "react-icons/lu"

function BookCard({ book }) {
    return (
        <div>
            <div
                className="md:bg-white md:rounded-xl md:border
                md:border-gray-100 p-2 md:py-4 shadow-sm hover:shadow-lg transition duration-300"
            >

                {/* Image */}
                <div className="flex justify-center relative">


                    {book.image_url && (
                        <img
                            src={book.image_url}
                            alt={book.title}
                            className="h-32 md:h-40 object-contain transition-transform duration-300 hover:scale-105"
                        />
                    )}

                    {/* Category badge */}
                    <span className="absolute top-2 left-2 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                        {book.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mt-3 text-gray-700 line-clamp-1">
                    {book.title}
                </h3>

                {/* Author */}
                <p className='text-gray-500 text-sm'>
                    {book.author}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <LuStar
                            key={i}
                            className={`w-4 h-4 ${i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                        />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                        ({book.rating}.0)
                    </span>
                </div>

                {/* Button */}
                <Link href={`/books/${book.id}`}>
                    <Button className="w-full mt-3">
                        View Details
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default BookCard