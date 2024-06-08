import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDUoAzkOGOfNdfBtmyB2_zvVVZME2wk7A0",
    authDomain: "wegopk-clone.firebaseapp.com",
    projectId: "wegopk-clone",
    storageBucket: "wegopk-clone.appspot.com",
    messagingSenderId: "161797892568",
    appId: "1:161797892568:web:91d2851b4ddd7badc4eaad",
    databaseURL : "https://wegopk-clone-default-rtdb.firebaseio.com",
  };

export const app = initializeApp(firebaseConfig);