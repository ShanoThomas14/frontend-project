import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='frontpage'>
      <div className='hero-text'>
        <h1>We create award <br></br>
          winning website</h1><br></br>
        <p>Based in San Francisco, we're a digital<br></br> 
          products design & development studio<br></br> 
          that passionate the creation high<br></br>
          applicability of digital experiences</p>
        <br></br>
        <button className='btn'>Explore <img src={white_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
