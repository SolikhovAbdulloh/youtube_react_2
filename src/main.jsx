import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Root from './Components/root'
import Root2 from './Components/Root2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Root2/>
    <Root/>
    </BrowserRouter>
  </StrictMode>,
)
