import React from 'react'
import Button1 from '../../common/button1'

const ExtensionCard = ({image, title, text, isChecked}) => {
  
  return (
    <div className='max-w-[25rem] min-w-[20rem] h-[230px] border-2 border-black rounded-3xl flex flex-col justify-between items-center p-2.5 m-1.5'>
          <div className='flex items-start justify-start  text-blue-950'>
            <img src= {image} alt="" />
            <div className='ml-5'>
              <h2 className='font-bold mb-2'>{title}</h2>
              <p>{text}</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between items-center">
              <div >
                    <Button1 text="Remove" />
              </div>
              <div className=''>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" checked={isChecked}/>
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#c7221a] dark:peer-checked:bg-[#c7221a]"></div>
                </label>
              </div>
             
            </div>
    
        </div>
    
  )
}

export default ExtensionCard