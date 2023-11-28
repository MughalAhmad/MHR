import React from 'react'
import "./About.css"
import Headerfirst from '../header first/Headerfirst';
import FooterFirst from '../footer first/FooterFirst';
const About = () => {
  return (
    <div className='main-about'>
    <Headerfirst />
    <div  className='import-about-div1'>
      <img src='./assets/p7.svg' alt='none' />

      </div>
    <div className='about-div1'>
      <div className='left-about-div1'>
        <p>MHR Guard Tracking App is a comprehensive mobile application designed to simplify guard tracking and management. MHR Guard Tracking specializes in the provision of manned guarding services to clients in both public and private sectors including Retail, Shopping Centers, Schools, Construction, Hospitals, and Office Buildings. The company HQ is based in London. Thus, by providing services primarily around West Yorkshire and secondary all over the UK, we can run healthier cost-effective operations. Our experts are available to reduce response time to any location in the UK.</p>
      </div>
      <div className='right-about-div1'>
        <img src='./assets/p5.svg' alt='none' />
      </div>
    </div>

<div className='about-div2'>
    <p>Our Clients</p>
    <div className='sub1-about-div2' >

    
    <div  className='subsub1-sub1-about-div2'>
    <img src='./assets/c1.svg' alt='none' className='img1' />
    <div>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Wstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Wstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Wstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>

    </div>
    <div className='commad1'>
    "The app's geofencing feature is so useful. I love that I can set up virtual boundaries and get notified when someone enters or exits the designated area. Customer support is excellent. Whenever I've had an issue or a question, they were quick to respond and resolve it."

    </div>
</div>



<div  className='subsub2-sub1-about-div2'>
<img src='./assets/c2.svg' alt='none' className='img1'/>
    <div>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>

    </div>
    <div className='commad2'>
    "The app's geofencing feature is so useful. I love that I can set up virtual boundaries and get notified when someone enters or exits the designated area. Customer support is excellent. Whenever I've had an issue or a question, they were quick to respond and resolve it."

    </div>
</div>





<div  className='subsub3-sub1-about-div2'>
<img src='./assets/c3.svg' alt='none' className='img1'/>
    <div>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Pstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Wstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>
    <img className='start' src='./assets/Wstar.svg' alt='none' style={{width:"2rem",height:"2rem"}}/>

    </div>
    <div className='commad3'>
    "The app's geofencing feature is so useful. I love that I can set up virtual boundaries and get notified when someone enters or exits the designated area. Customer support is excellent. Whenever I've had an issue or a question, they were quick to respond and resolve it."

    </div>
</div>
</div>

</div>
  
    <FooterFirst />

  </div>
  )
}

export default About