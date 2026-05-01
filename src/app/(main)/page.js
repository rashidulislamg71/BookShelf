import React from "react";
import MarqueeComponent from "@/components/share/Marquee";
import HeroSection from "@/components/HeroSection";
import FeaturedBook from "@/components/share/FeaturedBook";
import Reviews from "@/components/share/Reviews";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <MarqueeComponent />
      <FeaturedBook />
      <Reviews />
    </div>
  );
}

export default HomePage;
