import React from "react";
import MarqueeComponent from "@/components/share/Marquee";
import HeroSection from "@/components/HeroSection";
import FeaturedBook from "@/components/booksComponent/FeaturedBook";
import Reviews from "@/components/share/Reviews";
import Stats from "@/components/share/Stats";
import Newsletter from "@/components/share/Newsletter";
import Demo from "@/components/Demo";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <MarqueeComponent />
      <FeaturedBook />
      <Stats />
      <Newsletter />
      <Reviews />
      <Demo />
    </div>
  );
}

export default HomePage;
