import React from 'react'
import "./Feature.css";
import Headerfirst from '../header first/Headerfirst';
import FooterFirst from '../footer first/FooterFirst';
const Feature = () => {
  return (
    <div className='main-feature'>
      <Headerfirst />
        <div  className='import-feature-div1'>
      <img src='./assets/p8.svg' alt='none' />
      </div>
      <div className='feature-div1'>
      
    <div className='sub1-feature-div1'>
      <div className='subsub1-sub1-feature-div1'>
      <img src='./assets/p9.svg' alt='none'/>
      </div>
      <h3>Scheduling</h3>
      <div  className='subsub2-sub1-feature-div1'></div>
      <h5>Your Personal Assistant to Scheduling </h5>
      <p>Are you fed up juggling with multiple tasks, appointments, and assigning your guards to different sites? Do you find it challenging to stay organized and manage your guards efficiently? If yes, then look no further! Our guard tracking app, MHR Guard Tracking, is here to simplify your life and get you organized with its special scheduling features. With our app, you can enjoy, effortless scheduling, personalized reminders, sync across your device apps to know who is going on duty and smart time management. Along with these, MHR Guards Tracking provides you with:</p>
            <ul>
        <li>Effective task management </li>
        <li>Collaborative scheduling </li>
        <li>Availability management</li>
      </ul>

    </div>





    <div className='sub1-feature-div1'>
      <div className='subsub1-sub1-feature-div1'>
      <img src='./assets/p10.svg' alt='none'/>
      </div>
      <h3>Guard List</h3>
      <div className='subsub2-sub1-feature-div1' style={{marginTop:"-.8rem"}}></div>
      <h5>Find Guards to your Needs </h5>
      <p>MHR Guard Tracking is not just about tracking and locating the guards. It is also about finding the right person for the right job. The amazing Guard List feature of this app provides you with a one-stop solution for finding reliable and skilled security guards for the right type of job. Whether you are looking for an efficient dog handler or a professional retail security guard matching the requirements of the job, our app has got you covered. It offers comprehensive Guard Profiles that you can easily browse through to find the most experienced and trained guards for the job. This feature of the app has:</p>

      <p className='subsub3-sub1-feature-div1'>Name, date of birth (DOB), Phone, SIA License number, E-mail, Emergency Number, Address, and SIA License Expiry details of your guards, making it easy to have look on the on-board guards.</p>

    </div>



    <div className='sub1-feature-div1' >
      <div className='subsub1-sub1-feature-div1'>
      <img src='./assets/p11.svg' alt='none'/>
      </div>
      <h3>Location</h3>
      <div className='subsub2-sub1-feature-div1'></div>
      <h5>The Ultimate Guard Location Services App</h5>
      <p>At MHR Support Services, we take pride in serving our clients with the highest level of professionalism. As part of our commitment to accessibility and convenience, MHR Guard Tracking app offers you real time location services of our on-duty guards. Whether you are looking to locate your guards or to see who is on duty, our MHR Guar MHR Guard Tracking is not just about tracking and locating the guards. It is also about finding the right person for the right job. The amazing Guard List feature of this app provides you with a one-stop solution for finding reliable and skilled security guards for the right type of job. Whether you are looking for an efficient dog handler or a professional retail security guard matching the requirements of the job, our app has got you covered. It offers comprehensive Guard Profiles that you can easily browse through to find the most experienced and trained guards for the job.</p>
     <h5>This feature of the app has:</h5>
     <p>MHR Guard Tracking app has all the answers to your queries. MHR Guard Tracking app is your go-to app for all your guard location services needs. With its user-friendly features, it equips you with real time GPA tracking of your on-site guards. </p>

    </div>
      </div>
      <div  className='feature-div2'>
<div  className='left-feature-div2'>
<img src='./assets/p12.svg' alt='none'/>
</div>
<div  className='right-feature-div2'>
<h6>Job types</h6>
<ul>
  <li>PATROL GUARD</li>
  <li>GATEHOUSE GUARD </li>
  <li>PROPERTY MANAGEMENT</li>
  <li>MOBILE PATROLS </li>
  <li>CONSTRUCTION SITE SECURITY</li>
  <li>PRIVATE PARTY </li>
  <li>DEMOLITION SITE SECURITY</li>
  <li>CONCIREGE SERVICES</li>
  <li>EVENT GUARDS </li>
  <li>DOG HANDLER</li>
</ul>
</div>
      </div>
      <div className='feature-div3'>
<img src='./assets/p13.svg' alt='none '/>
{/* <img src='./assets/p14.svg' alt='none '/> */}
      </div>
      <FooterFirst />

    </div>
  )

}

export default Feature