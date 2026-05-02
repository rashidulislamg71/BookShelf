import React from 'react'

function Button({ className, children }) {
  return (
    <div>
      <button className={` cursor-pointer inline-flex items-center justify-center gap-2
        bg-linear-to-r from-teal-700 to-teal-400 
        hover:from-teal-500 hover:to-teal-700
        text-white font-medium
        px-5 py-2 rounded-md
        transition-all duration-300
        shadow-md hover:shadow-lg
        active:scale-95
        ${className}`}>
        {children}
      </button>
    </div>
  )
}

export default Button