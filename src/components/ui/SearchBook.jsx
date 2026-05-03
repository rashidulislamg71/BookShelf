
"use client";
import React, { useState } from "react";
import BookCard from "@/components/ui/BookCard";
import { searchBook } from "@/lib/bookUtils";
import { FaBookOpen } from "react-icons/fa";

function SearchBooks({ books }) {
  const [search, setSearch] = useState("");

  const filteredBooks = searchBook(books, search);

  return (
    <>
      {/* search input */}
      <div className="mt-0 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search by title, author, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 shadow-sm rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-[#15b7ba]"
        />
      </div>

      {/* books */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </>
  );
}

export default SearchBooks;