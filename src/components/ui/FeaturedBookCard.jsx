import React from 'react'

import Image from 'next/image'
import book from "@/assets/BookShelf_img/bookshelf_hero_img.png"

function FeaturedBookCard() {

    return (
        <div>
            <div className='h-auto w-fit border rounded-2xl shadow-2xl'>
                <div className='h-[200px] w-[200px] bg-red-50 '>
        {/* <Image src={book} alt='book name'></Image> */}
                </div>
                <div className='w-[30#] mt-3 border-t border-gray-100 p-2 '>
                    <h3 className='text-teal-600 text-xl font-bold ' >The Alchemist</h3>
                    <strong className='text-sm text-gray-500'>by Paulo Coelho</strong> 
                    <br />
                    <button className=' mt-3 py-1 px-3 rounded-sm shadow-2xl text-white bg-linear-to-r from-teal-500 to-cyan-500 hover:to-teal-500 hover:from-cyan-500 transition-all duration-300'>
                        View Details</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBookCard