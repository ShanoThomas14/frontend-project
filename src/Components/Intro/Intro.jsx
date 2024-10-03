import React from 'react'
import './Intro.css'
import logosct from '../../assets/logo.png'
import banner from '../../assets/banner.png'
import warrow from '../../assets/white-arrow.png'

const Intro = () => {
  return (
    <div className="container2" id='page1'>
    <div className="content2">
      <p className="question2">• Who are we?</p>
      <div className="blue-box2"> <div className='logoso'> <img src={logosct} alt="" /></div></div>
      <div className='rightcontent'>
        <p className="description2">
        We create mind-blowing visuals, brands, websites, and products<p className='grey'> that help startups 
        and innovative companies gain more exposure.</p>
      </p>
      <button className="learn-more-btn2">Learn more <img src={warrow} alt="" /></button>
</div >
      
    <div className="bannerimage">
      <img
        src={banner}
        alt=""
        className="adjustable-image"/>
    </div>
    </div>
  </div>
  )
}

export default Intro
