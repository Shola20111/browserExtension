import React from 'react'
import './App.css'
import ExtensionComponent from './components/modules/extensionModuleList/ExtensionComponent'
import { useState } from 'react'


function App() {
  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
  }
 

  return (
    <div  className= {`w-full bg-gray-100 dark:bg-black dark:text-white `}>
      
     <ExtensionComponent toggleTheme={toggleTheme} />
      
    </div>
  )
}

export default App
