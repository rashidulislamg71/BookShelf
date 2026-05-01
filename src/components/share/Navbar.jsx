import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm py-2 px-4 md:px-16">

                {/* LEFT */}
                <div className="navbar-start">

                    {/* MOBILE MENU */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/allBook">All Books</NavLink>
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link href="/" className=" text-xl">
                        BookShelf
                    </Link>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/allBook">All Books</NavLink>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end ">
                    <ul className="flex gap-5">

                        <NavLink className="border border-text-[#FFC85C] text-teal-700 hover:bg-teal-50 duration-300 py-1 px-3 rounded" href="/signup">SignUp</NavLink>

                        <NavLink className="bg-teal-600 text-white py-1 px-3 rounded hover:bg-teal-400 duration-300" href="/login">Login</NavLink>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;