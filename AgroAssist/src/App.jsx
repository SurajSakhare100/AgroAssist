import React from 'react'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import { Outlet } from 'react-router-dom'
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.js';
function App() {
  return (
    <>
     {/* <I18nextProvider i18n={i18n}>
      <YourApp />
    </I18nextProvider> */}
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
