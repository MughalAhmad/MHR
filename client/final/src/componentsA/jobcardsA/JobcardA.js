import {useEffect,useState} from 'react'
import axios from 'axios';
// import Header from '../header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import "./JobcardA.css"
const JobcardA = () => {
  const navigate = useNavigate();
  const propJobUpdate = useLocation();
  const [jobFirst, setJobFirst] = useState({
    id:propJobUpdate.state.id,
    job:propJobUpdate.state.job
  })
// const de = location.state.id;
useEffect(() => {
  console.log("h")
    const getJobId = jobFirst.id;
    console.log(getJobId)
    console.log("h")
    axios.get('https://mhr.mhrguardtracking.com/job_list.php').then((result)=>{
        console.log(result)
  const jobListData =result.data;
    console.log(jobListData)
    jobListData.map((item)=>{
      if(item.id===getJobId){
      var getJobData=new Array(item.job)
      console.log(getJobData)
      setJobFirst({job:item.job})
      console.log(setJobFirst({job:item.job}))
      }
  })
  })
}, [])


const handleJobUpdate = (e) => {
  setJobFirst({ ...jobFirst, [e.target.name]: e.target.value });
  console.log(e.target.value);
}
const submitJobUpdate = () => {
    console.log("ok")
    const sendJobUpdate = {
        id: propJobUpdate.state.id,
        job: jobFirst.job
    }
    console.log("H1")
    console.log(sendJobUpdate)
    console.log("H1")
    axios.post('https://mhr.mhrguardtracking.com/job_update.php', sendJobUpdate).then((result) => {
        console.log(result);
        console.log(sendJobUpdate)
        navigate(-1);
    })


  }

  return (
    <div className="admin-update-job">
    {/* <Header/> */}
    
<div className="admin-job-update-dialogbox"
            >
                <h1 style={{ color: "#0077c7" }}>updata Location</h1>
                <div><p>Job Type</p><input type="text" name="job" placeholder="Enter your job"
                    onChange={handleJobUpdate}
                    value={jobFirst.job}
                /></div>
                <button
                    onClick={() => { navigate(-1) }}
                >
                    Cancal
                </button>
                <button
                    onClick={() => {
                      submitJobUpdate()
                    }}
                >
                    Done
                </button>
            </div>
            </div>
  )
}

export default JobcardA