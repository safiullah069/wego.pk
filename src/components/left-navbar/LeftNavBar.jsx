import React, { useEffect, useContext  } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TravelBlog from './TravelBlog'
import dropDownContext from '../../context/dropDownContext/dropDownContext'
import {  NavLink } from 'react-router-dom'


function LeftNavBar() {
  const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);


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
            <NavLink to={`/flights`} style={({ isActive }) => ({
            borderBottom: isActive ? '4px solid #6ece3e' : 'none',
          })} className=' px-0 py-4 font-sans font-bold m-0 '>
            Flights 
            </NavLink>
        <NavLink to={`/hotels`}  style={({ isActive }) => ({
            borderBottom: isActive ? '4px solid #6ece3e' : 'none',
          })}  className=' px-0 py-4 font-sans font-bold m-0'>
            Hotels
        </NavLink>
        
        <NavLink to={`/business`} className=' px-0 py-4 font-sans font-bold m-0'>
            Wego Pro <span className='font-normal'>Business Travel</span>
        </NavLink>
        <button onClick={showTravelBlog} className=' px-0 relative font-sans font-bold m-0'>
          More 
          <span className='px-4'><FontAwesomeIcon icon={faCaretDown} flip={`${activeDropdown === 'travelBlog' ? "vertical" : "horizantal"}`} className='text-gray-500'/></span>
          {activeDropdown === 'travelBlog' ? <span className='absolute top-10 left-0 bottom-0'><TravelBlog/></span> : null}
        </button>
        </div>
  )
}

export default LeftNavBar