import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import AppRouter from './config/Router.tsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <Analytics />
      <AppRouter/>
    </BrowserRouter>
  </StrictMode>
)
