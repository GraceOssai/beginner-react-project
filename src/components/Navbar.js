import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav__left'>
        <a href='/'>PAY<span>stack</span></a>
      </div>
      <div className='nav__right'>
        <a href="/about">about</a>
        <a href="/conference">conference</a>
        <a href="/career">career</a>
        <a href="/partnership">partnership</a>
        <a href="/api">API</a>
        <a href="/contact">contact us</a>
      </div>
    </div>
  )
}

export default Navbar