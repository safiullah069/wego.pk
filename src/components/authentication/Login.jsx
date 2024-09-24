import React from 'react'
import { useState } from 'react'
import { useFirebase } from '../../firebase/firebase'

function Login({ closeModal }) {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const firebase = useFirebase()

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.signInUserWithEmailAndPassword(email, password)
        setEmail("")
        setPassword("")
        closeModal()
    }
    return (
        <div className='w-60 h-40 border border-red-500 bg-gray-300 '>
            <form action="">
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={handleSubmit} >Submit</button>

            </form>

            <div className='my-4 mx-4'>
                <button className='bg-red-700 text-white px-4 py-2' onClick={() => {
                    firebase.signInWithGoogle()
                    closeModal()
                }}>
                    Login with Google
                </button>
            </div>


        </div>
        // <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-40 px-20 py-5  text-white '>
        //     <div className=' bg-transparent shadow-lg my-10 overflow-hidden rounded-lg flex  flex-row '>

        //         <div className="flex items-center justify-center  ">
        //             <div className="bg-white shadow-lg rounded-tr-none rounded-br-none rounded-lg p-8 w-96">
        //                 <button className="w-full bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center mb-4">
        //                     <i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook
        //                 </button>
        //                 <button className="w-full bg-red-600 text-white py-2 rounded-xl flex items-center justify-center mb-4">
        //                     <i className="fab fa-google-plus-g mr-2"></i> Sign up with Google
        //                 </button>
        //                 <div className="text-center text-gray-500 mb-4">or sign up using your email</div>
        //                 <form onSubmit={submitHandler}>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700">Email</label>
        //                         <input type="email" className="w-full text-black px-3 py-2 border rounded-lg" placeholder="Email" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700">Password</label>
        //                         <input type="password" className="w-full px-3 text-black py-2 border rounded-lg" placeholder="Password" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700">Repeat Password</label>
        //                         <input type="password" className="w-full px-3 py-2 border text-black rounded-lg" placeholder="Repeat Password" />
        //                     </div>
        //                     <div className="mb-4 flex items-center">
        //                         <input type="checkbox" className="mr-2" />
        //                         <label className="text-gray-700">Yes, I want to receive promotions from Wego.</label>
        //                     </div>
        //                     <div className="text-sm text-gray-500 mb-4">
        //                         By signing up you accept our <a href="#" className="text-blue-600">Terms</a> and <NavLink to="/privacy" className="text-blue-600">Privacy Policy</NavLink>
        //                     </div>
        //                     <div className="text-sm text-gray-500 mb-4">
        //                         <NavLink to={"/email-confirmation"} className="text-blue-600">Didn't receive the confirmation email?</NavLink>
        //                     </div>
        //                     <button className="w-full bg-green-600 text-white py-2 rounded-lg" type='submit'>Sign Up</button>
        //                 </form>
        //             </div>
        //         </div>

        //         <div className="px-20 py-10 bg-gray-100 w-auto rounded-lg rounded-tl-none rounded-bl-none">
        //             <h2 className="text-xl text-black font-semibold mb-4">Sign up with Wego</h2>
        //             <p className="text-gray-700 mb-4">Have an account already? <NavLink to={"/?modal-login"} onClick={closeModal} className="text-green-600">Login</NavLink></p>
        //             <ul>
        //                 <li className="flex items-start mb-4">
        //                     <i className="fas fa-bolt text-green-600 mr-2"></i>
        //                     <div>
        //                         <h3 className="font-semibold text-black">Faster booking via Wego</h3>
        //                         <p className="text-gray-700">Book flights quicker than ever via Wego</p>
        //                     </div>
        //                 </li>
        //                 <li className="flex items-start mb-4">
        //                     <i className="fas fa-bell text-green-600 mr-2"></i>
        //                     <div>
        //                         <h3 className="font-semibold text-black">Price Alerts</h3>
        //                         <p className="text-gray-700">Never miss a great deal again - create your own alerts</p>
        //                     </div>
        //                 </li>
        //                 <li className="flex items-start mb-4">
        //                     <i className="fas fa-gift text-green-600 mr-2"></i>
        //                     <div>
        //                         <h3 className="font-semibold text-black">Exclusive Offers</h3>
        //                         <p className="text-gray-700">Receive discounts and offers from our partners, exclusive to Wego members</p>
        //                     </div>
        //                 </li>
        //             </ul>
        //             <div>
        //             {/* <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" /> */}
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Login