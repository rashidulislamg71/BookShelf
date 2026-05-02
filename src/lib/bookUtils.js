

export const searchBook = (books, searchText) => {
  if (!searchText) return books;

  const text = searchText.toLowerCase();

  return books.filter((book) =>
    book.title.toLowerCase().includes(text) ||
    book.author.toLowerCase().includes(text) ||
    book.description.toLowerCase().includes(text) ||
    book.category.toLowerCase().includes(text)
  );
};