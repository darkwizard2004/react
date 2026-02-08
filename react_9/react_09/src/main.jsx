import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // <BrowerRoute>
      // <Router>
      //   <App />
      // </Router>
  // </BrowerRoute> // but we dont do it like that

)
