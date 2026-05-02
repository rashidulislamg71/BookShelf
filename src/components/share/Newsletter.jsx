"use client";
import React from 'react';
import { LuMail, LuArrowRight, LuSparkles, LuPartyPopper, LuShieldCheck } from "react-icons/lu";

function Newsletter() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto">

        <div className="relative px-4 py-10 md:p-16 border border-gray-100 bg-gray-50/60 overflow-hidden shadow-sm">

          {/* background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

          <div className="absolute top-24 left-110 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl opacity-50"></div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center ">

            {/* left side */}
            <div>
              <div className="inline-flex  items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                <LuSparkles className="text-teal-500 w-3 h-3" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                  Book Club
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                Join Our Book Club & <br />
                <span className="text-teal-600">Unlock Special Discounts</span>
              </h2>

              <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                Become a member and enjoy exclusive discounts, early access to new arrivals,
                and curated book recommendations.
              </p>
            </div>

            {/* right side form */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get <span className='text-amber-400'>Free</span> Membership Access
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="relative">
                  <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 text-gray-900 
                               focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-linear-to-r from-teal-700 to-teal-400  hover:bg-teal-700 text-white font-medium py-4 rounded-xl 
                             flex items-center justify-center gap-2 transition-all group"
                >
                  Join Now
                  <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </form>

              <p className="mt-4 text-sm text-gray-400 text-center flex items-center justify-center gap-2">
                <LuPartyPopper className="text-teal-500" />
                Instant access
                <span className="mx-1">|</span>
                <LuShieldCheck className="text-teal-500" />
                No spam
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;