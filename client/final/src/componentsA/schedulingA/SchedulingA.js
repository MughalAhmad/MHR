import { useState, useEffect } from "react";
import "./SchedulingA.css";
import HeaderA from "../headerA/HeaderA";
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";

import { useNavigate } from "react-router-dom";
const SchedulingA = () => {
  const startingData=new Date();
  const [copyData, setCopyData] = useState("");
  const [sendDateToUpdate, setSendDateToUpdate] = useState("");
  const [jobName, setJobName] = useState([]);
  const [locationName, setLocationName] = useState([]);
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});
  const [fineScheduleData, setFineScheduleData] = useState([]);
  const [closeCalender, setCloseCalender] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const getSchedulDatas = async () => {
      const respons = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php?userId=");
      const reqDatas = await respons.json();
      // console.log("API",reqDatas);
      var aa = [];
      reqDatas.map((item, index) => {
        const mm = { id: item.id, nameGuard: item.gName, startTime: item.sTime, endTime: item.eTime, year: item.year, month: item.month, day: item.day, mail: item.g_Email, lName: item.lName, jName: item.jName, sTime: item.sTime, eTime: item.eTime, break: item.break,dates:item.dates,notes:item.notes};
        aa.push(mm);
        setFineScheduleData(aa);
      })
    }
    getSchedulDatas();

    return () => {

    }
  }, [])
  // new edit guard Name
  const [guardName, setGuardName] = useState(""
  //   {
  //   g_Name: "",
  //   g_Email: ""
  // }
  )
  useEffect(() => {
    axios.get('https://mhr.mhrguardtracking.com/guard_list.php').then((result) => {
      // console.log(result)
      const dat = result.data;
      // console.log(dat);
      var aa = [];
      dat.map((item) => {
        var dd = { g_Name: item.guard_name, g_Id:item.id };
        // console.log(dd)
        aa.push(dd)
        setGuardName(aa)
        // console.log(aa)
        return {}
      })
    })
  }, [])

  // new edit guard Name
  //    // new edit job 

  useEffect(() => {
    axios.get('https://mhr.mhrguardtracking.com/job_list.php').then((result) => {
      // console.log(result)
      const dat = result.data;
      // console.log(dat);
      var aa = [];
      dat.map((item) => {
        var dd = item.job;
        // console.log(dd)
        aa.push(dd)
        setJobName(aa)
        return {}
      })
    })
  }, [])
  // // console.log(jobName)
  // // new edit job
  // // new edit location 
  useEffect(() => {
    axios.get('https://mhr.mhrguardtracking.com/location_list.php').then((result) => {
      // console.log(result)
      const dat = result.data;
      // console.log(dat);
      var aa = [];
      dat.map((item) => {
        var dd = item.location;
        // console.log(dd)
        aa.push(dd)
        setLocationName(aa)
        return {}
      })
    })
  }, [])
  // // console.log(locationName)
  // // new edit location
  const time = [
    "00:00",
    "00:15",
    "00:30",
    "00:45",
    "1:00",
    "1:15",
    "1:30",
    "1:45",
    "2:00",
    "2:15",
    "2:30",
    "2:45",
    "3:00",
    "3:15",
    "3:30",
    "3:45",
    "4:00",
    "4:15",
    "4:30",
    "4:45",
    "5:00",
    "5:15",
    "5:30",
    "5:45",
    "6:00",
    "6:15",
    "6:30",
    "6:45",
    "7:00",
    "7:15",
    "7:30",
    "7:45",
    "8:00",
    "8:15",
    "8:30",
    "8:45",
    "9:00",
    "9:15",
    "9:30",
    "9:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:15",
    "21:30",
    "21:45",
    "22:00",
    "22:15",
    "22:30",
    "22:45",
    "23:00",
    "23:15",
    "23:30",
    "23:45"
  ];
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  //   Months of years
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //   Dates
  const range = (end) => {
    const { result } = Array.from({ length: end }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: 1 }
    );
    return result;
  };
  // Dynamic Month or Year
  const [currentMonth, setCurrentMonth] = useState(startingData.getMonth());
  const [currentYear, setCurrentYear] = useState(startingData.getFullYear());
  // Limites Dates in Month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);
  // Sorting Day according to the Date
  const getSortedDays = (month, year) => {
    const dayIndex = new Date(year, month, 1).getDay();
    return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
  };
  const getDateObj = (day, month, year) => {
    return new Date(year, month, day);
  };

  const areDatesTheSame = (first, day, month, year) => {
    const getMonth = MONTHS.indexOf(month)
    return (
      first.getDate() === Number(day) &&
      first.getMonth() === getMonth &&
      first.getFullYear() === Number(year)

    );
  };

  //  Next
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };
  // Previous
  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  // new

  const handlSelectPortal = (date, fineScheduleData) => {
    navigate("/SelectScheduleDataA", {
      state: {
        date: date, guardName: guardName,
        jobName: jobName, locationName: locationName, time: time
      }
    })
  };
  // portal Site
  const handleOnClickEvent = (event, date) => {
    // console.log(date);
    setShowPortal(true);
    setPortalData(event);
    setSendDateToUpdate(date);
    setCloseCalender("none")

  }
  // close
  const handlePortalClose = () => {
    setShowPortal(false)
  }
  const handleDelete = () => {
    setShowPortal(false)
  }
  // console.log("FineScheduleData",fineScheduleData);
  return (
    <>
    <HeaderA/>
    
    <div>
    <div className="adminData5">

    <div className="admin-wapper">
    <div className="dropdown" style={{position:"absolute",top:"1rem",right:"1rem",display:closeCalender}}>
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#0077c7",color:"white",width:"12rem",height:"3.6rem",fontSize:"1.6rem",marginTop:"-.6rem",fontWeight:"500"}}>
  Export
  </button>
  <ul class="dropdown-menu" style={{width:"12rem",height:"7rem"}}>
    <CSVLink data={fineScheduleData} style={{textDecoration:"none"}}><li className="dropdown-item"  style={{fontSize:"1.5rem",textAlign:"center"}}>Excel</li></CSVLink>
    <li className="dropdown-item" onClick={()=>{navigate("/PdfA",{state:{fineScheduleData:fineScheduleData}})}} style={{fontSize:"1.5rem",textAlign:"center"}}>PDF</li>
  </ul>
</div>
{/* <button style={{backgroundColor:"#0077c7",color:"white",width:"12rem",height:"3.6rem",fontSize:"1.6rem",marginTop:"-.6rem",position:"absolute",top:".7rem",left:"1rem",border:"0",borderRadius:".3rem",fontWeight:"500"}}>Launch</button> */}

      <div className="admin-CalenderHeader" style={{display:closeCalender}}>
        <ion-icon
          onClick={prevMonth}
          name="arrow-back-circle-outline"

        ></ion-icon>
        <p>
          {MONTHS[currentMonth]}
          {currentYear}
        </p>
        <ion-icon
          onClick={nextMonth}
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </div>
      <div className="admin-SevenColGrid">
        {getSortedDays(currentMonth, currentYear).map((day) => {
          return (
            <div key={day} className="admin-HeadDay" style={{display:closeCalender}}>
              {day}
            </div>
          );
        })}
      </div>

      <div className="admin-CalenderBody">
        {range(DAYSINAMONTH).map((day) => {
          return (

            <div
              key={day}
              className="admin-StyledDay"
              style={{display:closeCalender}}

            // style={{color:" #0077c7"}}
            // active={areDatesTheSame(
            //   new Date(),
            //   getDateObj(day, currentMonth, currentYear)
            // )}
            >
              <p>{day}</p>
              {fineScheduleData.map(
                (ev) =>
                  areDatesTheSame(
                    getDateObj(day, currentMonth, currentYear),
                    ev.day, ev.month, ev.year, ev.id
                  ) &&
                  <div className="admin-schedule-box" key={ev.id} onClick={() => { handleOnClickEvent(ev, getDateObj(day, currentMonth, currentYear)) }} >
                    <div className="admin-setEvent">
                    <p>Name:{ev.nameGuard}</p><p>Start:{ev.startTime}</p><p>End:{ev.endTime}</p>
                    </div>
                    </div>
              )}

              <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" ,flexDirection:"column"}}>
                {/* <ion-icon name="add-outline" style={{ fontSize: "2rem", cursor: "pointer" }} onClick={(e) => { handlSelectPortal(getDateObj(day, currentMonth, currentYear), fineScheduleData) }}></ion-icon> */}
                {/* <ion-icon name="copy-outline" style={{ fontSize: "1rem", cursor: "pointer" }}></ion-icon> */}
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
    {showPortal && <Portal
        {...portalData}
        portalData={portalData}
        guardName={guardName}
        sendDateToUpdate={sendDateToUpdate}
        jobName={jobName} locationName={locationName} time={time}
        handleDelete={handleDelete}
        handlePortalClose={handlePortalClose} />}
        </div>
    </div>
    </>
  );
};
const Portal = (
  { guardName, jobName, locationName, time, portalData, handleDelete, sendDateToUpdate,
    handlePortalClose }
) => {
  console.log("guardName", guardName)
  const [nameMailSelectHandl, setNameMailSelectHandl] = useState({
    nameHand: portalData.nameGuard,
    mailHand: portalData.mail
  });
  const [upadateSchedulData, setUpadateSchedulData] = useState(
    {
      jName: portalData.jName,
      lName: portalData.lName,
      sTime: portalData.sTime,
      eTime: portalData.eTime,
      break: portalData.break,
      notes:portalData.notes

    }
  );
  const fineDate =sendDateToUpdate.toDateString()
  // console.warn(sendDateToUpdate)
  //////////////////////////////////////////////////////
  const [filterDatas, setFilterDatas] = useState();
var hh=[];
  useEffect(() => {
    const getFilterNameDatas = async () => {
        const responsS = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php");
        const reqDatasS = await responsS.json();
        // console.log("API S", reqDatasS);
        reqDatasS.map((item, index) => {
            if (item.dates === fineDate) {
              const cc = { names: item.gName, mails: item.id }
              hh.push(cc);
                // console.log(yy);
            }
            // else{
            //     setFilterDatas(guardName);
            // }
           
        });
        PP(hh);
    }
    getFilterNameDatas();
    
}, [])
const PP=(hh)=>{
    // console.log("hh",hh);
    // console.log("guardName",guardName);

    const resultes =guardName.filter((val)=>{
      return !hh.find((a)=>{
          if(val.g_Name === a.names){
              // console.log("hello",a.names)
              return  a.names
          }
      });
  });
    // console.log(resultes);
    setFilterDatas(resultes)
};

console.log(filterDatas);
  ///////////////////////////////////////////////////////
  const nameSelectHandle = (e) => {
    console.log(e.target.value)
    const na = e.target.value;
    console.log(guardName)
    guardName.map((item) => {
      console.log(item.id)
      if (na === item.g_Id) {
        const nn = item.g_Name;
        const mm = item.g_Id;
        sS(nn, mm);
      }
    })
  }
  const sS = (nn, mm) => {
    setNameMailSelectHandl({ nameHand: nn, mailHand: mm })
  }
  const deleteSelectData = (id) => {
    axios.delete('https://mhr.mhrguardtracking.com/schedule_dell.php', { data: { id: id } }).then((result) => {
      console.log(result)
      console.log({ portalData: { id: id } });
      handleDelete();
    })

  };
  const handleUpdateSelect = (e) => {
    setUpadateSchedulData({ ...upadateSchedulData, [e.target.name]: e.target.value });
  }
  const submitUpdateSelect = () => {
    if (nameMailSelectHandl.nameHand.length === 0) {
      alert("sorry  n")
    }
    else if (upadateSchedulData.jName.length === 0) {
      alert("sorry  j")
    }
    else if (upadateSchedulData.lName.length === 0) {
      alert("sorry  l")
    }
    else if (upadateSchedulData.sTime.length === 0) {
      alert("sorry  s")
    }
    else if (upadateSchedulData.eTime.length === 0) {
      alert("sorry  e")
    }
    // else if (upadateSchedulData.break.length === 0) {
    //   alert("sorry  b")
    // }
    else {
      CheckesUpdate();
    }
  }
  const CheckesUpdate = () => {
    const sendUpdateSelectData = {
      id: portalData.id,
      gName: nameMailSelectHandl.nameHand,
      g_Email: nameMailSelectHandl.mailHand,
      jName: upadateSchedulData.jName,
      lName: upadateSchedulData.lName,
      sTime: upadateSchedulData.sTime,
      eTime: upadateSchedulData.eTime,
      break: upadateSchedulData.break,
      dates: sendDateToUpdate.toDateString(),
      notes:upadateSchedulData.notes

    }
    console.log(sendUpdateSelectData)
    axios.post('https://mhr.mhrguardtracking.com/schedule_update.php', sendUpdateSelectData).then((result) => {
      console.log(result.data);
      handlePortalClose();
      window.location.reload();

    })
  };
const submitCopySelect = ()=>{

}
  // console.log("portalData", portalData);
  return (
    <div className="admin-deleteUpdate">
      <h1>Guard Schedul</h1>
      <h1>{sendDateToUpdate.toDateString()}</h1>
      <div className="admin-deleteUpdate_select" >
      <div><p>Guard Name</p><select
      disabled
          name="nameHand"
          onChange={nameSelectHandle}
        // value={nameMailSelectHandl.nameHand}
        >
          <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>
            {nameMailSelectHandl.nameHand}
          </option>

          {filterDatas && filterDatas.map((item) => {
            return (
              <option value={item.g_Id} >{item.g_Name}</option>
            );
          })}
        </select></div>

        <div><p>Job Type</p><select
        disabled
          name="jName"
          onChange={handleUpdateSelect}
        // value={upadateSchedulData.jName}
        >
          <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>
            {upadateSchedulData.jName}
          </option>
          {jobName.map((item) => {
            return (
              <option value={item}>{item}</option>
            );
          })}
        </select></div>

        <div><p>Site Name</p><select
        disabled
          name="lName" onChange={handleUpdateSelect}
        // value={upadateSchedulData.lName}
        >
          <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>
            {upadateSchedulData.lName}
          </option>
          {locationName.map((item) => {
            return (
              <option value={item}>{item}</option>
            );
          })}
        </select></div>
        <div><p>Start Time</p><select
        disabled
          name="sTime" onChange={handleUpdateSelect}
        // value={upadateSchedulData.sTime}

        >
          <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>
            {upadateSchedulData.sTime}
          </option>
          {time.map((item) => {
            return (
              <option value={item}>{item}</option>
            );
          })}
        </select></div>
        <div><p>End Time</p><select
          name="eTime" onChange={handleUpdateSelect}
        // value={upadateSchedulData.eTime}
        disabled
        >
          <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>
            {upadateSchedulData.eTime}
          </option>
          {time.map((item) => {
            return (
              <option value={item}>{item}</option>
            );
          })}
        </select ></div>
        <div><p>Break Time</p><input
        disabled
          name="break"
          value={upadateSchedulData.break}
          onChange={handleUpdateSelect}
        /></div>
        <div><p>Note</p><textarea type="text" name="notes" disabled value={upadateSchedulData.notes}  onChange={handleUpdateSelect}></textarea></div>


      </div>
      {/* <button onClick={() => { deleteSelectData(portalData.id) }}>Delete</button> */}
      {/* <button onClick={() => { submitUpdateSelect() }}>Update</button> */}
      {/* <button onClick={() => { submitCopySelect() }}>Copy</button> */}
      <ion-icon onClick={()=>{window.location.reload()}} style={{ background: "pink", position: "absolute", top: "1rem", right: "1rem", fontSize: "2rem" }} name="close-outline"></ion-icon>

    </div>
  )
}
export default SchedulingA;

//  useEffect(() => {
  //     const getFilterNameDatas = async () => {
  //       const respons = await fetch("http://localhost/php/schedule_list.php");
  //       const reqDatas = await respons.json();
  //       console.log("API",reqDatas);
  //       var aa = [];
  //       var bb=[];
  //       reqDatas.map((item, index) => {
  //         if(item.length !== 0){
  //             if( dd !== item.dates){
  //                 const mm ={gName:item.gName,gMail:item.g_Email};
  //                 aa.push(mm);
  //                 setFilterDate(aa);
  //                 console.log(item)
  //             }
  //         }
  //         else if(item.length === 0){
  //             console.log("ok")
  //             const xx ={gName:item.gName,gMail:item.g_Email};
  //             bb.push(xx);
  //           setFilterDate(xx);
  //         }
  //       })
  //     }
  //     getFilterNameDatas();
  
  //     return () => {
  
  //     }
  //   }, [])

// import { useRef, useState } from "react";
// import "./SchedulingA.css";
// import HeaderA from "../headerA/HeaderA";
// const SchedulingA = () => {
//   const startingData=new Date();
//   const [showPortal, setShowPortal] = useState(false);
//   const [portalData, setPortalData] = useState({})
//   const MOCKEVENTS = [
//     { date: new Date(2022, 9, 10), name: "appointment",id:1 },
//     { date: new Date(2022, 9, 10), title: "appointment",id:1 },
//     { date: new Date(2022, 9, 15), title: "car wash",id:2 },
//     { date: new Date(2022, 9, 5), title: "doctors", id:3 },
//   ];
//   const onDragEvent = (updatedEvents)=>{
//     setEvents(updatedEvents)
//   }
//   const [events, setEvents] = useState(MOCKEVENTS);
//   const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//   //   Months of years
//   const MONTHS = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   //   Dates
//   const range = (end) => {
//     const { result } = Array.from({ length: end }).reduce(
//       ({ result, current }) => ({
//         result: [...result, current],
//         current: current + 1,
//       }),
//       { result: [], current: 1 }
//     );
//     return result;
//   };
//   // Dynamic Month or Year
//   const [currentMonth, setCurrentMonth] = useState(startingData.getMonth());
//   const [currentYear, setCurrentYear] = useState(startingData.getFullYear());
//   // Limites Dates in Month
//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };
//   const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);
//   // Sorting Day according to the Date
//   const getSortedDays = (month, year) => {
//     const dayIndex = new Date(year, month, 1).getDay();
//     return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
//   };
//   const getDateObj = (day, month, year) => {
//     return new Date(year, month, day);
//   };

//   const areDatesTheSame = (first, second) => {
//     return (
//       first.getFullYear() === second.getFullYear() &&
//       first.getMonth() === second.getMonth() &&
//       first.getDate() === second.getDate()
//     );
//   };

//   //  Next
//   const nextMonth = () => {
//     if (currentMonth < 11) {
//       setCurrentMonth((prev) => prev + 1);
//     } else {
//       setCurrentMonth(0);
//       setCurrentYear((prev) => prev + 1);
//     }
//   };
//   // Previous
//   const prevMonth = () => {
//     if (currentMonth > 0) {
//       setCurrentMonth((prev) => prev - 1);
//     } else {
//       setCurrentMonth(11);
//       setCurrentYear((prev) => prev - 1);
//     }
//   };
//   // new
// //   const [showDataPortal, setShowDataPortal] = useState(false);
//   // const [portalData, setPortalData] = useState({})
//   const addEvent = (date,e) => {
//     if(e.currentTarget===e.target){
//       const text = window.prompt("text");
//       setEvents((prev) => [...prev, { date, title: text, id:Math.random() }]);
//     //   DataPortal={DataPortal}
//     }
//   };
// //   const [input, setInput] = useState("");
// //   const handler=(e)=>{
// //     console.log(e.target.value);
// //     setInput(e.target.value)
// //   }
  
// //   const DataPortal=()=>{
// //     return(

// //   <div className="dataPortal" >
// // <div className="dataPortal_inputs" >
// //     <input placeholder="Name" type="text"
// //      value={input} onChange={(e)=>handler(e)} 
// //      />
// //     <input placeholder="Start Time"/>
// //     <input placeholder="End Time"/>
// //     <input placeholder="Break"/>
// //     <input placeholder="Job"/>
// //     <input placeholder="Zone"/>
// //     <input placeholder="Location"/>
// //     </div>
// //     <button className="dataPortal_btn"><p>Done</p></button>
// //   </div>
// //     )
// //   }
//   // new
// // Drag n Drop setup
// const draggedElDateRef = useRef();
// const draggedElIdRef = useRef();

// const onDragStart = (id) =>{
//   draggedElIdRef.current = id
// }

// const onDragEnter = (e, date) =>{
// e.preventDefault()
// draggedElDateRef.current = date
// }

// const onDragEnd = (e)=>{
// e.preventDefault()

// const updatedEvents = events.map((event)=>{
//   if(event.id === draggedElIdRef.current){
//     event.date = draggedElDateRef.current
//   }
//   return event
// })
// onDragEvent(updatedEvents)
// }
// // portal Site
// const handleOnClickEvent=(event)=>{
// setShowPortal(true);
// setPortalData(event)
// }

// const handleDelete =() =>{
// setEvents((prevEvents)=>prevEvents.filter((ev)=>ev.title!== portalData.title));
// setShowPortal(false)
// }

// const handlePortalClose = () =>{
//   setShowPortal(false)
// }

//   return (
//     <>
//     <HeaderA/>
    
//     <div className="wapper">
//       <div className="CalenderHeader">
//         <ion-icon
//           onClick={prevMonth}
//           name="arrow-back-circle-outline"
          
//         ></ion-icon>
//         <p>
//           {MONTHS[currentMonth]}
//           {currentYear}
//         </p>
//         <ion-icon
//           onClick={nextMonth}
//           name="arrow-forward-circle-outline"
//         ></ion-icon>
//       </div>
//       <div className="SevenColGrid">
//         {getSortedDays(currentMonth, currentYear).map((day) => {
//           return (
//             <div key={day} className="HeadDay">
//               {day}
//             </div>
//           );
//         })}
//       </div>
//       <div className="CalenderBody">
//         {range(DAYSINAMONTH).map((day) => {
//           return (
//             <div
//               key={day}
//               className="StyledDay"
//               // style={{color:" #0077c7"}}
//               // active={areDatesTheSame(
//               //   new Date(),
//               //   getDateObj(day, currentMonth, currentYear)
//               // )}
//               onDragEnter={(e)=>onDragEnter(e , getDateObj(day, currentMonth, currentYear))}
//               onDragEnd={onDragEnd}
//               onClick={(e) => {
//                 addEvent(getDateObj(day, currentMonth, currentYear), e);
//                 // setShowDataPortal(true)
//               }}
//               onDragOver={(e)=>e.preventDefault()}
//             >
//               <p>{day}</p>
//               {events.map(
//                 (ev,Index) =>
//                   areDatesTheSame(
//                     getDateObj(day, currentMonth, currentYear),
//                     ev.date
//                   ) && <div key={Index} onClick={()=>{handleOnClickEvent(ev)}} onDragStart={()=>{onDragStart(ev.id)}} draggable style={{background:"#e3ece3",color:"black",textAlign:"center",borderRadius:"1rem",marginBottom:".5rem",width:"10rem",fontSize:"1.3rem"}}>{ev.title}</div>
               
//               )}
//             </div>
//           );
//         })}
//       </div>
//       {/* {showDataPortal && <DataPortal/>} */}

//       {showPortal && <Portal {...portalData} handleDelete={handleDelete} handlePortalClose={handlePortalClose}/>}
//     </div>
//     </>
//   );
// };
// const Portal=({title,date,handleDelete,handlePortalClose})=>{
//   return(
// <div className="portalWapper">
//   <h2>{title}</h2>
//   <p style={{fontSize:"1rem"}}>{date.toDateString()}</p>
//   <ion-icon onClick={handleDelete} className="portalDeleteBtn" name="trash-outline"></ion-icon>
//   <ion-icon onClick={handlePortalClose} style={{background:"pink",position:"absolute",top:"-1rem",right:"1rem"}} name="close-outline"></ion-icon>

// </div>
//   )
// }

// export default SchedulingA;

