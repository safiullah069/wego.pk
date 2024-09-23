import { useState, useEffect, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Too5Y9FtaNxjFdL5c7VsNxSQMRFMTWg",
  authDomain: "wego-with-firebase-7acb8.firebaseapp.com",
  projectId: "wego-with-firebase-7acb8",
  storageBucket: "wego-with-firebase-7acb8.appspot.com",
  messagingSenderId: "949029824948",
  appId: "1:949029824948:web:5f2d884516f995ce176ae1"
};

const FirebaseContext = createContext()


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext)


export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  const signupUserWithEmailAndPassword = (email, password, displayName) => {
    try {
        const signUpResult = createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            let user = userCredential.user;
            return user.updateProfile(auth.currentUser, {
            displayName: displayName
            });
        })
        .then(() => {
            console.log("Display name updated to: " + auth.currentUser.displayName);
        })
        .catch((error) => {
            // if (error.code === 'auth/email-already-in-use') {
            //     console.log("try logging in");
            // }
            console.log(error);
        })
        console.log(signUpResult);
    } catch (error) {
        console.log("Try Logging In");
    }
  }

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
  }

  const logout = async () => {
    await signOut(firebaseAuth)

  }

  const isLoggedIn = user ? true : false


  return(
    <FirebaseContext.Provider value={
        {signupUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        logout,
        isLoggedIn,
        user

    }
    }>
        {props.children}
    </FirebaseContext.Provider>
  )

}