import React, {useContext} from 'react'
import FlagBtn from './FlagBtn';
import LanguageBtn from './LanguageBtn';
import CurrencyBtn from './CurrencyBtn';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
import { ScrollContext } from '../../context/ScrollContext'; // adjust path as needed
import { useFirebase } from '../../firebase/firebase';
import dropDownContext from '../../context/dropDownContext/dropDownContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



function RightNavBar() {
    const { isScrolled } = useContext(ScrollContext);

    const firebase = useFirebase()
    const { activeDropdown, handleDropdownClick } = useContext(dropDownContext);

    const handleActive = (e) => {
        e.stopPropagation();
  
        handleDropdownClick('profile');
  
      }

    return (
        <div className="space-x-4 flex items-center py-4 ">
            <div className=' p-0 m-0  flex justify-between items-center'>
                <FlagBtn/>
                <LanguageBtn/>
                <CurrencyBtn/>
            </div>
            <div >
                {firebase.isLoggedIn ? <div className='flex justify-between space-x-4  '>
                    {firebase.user.photoURL ? (<button onClick={handleActive}>
                        <img src={firebase.user.photoURL} alt="user" className='w-10 h-10 rounded-full'/>
                    </button>) : 
                    firebase.user.displayName ? (<div className='w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center text-white font-bold'>{firebase.user.displayName[0]}</div>) : 
                    firebase.user.email ? (<button onClick={handleActive} className={`${!isScrolled ? "bg-black bg-opacity-35 text-white" : "bg-white border text-black mr-0"}  font-normal text-sm border-gray-300 rounded-full px-4 m-0 flex items-center py-0 h-8 `}>
                        {firebase.user.email}
                        <span className='pl-2'><FontAwesomeIcon icon={faCaretDown} flip={`${activeDropdown === 'profile' ? "vertical" : "horizontal"}`} className={`${!isScrolled ? "text-white" : "text-gray-500"}`} /></span>
                    </button>) : null}
                    {activeDropdown === 'profile' ? <div className='absolute top-20 bg-white border border-red-500 rounded-lg px-8 py-4 right-20'>
                    <div className='py-2 block w-full'>Profile</div>
                        <button onClick={() => firebase.logout()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout
                        </button>
                    </div> : null}
                        {/* <button onClick={() => firebase.logout()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout
                        </button> */}

                </div> : (
                    <div className='flex justify-between space-x-4  '>
                        <LoginBtn/>
                        <SignUpBtn/>
                    </div>
                )
            }
            </div>
        </div>

    );

        
  
}

export default RightNavBar