import React, {useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed

function LanguageBtn() {
    const { isScrolled } = useContext(ScrollContext);

  return (
    <button className={`  ${!isScrolled ? "bg-black bg-opacity-35 mr-[1px]" : "bg-white border-y mr-0"} border-gray-300 flex justify-center items-center rounded-none px-3 m-0 py-[2px]  `}>
            
    <span className={`${isScrolled ? "text-black" : "text-white"} font-light text-sm`}>EN</span>
    <span className='pl-2'><FontAwesomeIcon icon={faCaretDown} className={`${!isScrolled ? "text-white" : "text-gray-500"}`}/></span>
  </button>
  )
}

export default LanguageBtn