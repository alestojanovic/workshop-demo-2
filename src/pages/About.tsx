import React from 'react'
import {useNavigate} from 'react-router-dom'
import bat from '../assets/bat.svg'

const About = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/')}>
      <img src={bat} alt='logo' /> About
    </div>
  )
}

export default About
