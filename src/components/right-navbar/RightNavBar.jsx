import React from 'react'
import FlagBtn from './FlagBtn';
import LanguageBtn from './LanguageBtn';
import CurrencyBtn from './CurrencyBtn';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
import { useFirebase } from '../../firebase/firebase';



function RightNavBar() {

    const firebase = useFirebase()


    return (
        <div className="space-x-4 flex items-center py-4 ">
            <div className=' p-0 m-0  flex justify-between items-center'>
                <FlagBtn/>
                <LanguageBtn/>
                <CurrencyBtn/>
            </div>
            <div >
                {firebase.isLoggedIn ? null : (
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