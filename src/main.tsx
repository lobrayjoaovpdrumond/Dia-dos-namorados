import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { UnlockProvider } from './context/UnlockContext'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnlockProvider>
      <App />
    </UnlockProvider>
  </StrictMode>,
)
