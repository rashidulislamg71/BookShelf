
"use client"

import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

function Navbar() {

    const pathname = usePathname();

    const isHome = pathname === "/";
    return (
        <div className="fixed w-full z-100">
            <div
                className={`navbar px-2 md:px-8 lg:px-16 py-2
    backdrop-blur-md
    border-b border-white/20
    shadow-sm
    transition-all duration-300
    ${isHome
                        ? "bg-white/10"
                        : "bg-white/60"
                    }`}
            >

                {/* left */}
                <div className="navbar-start">

                    {/* mobile menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" btn-ghost lg:hidden mr-2">
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

                    {/* logo */}
                    <Link href="/" className="flex items-end ">
                        <Logo />
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-teal-800  ">BookShelf</h1>
                        </div>
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

                        <NavLink className="border border-text-[#FFC85C] text-teal-700 hover:bg-teal-50 duration-300 py-1.5 px-3 rounded" href="/signup">SignUp</NavLink>

                        <NavLink className="bg-linear-to-r from-teal-700 to-teal-400 text-white py-1.5 px-3 rounded " href="/login">Login</NavLink>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;