import React from 'react'
import { flagApi } from '../PseudoApis/flagApis'
// import '../../App.css'

function FlagComp({ onButtonClick }) {

    const flagDiv = flagApi.map((flag, index)=>{
        return <button className='button-container px-3 py-2 text-left  text-black block bg-white hover:bg-gray-200 ' key={index} onClick={()=>{
            onButtonClick(flag.code)
        }}>
            <span className={`${flag.code} fi mx-2`}></span>
            <span >{flag.country}</span>
        </button>
    })
  return (
    flagDiv
  )
}

export default FlagComp