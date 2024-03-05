
import React, { useState, useEffect } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LeftNavBar from './left-navbar/LeftNavBar';
import RightNavBar from './right-navbar/RightNavBar';
import { useScroll } from '../context/useScroll'; // adjust path as needed
import { ScrollContext } from '../context/ScrollContext'; // adjust path as needed



function Navbar() {
  const isScrolled = useScroll();

    

  return (
    <ScrollContext.Provider value={{ isScrolled }}>

      <nav className={`fixed top-0 w-full z-10 flex justify-between px-20 py-0 m-0 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        <div className='flex justify-end items-center'>
          <div >       
              {isScrolled ? <img src="src/assets/logo_dark.png" alt="Logo" className="h-8 "  /> : <img src="src/assets/logo_ligth.png" alt="Logo" className="h-8 " />}
          </div>
          {isScrolled ? (<LeftNavBar />) : null }
        </div>
        <RightNavBar />
     
      </nav>
    </ScrollContext.Provider>
    )
}

export default Navbar