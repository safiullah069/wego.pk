import React from 'react'
import { currencyApis } from '../PseudoApis/currencyApis'
import '../../App.css'

function CurrencyComp({ onButtonClick }) {

    const currencyDiv = currencyApis.map((currency, index)=>{
        return <button className='button-container px-3 py-2 text-left  text-black block bg-white hover:bg-gray-200 ' key={index} onClick={()=>{
            onButtonClick(currency.code)
        }}>
            <span className={`mr-2`}>{currency.code}</span>
            <span >{currency.currency}</span>
        </button>
    })
  return (
    currencyDiv
  )
}

export default CurrencyComp
