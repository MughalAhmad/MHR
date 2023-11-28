import React from 'react';
import "./Header.css";
import { NavLink,Outlet } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
const Header = () => {
  
 
  return (
    <div style={{borderBottom:".1rem solid"}}>
        <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid" style={{background:"#9bcc8b"}}>
    <img src='./assets/img.png' alt='logo' className='img'/>
    <h2>MHR Guard Tracking</h2>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
        <li className="nav-item">
        <NavLink className="nav-link "  to="/Subadmin" style={{fontSize:"2rem",marginLeft:"2rem",marginTop:"5rem"}}>Me</NavLink>              
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/Jobtype" style={{fontSize:"2rem",marginLeft:"1rem",marginTop:"5rem"}}>Job Type</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/Guardlist" style={{fontSize:"2rem",marginLeft:"1rem",marginTop:"5rem"}}>Guard List</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link " to="/TestMap" style={{fontSize:"2rem",marginLeft:"1rem",marginTop:"5rem"}}>Map</NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink className="nav-link " to="/Location" style={{fontSize:"2rem",marginLeft:"1rem",marginTop:"5rem"}}>Location</NavLink>            
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to="/Scheduling" style={{fontSize:"2rem",marginLeft:"1rem",marginTop:"5rem"}}>Scheduling</NavLink>            
        </li>
      </ul>
    
    </div>
  </div>
</nav>
<Outlet/>
</div>
  )
}

export default Header