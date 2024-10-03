import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_icon_1 from '../../assets/link.png'
import program_icon_2 from '../../assets/link.png'
import program_icon_3 from '../../assets/link.png'
import logosc from '../../assets/logo.png'
import white_arrow from '../../assets/white-arrow.png'
const Programs = () => {
  return (
        <div className="programs" id='page2'>
          <div className='logosc'><img src={logosc} alt="" /></div>
            <div className='subthead'> <div className='header'><h3>• Featured Works</h3></div> <br></br><p> Take a look at <br></br>Our projects</p><button className='btno'>View Projects<img src={white_arrow}></img></button></div>
            
        <div className='program'>
       
            <img src={program_1} alt=""/>
            <div className="tags">
                <button className='tag'>Development</button>
                <span className='tag'>UI/UX</span>
                <span className='tag'>Illustration</span>
            </div>
            
            <div className='textheading'>
                <p className='text'>Roboto Landing page</p>
            </div>
           
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Roboto Landing page</p>
            </div>
            
        

        </div>
        
        <div className='program'>
            <img src={program_2} alt=""/>
            <div className="tags">
                
                <span className='tag'>UI/UX</span>
                <span className='tag'>Illustration</span>
            </div>
            <div className='textheading'>
                <p className='text'>Poppin App Design</p>
            </div>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Poppin App Design</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=""/>
            <div className="tags">
                <span className='tag'>Development</span>
                <span className='tag'>UI/UX</span>
                <span className='tag'>Illustration</span>
            </div>
            <div className='textheading'>
                <p className='text'>Groteck Website</p>
            </div>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Groteck Website</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_4} alt=""/>
            <div className="tags">
                <span className='tag'>Branding</span>
                <span className='tag'>UI/UX</span>
            </div>
            <div className='textheading'>
                <p className='text'>Helvatica Branding</p>
            </div>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Helvatica Branding</p>
            </div>
        </div>
        </div>
  )
}

export default Programs
