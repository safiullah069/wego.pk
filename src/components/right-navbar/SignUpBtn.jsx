import React from 'react'
import Register from '../authentication/Register'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';




function SignUpBtn() {
  const [openSignup, setOpenSignup] = useState(false)
  const navigate = useNavigate();

  const openModal = () => {
    navigate("/?modal-signup", {
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
    if (window.location.search.includes("modal-signup")) {
      setOpenSignup(true)
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
    {openSignup && (<Register closeModal={closeModal} />)}
    </div>

  )
}

export default SignUpBtn