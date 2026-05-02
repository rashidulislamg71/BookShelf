import React from 'react'
import logo from "@/assets/logo_2.png"
import newLogo from "@/assets/book_shelf_img/new_logo_no_bg.png"
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <Link href={"/"}>
            <div className='border-b-3 border-amber-300' >
                <Image width={"60"} src={newLogo} alt='bookshelf logo' />
            </div>
        </Link>
    )
}

export default Logo