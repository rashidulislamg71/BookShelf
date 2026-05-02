import React from 'react';
import {  LuUsers,LuPenTool } from "react-icons/lu";
import { BookOpen } from '@gravity-ui/icons';
import { BiWorld } from 'react-icons/bi';

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
        <section className=" ">
            <div className="max-w-7xl mx-auto px-6">
                  {/*  Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Trusted by Readers Worldwide
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Growing community of book lovers across the globe
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white py-4 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:shadow-gray-200/50"
                        >
                            {/* Decorative background circle on hover */}
                            <div className={``} />

                            <div className="relative flex flex-col items-center">
                                {/* Icon Circle */}
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor} ${item.color}  `}>
                                    {item.icon}
                                </div>

                                {/* Stats Value */}
                                <h2 className="text-2xl mt-2 font-extrabold text-gray-700 tracking-tight ">
                                    {item.value}
                                </h2>

                                {/* Stats Title */}
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;