import React from 'react'
import ExtensionCard from './ExtensionCard'
import Devlens from '../../../assets/images/logo-devlens.svg'
import StyleSpy from '../../../assets/images/logo-style-spy.svg'
import SpeedBoost from '../../../assets/images/logo-speed-boost.svg'
import JSONWizard from '../../../assets/images/logo-json-wizard.svg'
import TabMasterPro from '../../../assets/images/logo-tab-master-pro.svg'
import ViewportBuddy from '../../../assets/images/logo-viewport-buddy.svg'
import MarkupNotes from '../../../assets/images/logo-markup-notes.svg'
import GridGuides from '../../../assets/images/logo-grid-guides.svg'
import PalettePicker from '../../../assets/images/logo-palette-picker.svg'
import LinkChecker from '../../../assets/images/logo-link-checker.svg'
import DOMSnapshot from '../../../assets/images/logo-dom-snapshot.svg'
import ConsolePlus from '../../../assets/images/logo-console-plus.svg'

const datas = [
  {image: Devlens, 
    title: 'DevLens', 
    text: 'Quickly inspect page layouts and visualize element boundaries.', 
    isChecked: true},
  {image: StyleSpy, 
    title: 'StyleSpy', 
    text: 'Instantly analyze and copy CSS from any webpage element.', 
    isChecked: false},
  {image: SpeedBoost, title: 'SpeedBoost', text: 'Optimizes browser resource usage to accelerate page loading.', isChecked: true},
  {image: JSONWizard, title: 'JSONWizard', text: 'Formats, validates, and prettifies JSON responses in-browser.', isChecked: false},
  {image: TabMasterPro, title: 'TabMaster Pro', text: 'Organizes browser tabs into groups and sessions.', isChecked: true},
  {image: ViewportBuddy, title: 'ViewportBuddy', text: 'Simulates various screen resolutions directly within the browser.', isChecked: false},
  {image: MarkupNotes, title: 'Markup Notes', text: 'Enables annotation and notes directly onto webpages for collaborative debugging.', isChecked: true},
  {image: GridGuides, title: 'GridGuides', text: 'Overlay customizable grids and alignment guides on any webpage.', isChecked: false},
  {image: PalettePicker, title: 'Palette Picker', text: 'Instantly extracts color palettes from any webpage.', isChecked: true},
  {image: LinkChecker, title: 'LinkChecker', text: 'Scans and highlights broken links on any page.', isChecked: false},
  {image: DOMSnapshot, title: 'DOM Snapshot', text: 'Capture and export DOM structures quickly.', isChecked: true},
  {image: ConsolePlus, title: 'ConsolePlus', text: 'Enhanced developer console with advanced filtering and logging.', isChecked: false}
]

const ExtensionListCard = ({currentBtn}) => {
  let result;
  if(currentBtn=='Active'){
    result = datas.filter((item)=>item.isChecked==true);
  } else if(currentBtn=='Inactive'){
    result = datas.filter((item)=>item.isChecked==false)
  } else{
    result = datas
  }

  
  

  return (
    <section className='grid sm:grid-cols-1 m-[0, auto] md:grid-cols-2 splace-items-center lg:grid-cols-3 dark:text-white dark:bg-black '>
      {result.map((data, index) =>
        <ExtensionCard image= {data.image} title={data.title} text={data.text} isChecked={data.isChecked} key={index} />
      )}
      

    </section>
  )
}

export default ExtensionListCard