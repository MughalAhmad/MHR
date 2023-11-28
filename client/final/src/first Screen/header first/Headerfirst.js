import React,{useState} from 'react'
import "./Headerfirst.css"
import { Outlet,useNavigate ,NavLink} from "react-router-dom";
const Headerfirst = () => {
  const navigate = useNavigate();
// const [isActive, setIsActive] = useState("")

    return (
        <div className='div1' >
        <nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid " >
    <div className='header_img'>
    <img src='./assets/img.png' alt='logo' className='first-img'/>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse first-navbar" id="navbarScroll">
      <ul className="navbar-nav me-auto navbar-nav-scroll nav_ul">
        <li className="nav-item">
        <NavLink className="nav-link first-nav " style={{color:"#6C6A72" ,fontSize:"2.4rem"}}  to="/" ><div className='aa'>Home</div></NavLink>              
        </li>
        <li className="nav-item">
          <NavLink className="nav-link first-nav " style={{color:"#6C6A72",fontSize:"2.4rem"}} to="/Feature" ><div className='aa'>Features</div></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link first-nav " style={{color:"#6C6A72",fontSize:"2.4rem"}} to="/About" ><div className='aa'>About Us</div></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link first-nav " style={{color:"#6C6A72",fontSize:"2.4rem"}} to="/Contact" ><div className='aa'>Contact Us</div></NavLink>            
        </li>  
      </ul>
      <button className='first-btn' onClick={()=>navigate("/Connection")}>Log in</button>
    </div>
  </div>
</nav>

</div>

    )
}

export default Headerfirst