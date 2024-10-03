import React from 'react'
import './Testimonials.css'
import user_2 from '../../assets/user-2.png'


const Testimonials = () => {
  return (
    <div className="testimonial-container" id='page4'>
    <div className='testimonial-text'>
      <h2>• Testimonials</h2>
      <p>
        A studio filled with passion, professionalism, and boundless creativity. 
        They exceeded my expectations with their excellent services, high-quality products, 
        and affordable prices. I’m extremely satisfied! </p>
      <div className="testimonial-author">
        <img
          src={user_2}
          alt=""
          className="author-image"
        />
        <div>
          <span className="author-name">Kathryn Murphy</span> <br></br>
          <span className="author-title">Senior Marketing, Spotify</span>
        </div>
      </div>
    </div>
    <div className="testimonial-nav">
      <button className="nav-btn">{"<"}</button>
      <button className="nav-btn">{">"}</button>
    </div>
  </div>
);
};


export default Testimonials
