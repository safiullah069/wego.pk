import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function LeftNavBar() {
  return (
    <div className='space-x-1'>
            <button className=' px-4  font-sans font-bold m-0'>
            Flights 
        </button>
        <button className=' px-4  font-sans font-bold m-0'>
            Hotels
        </button>
        
        <button className=' px-4  font-sans font-bold m-0'>
            Wego Pro <span className='font-normal'>Business Travel</span>
        </button>
        <button className=' px-4  font-sans font-bold m-0'>
          More 
          <span className='px-4'><FontAwesomeIcon icon={faCaretDown} /></span>

        </button>
        </div>
  )
}

export default LeftNavBar