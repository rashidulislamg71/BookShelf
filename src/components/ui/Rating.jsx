
import React from 'react'
import { LuStar } from 'react-icons/lu'

function Rating({ rating = 5 }) {
  return (
    <div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <LuStar
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
          />
        ))}
        <span className="text-xs text-gray-400 ml-1">
          ({rating}.0)
        </span>
      </div>
    </div>
  )
}

export default Rating