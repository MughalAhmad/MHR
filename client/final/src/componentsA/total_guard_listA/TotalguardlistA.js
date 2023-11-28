import React,{useState,useEffect} from "react";
import "./TotalguardlistA.css";
import axios from 'axios'

import HeaderA from "../headerA/HeaderA";
import TotalguardlistdetailsA from "../total_guardlist_detailsA/TotalguardlistdetailsA";
import { Outlet,useNavigate } from "react-router-dom";
const TotalguardlistA = () => {
  const [fullData, setFullData] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async()=>{
    const respons= await fetch("https://mhr.mhrguardtracking.com/guard_list.php?userId=") ;
   const reqData =await respons.json();
   console.log(reqData);
   setFullData(reqData);
    }
    getData();
  }, []);
  const handleSearch=(e)=>{
    setQuery(e.target.value);
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
        
    })
  };
  const forwo= (id,guard_name,guard_dob,guard_phone,guard_SIALicense,guard_email,guardEmergenceNo,guardSIAExpire,guard_adress)=>{
    navigate("/TotalguardlistdetailsA", {state:{
      id:id,
      guard_name:guard_name,
      guard_dob:guard_dob,
      guard_phone:guard_phone,
      guard_SIALicense:guard_SIALicense,
      guard_email:guard_email,
      guardEmergenceNo:guardEmergenceNo,
      guardSIAExpire:guardSIAExpire,
      guard_adress:guard_adress
    }})
  }
  return (
    <>
    <HeaderA/>
    <div className="Totalguardlist-list-main">
      <div className="Totalguardlist-list-body">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="Totalguardlist-list-search">
              {/* <button>Search</button> */}
              <input className="Totalguardlist-list-input" placeholder="Search Here" onChange={(e)=>handleSearch(e)} />
            </div>
          </div>
          <div className="adminTable1">
          <table className="Totalguardlist-table">
            <thead>
            <tr>
                <th >#</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>SIA license</th>
                <th>E-mail</th>
                <th>Emergency No</th>
                <th>Address</th>
                <th>SIA Expire</th>
                {/* <th>State</th>
                <th>State</th> */}
                {/* <th>State</th> */}
              </tr>
            </thead>
            <tbody>
            {fullData.filter((user)=>user.guard_name.toLowerCase().includes(query)).map((item,index) => {
       return (
        <tr key={index}>
        <td >{index+1}</td>
        <td >{item.guard_name}</td>
        <td>{item.guard_dob}</td>
        <td>{item.guard_phone}</td>
        <td>{item.guard_SIALicense}</td>
        <td>{item.guard_email}</td>
        <td>{item.guardEmergenceNo}</td>
        <td>'{item.guard_adress}'</td>
        <td>{item.guardSIAExpire}</td>
        {/* <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}}
        onClick={()=>deleteguard(item.id)}
        >delete</button></td> */}
        {/* <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"  }}
        onClick={()=>forwo(
          item.id,
          item.guard_name,
          item.guard_dob,
          item.guard_phone,
          item.guard_SIALicense, 
          item.guard_email,
          item.guardEmergenceNo,
          item.guardSIAExpire,
          item.guard_adress)}
          >update</button></td> */}
          {/* <td><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}} 
          // onClick={()=>ForwordView(
          // item.id,
          // item.guard_name,
          // item.guard_dob,
          // item.guard_phone,
          // item.guard_SIALicense, 
          // item.guard_email,
          // item.guardEmergenceNo,
          // item.guardSIAExpire,
          // item.guard_adress)}
          >View</button></td> */}

      </tr>
        );
      })}
              </tbody>
          </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  );
};

export default TotalguardlistA;
