import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
// import { Toast } from 'react-toastify/dist/components/Toast.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Toast></Toas> */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
