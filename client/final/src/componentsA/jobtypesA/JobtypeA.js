import { useState,useEffect } from "react";
import "./JobtypeA.css";
import { Outlet,useNavigate } from "react-router-dom";
// import Jobcard from "../jobcards/Jobcard";
import axios from 'axios'
const JobtypeA = ({subId}) => {
  console.log(subId)
  let userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [old, setOld] = useState("block");
  const [again, setAgain] = useState("none");
  const [fullDatas, setFullDatas] = useState([]);
  const [jobData, setJobData] = useState({
    job:""
  })
 

 
  const change2 = () => {
    let newBox = "block";
    setOld(newBox);
    let second = "none";
    setAgain(second);
    setJobData({
      job:""
    });
  };
  const change = () => {
    let newBox = "none";
    setOld(newBox);
    let second = "block";
    setAgain(second);
  };
  const changeAgain = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
    setJobData("")
  };
  const handleJobChange = (e) => {
    setJobData({...jobData,[e.target.name]:e.target.value });
    console.log(e.target.value)
  }
  const submitJob = (id) => {
    if (jobData.job.length === 0) {
      alert("sorry")
    }
    else {
      console.log("done")
      console.log("ID"+ id)
      Check();
  }
}
const Check = ()=>{
  console.log("ok")
  const sendDatas = {
    job:jobData.job,
    userId:subId
  }
  console.log(sendDatas)
  axios.post('https://mhr.mhrguardtracking.com/job_insert.php', sendDatas).then((result) => {
    console.log(result)
    change2();
    window.location.reload();
}
  )
}
useEffect(() => {
  const getDatas = async()=>{
  const respons= await fetch("https://mhr.mhrguardtracking.com/job_list.php?userId="+subId) ;
 const reqDatas =await respons.json();
 console.log(reqDatas);
 setFullDatas(reqDatas);
  }
  getDatas();
}, [])

const jobDelete=(id)=>{
  axios.delete('https://mhr.mhrguardtracking.com/job_dell.php',{data:{id:id}}).then((result)=>{
    console.log(result)
console.log({jobData:{id:id}})
      const getJobData = async()=>{
      const respons= await fetch("https://mhr.mhrguardtracking.com/job_list.php") ;
     const reqDataJob =await respons.json();
     console.log(reqDataJob);
     setFullDatas(reqDataJob);
      }
      getJobData();
      window.location.reload();
      
  })
}
const jobUpdate= (i,j)=>{
  navigate("/JobcardA", {state:{id:i,job:j}})
};
// searching 
const handleSearch=(e)=>{
  setQuery(e.target.value);
}

  return (
    <>
    <div className="job-type-main-admin">
      <div className="admin-job-type-body">
        <div style={{ display: old, }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="admin-job-search-div">
              {/* <button>Search</button> */}
              <input className="admin-input"  placeholder="Search Here" onChange={(e)=>handleSearch(e)} />
            </div>
            <div
              className="admin-job-add-btn"
            >
              <button
                onClick={() => {
                  change();
                }}
              >
                Add new
              </button>
            </div>
          </div>
          <table className="admin-job-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Job</th>
                <th scope="col">State</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
            {fullDatas && fullDatas.filter((user)=>user.job.toLowerCase().includes(query)).map((item,index) => {
       return (
        <tr key={index}>
        <td >{index+1}</td>
        <td >{item.job}</td>
        <td ><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}} onClick={()=>jobDelete(item.id)}>delete</button></td>
        <td ><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"  }}onClick={() =>jobUpdate(item.id,item.job)}>update</button></td>
      </tr>
        );
      })}
            </tbody>
          </table>
        </div>
        {/* After display None */}
        <div className="admin-job-body-dialogbox" style={{ display: again }}>
          <h1 style={{ color: "#0077c7" }}>New Job</h1>
          <div><p>Job Type</p><input type="text" name="job" id="job" placeholder="Enter your Job type"
            onChange={handleJobChange} value={jobData.job} /></div>
                <button
            onClick={() => {
              changeAgain();
            }}
          >
            Cancal
          </button>
          <button
            onClick={() => {
              submitJob();
            }}
          >
            Done
          </button>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  );
};
export default JobtypeA;
