import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import AppRouter from './config/Router.tsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <AppRouter/>
    </BrowserRouter>
  </StrictMode>
)
