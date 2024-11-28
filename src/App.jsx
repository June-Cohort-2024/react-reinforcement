import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './ScreenComponents/HomePage'
import {AboutPage} from './ScreenComponents/AboutPage'
import { Menu } from './Components/Menu'
import { Footer } from './Components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
