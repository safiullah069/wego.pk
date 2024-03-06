import React, { useEffect, useState, useContext  } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TravelBlog from './TravelBlog'
import dropDownContext from '../../context/dropDownContext/dropDownContext'


function LeftNavBar() {
  const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);

  const [isClicked, setIsClicked] = useState(false)
  const showTravelBlog  = (e) => {
    e.stopPropagation();
    handleDropdownClick('travelBlog');
    
  }
  const handlePageClick = () => {
    
    handleDropdownClick(null);
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
          <span className='px-4'><FontAwesomeIcon icon={faCaretDown} flip={`${activeDropdown === 'travelBlog' ? "vertical" : "horizantal"}`} className='text-gray-500'/></span>
          {activeDropdown === 'travelBlog' ? <span className='absolute top-10 left-0 bottom-0'><TravelBlog/></span> : null}
        </button>
        </div>
  )
}

export default LeftNavBar