import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Onas from './components/Onas.jsx'
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
    <Navbar />
    <Header />
    <Onas />
    <Signup />
    <Login />
  </React.StrictMode>,
)
