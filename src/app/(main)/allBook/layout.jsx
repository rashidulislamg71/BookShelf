import React from "react";
import BookCategories from "@/components/categories/BookCategories";
import { books } from "@/lib/booksData";

function AllBookPageLayout({ children }) {
  const booksData = books || [];
  const categories = [
    { id: 1, name: "Religion" },
    { id: 2, name: "Islamic Literature" },
    { id: 3, name: "Fiction" },
    { id: 4, name: "Non-Fiction" },
    { id: 5, name: "Science" },
    { id: 6, name: "Technology" },
    { id: 7, name: "Self Development" },
    { id: 8, name: "History" },
    { id: 9, name: "Novel" },
    { id: 10, name: "Story" },
    { id: 11, name: "Education" },
    { id: 12, name: "Programming" },
    { id: 13, name: "Business" },
    { id: 14, name: "Health & Fitness" },
    { id: 15, name: "Poetry" },
  ];

  return (
    <div className="relative mt-20">
      <div className="drawer lg:drawer-open min-h-[calc(100vh-64px)]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        {/* Main Content Area */}
        <div className="drawer-content flex flex-col p-4 ">
          <div className="flex lg:hidden mb-4">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-sm btn-teal-600 drawer-button"
            >
              Filters
            </label>
          </div>

          <div className="w-full">{children}</div>
        </div>

        {/* Sidebar Drawer */}
        <div className="drawer-side z-40 mt-20 md:mt-0">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu bg-base-100 text-base-content min-h-full w-72  border-r border-gray-100">
            <div className="border-b border-gray-300 w-full pb-2">
              <h2 className="pt-3 md:pt-8  text-xl font-bold text-teal-600 ">
                Categories
              </h2>
            </div>
            <BookCategories
              categories={categories}
              active_id={null}
              books={booksData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBookPageLayout;
