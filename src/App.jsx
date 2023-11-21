import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'

function App() {  
  
  return (
    <>
    <Header>
      <Navigation/>
    </Header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
    </Routes>
      

      <Footer />
    </>
  )
}

export default App
