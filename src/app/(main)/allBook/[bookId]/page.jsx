import React from "react";
import BookDetail from "@/components/booksComponent/BookDetail";
import { books } from "@/lib/booksData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function BookDetailPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) {
    redirect("/login");
    return;
  }

  const { bookId } = await params;

  const expectedBook = books.find((b) => b.id === Number(bookId));

  if (!expectedBook) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <BookDetail book={expectedBook} />;
    </div>
  );
}

export default BookDetailPage;
