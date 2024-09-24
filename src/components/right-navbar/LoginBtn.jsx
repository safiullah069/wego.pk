import React, {useContext} from 'react'
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import Login from "../authentication/Login"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginBtn() {
    const { isScrolled } = useContext(ScrollContext);

    const [openSignup, setOpenSignup] = useState(false)
    const navigate = useNavigate();
  
    const openModal = () => {
      navigate("/?login", {
        replace: false,
      });
      setOpenSignup(true)
    }
  
    
    const closeModal = () => {
      navigate("/", {
        replace: false
      });
      setOpenSignup(false)
    }
  
    useEffect(() => {
      if (window.location.search.includes("login")) {
        setOpenSignup(true)
      }
    }, [])
  
    useEffect(() => {
      const popCheck = () => {
      if (!window.location.search.includes("login")) {
        setOpenSignup(false)
      }
      }
      window.addEventListener("popstate", popCheck)
  
      return () => {
        return window.removeEventListener("popstate", popCheck)
      }
    }, [])
  
  
  
  
  
    return (
      <div>
        <button onClick={openModal} className={`${!isScrolled ? "bg-black bg-opacity-35 text-white" : "bg-white border text-black mr-0"}  font-normal text-sm border-gray-300 rounded-full px-4 m-0  py-0 h-8 `}>
        LOGIN
      </button>
      {openSignup && (<Login closeModal={closeModal} />)}
      </div>
  
    )
  }
  
  // <button className={`${!isScrolled ? "bg-black bg-opacity-35 text-white" : "bg-white border text-black mr-0"}  font-normal text-sm border-gray-300 rounded-full px-4 m-0  py-0 h-8 `}>
  //       LOGIN
  // </button>
export default LoginBtn