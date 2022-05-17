import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './components/App/styles.sass'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<h1>Login</h1>}/>
      <Route path="/register" element={<h1>Register</h1>}/>
    </Routes>
  </BrowserRouter>
)
