import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFirebase } from '../../firebase/firebase'


function Register({ closeModal }) {
    // const submitHandler = () => {
    //     closeModal()
    // }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [notification, setNotification] = useState(false)
    const firebase = useFirebase()

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.signupUserWithEmailAndPassword(email, password, name)
        setEmail("")
        setPassword("")
        setName("")
        closeModal()
    }
    return (
        <div className='w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center absolute top-0  left-1/2 transform -translate-x-1/2 '>
            <div className='flex flex-row justify-center items-center'>
                <button className=''>
                    <span>

                    </span>
                    Sign up with Facebook
                </button>
                <button className=''>
                    <span>

                    </span>
                    Sign up with Google
                </button>
                <div>
                    <span>or sign up using your email</span>
                </div>
                <form action="Submit">
                    <input className='' type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className='' type="password" name="password" id="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                    <input className='' type="password" name="repeat" id="repeat" value={repeatPassword} placeholder='Repeat Password' onChange={(e) => {setRepeatPassword(e.target.value)}}  />
                    <div>
                        <input type="checkbox" name="notification" id="notification" value={notification} onChange={(e) => {setNotification(e.target.value)}}  />
                        <label className='cursor-pointer' htmlFor="notification">Yes, I want to receive promotions from Wego.</label>
                    </div>
                    <div className='text-base block'>
                        By signing up you accept our
                        <NavLink className="underline text-sm text-[#54CD20]" to={"/terms"}>
                             Terms 
                        </NavLink>
                         and 
                        <NavLink className="underline text-sm text-[#54CD20]" to={"/privacy-policy"}>
                            Privacy Policy
                        </NavLink>
                    </div>
                    <NavLink className="underline text-sm text-[#54CD20]" to={"?modal=resendconfirmation"} >
                        Didn't receive the confirmation email?
                    </NavLink>
                    <button className='block'>
                        Sign Up
                    </button>
                </form>
            </div>
            <div>
            
            </div>
        </div>
        
    )
}
        // <div className='w-60 h-40 border border-red-500 bg-gray-300 absolute top-40 right-30 '>
        //     <form action="">
        //         <label htmlFor="name">Name</label>
        //         <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
        //         <label htmlFor="email">Email</label>
        //         <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                
        //         <label htmlFor="password">Password</label>
        //         <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        //         <button onClick={handleSubmit} >Submit</button>

        //     </form>

        //     <div className='my-4 mx-4'>
        //         <button className='bg-red-700 text-white px-4 py-2' onClick={() => {
        //             firebase.signInWithGoogle()
        //             closeModal()
        //         }}>
        //             Signin with Google
        //         </button>
        //     </div>


        // </div>


export default Register