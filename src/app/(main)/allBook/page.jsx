
"use Client"
import React from "react";
import { books } from "@/lib/booksData";
import SearchBooks from "@/components/ui/SearchBook";


function AllBooksPage() {

  return (
    <section className="pt-28 pb-16 px-4 md:px-16">

      {/* hero section*/}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
          Explore All Books
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover thousands of books, find your favorites, and start reading anytime, anywhere.
        </p>
      </div>

      <SearchBooks books={books} />
    </section>
  );
}

export default AllBooksPage;