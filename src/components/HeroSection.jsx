"use client"

import React from 'react'
import Link from 'next/link'
import { IoBook } from 'react-icons/io5';
import Image from 'next/image';

import heroImage from "@/assets/book_shelf_img/hero_banner.png"
import { GoDotFill } from 'react-icons/go';
import { FiBookOpen } from 'react-icons/fi';
import { GiOpenBook } from 'react-icons/gi';
import Button from './ui/Button';

function HeroSection() {
    return (
        <div className='relative pt-30 pb-15 md:bg-linear-to-r from-teal-100/20 to-white pl-4 md:pl-10 lg:pl-16'>
            <div className='md:flex md:justify-between md:gap-10 lg:gap-40 gap-0 items-center'>

                {/* hero content  */}
                <div className='flex-1 z-50'>
                    <div className='space-y-5'>
                        {/* badge  */}
                        <div className='flex gap-3 items-center justify-around border border-teal-100 w-fit text-teal-700 text-sm uppercase rounded-full px-3 py-1 shadow'>
                            <span>Borrow</span>
                            <span className='text-[10px] '><GoDotFill /></span>
                            <span>Read</span>
                            <span className='text-[10px] '><GoDotFill /></span>
                            <span>Inspire</span>
                        </div>
                        
                        <h1 className='text-3xl md:text-4xl font-bold '>Find Your Next Read, <br />
                            <span className='text-3xl md:text-4xl font-bold text-[#1f867e] '>Just a Click Away.</span></h1>

                        <div className='w-15 h-1 bg-teal-600 '></div>
                        <p className='mb-10 '>Borrow books anytime, anywhere. Explore endless stories, discover new favorites, and keep your reading journey going—don’t learn alone, invite your friends.</p>
                    </div>

                    {/* hero btn  */}
                    <Link className='group inline-block' href={"/allBook"}>
                     <Button className="w-fit self-start" > <GiOpenBook className='group-hover:text-amber-300 duration-300 transition-all' />  Browse Now</Button>
                    </Link>
                </div>

                {/* hero img  */}
                <div className="flex justify-end mt-5  flex-1">
                    <Image
                        src={heroImage}
                        alt="Bookshelf hero image"
                        className="w-[280px] md:w-[400px] lg:w-[500px] "
                        priority
                    />
                </div>
            </div>

        
        </div>
    )
}

export default HeroSection

