

"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { LuUsers, LuPenTool } from "react-icons/lu";
import { BookOpen } from "@gravity-ui/icons";
import { BiWorld } from "react-icons/bi";

// Floating wrapper
function FloatingCard({ children, delay = 0, reverse = false }) {
    const float = useSpring({
        from: { transform: "translate3d(0px, 0px, 0px)" },
        to: async (next) => {
            while (1) {
                await next({
                    transform: `translate3d(0px, ${reverse ? 14 : -14}px, 0px)`
                });
                await next({
                    transform: "translate3d(0px, 0px, 0px)"
                });
            }
        },
        delay,
        config: {
            tension: 60,  
            friction: 5,  
        },
    });

    return <animated.div style={float}>{children}</animated.div>;
}

function Stats() {
    const stats = [
        {
            id: 1,
            title: "Books Available",
            value: "12,000+",
            icon: <BookOpen className="w-7 h-7" />,
            color: "text-blue-600",
            bgColor: "bg-blue-100",
        },
        {
            id: 2,
            title: "Happy Readers",
            value: "10,391",
            icon: <LuUsers className="w-7 h-7" />,
            color: "text-green-600",
            bgColor: "bg-green-100",
        },
        {
            id: 3,
            title: "Countries Reached",
            value: "20+",
            icon: <BiWorld className="w-7 h-7" />,
            color: "text-purple-600",
            bgColor: "bg-purple-100",
        },
        {
            id: 4,
            title: "Global Authors",
            value: "50+",
            icon: <LuPenTool className="w-7 h-7" />,
            color: "text-orange-600",
            bgColor: "bg-orange-100",
        },
    ];

    return (
        <section className="px-4 md:px-16 mt-15">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Trusted by Readers Worldwide
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Growing community of book lovers across the globe
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, i) => (
                        <FloatingCard
                            key={item.id}
                            delay={i * 150}
                            reverse={i % 2 === 0}   // 🔥 alternate direction
                        >
                            <div className="bg-white py-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">

                                <div className="flex flex-col items-center">

                                    {/* Icon */}
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor} ${item.color}`}>
                                        {item.icon}
                                    </div>

                                    {/* Value */}
                                    <h2 className="text-2xl mt-3 font-extrabold text-gray-700">
                                        {item.value}
                                    </h2>

                                    {/* Title */}
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                        {item.title}
                                    </p>

                                </div>

                            </div>
                        </FloatingCard>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Stats;