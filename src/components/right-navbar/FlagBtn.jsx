import React, {useEffect, useState, useContext} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import { flagApi } from '../PseudoApis/flagApis';

function FlagBtn() {
    const { isScrolled } = useContext(ScrollContext);
  
  return (
    <button className={`mr-[1px]  ${!isScrolled ? "bg-black bg-opacity-35 " : "bg-white border "} border-gray-300 flex justify-center items-center rounded-l-full px-3 py-[2px] m-0 `}>
        <span className={`w-4 h-3 ${flagApi[0].code} fi`}></span>
        <span className='pl-2'><FontAwesomeIcon icon={faCaretDown} className={`${!isScrolled ? "text-white" : "text-gray-500"}`} /></span>
    </button>
  )
}

export default FlagBtn