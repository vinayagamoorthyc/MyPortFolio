import React from 'react';
import './SkillCard.css';
import img from '../assets/webdesign.png'

export default function SkillCard() {
  return (
    <div>
        <div class="social_btn2">
            <img src={img} alt="" width={60}/>
            <h2>Web Design</h2>
            <p>"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."</p>
        </div>
    </div>
  )
}
