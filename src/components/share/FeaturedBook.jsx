import React from "react";
import FeaturedBookCard from "../ui/FeaturedBookCard";
import { books } from "@/lib/booksData"

export default function FeaturedBooks() {

    const featuredBooks = books.slice(0, 4);

    return (
        <section className="px-4 py-20 md:px-16">
            <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-bold mb-10 md:mb-15">Featured Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredBooks.map((book) => (
                    <FeaturedBookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
}