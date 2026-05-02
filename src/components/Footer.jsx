// "use client";

// import React from 'react';
// import Link from 'next/link';

// import {
//   LuFacebook,
//   LuTwitter,
//   LuInstagram,
//   LuGithub,
//   LuMail,
//   LuMapPin,
//   LuPhone,
//   LuArrowRight
// } from "react-icons/lu";
// import Logo from './ui/Logo';
// import NavLink from './share/NavLink';

// function Footer() {

//   const quickLinkIcon = <LuArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all text-[#3BC1A8]" />



//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative mt-20 overflow-hidden">
//       {/* Modern Gradient Background */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "linear-gradient(135deg, #005461 0%, #0C7779 50%, #249E94 100%)"
//         }}
//       />

//       {/* Decorative Blur Circles for Modern Look */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#3BC1A8] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 blur-[120px] translate-x-1/3 translate-y-1/3"></div>

//       <div className="relative z-10 pt-20 pb-10 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

//           {/* Brand Section - Takes 4 cols */}
//           <div className="md:col-span-5 space-y-6">
//             {/* logo  */}
//             <div className="flex items-center gap-3 border-b-2 border-amber-300 pb-1 w-fit  ">
//               <Logo />
//             </div>

//             <p className="text-gray-200 text-md leading-relaxed max-w-md">
//               Your digital gateway to thousands of stories. Join our community and start your reading journey today with seamless borrowing.
//             </p>

//             <div className="flex gap-4">
//               {[LuFacebook, LuTwitter, LuInstagram, LuGithub].map((Icon, i) => (
//                 <Link key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#3BC1A8] hover:text-[#005461] hover:-translate-y-1 transition-all duration-300">
//                   <Icon size={20} />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links - Takes 2 cols */}
//           <div className="md:col-span-3 space-y-6">
//             <h4 className=" text-white font-bold text-xl relative inline-block">
//               Explore
//             </h4>
//             <ul className="space-y-4">
//               <div>
//                 <NavLink href="/" className="text-gray-300 hover:text-white flex items-center gap-2 group transition-all" >Home</NavLink>
//                 <span>{quickLinkIcon}</span>
//               </div>

//             </ul>
//           </div>

//           {/* Contact Us Section - Takes 4 cols */}
//           <div className="md:col-span-4 space-y-6">
//             <h4 className="text-white font-bold text-xl relative inline-block">
//               Contact Us
//             </h4>
//             <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 space-y-5">
//               <div className="flex items-start gap-4">
//                 <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
//                   <LuMapPin className="text-[#3BC1A8]" />
//                 </div>
//                 <span className="text-gray-200">123 Library Lane, Digital City, 54321</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
//                   <LuPhone className="text-[#3BC1A8]" />
//                 </div>
//                 <span className="text-gray-200">+880 1234 567 890</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
//                   <LuMail className="text-[#3BC1A8]" />
//                 </div>
//                 <span className="text-gray-200">hello@bookflow.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-sm italic">
//             © {currentYear} BookFlow. Crafted for book lovers everywhere.
//           </p>
//           <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
//             <Link href="#" className="hover:text-[#3BC1A8] transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-[#3BC1A8] transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


"use client";

import React from "react";
import Link from "next/link";
import {
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuGithub,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import Logo from "./ui/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { icon: LuFacebook, href: "#" },
    { icon: LuTwitter, href: "#" },
    { icon: LuInstagram, href: "#" },
    { icon: LuGithub, href: "#" },
  ];

  // Menu links data
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/allBook" },
    { name: "My Profile", href: "/profile" },
    { name: "Login", href: "/login" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #005461 0%, #0C7779 50%, #249E94 100%)",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3BC1A8] opacity-50 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-30 blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 pt-20 pb-10 px-6 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* logo */}
          <div className="md:col-span-5 space-y-6">

            <div className="flex items-end w-fit border-b-2 border-amber-300 pb-1">
              <Logo />
              <h1 className="text-2xl font-semibold text-white" >Book<span className='text-teal-500'>Shelf</span></h1>
            </div>

            <p className="text-gray-200 text-md leading-relaxed max-w-md">
              Your digital gateway to thousands of stories.
              Join our community and start your reading journey today.
            </p>

            {/* social */}
            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#3BC1A8] hover:text-[#005461] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* menu */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-xl">Explore</h4>

            <ul className="space-y-4">
              {menuLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* contact */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-xl">Contact Us</h4>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 space-y-5">

              {/* address  */}
              <div className="flex items-start gap-4">
                <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
                  <LuMapPin className="text-[#3BC1A8]" />
                </div>
                <span className="text-gray-200">Dhaka, Bangladesh</span>
              </div>

              {/* phone  */}
              <div className="flex items-center gap-4">
                <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
                  <LuPhone className="text-[#3BC1A8]" />
                </div>
                <span className="text-gray-200">+880 1234 567 890</span>
              </div>

              {/* email  */}
              <div className="flex items-center gap-4">
                <div className="bg-[#3BC1A8]/20 p-2 rounded-lg">
                  <LuMail className="text-[#3BC1A8]" />
                </div>
                <span className="text-gray-200">hello@bookflow.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {currentYear} BookFlow. Crafted for book lovers.
          </p>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-[#3BC1A8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#3BC1A8] transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;