import React from "react";
import FeaturedBookCard from "./FeaturedBookCard";
import { books } from "@/lib/booksData";

export default function FeaturedBooks() {
  const featuredBooks = books.slice(0, 4);

  return (
    <section className="py-14 px-4 md:px-12 lg:px-16 md:pt-25 ">

      {/* section title */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Featured Books You’ll Love
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Handpicked books from different genres to help you discover your next great read.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredBooks.map((book) => (
          <FeaturedBookCard key={book.id} book={book} />
        ))}
      </div>

    </section>
  );
}