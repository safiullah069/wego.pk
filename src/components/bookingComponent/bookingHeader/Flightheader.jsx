import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Flightheader({source}) {
 

  return (
    <NavLink to={`${source.redirect}`} 
     className='border-2 border-red-800 font-semibold flex justify-center items-center px-4 py-2'
     style={({ isActive }) => ({

        backgroundColor: isActive ? 'white' : 'transparent',
        color: isActive ? "black" : "white"
      })}   
     >
            <img src={`src/assets/${source.source}`} alt="" />
            {source.name}
    </NavLink>
  )
}

export default Flightheader