import React from 'react'
import './styles/ServicesCard.css'

const ServicesCard = ({img_url, title, description, explore}) => {
  return (
    <div className='service__card'>
      <img src={img_url} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="./learnmore">{explore}</a>
    </div>
  )
}

export default ServicesCard