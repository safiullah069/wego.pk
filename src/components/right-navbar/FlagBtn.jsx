import React, {useEffect, useState, useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import FlagComp from '../hidedComp/FlagComp';
import dropDownContext from '../../context/dropDownContext/dropDownContext';

function FlagBtn() {

    const { isScrolled } = useContext(ScrollContext);
    const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);


    const [btnText, setBtnText] = useState('fi-pk');
    const handleActive = (e) => {
      e.stopPropagation();

      handleDropdownClick('flagBtn');

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

    <button onClick={handleActive} className={`mr-[1px]  ${!isScrolled ? "bg-black bg-opacity-35 " : "bg-white border "} border-gray-300 flex justify-center items-center rounded-l-full px-3 py-[2px] m-0 `}>
        <span className={`w-4 h-3 ${btnText} fi`}></span>
        <span className='pl-2'><FontAwesomeIcon icon={faCaretDown} flip={`${activeDropdown === 'flagBtn' ? "vertical" : "horizontal"}`} className={`${!isScrolled ? "text-white" : "text-gray-500"}`} /></span>
    </button>
    {activeDropdown === 'flagBtn' ? <div className='absolute overflow-scroll w-[700px] py-4 px-6 bg-white shadow-xl h-[500px] border rounded-lg top-10 -left-[230px] flex flex-wrap items-start'>
    <div className='py-2 block w-full'>Country / Region</div>
    <FlagComp onButtonClick={handleButtonClick} />
    </div> : null}
    </div>


  )
}

export default FlagBtn