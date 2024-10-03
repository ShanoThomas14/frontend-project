import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'
import menuicon from '../../assets/menu-icon.png'

const Navbar = () => {
    const[mobileMenu, setMobileMenu]= useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const [sticky, setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 600? setSticky(true) : setSticky(false);
        })
    },[])
  return (
    <nav className={`container ${sticky?'dark-nav' :''}`} >
       <Link to='frontpage' smooth={true} offset={-120} duration={500}> <img src={logo} alt="" className='logo' /></Link>
        <ul className='ph'>
            <li> <Link to='page1' smooth={true} offset={-120} duration={500}>About Us</Link></li>
            <li> <Link to='page2' smooth={true} offset={-100} duration={500}>Projects </Link></li>
            <li> <Link to='page3' smooth={true} offset={-90} duration={500}>Our Services </Link></li>
            <li> <Link to='page4' smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
            </ul>
        <li className='btnbluenav'><Link to='page5' smooth={true} offset={-90} duration={500}>Start a project <img src={white_arrow} alt="" /> </Link> </li>
        <img src={menuicon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
