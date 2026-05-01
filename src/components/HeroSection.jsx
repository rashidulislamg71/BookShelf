import React from 'react'
import Link from 'next/link'
import { IoBook } from 'react-icons/io5';
import Image from 'next/image';

import heroImg from "@/assets/BookShelf_img/bookshelf_hero_img.png"

function HeroSection() {
    return (
        <div className='py-10 md:py-10 px-4 md:px-16 bg-linear-to-r to-teal-100 from-cyan-50 '>

            <div className='flex flex-wrap justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-5'>
                    <h1 className='text-3xl md:text-4xl font-bold '>Find Your Next Read, <br />
                        <span className='text-3xl md:text-4xl font-bold text-[#1f867e] '>Just a Click Away.</span></h1>

                    <div className='w-15 h-1 bg-amber-300 '></div>
                    <p className='w-[250px] '>Borrow books anytime, anywhere and dive into endless stories.</p>

                    <Link className='group mt-2 flex justify-center items-center gap-1  bg-linear-to-r from-teal-500 to-cyan-500 hover:to-teal-500 hover:from-cyan-500 transition-all duration-300 w-fit shadow-2xl  py-1 px-4 rounded-sm text-white ' href={"/allBook"}>
                        <IoBook className='group-hover:text-amber-300 duration-300 transition-all' />
                        Browse Now
                    </Link>
                </div>
                <div>
                    <Image className='drop-shadow-xl' src={heroImg} alt='Bookshelf hero image' ></Image>
                </div>
            </div>
        </div>
    )
}

export default HeroSection



