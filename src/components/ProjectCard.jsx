import React from 'react';
import './ProjectCard.css';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';

export default function ProjectCard() {
  return (
    <div className="projects_flex">
        <div class="cookieCard" data-aos="zoom-in">
            <img src={pro1} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">PowerLend App</p>
            <p class="cookieDescription">Our user-friendly interface allows you to effortlessly browse, reserve, and schedule tool rentals.<br/><br /><a href="https://github.com/vinayagamoorthyc/PowerToolsRental.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://powertoolsrental.vercel.app/","_blank")}>Visit PowerLend</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in" >
            <img src={pro2} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">Blog Portal</p>
            <p class="cookieDescription">Explore a diverse collection of thought-provoking articles, engaging stories, and expert opinions.<br/><br /><a href="https://github.com/vinayagamoorthyc/BlogPortal.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://vinayagablogportal.netlify.app/","_blank")}>Visit BlogPortal</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src="https://s3-ap-southeast-1.amazonaws.com/assets.skyfilabs.com/images/blog/smart-mirror.jpeg" alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">Smart Mirror</p>
            <p class="cookieDescription">A smart mirror is a technologically enhanced mirror that integrates various digital features to provide functionalities.</p><br />
            <button class="acceptButton" onClick={()=>window.open("https://genuine-sawine-525236.netlify.app/","_blank")}>Visit Project</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src="https://st4.depositphotos.com/2274151/30828/v/450/depositphotos_308282000-stock-illustration-in-progress-sign-in-progress.jpg" alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">LiBook App</p>
            <p class="cookieDescription">Offers ebooks across various categories, allowing users to explore their favorite reads effortlessly. <br/><br /><a href="https://github.com/vinayagamoorthyc/LiBook_ebook.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://libook-library.vercel.app/","_blank")}>Visit App</button>
        </div>
    </div>
  )
}
