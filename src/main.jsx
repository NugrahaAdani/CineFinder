import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { FavoriteProvider } from "./context/FavoriteProvider.jsx";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </HashRouter>
  </StrictMode>,
)
