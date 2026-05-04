
import React from 'react'



function BookCategories({ categories, active_id }) {
    return (
        <div >
            <ul className='space-y-3'>
                {
                    categories.map(item => (
                        <li key={item.id} className={`border-b border-gray-200 hover:bg-gray-100 p-1 rounded-sm  md:px-2 cursor-pointer ${active_id === item.id && "bg-gray-100 text-red-400"}`} >
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BookCategories