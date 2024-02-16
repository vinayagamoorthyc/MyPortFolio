import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import "./Home.css"
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className='intro_main'>
      <Navbar/>
      <Intro/>
      <center><h1>About Me</h1></center>
      <About/>
      <center><h1>My Skills</h1></center>
      <Skills/>
    </div>
  )
}
