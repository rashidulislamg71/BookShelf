"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children, className }) {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <li>
            <Link href={href} className={`hover:text-teal-700 ${isActive ? "border-b-2 text-teal-700" : ""} ${className} `} >{children}</Link>
        </li>
    );
}

export default NavLink;