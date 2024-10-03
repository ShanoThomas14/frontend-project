import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Services from './Components/Services/Services'
import Intro from './Components/Intro/Intro'
import Testimonials from './Components/Testimonials/Testimonials'
import Contactus from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="containerint" >
     <Intro/>
     </div>
     <div className="container" >
     
      <Programs/>
      <Services/>
      
      
     </div>
     <Testimonials/>
     <Contactus/>
     <div className="container" >
     <Footer/>
     </div>
    </div>
  )
}

export default App
