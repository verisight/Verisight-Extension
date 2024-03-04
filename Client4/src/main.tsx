import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Report from './report/Report.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Report />
    </ThemeProvider>
  </React.StrictMode>,
)
