import React from 'react'
import { useState } from 'react'
import HeaderComponent from '../../common/HeaderComponent'
import ExtensionListTop from './ExtensionListTop'
import ExtensionListCard from './ExtensionListCard'

const ExtensionComponent = ({ toggleTheme }) => {
  const [currentBtn, setCurrentBtn] = useState('All')
  return (
    <div className= " pt-5 ml-10 mr-10  w-{95%}">
      
       <HeaderComponent btnToggle={toggleTheme} />
       <ExtensionListTop currentBtn={currentBtn} setCurrentBtn={setCurrentBtn} />
       <ExtensionListCard currentBtn={currentBtn} />
    </div>
  )
}

export default ExtensionComponent
