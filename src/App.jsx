import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import Journeys from './components/Journeys'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experiences />
      <Journeys />
      <Footer />
    </div>
    
  )
}

export default App
