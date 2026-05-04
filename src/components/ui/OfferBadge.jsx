
"use client";

import { animated, useSpring } from "@react-spring/web";
import { FaFileArchive } from "react-icons/fa";

export default function OfferBadge() {
  const styles = useSpring({
    from: { scale: 0.5, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { tension: 200, friction: 10 },
  });

  return (
    <animated.div
      style={styles}
      className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10"
    >
      <FaFileArchive /> OFFER 50%
    </animated.div>
  );
}