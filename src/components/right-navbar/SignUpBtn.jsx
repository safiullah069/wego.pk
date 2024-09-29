import React from 'react'
import Register from '../authentication/Register'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
// import dropDownContext from '../../context/dropDownContext/dropDownContext'





function SignUpBtn() {
  const [openSignup, setOpenSignup] = useState(false)
  const navigate = useNavigate();
  // const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);
 
  // const handlePageClick = () => {
  //   if (e.target.closest('.modal') || e.target.closest('.modal-trigger')) {
  //     return;
  //   }
  //   handleDropdownClick(null);
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handlePageClick);

  //   return () => {
  //     document.removeEventListener('click', handlePageClick);
  //   };
  // }, [])

  const openModal = () => {
    // e.stopPropagation(); 
    navigate("/?modal-signup", {
      replace: false,
    });
    // handleDropdownClick('signUp');
    setOpenSignup(true)

  }

  
  const closeModal = () => {
    navigate("/", {
      replace: false
    });
    // handleDropdownClick(null)
    setOpenSignup(false)
  }

  useEffect(() => {
    if (window.location.search.includes("modal-signup")) {
      setOpenSignup(true)
      // handleDropdownClick('signUp');
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

  // if (activeDropdown !== "signUp") {
  //   navigate("/")
  // }





  return (
    <div>
      <button onClick={openModal} className="bg-[#54CD20] modal-trigger text-white font-normal px-8 h-8 rounded-full">
        GET STARTED
    </button>
    {openSignup  ? (<Register closeModal={closeModal} className="modal" />)  : null}
    </div>

  )
}

export default SignUpBtn