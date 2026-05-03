"use client"

import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Logo from "../ui/Logo";
import { signOut, useSession } from "@/lib/auth-client";
import { FaUser } from "react-icons/fa";

function Navbar() {

    const { data, isPending } = useSession();
    const user = data?.user;

    return (
        <div className="fixed w-full z-[100]">
            <div
                className={`navbar px-2 md:px-8 lg:px-16 py-2
        backdrop-blur-md
        border-b border-white/20
        shadow-sm
        transition-all duration-300
        `}
            >

                {/* left section */}
                <div className="navbar-start">

                    {/* mobile menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn-ghost lg:hidden mr-2">
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

                            <li>
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/allBook">All Books</NavLink>

                            </li>
                        </ul>
                    </div>

                    {/* logo */}
                    <Link href="/" className="flex items-end gap-2">
                        <Logo />
                        <h1 className="text-xl md:text-2xl font-semibold text-teal-800">
                            BookShelf
                        </h1>
                    </Link>
                </div>

                {/* center menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10">

                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/allBook">All Books</NavLink>
                        </li>

                    </ul>
                </div>

                {/* right section */}
                <div className="navbar-end">
                    <ul className="flex gap-5">
                        {
                            isPending ? <li>
                                <NavLink
                                    className="border-2 border-teal-200 hover:border-teal-500  text-teal-700
                             hover:bg-teal-50 duration-300 py-1 px-5 rounded"
                                    href="/login"
                                >
                                    Login
                                </NavLink>
                            </li> : user ? <div className="flex gap-2 justify-center items-center"><FaUser /> <button onClick={(() => signOut())}>Sign out</button></div> :
                                <li>
                                    <NavLink
                                        className="border-2 border-teal-200 hover:border-teal-500  text-teal-700
                             hover:bg-teal-50 duration-300 py-1 px-5 rounded"
                                        href="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;


