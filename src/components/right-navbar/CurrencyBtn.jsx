import React, {useEffect, useState, useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import CurrencyComp from "../hidedComp/CurrencyComp"
import dropDownContext from '../../context/dropDownContext/dropDownContext';

function CurrencyBtn() {
    const { isScrolled } = useContext(ScrollContext);

    const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);


    const [btnText, setBtnText] = useState('PKR');
    const handleActive = (e) => {
      e.stopPropagation();

      handleDropdownClick('currencyBtn');

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
      <button onClick={handleActive} className={`${!isScrolled ? "bg-black bg-opacity-35" : "bg-white border mr-0"} border-gray-300 flex justify-center items-center rounded-r-full px-3 m-0 py-[2px]  `}>
         <span className={`${isScrolled ? "text-black" : "text-white"} font-light text-sm`}>{btnText}</span>
        <span className='pl-2'><FontAwesomeIcon icon={faCaretDown} flip={`${activeDropdown === 'currencyBtn' ? "vertical" : "horizontal"}`} className={`${!isScrolled ? "text-white" : "text-gray-500"}`} /></span>
    </button>

    
   
    {activeDropdown === 'currencyBtn' ? <div className='absolute overflow-scroll w-[780px] py-4 px-6 bg-white shadow-xl h-[500px] border rounded-lg top-10 -left-[435px] flex flex-wrap items-start'>
    <div className='py-2 block w-full'>Currency</div>
    <CurrencyComp onButtonClick={handleButtonClick} />
    </div> : null}
    </div>
 
  )

  // return (
  //   
  // )
}

export default CurrencyBtn