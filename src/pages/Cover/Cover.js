import React from 'react'
import './Cover.css';
import cover from '../../images/gradient-dark-blue-futuristic-digital-background.jpg'
const Cover = () => {
  return (
    <div>
        <img className='cover-img' src={cover} alt="" />
    </div>
  )
}

export default Cover