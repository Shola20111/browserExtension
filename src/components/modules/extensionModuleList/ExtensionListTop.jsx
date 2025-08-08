import React, { useState } from 'react'
import Button1 from '../../common/button1'


const ExtensionListTop = ({currentBtn, setCurrentBtn}) => {
  
  const handleBtnClick = (state) => {setCurrentBtn(state)} //state here means the current condition of the button
  return (
    <div className='flex items-center justify-between mt-5 mb-5'>
        <div className='font-bold text-blue-950 '>
            <h1 className='text-3xl'>Extensions List</h1>
        </div>
        <div className='min-w-[200px]'>
          <Button1 text="All" currentBtn={currentBtn} handleBtnClick={handleBtnClick}/>
          <Button1 text="Active" currentBtn={currentBtn} handleBtnClick={handleBtnClick}/>
          <Button1 text="Inactive" currentBtn={currentBtn} handleBtnClick={handleBtnClick}/> 
        </div>
          
    </div>
  )
}

export default ExtensionListTop