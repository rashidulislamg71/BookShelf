import React from 'react'
import newLogo from "@/assets/book_shelf_img/new_logo_no_bg.png"
import Image from 'next/image'

function Logo() {
    return (
        <div className='border-b-3 border-amber-300' >
            <Image width={"60"} src={newLogo} alt='bookshelf logo' />
        </div>

    )
}

export default Logo