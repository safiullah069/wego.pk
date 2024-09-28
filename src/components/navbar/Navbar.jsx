
import React, { useState, useEffect } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LeftNavBar from '../left-navbar/LeftNavBar';
import RightNavBar from '../right-navbar/RightNavBar';
import { useScroll } from '../../context/useScroll'; // adjust path as needed
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import dropDownContext from '../../context/dropDownContext/dropDownContext';
import { Link } from 'react-router-dom';


function Navbar() {
  const isScrolled = useScroll();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <dropDownContext.Provider value={{ activeDropdown, handleDropdownClick }}> 

    <ScrollContext.Provider value={{ isScrolled }}>

      <nav className={`fixed top-0 w-full  flex justify-between px-20 py-0 m-0 z-20 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        <div className='flex justify-end items-center'>
          <Link to={`/`}>       
              {isScrolled ? <img src="src/assets/logo_dark.png" alt="Logo" className="h-8 "  /> : <img src="src/assets/logo_ligth.png" alt="Logo" className="h-8 " />}
          </Link>
          {isScrolled ? (<LeftNavBar />) : null }
        </div>
        <RightNavBar />
     
      </nav>
    </ScrollContext.Provider>
    </dropDownContext.Provider>

    )
}

export default Navbar