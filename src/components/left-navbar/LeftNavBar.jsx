import React, { useEffect, useState  } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TravelBlog from './TravelBlog'


function LeftNavBar() {
  const [isClicked, setIsClicked] = useState(false)
  const showTravelBlog  = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked)
  }
  const handlePageClick = () => {
    setIsClicked(false);
  };
  useEffect(() => {
    document.addEventListener('click', handlePageClick);
  }, [])
  

  return (
    <div className='space-x-8 mx-8 '>
            <button className=' px-0 py-4 font-sans font-bold m-0 border-b-4 border-[#6ece3e]'>
            Flights 
        </button>
        <button className=' px-0 py-4 font-sans font-bold m-0'>
            Hotels
        </button>
        
        <button className=' px-0 py-4 font-sans font-bold m-0'>
            Wego Pro <span className='font-normal'>Business Travel</span>
        </button>
        <button onClick={showTravelBlog} className=' px-0 relative font-sans font-bold m-0'>
          More 
          <span className='px-4'><FontAwesomeIcon icon={faCaretDown} flip={`${isClicked ? "vertical" : "horizantal"}`} className='text-gray-500'/></span>
          {isClicked ? <span className='absolute top-12 left-0 bottom-0'><TravelBlog/></span> : null}
        </button>
        </div>
  )
}

export default LeftNavBar