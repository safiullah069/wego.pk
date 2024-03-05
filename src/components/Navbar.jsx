
import React, { useState, useEffect } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ReactDOM from 'react-dom'
import LeftNavBar from './left-navbar/LeftNavBar';
import RightNavBar from './right-navbar/RightNavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledCheck = window.scrollY > 5;
      if (isScrolledCheck !== isScrolled) {
        setIsScrolled(!isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

    

  return (
    <>
        <nav className={`fixed top-0 w-full flex justify-between px-20 py-4 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        <div className='flex justify-end items-center'>
        <div >       
            {isScrolled ? <img src="src/assets/logo_dark.png" alt="Logo" className="h-10" /> : <img src="src/assets/logo_ligth.png" alt="Logo" className="h-10" />}
        </div>
        {isScrolled ? (<LeftNavBar />) : null }
      </div>
      <RightNavBar />
     
    </nav>
    </>
    )
}

export default Navbar