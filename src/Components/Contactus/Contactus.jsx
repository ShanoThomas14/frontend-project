import React from 'react'
import './Contactus.css'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
import driblle from '../../assets/dribble.png'
import behance from '../../assets/behance.png'
import phonecalls from '../../assets/call-icon.svg'
import mails from '../../assets/mail-icon.svg'
const Contactus = () => {
  return (
<div className="contact-container" id='page5'>
      <div className="contact-info">
        <h1>Feel free to connect with us!</h1>
        <div className="social-icons">
          <button className="icon-btn1"><img src={twitter} alt="" /></button>
          <button className="icon-btn2"><img src={insta} alt="" /></button>
          <button className="icon-btn3"><img src={driblle} alt="" /></button>
          <button className="icon-btn4"><img src={behance} alt="" /></button>
        </div>
        <div className="contact-details">
          <button className="phonecall"><img src={phonecalls} alt="" /> 0972 663 633</button> <br></br>
          <button className="phonecall"><img src={mails} alt="" /> hello@wefo.com</button>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name <span className="required">*</span></label><br></br>
            <br></br>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email <span className="required">*</span></label><br></br>
            <br></br>
            <input type="email" placeholder="Your email address" />
          </div>
          <div className="form-group">
            <label>Message</label><br></br>
            <br></br>
            <textarea placeholder="Write your message here..." />
          </div>
          <button type="submit" className="btn">
            Send <span className="arrow">→</span>
          </button>
        </form>
      </div>
     
      </div>
    
  );
};   


export default Contactus
