
import React, { useState, useEffect } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";



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
        {isScrolled ? (<div className='space-x-1'>
            <button className=' px-4  font-sans font-bold m-0'>
            Flights 
        </button>
        <button className=' px-4  font-sans font-bold m-0'>
            Hotels
        </button>
        
        <button className=' px-4  font-sans font-bold m-0'>
            Wego Pro <span className='font-normal'>Business Travel</span>
        </button>
        </div>) : null }
      </div>
      <div className="space-x-4 flex ">
        <div className='border-2 rounded-full p-0'>
          <button className='px-4 m-0 py-2 '>
            <span className='fi fi-pk '></span>
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
    </nav>
    </>
    )
}

export default Navbar