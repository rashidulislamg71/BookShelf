import React from 'react'
import Link from 'next/link'

import { IoBook } from 'react-icons/io5';

function HeroSection() {
    return (
        <div>

            <div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h1 className='text-3xl font-bold '>Find Your Next Read,</h1>
                    <h1 className='text-3xl font-bold text-[#1f867e] '>Just a Click Away.</h1>
                    <div className='w-15 h-1 bg-[#FFC85C] '></div>
                    <p>Borrow books anytime, anywhere and dive into endless stories.</p>

                    <Link className='flex justify-center items-center gap-1 bg-[#1a877e] w-fit py-1 px-4 rounded-sm text-white' href={"/allBook"}>
                  <IoBook />
                        Browse Now
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HeroSection