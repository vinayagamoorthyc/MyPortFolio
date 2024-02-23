import React from 'react';
import './ProjectCard.css';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';

export default function ProjectCard() {
  return (
    <div className="projects_flex">
        <div class="cookieCard">
            <img src={pro1} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">PowerLend App</p>
            <p class="cookieDescription">Our user-friendly interface allows you to effortlessly browse, reserve, and schedule tool rentals.<br/><a href="https://github.com/vinayagamoorthyc/PowerToolsRental.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://powertoolsrental.vercel.app/","_blank")}>Visit PowerLend</button>
        </div>
        <div class="cookieCard">
            <img src={pro2} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">Blog Portal</p>
            <p class="cookieDescription">Explore a diverse collection of thought-provoking articles, engaging stories, and expert opinions.<br/><a href="https://github.com/vinayagamoorthyc/BlogPortal.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://vinayagablogportal.netlify.app/","_blank")}>Visit BlogPortal</button>
        </div>
        <div class="cookieCard">
            <img src={pro3} alt="" width={260} style={{zIndex:"1"}} />
            <p class="cookieHeading">Task Manager</p>
            <p class="cookieDescription">Enjoy a user-friendly interface that allows you to create, edit, and organize tasks seamlessly.<br/><a href="https://github.com/vinayagamoorthyc/Dynamic_TaskManager.git">Project-Repository</a></p>
            <button class="acceptButton" onClick={()=>window.open("https://genuine-sawine-525236.netlify.app/","_blank")}>Visit TaskManager</button>
        </div>
    </div>
  )
}
