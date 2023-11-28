import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import "./SelectSchedulingData.css"
import Header from '../header/Header';
const SelectSchedulingData = () => {
    let userId = localStorage.getItem("userId");

    const navigate = useNavigate();
    const [filterData, setFilterData] = useState();
    const propDateGuardNameView = useLocation();
    const [realDate, setRealDate] = useState("")
    const [nameMailHandl, setNameMailHandl] = useState({
        nameHand: "",
        mailHand: ""
    });
    const [schedulData, setschedulData] = useState(
        {
            jName: "",
            lName: "",
            sTime: "",
            eTime: "",
            break: "",
            notes:"",
        }
    );
    const aa = {
        date: propDateGuardNameView.state.date,
        guardName: propDateGuardNameView.state.guardName,
        jobName: propDateGuardNameView.state.jobName,
        locationName: propDateGuardNameView.state.locationName,
        time: propDateGuardNameView.state.time
    };
    console.log(aa)
    var yy = [];
    // console.log(aa.guardName)
    const dd = aa.date.toDateString();
  useEffect(() => {
   let todayDate = aa.date,
   month = ""+todayDate.getMonth(),
   realMonth=Number(month)+1,
   day = ""+todayDate.getDate(),
   year =""+todayDate.getFullYear();
   const getDate = year+"-"+realMonth+"-"+day;
   setRealDate(getDate)
//    console.warn(year+"-"+realMonth+"-"+day)
  }, [])
  
    useEffect(() => {
        const getFilterNameDatas = async () => {
            const responsS = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php?userId="+localStorage.getItem("userId"));
            const reqDatasS = await responsS.json();
            console.log("API S", reqDatasS);
            if(reqDatasS==null){
                setFilterData(aa.guardName);
            }
            else{
                
                reqDatasS.map((item, index) => {
                    if (item.dates === dd) {
                        // console.log("enter")
                        const cc = {gName:item.gName};
                        // const cc = { names: item.gName, mails: item.g_Email }
                        yy.push(cc);
                        console.log(yy);
                    }
                    // else {
                    //     console.log("b")
                    //     setFilterData(aa.guardName);
                    // }
    
                });
            }
         
            kk(yy);
        }
        getFilterNameDatas();

    }, [])
    const kk = (yy) => {
        console.log("yy", yy);
        console.log("aa.guardName", aa.guardName);

        const results = aa.guardName.filter((val) => {
            return !yy.find((a) => {
                if (val.g_Name === a.gName) {
                    // console.log("hello", a.gName)
                    return a.gName
                }
            });
        });
        console.log("results"+results);
        setFilterData(results) 
    };

    console.log(filterData);

    const handleNameSelect = (e) => {
        const na = e.target.value;
        aa.guardName.map((item) => {
            if (na === item.g_Id) {
                const ss = item.g_Name;
                const zz = item.g_Id;
                Ff(ss, zz);
            }
            return;
        })
    }
    const Ff = (ss, zz) => {
        setNameMailHandl({ nameHand: ss, mailHand: zz })
    }

    const handleSelect = (e) => {
        setschedulData({ ...schedulData, [e.target.name]: e.target.value });
        // console.log({ ...schedulData, [e.target.name]: e.target.value })
    }

    const submitSelect = () => {
    
        if (nameMailHandl.nameHand.length === 0) {
            alert("sorry n")
        }
        else if (schedulData.jName.length === 0) {
            alert("sorry j")
        }
        else if (schedulData.lName.length === 0) {
            alert("sorry l")
        }
        else if (schedulData.sTime.length === 0) {
            alert("sorry s")
        }
        else if (schedulData.eTime.length === 0) {
            alert("sorry e")
        }
        // else if (schedulData.break.length === 0) {
        //     alert("sorry b")
        // }

        else {
            // console.log("done")
            Checkes();
        }
    }
    const Checkes = () => {
        // console.log("ok")
        const sendSelectData = {
            gName: nameMailHandl.nameHand,
            g_Email: nameMailHandl.mailHand,
            jName: schedulData.jName,
            lName: schedulData.lName,
            sTime: schedulData.sTime,
            eTime: schedulData.eTime,
            break: schedulData.break,
            dates: dd,
            date:realDate,
            userId:userId,
            notes:schedulData.notes
        }
        console.log(sendSelectData)
        axios.post('https://mhr.mhrguardtracking.com/schedule_insert.php', sendSelectData).then((result) => {
            // console.log(result.data)
            navigate(-1);
        });

    }
    const handlSelect=()=>{
        navigate(-1);
    }
    return (
        < div className='main-dataPortal-subadmin'>
            <Header />

            <div className="subadmin-dataPortal" >
                <h1>Schedul New Guard</h1>
                <h1>{dd}</h1>
                <div className="subadmin-dataPortal_select" >
                    <div><p>Guard Name</p><select
                        onChange={handleNameSelect}
                    >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{nameMailHandl.nameHand}</option>
                        {filterData && filterData.map((item) => {

                        {/* {aa.guardName.map((item) => { */}
                            return (
                                <option value={item.g_Id} >{item.g_Name}</option>
                            );
                        })}
                    </select></div>

                    <div><p>Job Type</p><select name="jName" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.jName}</option>
                        {aa.jobName.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select></div>

                    <div><p>Site Name</p><select name="lName" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.lName}</option>
                        {aa.locationName.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select></div>
                    <div><p>Start Time</p><select name="sTime" onChange={handleSelect}>
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.sTime}</option>
                        {aa.time.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select></div>
                    <div><p>End Time</p><select name="eTime" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.eTime}</option>
                        {aa.time.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select></div>
                    <div><p>Break Time</p><input name="break" value={schedulData.break} onChange={handleSelect} /></div>
                    <div><p>Note</p><textarea type="text" name="notes" value={schedulData.notes} onChange={handleSelect}></textarea></div>

                </div>
                <button onClick={() => { submitSelect() }} className="subadmin-dataPortal_btn"><p>Done</p></button>
                <button onClick={() => { handlSelect() }} className="subadmin-dataPortal_btn"><p>Close</p></button>

            </div>
        </div>
    )
}

export default SelectSchedulingData;