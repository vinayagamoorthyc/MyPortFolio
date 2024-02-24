import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div id="about">
    <div className='about_flex'>
        <div>
            <div className='myimage'></div>
        </div>
        <div  style={{width:'50%'}}>
            <h2>Web Developer</h2>
            <p>I am <b>Vinayaga moorthy C</b> currently pursuing a <b>B.Tech</b> Information Technology at Karpagam College of Engineering. Eager to contribute my skills and passion for coding to innovative projects, I bring a foundation in Full Stack development, coupled with a proactive approach to learning and problem-solving.
                my coursework has provided me with a solid understanding of fundamental programming concepts and algorithms.
            </p>
            <div>
                <i className="pi pi-phone"></i> &nbsp;<b>Mobile:</b> 9360810429<br/>
                <i className='pi pi-envelope'></i> &nbsp;<b>Email:</b> sanjaiiti2709@gmail.com
            </div><br/>
            <div className='social_flex'>
                <button class="social_btn" onClick={()=>window.open("https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/","_blank")}>
                    <i className='pi pi-linkedin'></i>
                </button>
                <button class="social_btn" onClick={()=>window.open("https://www.instagram.com/_.kolaru.__/","_blank")}>
                    <i className='pi pi-instagram'></i>
                </button>
                <button class="social_btn" onClick={()=>window.open("https://www.facebook.com/profile.php?id=100037768420533","_blank")}>
                    <i className='pi pi-facebook'></i>
                </button>
                <button class="social_btn" onClick={()=>window.open("https://github.com/vinayagamoorthyc","_blank")}>
                    <i className='pi pi-github'></i> Git Repositories
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
