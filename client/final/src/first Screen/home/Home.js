import React from 'react'
import "./Home.css";
import Headerfirst from '../header first/Headerfirst';
import FooterFirst from '../footer first/FooterFirst';
const Home = () => {
  return (
    <div className='main-home'>
      <Headerfirst />
      <div className='home-div1'>
        <div className='left-home-div1'>
          <img src='./assets/h1.svg' alt='none' />
          <p>Your security at your doorstep</p>
          <p>Quick timesheets, efficient staff scheduling, and management of employees are all benefits.</p>
        </div>
        <div className='right-home-div1'>
          <img src='./assets/p1.svg' alt='none' />
        </div>
      </div>
      <div className='home-div2'>
      <img src='./assets/h2.svg' alt='none' />
      <img src='./assets/p2.svg' alt='none' />
      </div>
      <div className='home-div3'>
        <div className='left-home-div3'>
        <img src='./assets/p3.svg' alt='none' />

        </div>
        <div className='right-home-div3'>
<p>MHR Guard Tracking provides the best Guard tracking and scheduling system in United kingdom. MHR Guard Tracking is a new laughing project from MHR SUPPORT that already have a good experience in the market. MHR Guard Tracking have many features that are not seen before in security-provided agency in the United Kingdom . The main features provided by MHR Guard Tracking is to locate guards through GEO FENCING and Track them While they are at Shift.</p>
        </div>
      </div>





      <div className='home-div4'>
        <div className='left-home-div4'>
          <div className='sub1-left-home-div4'>
          <p>GEO FENCING</p>
          <p style={{textAlign:"justify"}}>In MHR GUARD TRACKING we use geofencing, that involves equipping security guards with mobile devices that can monitor their location within a designated geofenced area.</p>
          <ul>
            <li>MHR Support is Using Guard Tracking App called MHR Guard Tracking.</li>
            <li>Daily Guard Timesheet.</li>
            <li>Guard Geo Fencing tracking 24/7.</li>
            <li>Guard Weekly Rota.</li>
          </ul>
          </div>
        </div>
        <div className='right-home-div4'>
          <img src='./assets/p4.svg' alt='none' />
        </div>
      </div>
      <FooterFirst />

    </div>
  )

}

export default Home