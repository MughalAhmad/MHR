import { useState ,useEffect} from "react";
import "./Guardlist.css";
import Header from "../header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet,useNavigate } from "react-router-dom";
import axios from 'axios'
const Guardlist = () => {
  let mail = localStorage.getItem("email");
  let userId = localStorage.getItem("userId");
  console.log(userId);
  const [query, setQuery] = useState("");
  const [even1, setEven1] = useState("block");
  const [even2, setEven2] = useState("none");
  const [fullData, setFullData] = useState([]);
  const [reload, setReload] = useState("");
  const [guardData, setGuardData] = useState({
    guard_name: "",
    guard_dob: "",
    guard_phone: "",
    guard_SIALicense: "",
    guard_email: "",
    guard_password: "",
    guardEmergenceNo: "",
    guardSIAExpire: "",
    guard_adress: "",
  })
  const navigate = useNavigate();
  
  const even1Handler = () => {
    let newBox = "none";
    setEven1(newBox);
    let second = "block";
    setEven2(second);
  };
 
  
  const even2Handler = (da) => {
    let newagain = "none";
    setEven2(newagain);
    let third = "block";
    setEven1(third);
    setGuardData({
    guard_name: "",
    guard_dob: "",
    guard_phone: "",
    guard_SIALicense: "",
    guard_email: "",
    guardEmergenceNo: "",
    guardSIAExpire: "",
    guard_adress: ""

  })
  // if(da==true){

  //   window.location.reload();
  //   toast("Wow so easy!")
  // }
  // else{
  //   da==true ? window.location.reload() :window.location.reload();
  // }
 

  };

  const handleChange = (e) => {
    console.log({ ...guardData, [e.target.name]: e.target.value })
    setGuardData({ ...guardData, [e.target.name]: e.target.value });
  }
  const submitForm = () => {
    if (guardData.guard_name.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_dob.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_phone.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_SIALicense.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_email.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_password.length === 0) {
      alert("sorry")
    }
    else if (guardData.guardEmergenceNo.length === 0) {
      alert("sorry")
    }
    else if (guardData.guardSIAExpire.length === 0) {
      alert("sorry")
    }
    else if (guardData.guard_adress.length === 0) {
      alert("sorry")
    }
    else {
      console.log("done")
      Check();
    }
  }
  const Check = () => {
    console.log("ok")
    const sendData = {
      guard_name: guardData.guard_name,
      guard_dob: guardData.guard_dob,
      guard_phone: guardData.guard_phone,
      guard_SIALicense: guardData.guard_SIALicense,
      guard_email: guardData.guard_email,
      guard_password: guardData.guard_password,
      guardEmergenceNo: guardData.guardEmergenceNo,
      guardSIAExpire: guardData.guardSIAExpire,
      guard_adress: guardData.guard_adress,
      userId:userId,
    }
    console.log(sendData)
    axios.post('https://mhr.mhrguardtracking.com/guard_insert.php', sendData).then((result) => {
      // console.log(result.data.message)
      if(result.data.status=="invalid"){
        alert(result.data.message)
      }
      else{
           even2Handler(true);
      window.location.reload();
      }
    })
  }
  useEffect(() => {
    const getData = async()=>{
    const respons= await fetch("https://mhr.mhrguardtracking.com/guard_list.php?userId="+localStorage.getItem("userId")) ;
   const reqData =await respons.json();
   console.log(reqData);
   setFullData(reqData);
   // Check kro ab
  //  nahe hova 

    }
    getData();
  }, [])
  const even02Handler = () => {
    let three = "block";
    setEven1(three);
    let forth = "none";
    setEven2(forth);
    setGuardData({
      guard_name: "",
      guard_dob: "",
      guard_phone: "",
      guard_SIALicense: "",
      guard_email: "",
      guard_password:"",
      guardEmergenceNo: "",
      guardSIAExpire: "",
      guard_adress: ""
    });
  };

  const deleteguard=(id)=>{
    axios.delete('https://mhr.mhrguardtracking.com/guard_dell.php',{data:{id:id}}).then((result)=>{
      console.log(result)
  console.log({guardData:{id:id}})
        const setGuardData = async()=>{
        const respons= await fetch("https://mhr.mhrguardtracking.com/guard_list.php") ;
       const reqDataLocation =await respons.json();
       console.log(reqDataLocation);
       setFullData(reqDataLocation);
       
        }
        setGuardData();
        window.location.reload();
        
    })
  }
const forwo= (id,guard_name,guard_dob,guard_phone,guard_SIALicense,guard_email,guard_password,guardEmergenceNo,guardSIAExpire,guard_adress)=>{
  navigate("/Guardlistdetails", {state:{
    id:id,
    guard_name:guard_name,
    guard_dob:guard_dob,
    guard_phone:guard_phone,
    guard_SIALicense:guard_SIALicense,
    guard_email:guard_email,
    guard_password:guard_password,
    guardEmergenceNo:guardEmergenceNo,
    guardSIAExpire:guardSIAExpire,
    guard_adress:guard_adress
  }})
}
const ForwordView=(id,guard_name,guard_dob,guard_phone,guard_SIALicense,guard_email,guard_password,guardEmergenceNo,guardSIAExpire,guard_adress)=>{
  navigate("/View", {state:{
    id:id,
    guard_name:guard_name,
    guard_dob:guard_dob,
    guard_phone:guard_phone,
    guard_SIALicense:guard_SIALicense,
    guard_email:guard_email,
    guard_password:guard_password,
    guardEmergenceNo:guardEmergenceNo,
    guardSIAExpire:guardSIAExpire,
    guard_adress:guard_adress
  }})
};
// searching 
const handleSearch=(e)=>{
  setQuery(e.target.value);
};

return (
  <>
  <Header/>
    <div className="subadmin-guard-list-main">
      <div className="subadmin-guard-list-body">
        <div style={{ display: even1}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="subadmin-guard-list-search">
              {/* <button>Search</button> */}
              <input className="subadmin-guard-list-input"  placeholder="Search Here" onChange={(e)=>handleSearch(e)}/>
            </div>
            <div
              className="subadmin-add-btn"
            >
              <button
                onClick={() => {
                  even1Handler();
                }}
              >
                Add new
              </button>
            </div>
          </div>
          <div className="userTable-1">
          <table  className="subadmin-guard-table">
            <thead>
              <tr>
                <th >#</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>SIA license</th>
                <th>E-mail</th>
                <th>Password</th>
                <th>Emergency No</th>
                <th>Address</th>
                <th>SIA Expire</th>
                <th>State</th>
                <th>State</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {fullData && fullData.filter((user)=>user.guard_name.toLowerCase().includes(query)).map((item,index) => {
       return (
        <tr key={index}>
        <td >{index+1}</td>
        <td >{item.guard_name}</td>
        <td>{item.guard_dob}</td>
        <td>{item.guard_phone}</td>
        <td>{item.guard_SIALicense}</td>
        <td>{item.guard_email}</td>
        <td>{item.guard_password}</td>
        <td>{item.guardEmergenceNo}</td>
        <td>'{item.guard_adress}'</td>
        <td>{item.guardSIAExpire}</td>
        <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}}onClick={()=>deleteguard(item.id)}>delete</button></td>
        <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"  }}
        onClick={()=>forwo(
          item.id,
          item.guard_name,
          item.guard_dob,
          item.guard_phone,
          item.guard_SIALicense, 
          item.guard_email,
          item.guard_password,
          item.guardEmergenceNo,
          item.guardSIAExpire,
          item.guard_adress)}
          >update</button></td>
          <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}} onClick={()=>ForwordView(
          item.id,
          item.guard_name,
          item.guard_dob,
          item.guard_phone,
          item.guard_SIALicense, 
          item.guard_email,
          item.guard_password,
          item.guardEmergenceNo,
          item.guardSIAExpire,
          item.guard_adress)}>View</button></td>

      </tr>
        );
      })}
      </tbody>
          </table>
          </div>
          <div>
            {fullData.length === 0 && <span>No Records Found</span>}
          </div>
        </div>
        <div className="subadmin-guard-body-dialogbox" style={{ display: even2 }}>
          <p style={{ color: "#0077c7", fontSize: "2rem" }}>New Guard</p>
          <div><p>Guard Name</p><input type="text" name="guard_name" placeholder="name"
            onChange={handleChange} value={guardData.guard_name} /></div>
          <div><p>DOB</p><input type="text" name="guard_dob" placeholder="YYYY-MM-DD"
            onChange={handleChange} value={guardData.guard_dob} /></div>
          <div><p>Phone No.</p><input type="text" name="guard_phone" placeholder="Phone"
            onChange={handleChange} value={guardData.guard_phone} /></div>
          <div><p>SIA License</p><input type="text" name="guard_SIALicense" placeholder="SIA License"
            onChange={handleChange} value={guardData.guard_SIALicense} /></div>
          <div><p>E-mail</p><input type="email" name="guard_email" placeholder="E-mail"
            onChange={handleChange} value={guardData.guard_email} /></div>
            <div><p>Password</p><input type="password" name="guard_password" placeholder="Password"
            onChange={handleChange} value={guardData.guard_password} /></div>
          <div><p>Emergence No.</p><input type="text" name="guardEmergenceNo" placeholder="Emergency No"
            onChange={handleChange} value={guardData.guardEmergenceNo} /></div>
          <div><p>Address</p><input type="text" name="guard_adress" placeholder="Address"
            onChange={handleChange} value={guardData.guard_adress} /></div>
          <div><p>SIA Expire</p><input type="text" name="guardSIAExpire" placeholder="SIA Expire"
            onChange={handleChange} value={guardData.guardSIAExpire} /></div>
          <button
            onClick={() => {
              even02Handler();
            }}
          >
            Cancal
          </button>
          <button
            onClick={() => { submitForm() }}>

            Done
          </button>
        </div>
      </div>
      <Outlet />
    </div>
    <ToastContainer />
    </>
  );
};

export default Guardlist;
