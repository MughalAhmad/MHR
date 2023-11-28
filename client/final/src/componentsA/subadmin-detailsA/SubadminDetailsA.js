import React ,{useState}from 'react'
import "./SubadminDetailsA.css"
import { Outlet,useNavigate,useLocation} from "react-router-dom";
import LocationA from "../locationA/LocationA";
import JobtypeA from "../jobtypesA/JobtypeA";
import HeaderA from '../headerA/HeaderA';
const SubadminDetailsA = () => {
  const porpSub =useLocation();
    const navigate= useNavigate();
   const [first3,setfirst3] = useState(
    {
      id:porpSub.state.id,
      username:porpSub.state.username,
      contact:porpSub.state.contact,
      job:porpSub.state.job,
      email:porpSub.state.email,
    }
  )
console.log(first3)
  const gotoLogin = () => {
    navigate("/ConnectionA");
  };
  const goToGuardList = (subId) =>{
    console.log(subId)
    navigate("/GuardlistA" ,{state:{
      subId:subId
    }})
  }
  return (
    <>
    <HeaderA/>
   
    <div className="SubadminDetails-main">
    {/* SideBar Side */}
    <div className="SubadminDetails-sidebar">
      <div>
        <img
          src="./assets/img2.jpg"
          alt="noun"
          className="SubadminDetails-side-img"
        />
      </div>
      <div className="SubadminDetails-div-text">
        <p>{first3.username}</p>
        <p>{first3.contact}</p>
        <p>{first3.email}</p>
      </div>
    </div>
    
    {/* Body Side */}
    <div className='SubadminDetails-body' >
    <div className="SubadminDetails_profile_div">
            <div className="SubadminDetails_profile_btn">
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={{ fontSize: "2rem", border: ".1rem solid",color:"white" }}
              >
                <ion-icon
                  name="person-circle-sharp"
                  style={{
                    color: "white",
                    marginBottom: "-.2rem",
                  }}
                />
                Profile
              </button>
            </div>
            <div
            style={{width:"20rem",background:"#e6f4e1"}}
              className="offcanvas offcanvas-end"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header ">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                 ProFile
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="SubadminDetails_profile_logout_div">
            <ion-icon name="log-out-outline" 
            onClick={()=>{gotoLogin()}}
            ></ion-icon>
            </div>
              <hr/>
              <div className="offcanvas-body">
              <img
            src="./assets/img2.jpg"
            alt="noun"
            style={{width:"15rem",height:"15rem"}}
          />
          <hr/>
          <div>
          <h2 style={{marginRight:"2rem",color:"#0077c7"}}>{first3.username}</h2>
          <hr/>
          <p style={{fontSize:"1.5rem",color:"#0077c7"}}>{first3.contact}</p>
          <hr/>
          <p style={{fontSize:"1.5rem",color:"#0077c7"}}>{first3.email}</p>
          <hr/>
        </div>
              </div>
            </div>
          </div>


          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<h1 style={{textAlign:"center"}}>Guard List</h1>
<div style={{width:"90%",height:"10rem",margin:"auto",border:".3rem solid #9bcc8b",borderRadius:".5rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
<button style={{width:'20rem',marginTop:"3rem",fontSize:"1.5rem",border:"0rem",background:"#9bcc8b",color:"white"}}
 onClick={()=>{goToGuardList(first3.id)}}
 >Go To Guard List</button>
</div>
        </div>

        <div>
<h1 style={{textAlign:"center"}}>Location</h1>
{/* <LocationA subId={first3.id}/> */}
        </div>

        <div>
<h1 style={{textAlign:"center"}}>Job</h1>
<JobtypeA subId={first3.id}/>
        </div>
        <div style={{marginBottom:"5rem"}}/>
    </div>
    <Outlet />
  </div>
  </>
);
};
  

export default SubadminDetailsA