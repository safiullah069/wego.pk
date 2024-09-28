import React from 'react'
import Register from '../authentication/Register'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import dropDownContext from '../../context/dropDownContext/dropDownContext'





function SignUpBtn() {
  const [openSignup, setOpenSignup] = useState(false)
  const navigate = useNavigate();
  const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);
 
  const handlePageClick = () => {
    
    handleDropdownClick(null);
  };
  useEffect(() => {
    document.addEventListener('click', handlePageClick);
  }, [])

  const openModal = () => {
    navigate("/?modal-signup", {
      replace: false,
    });
    handleDropdownClick('signUp');
    setOpenSignup(true)

  }

  
  const closeModal = () => {
    navigate("/", {
      replace: false
    });
    setOpenSignup(false)
  }

  useEffect(() => {
    if (window.location.search.includes("modal-signup")) {
      setOpenSignup(true)
      handleDropdownClick('signUp');
    }
  }, [])

  useEffect(() => {
    const popCheck = () => {
    if (!window.location.search.includes("modal-signup")) {
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
      <button onClick={openModal} className="bg-[#54CD20] text-white font-normal px-8 h-8 rounded-full">
        GET STARTED
    </button>
    {(openSignup && activeDropdown === 'signUp' )? (<Register closeModal={closeModal}/>)  : null}
    </div>

  )
}

export default SignUpBtn