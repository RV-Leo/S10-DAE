import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/instrument-sans'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/forms.css'
import './styles/utilities.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
