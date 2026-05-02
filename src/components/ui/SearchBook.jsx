
"use client";
import React, { useState } from "react";
import BookCard from "@/components/ui/BookCard";
import { searchBook } from "@/lib/bookUtils";

function SearchBooks({ books }) {
  const [search, setSearch] = useState("");

  const filteredBooks = searchBook(books, search);

  return (
    <>
      {/* search input */}
      <div className="mt-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search by title, author, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-[#0C7779]"
        />
      </div>

      {/* books */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No books found 😢
        </p>
      )}
    </>
  );
}

export default SearchBooks;