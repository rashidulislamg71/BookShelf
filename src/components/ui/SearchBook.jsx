"use client";

import React from "react";

function SearchBooks({ search, setSearch }) {
  return (
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
  );
}

export default SearchBooks;
