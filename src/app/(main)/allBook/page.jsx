"use client";

import React, { useState } from "react";
import { books } from "@/lib/booksData";
import SearchBooks from "@/components/ui/SearchBook";
import { FaBookOpen } from "react-icons/fa";
import BookCard from "@/components/ui/BookCard";
import { searchBook } from "@/lib/bookUtils";

function AllBooksPage() {
 const [search, setSearch] = useState("");

  const filteredBooks = searchBook(books, search);

  return (
    <section className="pt-10 pb-16 px-4 md:px-10">
      {/* hero section*/}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
          Explore All Books
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover thousands of books, find your favorites, and start reading
          anytime, anywhere.
        </p>
      </div>

      <SearchBooks search={search} setSearch={setSearch} />

      {/* books */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="h-48 w-52 m-auto rounded-md shadow-md flex flex-col justify-center items-center gap-2 text-center text-gray-400 mt-10">
          <FaBookOpen className="text-5xl text-teal-600 bg-teal-300/20 p-2 rounded" />
          Sorry! No books found.
        </p>
      )}
    </section>
  );
}

export default AllBooksPage;
