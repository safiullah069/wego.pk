import React, {useEffect, useState, useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed

import dropDownContext from '../../context/dropDownContext/dropDownContext';
import LanguageComp from '../hidedComp/LanguageComp';

function LanguageBtn() {
    const { isScrolled } = useContext(ScrollContext);
    const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);


    const [btnText, setBtnText] = useState('EN');
    const handleActive = (e) => {
      e.stopPropagation();

      handleDropdownClick('langBtn');

    }
    const handlePageClick = () => {
      handleDropdownClick(null);
    };
    useEffect(() => {
      document.addEventListener('click', handlePageClick);
    }, [])

    const handleButtonClick = (text) => {
      setBtnText(text);
    };
  return (

    <div className='relative'>

    
    <button onClick={handleActive} className={`  ${!isScrolled ? "bg-black bg-opacity-35 mr-[1px]" : "bg-white border-y mr-0"} border-gray-300 flex justify-center items-center rounded-none px-3 m-0 py-[2px]  `}>
            
      <span className={`${isScrolled ? "text-black" : "text-white"} font-light text-sm`}>{btnText}</span>
      <span className='pl-2'><FontAwesomeIcon icon={faCaretDown}  flip={`${activeDropdown === 'langBtn' ? "vertical" : "horizontal"}`}  className={`${!isScrolled ? "text-white" : "text-gray-500"}`}/></span>
    </button>
    {activeDropdown === 'langBtn' ? <div className='absolute overflow-scroll w-[550px] py-4 px-6 bg-white shadow-xl h-[400px] border rounded-lg top-10 -left-36 flex flex-wrap items-start'>
    <div className='py-2 block w-full'>Languages</div>
    <LanguageComp onButtonClick={handleButtonClick} />
    </div> : null}
    </div>
 
  )
}

export default LanguageBtn