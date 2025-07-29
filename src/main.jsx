import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Bio from './components/Bio.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bio />
    <Experience />
    <Education />
  </StrictMode>
)
