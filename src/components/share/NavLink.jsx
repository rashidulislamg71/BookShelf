"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-teal-700 transition-all ${isActive ? "text-teal-700 border-b-2 border-teal-700" : ""
        } ${className}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;