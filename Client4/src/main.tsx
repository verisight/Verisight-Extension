// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './report/Report.tsx'
// import { ThemeProvider } from './components/ui/theme-provider.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Profile.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
