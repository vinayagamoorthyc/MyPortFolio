import React from 'react';
import './ProjectCard.css';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro4 from '../assets/project4.png';

export default function ProjectCard() {
  return (
    <div className="projects_flex">
        <div class="cookieCard" data-aos="zoom-in">
            <img src={pro1} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">PowerLend App</p>
            <p class="cookieDescription">Our user-friendly interface allows you to effortlessly browse, reserve, and schedule tool rentals.<br/><br /><a href="https://github.com/vinayagamoorthyc/PowerToolsRental.git" target='_blank'>Project-Repository</a></p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://powertoolsrental.vercel.app/","_blank")}>Visit PowerLend</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in" >
            <img src={pro2} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">Personalized ChatBot</p>
            <p class="cookieDescription">Allows users to input their GitHub token, enabling the AI to personalize responses based on GitHub data.<br/><br /><a href="https://github.com/vinayagamoorthyc/Personal-ChatBot.git" target='_blank'>Project-Repository</a></p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://personalised-chatbot.vercel.app/","_blank")}>Visit Personal ChatBot</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src="https://s3-ap-southeast-1.amazonaws.com/assets.skyfilabs.com/images/blog/smart-mirror.jpeg" alt="" width={250} style={{zIndex:"1"}} />
            <p class="cookieHeading">Smart Mirror</p>
            <p class="cookieDescription">A smart mirror is a technologically enhanced mirror that integrates various digital features to provide functionalities.</p><br />
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://genuine-sawine-525236.netlify.app/","_blank")}>Implemented code</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src={pro4} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">LiBook App</p>
            <p class="cookieDescription">Offers ebooks across various categories, allowing users to explore their favorite reads effortlessly. <br/><br /><a href="https://github.com/vinayagamoorthyc/LiBook_ebook.git" target='_blank'>Project-Repository</a></p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://libook-library.vercel.app/","_blank")}>Visit LiBook e-library</button>
        </div>
    </div>
  )
}
