import React from 'react'
import './Services.css'




const Services = () => {
  return (
<div className="services-section" id='page3'>
      <div className="services-header">
        <h4>• Our Services</h4>
      </div>

      <div className="services-container">
        <div className='subhead'>
        <div className="left-content">
          <p>
            We are a close-knit team of experts dedicated to crafting memorable and </p>
            <p className='grey'>emotionally engaging websites, digital experiences, and native apps.</p>
        </div>
        </div>

        <div className="right-content">
          <div className="service-box brand-identity">
            <h3>BRAND <br></br>IDENTITY</h3>
            <p>
              We provide digital solutions such as Website Design, Mobile App Design, Landing Page Design, Illustration, Animation, etc., that increase a company's values.
            </p>
            <span className="arrow">→</span>
          </div>

          <div className="service-box">
            <h3>UX/UI<br></br> DESIGN</h3>
            <p>
              We provide digital solutions such as Website Design, Mobile App Design, Landing Page Design, Illustration, Animation, etc., that increase a company's values.
            </p>
            <span className="arrow">→</span>
          </div>

          <div className="service-box">
            <h3>WEBFLOW DEVELOPER</h3>
            <p>
              We provide digital solutions such as Website Design, Mobile App Design, Landing Page Design, Illustration, Animation, etc., that increase a company's values.
            </p>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Services
