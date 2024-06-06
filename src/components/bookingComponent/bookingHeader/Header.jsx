import React from 'react'
import Flightheader from './Flightheader'

function Header() {

  return (
    <div className='flex justify-start px-20 py-0 m-0 -mt-80 '>
        <Flightheader source={{source : "flights.webp", name: "Flights", redirect: "/flights"}}/>
        <Flightheader source={{source : "hotels.webp", name: "Hotels", redirect: "/hotels"}}/>
        {/* <Flightheader source={{source : srcc, name: "Flights"}}/> */}
        
    </div>
  )
}

export default Header