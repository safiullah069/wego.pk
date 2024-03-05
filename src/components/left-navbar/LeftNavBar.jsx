import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TravelBlog from './TravelBlog'


function LeftNavBar() {
  const [isClicked, setIsClicked] = useState(false)
  const showTravelBlog  = () => {
    setIsClicked(!isClicked)
  }

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
        <button onClick={showTravelBlog} className=' px-4 relative font-sans font-bold m-0'>
          More 
          <span className='px-4'><FontAwesomeIcon icon={faCaretDown} /></span>
          {isClicked ? <span className='absolute top-12 left-0 bottom-0'><TravelBlog/></span> : null}
        </button>
        </div>
  )
}

export default LeftNavBar