import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n.ts'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
