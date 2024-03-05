import React, {useContext} from 'react'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed

function LoginBtn() {
    const { isScrolled } = useContext(ScrollContext);

  return (
    <button className={`${!isScrolled ? "bg-black bg-opacity-35 text-white" : "bg-white border text-black mr-0"}  font-normal text-sm border-gray-300 rounded-full px-4 m-0  py-0 h-8 `}>
          LOGIN
    </button>
        
  )
}

export default LoginBtn