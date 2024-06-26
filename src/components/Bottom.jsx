import React from 'react'
import "./Bottom.css";

export default function Bottom() {
  return (
    <div className='bottom' id='bottom'>
        <footer>
          <div class="footer">
            <div class="row">
              <a href="https://www.instagram.com/_.kolaru.__/" target='_blank'><i class="pi pi-instagram"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100037768420533" target='_blank'><i class="pi pi-facebook"></i></a>
              <a href="https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/" target='_blank'><i class="pi pi-linkedin"></i></a>
              <a href="https://github.com/vinayagamoorthyc"><i class="pi pi-github" target='_blank'></i></a>
            </div>

            <div class="row">
              <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">projects</a></li>
              </ul>
            </div>

            <div class="row">
              PortFolio || Designed By: Vinayaga Moorthy C 
            </div>
          </div>
        </footer>
    </div>
  )
}
