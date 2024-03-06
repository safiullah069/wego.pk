import React from 'react'
import { languageApis } from '../PseudoApis/languageApis'
import '../../App.css'

function LanguageComp({ onButtonClick }) {

    const langDiv = languageApis.map((lang, index)=>{
        return <button className='lang-button-container  px-3 py-2 text-left flex just text-black justify-start bg-white hover:bg-gray-200 ' key={index} onClick={()=>{
            onButtonClick(lang.code)
        }}>
            <span className={`font-semibold text-sm  mr-2 `}>{lang.code}</span>
            <span className='text-sm w-full '>{lang.language}</span>
        </button>
    })
  return (
    langDiv
  )
}

export default LanguageComp