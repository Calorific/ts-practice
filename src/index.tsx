import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/app'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
)

