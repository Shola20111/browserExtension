import React from 'react'
import { useState } from 'react'

const button1 = ({ text, currentBtn, handleBtnClick }) => {
  return (
    <button type='button' onClick={() => handleBtnClick(text)} className={`w-auto ml-1.5 py-1.5 px-3.5 border border-gray-400 rounded-[25px] ${currentBtn == 'All' && text == 'All' ? 'bg-[red] text-white' : currentBtn == 'Active' && text == 'Active' ? 'bg-[red] text-white' : currentBtn == 'Inactive' && text == 'Inactive' ? 'bg-[red] text-white' : 'bg-white text-blue-950'}`} >
      {text}
    </button>
  )
}

export default button1