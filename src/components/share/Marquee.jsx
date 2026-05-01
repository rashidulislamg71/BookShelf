import React from "react";
import Marquee from "react-fast-marquee";
import { FaGift, FaTruck } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

function MarqueeComponent() {
  const announcements = [
    {
      type: "badge",
      label: "NEW",
      text: "New Arrivals:",
      highlight: "Don't Be Sad",
    },
    {
      type: "icon",
      text: "Special 25% Discount on Memberships",
      icon: <MdOutlineDiscount className="text-teal-600 text-2xl mr-2" />,
    },
    {
      type: "badge",
      label: "HOT",
      text: "Trending:",
      highlight: "Forty Hadith Nawawi",
    },
    {
      type: "icon",
      text: "Free Shipping on orders over 500 BDT",
      icon: <TbTruckDelivery className="text-green-500 text-2xl mr-2" />,
    },
  ];

  return (
    <div className="py-3 bg-white/70 backdrop-blur-md border-y border-slate-200">

      <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
      >
        {announcements.map((item, index) => (
          <div key={index} className="flex items-center">

            {/* marquee content */}
            <div className="flex items-center mx-8 text-slate-700 font-medium">

              {/* badge */}
              {item.type === "badge" && (
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 
                rounded-full text-xs font-semibold mr-2">
                  {item.label}
                </span>
              )}

              {/* Icon*/}
              {item.icon && item.icon}

              {/* Text */}
              <span className="text-sm md:text-base">
                {item.text}{" "}
                {item.highlight && (
                  <span className="font-bold text-slate-900">
                    {item.highlight}
                  </span>
                )}
              </span>
            </div>

            {/* Separator*/}
            {index !== announcements.length - 1 && (
              <span className="text-slate-500 mx-5">|</span>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;