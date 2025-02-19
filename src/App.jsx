import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Customer from './Components/Cutomer'
import ContactFooter from './Components/Footer'
import Services from './Components/Services'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Menu/>
    <Customer/>
    <ContactFooter/>
    </>
  )
}

export default App