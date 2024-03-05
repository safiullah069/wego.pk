import React from 'react'
import { flagApi } from '../PseudoApis/flagApis'

function FlagComp() {
    const flagDiv = flagApi.map((flag, index)=>{
        return <button className='p-2 bg-red-300 text-black' key={index}>
            <span className={`${flag.code} fi`}>{flag.country}</span>
        </button>
    })
  return (
    flagDiv
  )
}

export default FlagComp