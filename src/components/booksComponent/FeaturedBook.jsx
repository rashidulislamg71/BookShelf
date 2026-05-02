import React from "react";
import FeaturedBookCard from "./FeaturedBookCard";
import { books } from "@/lib/booksData"

export default function FeaturedBooks() {

    const featuredBooks = books.slice(0, 4);

    return (
        <section className="px-4 py-20 md:px-16">
            {/* section title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Featured Books You’ll Love
                </h2>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Handpicked books from different genres to help you discover your next great read.
                </p>
            </div>
            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredBooks.map((book) => (
                    <FeaturedBookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
}