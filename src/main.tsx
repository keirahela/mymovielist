import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './i18n.ts'
import './globals.css'
import Player from './pages/Player.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="player/:id" element={<Player />} />
            <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
)
