import React from 'react'
import {Link} from "react-router-dom"

function TravelBlog() {
  return (
    <div className='bg-white w-40 py-2 rounded-sm h-16 shadow-[0_-3px_5px_rgba(0,0,0,0.3)] flex items-center justify-center  '><Link to={"/travel-blog"} className='py-2 w-full px-4 hover:bg-gray-200 my-1 h-full text-left  bg-white font-medium'>Travel Blog</Link></div>
  )
}

export default TravelBlog