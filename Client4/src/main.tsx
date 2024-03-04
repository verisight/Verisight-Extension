import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Report from './report/Report.tsx'
import Authentication from './auth/Authentication.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authentication/>
  </React.StrictMode>,
)
