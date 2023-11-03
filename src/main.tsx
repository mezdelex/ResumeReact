import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { ResumeStoreProvider } from './shared/ResumeStoreHandler'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResumeStoreProvider>
      {/* This has to be a <Router></Router> wrapper with the link to each Page */}
      {/* https://v5.reactrouter.com/web/guides/quick-start */}
      <App />
    </ResumeStoreProvider>
  </React.StrictMode>
)

