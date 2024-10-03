import React from 'react'
import './Footer.css'
import logofoot from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
            <div className='footer-bottom-left'>
            <hr className="footer-line" />
                <img src= {logofoot}alt="" /><div className='footer-bottom-right'> 
            
            <p>Privacy</p>
            <p>Term</p>
            <p>Security</p>
            </div>
            </div>
        </div>
      
  )
}

export default Footer
