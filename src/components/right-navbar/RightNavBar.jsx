import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function RightNavBar() {
  return (
   
<div className="space-x-4 flex ">
        <div className='border-2 rounded-full p-0'>
          <button className='px-4 m-0 py-2 '>
            <span className='fi fi-pk '></span>
            <span className='px-4'><FontAwesomeIcon icon={faCaretDown}  className="text-green-900" /></span>
          </button>
          <button className='px-4 m-0 py-2 '>
            <span className='fi fi-pk '></span>
          </button>
          <button className='px-4 m-0 py-2 '>
            <span className='fi fi-pk '></span>
          </button>
        
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
        
  )
}

export default RightNavBar