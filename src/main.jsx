import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode className= "mr-10 ml-10 bg-gray-200 ">
    <App />
  </StrictMode>,
)
