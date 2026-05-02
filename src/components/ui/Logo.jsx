import React from 'react'
import logo from "@/assets/logo_2.png"
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <Link href={"/"}>
            <div className=' rounded-xl overflow-hidden' >
                <Image width={"50"} src={logo} alt='bookshelf logo' />
            </div>
        </Link>
    )
}

export default Logo