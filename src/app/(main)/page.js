import React from "react";
import MarqueeComponent from "@/components/share/Marquee";
import HeroSection from "@/components/HeroSection";
import FeaturedBookCard from "@/components/ui/FeaturedBookCard";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <MarqueeComponent />
      <FeaturedBookCard />
    </div>
  );
}

export default HomePage;
