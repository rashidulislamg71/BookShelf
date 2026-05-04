import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Rating from './Rating'
import Image from 'next/image'

function BookCard({ book }) {


    return (
        <div className="md:bg-white md:rounded-xl md:border
         md:border-gray-100 p-2 md:py-4 shadow-sm hover:shadow-lg transition duration-300">

            {/* Image */}
            <div className="">

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


                {/* Category badge
                <span className="absolute top-2 left-2 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                    {book.category}
                </span> */}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-3 text-gray-700 line-clamp-1">
                {book.title}
            </h3>

            {/* Author */}
            {/* <p className='text-gray-500 text-sm'>
                {book.author}
            </p> */}

            {/* Rating */}
            {/* <Rating rating={book.rating} /> */}

            {/* Button */}
            <Link href={`/allBook/${book.id}`}>
                <Button className="w-full mt-3">
                    Details
                </Button>
            </Link>
        </div>
    )
}

export default BookCard