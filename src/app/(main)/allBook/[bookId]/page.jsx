

import React from 'react';
import BookDetail from "@/components/booksComponent/BookDetail";
import { books } from '@/lib/booksData';

async function BookDetailPage({ params }) {
  const { bookId } = await params;

  const expectedBook = books.find(
    (b) => b.id === Number(bookId)
  );

  if (!expectedBook) {
    return <h1>Book Not Found</h1>;
  }

  return <BookDetail book={expectedBook} />;
}




export default BookDetailPage

