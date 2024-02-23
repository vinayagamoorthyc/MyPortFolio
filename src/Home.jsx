import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import "./Home.css"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className='intro_main'>
      <Navbar/>
      <Intro/>
      <center><h1>About Me</h1></center>
      <About/>
      <center><h1>My Skills</h1></center>
      <Skills/>
      <center><h1>My Projects</h1></center>
      <Projects/>
    </div>
  )
}
