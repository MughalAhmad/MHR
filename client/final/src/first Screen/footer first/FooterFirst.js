import React from 'react'
import "./FooterFirst.css";
const FooterFirst = () => {
  return (
    <div className='footer-first'>
      <div className='sub1-footer-first'>
        <div className='subsub1-sub1-footer-first'>
          <img src='./assets/img.png' alt='none' />
        </div>
        {/* <div className='subsub2-sub1-footer-first'>
          <p>Home</p>
        </div> */}
        <div className='subsub3-sub1-footer-first'>
          <p>Features</p>
          <div className='sub1-subsub3-sub1-footer-first'>
            <span>Scheduling</span>
            <span>Guard List</span>
            <span>Location</span>
            <span>Job Types</span>
          </div>
        </div>
        <div className='subsub4-sub1-footer-first'>
          <p>About Us</p>
          <div className='sub1-subsub4-sub1-footer-first'>
            <span>Details</span>
            <span>Our Clients</span>
          </div>
        </div>
        <div className='subsub6-sub1-footer-first'>
        <p>Company</p>
          <div className='sub1-subsub6-sub1-footer-first'>
            <span style={{fontSize:"1.5rem"}}>MHR Support Ltd</span>
            <span>Line watch security</span>
            <span>Sunday security</span>
          </div>
          <div  className='sub2-subsub6-sub1-footer-first'>
          <img src='./assets/T.svg' alt='none' />
          <img src='./assets/F.svg' alt='none' />
          <img src='./assets/W.svg' alt='none' />
          <img src='./assets/I.svg' alt='none' />

          </div>
        </div>
        <div className='subsub5-sub1-footer-first'>
          <p>Contact Us</p>
          <div className='sub1-subsub5-sub1-footer-first'>
            <div className='subsub1-sub1-subsub5-sub1-footer-first'>
              <img src='./assets/Wmail.svg' alt='none' />
              <span style={{marginLeft:"1rem"}}>Email</span>
              </div>
            <p>info@mhrsupport.com</p>



            <div className='subsub2-sub1-subsub5-sub1-footer-first'>
              <img src='./assets/Wphone.svg' alt='none' />
              <span style={{marginLeft:"1.2rem",marginTop:"1rem"}}>Phone</span>
              </div>
            <span>24\7 Control 0208 0640 607</span>



            <div className='subsub3-sub1-subsub5-sub1-footer-first'>
              <img src='./assets/Wlocation.svg' alt='none' />
              <span style={{marginLeft:"1.2rem",marginTop:"1rem"}}>Office</span>
              </div>
            <span>Location: 18 CRAVEN GARDENS LONDON IG6 1PF</span>


          </div>
        </div>
        
      </div>
      <div className='sub2-footer-first'>
        <p >Copyright @ 2023. Made By SD HUB PK</p>
      </div>
    </div>
  )
}

export default FooterFirst