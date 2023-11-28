import { useState } from "react";
import { Outlet } from 'react-router-dom'
import "./Admin.css";
import Header from "../header/Header";
import Admincard from "../admin card/Admincard";
const Admin = () => {
  const [old, setOld] = useState("block");
  const [again, setAgain] = useState("none");
  const myList = [
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
    <Admincard />,
  ]
  const lislItems = myList.map((myList) => {
    return <>{myList}</>;
  });
  const admin_eventhandler1 = () => {
    let newBox = "none";
    setOld(newBox);
    let second = "block";
    setAgain(second);
  };
  const admin_eventhandler2 = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
  };
  return (
    <>
    <Header/>
  
    <div className="admin-main">
      {/* SideBar Side */}
      <div className="admin-sidebar">
        <div>
          <img src="./assets/img1.jpg" alt="noun" className="admin-side-img" />
        </div>
        <div className="admin-div-text">
          <h2>name1</h2>
          <p>name2</p>
        </div>
        <div className="admin-button">
          <button
            onClick={() => {
              admin_eventhandler1();
            }}
          >
            Add
          </button>
        </div>
      </div>
      {/* Body Side */}
      <div className="admin-body">
        <div style={{ display: old }}>
          <div style={{ display: "flex", justifyContent:"space-evenly",alignItems:"center" }}>
            <div className="admin-div-search">
              <button>Search</button>
              <input className="admin-input" />
            </div>
            <div className="admin-profile-btn" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h2 style={{cursor:"pointer"}}>Profile</h2>
            </div>
          </div>
          <div className="admin-cards">{lislItems}</div>
        </div>
        {/* After display None */}
        <div className="admin-body-dialogbox" style={{ display: again }}>
          <input placeholder="Name" />
          <input placeholder="job" />
          <input placeholder="contact" />
          <input placeholder="email" />
          <input placeholder="Img" />
          <button
            onClick={() => {
              admin_eventhandler2();
            }}
          >
            Cancal
          </button>
          <button
            onClick={() => {
              admin_eventhandler2();
            }}
          >
            Done
          </button> 
        </div>
      </div>
      <Outlet/>
    </div>
    </>
  );
};

export default Admin;
