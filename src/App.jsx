
import './App.css'
import BgImage from './components/BgImage'
import Header from './components/bookingComponent/bookingHeader/Header'

import FlagComp from './components/hidedComp/FlagComp'
import Navbar from './components/navbar/Navbar'

import { Outlet } from 'react-router-dom'



function App() {


  return (
    <>

      <Navbar />
      <BgImage />
      <Header />
      <Outlet/>
      <FlagComp/>
      
    </>
  )
}

export default App
