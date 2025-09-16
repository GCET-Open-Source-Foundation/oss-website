import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './apply_form.css'
import App from './applyform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
