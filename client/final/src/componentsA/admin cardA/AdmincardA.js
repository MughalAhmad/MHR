import React ,{useState}from "react";
import "./AdmincardA.css";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const AdmincardA = ({ myList, stateUpdate }) => {
  const navigate = useNavigate();
  const propSubUpdate = useLocation();
  const [first2,setfirst2] = useState(
    {
      id:propSubUpdate.state.id,
      username:propSubUpdate.state.username,
      contact:propSubUpdate.state.contact,
      job:propSubUpdate.state.job,
      email:propSubUpdate.state.email,
      password:propSubUpdate.state.password,
      state:propSubUpdate.state.state,
    }
  )
//   const go_subadmin_details = () => {
//     navigate('/SubadminDetailsA')
//     console.log('hello')
//   }
  const admin_eventhandler3=()=>{
    navigate(-1)
  }
  const handleSubUpdate = (e) =>{
    setfirst2({...first2,[e.target.name]:e.target.value });
  console.log(e.target.value);
  } 
  const submitUpdate=()=>{
    console.log("ok")
    const sendSubUpdate={
      id:propSubUpdate.state.id,
      username:first2.username,
      contact:first2.contact,
      job:first2.job,
      email:first2.email,
      password:first2.password,
      state:first2.state,
    }
    console.log(sendSubUpdate)
  axios.post('https://mhr.mhrguardtracking.com/sub_update.php', sendSubUpdate).then ((result)=>{
    console.log(result);
  navigate(-1);
  })
  }
  console.log(first2)
  return (
    <div className="admin-body-dialogbox-update-main">
    {/* After display None for update state of subadmin*/}
    <div className="admin-body-dialogbox-update" >
            <p style={{ color: "#0077c7", fontSize: "2rem" }}> Update Sate</p>
            <div className="update-input" >
              <label>Name</label>
              <input name="username" value={first2.username}  onChange={handleSubUpdate} />
            </div>
            <div className="update-input">
              <label>Job</label>
              <input name="job" value={first2.job} onChange={handleSubUpdate}/>
            </div>
            <div className="update-input">
              <label>Contact</label>
              <input name="contact" value={first2.contact} onChange={handleSubUpdate}/>
            </div>
            <div className="update-input">
              <label>E-Mail</label>
              <input name="email" value={first2.email} onChange={handleSubUpdate}/>
            </div>
            <div className="update-input">
              <label>Password</label>
              <input name="password" value={first2.password} onChange={handleSubUpdate}/>
            </div>
            <div className="update-input">
              <label>Status</label>
              {/* <input name="state" value={first2.state} onChange={handleSubUpdate}/> */}
              <select name="state" value={first2.state} onChange={handleSubUpdate}>
                <option >Active</option>
                <option >Deactive</option>             
              </select>
            </div>
            <div className="update-img">
            {/* <label>Picture</label>
              <input placeholder="Img" style={{
                width: "15rem",
                height: "15rem",
                textAlign: "center",
              }} /> */}
            
            <button
              onClick={() => {
                admin_eventhandler3();
              }}
            >
              Cancal
            </button>
            <button
              onClick={() => {
                submitUpdate();
              }}
            >
              Update
            </button>
            </div>
          </div>
    </div>
  );
}
export default AdmincardA;
