import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import { StoreProvider } from './providers/StoreProvider'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
)
