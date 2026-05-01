import bookData from "/booksData.json";

export const fetchBookData = async () => {
  const res = await fetch("/public/booksData.json");
  const data = await res.json();
  return data;
};
