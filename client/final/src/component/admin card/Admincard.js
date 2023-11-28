import React from "react";
import "./Admincard.css";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
const Admincard = () => {
  const navigate = useNavigate();
  const go_admin =()=>{
    navigate('/AdmincardDetails')
    console.log('hello')
  }
  return (
    <>
    <Header/>
   
    <div className="Admincard-main" >
      <div className="admincard-div-img">
        <img src="./assets/img1.jpg" alt="noun" className="admincard-card-img" />
        <button onClick={()=>{go_admin()}}><span>click</span></button>
      </div>
    <div className="admincard-div-text">
    <h5>Ahmad </h5>
      <p>Job</p>
      <p>Contact</p>
      <p>Email</p>
      </div>
    </div>
    </>
  );
};

export default Admincard;
