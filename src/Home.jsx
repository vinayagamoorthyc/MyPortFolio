import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import "./Home.css"
import About from './components/About'

export default function Home() {
  return (
    <div className='intro_main'>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  )
}
