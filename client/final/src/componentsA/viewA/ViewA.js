import React,{useState,useEffect} from 'react';
import "./ViewA.css";
import HeaderA from '../headerA/HeaderA';
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Icon } from '@iconify/react'
import GoogleMapReact from 'google-map-react'

import { useLocation,useNavigate} from "react-router-dom";
const ViewA = () => {
    const navigate = useNavigate();

    // let userId= localStorage.getItem("userId")
    const [fineScheduleData, setFineScheduleData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [allData, setAllData] = useState();
    const [fullLocationData, setFullLocationData] = useState([]);
    

    const propGuardView = useLocation();
    const [dd, setDd] = useState({
        id: propGuardView.state.id,
        guard_name: propGuardView.state.guard_name,
        guard_dob: propGuardView.state.guard_dob,
        guard_phone: propGuardView.state.guard_phone,
        guard_SIALicense: propGuardView.state.guard_SIALicense,
        guard_email: propGuardView.state.guard_email,
        guard_password: propGuardView.state.guard_password,
        guardEmergenceNo: propGuardView.state.guardEmergenceNo,
        guardSIAExpire: propGuardView.state.guardSIAExpire,
        guard_adress: propGuardView.state.guard_adress,
        subId:propGuardView.state.subId
    }
    );

console.log(dd)
    useEffect(() => {
        const detfilterDatas = async () => {

          const respons = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php?userId="+dd.subId);
          const reqDatas = await respons.json();
        //   console.log("API",reqDatas);
          var aa = [];
          reqDatas.map((item, index) => {
            const da= new Date()
            const das =new Intl.DateTimeFormat().format(da)
            // console.log(das)
            const dat =new Date(item.dates)
            const dats =new Intl.DateTimeFormat().format(dat)
            // console.log(dats)
if(da>dat && dd.id==item.g_Email){
                // console.log(index,"h",item)
            const mm = { id: item.id, nameGuard: item.gName, startTime: item.sTime, endTime: item.eTime, year: item.year, month: item.month, day: item.day, mail: item.g_Email, lName: item.lName, jName: item.jName, sTime: item.sTime, eTime: item.eTime, break: item.break,dates:item.dates,notes:item.notes};
            aa.push(mm);
            setAllData(aa)
            }
            else{
                // console.log("ssssssorry")

            }
          
          }
       
          )
        }
        detfilterDatas();
    
        return () => {
    
        }
      }, [])
    //   console.log(allData)



      useEffect(() => {
        const getCurrent = async () => {
          const respons = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php?userId="+dd.subId);
          const reqDatas = await respons.json();
          console.log("API",reqDatas);
        var vv = [];
          reqDatas.map((item, index) => {
            const da= new Date().toDateString()
            if(dd.id===item.g_Email && item.dates==da){
                console.log("OK")
                const nn = { id: item.id, nameGuard: item.gName, startTime: item.sTime, endTime: item.eTime, year: item.year, month: item.month, day: item.day, mail: item.g_Email, lName: item.lName, jName: item.jName, sTime: item.sTime, eTime: item.eTime, break: item.break,dates:item.dates,notes:item.notes};
                        vv.push(nn);
                        setCurrentData(vv);
            }
            else{
                console.log("SORRY")
            }
        
        
          })
          
        }
        getCurrent();
    
        return () => {
    
        }
      }, [])


      const location = {
        address: 'LOcation 1',
        lat: 52.4616894,
        lng: -1.8588999,
      }
    const LocationPin = ({ text }) => (
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    )
    useEffect(() => {
        const getLocationData = async () => {
          const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php?userId=" +dd.subId);
          const reqData = await respons.json();
          console.log(reqData);
          setFullLocationData(reqData);
        }
        getLocationData();
      }, [])
    return (
        <>
        <HeaderA/>
       
        <div className="mainViewA">
          <div className='adminTable-viewa-div1'>
            <table className="viewA-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Phone</th>
                        <th>SIA license</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Emergency No</th>
                        <th>Address</th>
                        <th>SIA Expire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dd.guard_name}</td>
                        <td>{dd.guard_dob}</td>
                        <td>{dd.guard_phone}</td>
                        <td>{dd.guard_SIALicense}</td>
                        <td>{dd.guard_email}</td>
                        <td>{dd.guard_password}</td>
                        <td>{dd.guardEmergenceNo}</td>
                        <td>'{dd.guard_adress}'</td>
                        <td>{dd.guardSIAExpire}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='viewAContainer'>
            <div className='viewContainer-div1' >
                    <div style={{display:'flex',justifyContent:"space-evenly", marginTop:"1rem",marginBottom:"1rem"}}>
                    <h1 style={{color:"#0077c7"}}>History</h1>
                    <td><button style={{border:"0rem",width:"6rem",height:"4rem",borderRadius:".5rem",background:"#0077c7",color:"white"}}
                     onClick={()=>{navigate("/ViewPdfA",{state:{allData:allData}})}} 
                    >Export</button></td>
                    </div>
                    <div style={{ width: '89%', maxHeight: "80%", margin: "auto", overflowY: "auto" }}>
                        <table className="viewA-history-table">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Location</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Date</th>
                                    <th>map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData && allData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td >{index + 1}</td>
                                            <td >{item.nameGuard}</td>
                                            <td>{item.jName}</td>
                                            <td>{item.lName}</td>
                                            <td>{item.sTime}</td>
                                            <td>{item.eTime}</td>
                                            <td>{item.dates}</td>
                                            <td><button style={{ border: "0rem", width: "4rem", marginLeft: "-.6rem", borderRadius: ".5rem", background: "#0077c7", color: "white" }}>view</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='viewAContainer-div2' >
                    <h1 style={{marginTop:"1.5rem",marginBottom:"1.5rem",color:"#0077c7"}}>Current</h1>
                   
                        <div className="viewA-google-map">
                        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA' }}
        defaultCenter={location}
        defaultZoom={10}
      >
        {/* {location.map((item,index)=>{

          return(
            <LocationPin key={index}
            lat={item.lat}
            lng={item.lng}
            text={item.address}
          />
          )
        })} */}
        {fullLocationData && fullLocationData.map((item,index)=>{
          const aa=fullLocationData.latitude
          console.log(aa)
          console.log(Number(item.latitude))

          return(
            <LocationPin key={index}
            lat={Number(item.latitude)}
            lng={Number(item.longitude)}
            text={item.location}
          />
          )
        })}
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
                        
                    <div className='viewAContainer-sub1-div2' >
                    <table className="viewA-current-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Location</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Date</th>
                                    <th>Break</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData && currentData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td >{item.nameGuard}</td>
                                            <td>{item.jName}</td>
                                            <td>{item.lName}</td>
                                            <td>{item.sTime}</td>
                                            <td>{item.eTime}</td>
                                            <td>{item.dates}</td>
                                            <td>{item.break}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ViewA