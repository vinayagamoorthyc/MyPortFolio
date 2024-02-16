import React from 'react'
import SkillCard from './SkillCard'
import './Skills.css';

export default function Skills() {
  return (
    <div className='skill_flex' id="skills">
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
    </div>
  )
}
