import React from 'react'
import Logo from '../../assets/images/logo.svg'
import IconMoon from '../../assets/images/icon-moon.svg'


const HeaderComponent = ({ btnToggle }) => {
  
  return ( 
    <div>
      <div className= 'border-2 border-white w-1rem h-16 flex justify-between items-center columns-2 rounded-xl bg-white px-1.5 shadow-2xs'>
      <div>
        <img src= {Logo} alt="" />        
      </div>
        <button type='button' onClick={()=>btnToggle()} className='w-10 h-10 bg-orange-100 rounded-xl p-0.5'> 
          <img src={IconMoon} alt="" className='w-full' />
        </button>
      </div>
    </div>
    
  )
}

export default HeaderComponent