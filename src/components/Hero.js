import React from 'react'
import './styles/Hero.css'

const Hero = (props) => {
  const {toggleShowModal} = props
  return (
    <div className='hero'>
      <h1>Welcome to the world's best fintech app</h1>
      <div className='hero__links'>
        <a href="/download">Download our app</a>
        <a onClick={toggleShowModal}>Learn more</a>
      </div>
    </div>
  )
}

export default Hero