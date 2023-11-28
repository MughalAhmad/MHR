import React,{useState,useEffect} from "react";
import "./TotalguardlistdetailsA.css";
import HeaderA from "../headerA/HeaderA";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
const TotalguardlistdetailsA = () => {
  const navigate = useNavigate();
  const propGuardUpdate = useLocation();
  const [first1,setfirst1] = useState(
    {
      id:propGuardUpdate.state.id,
      guard_name:propGuardUpdate.state.guard_name,
      guard_dob:propGuardUpdate.state.guard_dob,
      guard_phone:propGuardUpdate.state.guard_phone,
      guard_SIALicense:propGuardUpdate.state.guard_SIALicense,
      guard_email:propGuardUpdate.state.guard_email,
      guardEmergenceNo:propGuardUpdate.state.guardEmergenceNo,
      guardSIAExpire:propGuardUpdate.state.guardSIAExpire,
      guard_adress:propGuardUpdate.state.guard_adress

    }
  );
  useEffect(() =>{
    const a = first1.id;
    console.log(a)
    axios.get('https://mhr.mhrguardtracking.com/guard_list.php').then((result)=>{
      console.log(result)
      const det = result.data;
      console.log(det);
      det.map((item)=>{
        if(item.id===a){
          var ad=new Array(
            item.guard_name,
            item.guard_dob,
            item.guard_phone,
            item.guard_SIALicense, 
            item.guard_email,
            item.guardEmergenceNo,
            item.guardSIAExpire,
            item.guard_adress
            )
            console.log(ad)
            setfirst1({
                guard_name:item.guard_name,
                guard_dob:item.guard_dob,
                guard_phone:item.guard_phone,
                guard_SIALicense:item.guard_SIALicense,
                guard_email:item.guard_email,
                guardEmergenceNo:item.guardEmergenceNo,
                guardSIAExpire:item.guardSIAExpire,
                guard_adress:item.guard_adress
            })
            console.log(setfirst1({
              guard_name:item.guard_name,
                guard_dob:item.guard_dob,
                guard_phone:item.guard_phone,
                guard_SIALicense:item.guard_SIALicense,
                guard_email:item.guard_email,
                guardEmergenceNo:item.guardEmergenceNo,
                guardSIAExpire:item.guardSIAExpire,
                guard_adress:item.guard_adress
            }))
          }
        })
      })
    },[]);
    const handleGuardUpdate = (e) =>{
      setfirst1({...first1,[e.target.name]:e.target.value });
    console.log(e.target.value);
    };
    const submitGuardUpdate = () =>{
      console.log("ok")
      const sendGuardUpdate={
        id:propGuardUpdate.state.id,
        guard_name:first1.guard_name,
        guard_dob:first1.guard_dob,
        guard_phone:first1.guard_phone,
        guard_SIALicense:first1.guard_SIALicense,
        guard_email:first1.guard_email,
        guardEmergenceNo:first1.guardEmergenceNo,
        guardSIAExpire:first1.guardSIAExpire,
        guard_adress:first1.guard_adress
    
      }
      console.log(sendGuardUpdate)
    axios.post('https://mhr.mhrguardtracking.com/guard_update.php', sendGuardUpdate).then ((result)=>{
      console.log(result);
    navigate(-1);
    })
    };
  return (
    <>
    <HeaderA/>
    <div className="TotalguardlistdetailsA-update-dialogbox" >
      <p style={{ color: "#0077c7", fontSize: "2rem" }}>Update Guard</p>
      <div><p>Guard Name</p><input type="text" name="guard_name" placeholder="name"
      onChange={handleGuardUpdate} value={first1.guard_name} /></div>
      <div><p>DOB</p><input type="text" name="guard_dob" placeholder="YYYY-MM-DD"
      onChange={handleGuardUpdate} value={first1.guard_dob} /></div>
      <div><p>Phone No.</p><input type="text" name="guard_phone" placeholder="Phone"
      onChange={handleGuardUpdate} value={first1.guard_phone} /></div>
      <div><p>SIA License</p><input type="text" name="guard_SIALicense" placeholder="SIA License"
      onChange={handleGuardUpdate} value={first1.guard_SIALicense} /></div>
      <div><p>E-mail</p><input type="text" name="guard_email" placeholder="E-mail"
      onChange={handleGuardUpdate} value={first1.guard_email} /></div>
      <div><p>Emergence No.</p><input type="text" name="guardEmergenceNo" placeholder="Emergency No"
      onChange={handleGuardUpdate} value={first1.guardEmergenceNo} /></div>
      <div><p>Address</p><input type="text" name="guard_adress" placeholder="Address"
      onChange={handleGuardUpdate} value={first1.guard_adress} /></div>
      <div><p>SIA Expire</p><input type="text" name="guardSIAExpire" placeholder="SIA Expire"
      onChange={handleGuardUpdate} value={first1.guardSIAExpire} /></div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancal
          </button>
          <button
            onClick={() => { submitGuardUpdate() }}>

            Done
          </button>
        </div>
    </>
  );
};

export default TotalguardlistdetailsA;
