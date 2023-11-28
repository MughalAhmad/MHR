import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import "./SelectScheduleDataA.css"
import HeaderA from '../headerA/HeaderA';
const SelectScheduleDataA = () => {
    const navigate = useNavigate();
    const [filterData, setFilterData] = useState();
    const propDateGuardNameView = useLocation();
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
        }
    );
    const aa = {
        date: propDateGuardNameView.state.date,
        guardName: propDateGuardNameView.state.guardName,
        jobName: propDateGuardNameView.state.jobName,
        locationName: propDateGuardNameView.state.locationName,
        time: propDateGuardNameView.state.time
    };
    var yy = [];
    // console.log(aa.guardName)
    const dd = aa.date.toDateString();
    useEffect(() => {
        const getFilterNameDatas = async () => {
            const responsS = await fetch("https://mhr.mhrguardtracking.com/schedule_list.php");
            const reqDatasS = await responsS.json();
            // console.log("API S", reqDatasS);
            reqDatasS.map((item, index) => {
                if (item.dates === dd) {
                    const cc = { names: item.gName, mails: item.g_Email }
                    yy.push(cc);
                    // console.log(yy);
                }
                else {
                    setFilterData(aa.guardName);
                }

            });
            kk(yy);
        }
        getFilterNameDatas();

    }, [])
    const kk = (yy) => {
        console.log("yy", yy);
        console.log("aa.guardName", aa.guardName);

        const results = aa.guardName.filter((val) => {
            return !yy.find((a) => {
                if (val.g_Email === a.mails) {
                    console.log("hello", a.mails)
                    return a.mails
                }
            });
        });
        console.log(results);
        setFilterData(results)
    };

    console.log(filterData);

    const handleNameSelect = (e) => {
        // console.log(e.target.value);
        const na = e.target.value;
        // console.log(na);

        aa.guardName.map((item) => {
            // console.log("oj");
            if (na === item.g_Email) {
                // console.log("ok");
                const ss = item.g_Name;
                const zz = item.g_Email;
                Ff(ss, zz);
            }
            return;
        })
    }
    const Ff = (ss, zz) => {
        setNameMailHandl({ nameHand: ss, mailHand: zz })
    }
    // console.log(nameMailHandl);

    const handleSelect = (e) => {
        setschedulData({ ...schedulData, [e.target.name]: e.target.value });
        // console.log({ ...schedulData, [e.target.name]: e.target.value })
    }

    const submitSelect = () => {
        if (nameMailHandl.nameHand.length === 0) {
            alert("sorry")
        }
        else if (schedulData.jName.length === 0) {
            alert("sorry")
        }
        else if (schedulData.lName.length === 0) {
            alert("sorry")
        }
        else if (schedulData.sTime.length === 0) {
            alert("sorry")
        }
        else if (schedulData.eTime.length === 0) {
            alert("sorry")
        }
        else if (schedulData.break.length === 0) {
            alert("sorry")
        }

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
            dates: dd

        }
        // console.log(sendSelectData)
        axios.post('https://mhr.mhrguardtracking.com/schedule_insert.php', sendSelectData).then((result) => {
            // console.log(result.data)
            navigate(-1);
        })
    }
    return (
        <>
            {/* <HeaderA /> */}

            <div className="dataPortal" >
                <h1>Schedul New Guard</h1>
                <h1>{dd}</h1>
                <div className="dataPortal_select" >
                    <select
                        onChange={handleNameSelect}
                    >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{nameMailHandl.nameHand}</option>

                        {filterData && filterData.map((item) => {
                            return (
                                <option value={item.g_Email} >{item.g_Name}</option>
                            );
                        })}
                    </select>

                    <select name="jName" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.jName}</option>
                        {aa.jobName.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>

                    <select name="lName" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.lName}</option>
                        {aa.locationName.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                    <select name="sTime" onChange={handleSelect}>
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.sTime}</option>
                        {aa.time.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                    <select name="eTime" onChange={handleSelect} >
                        <option style={{ color: 'red', background: "yellow", border: '.7rem solid black' }}>{schedulData.eTime}</option>
                        {aa.time.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                    <input name="break" placeholder="Break" value={schedulData.break} onChange={handleSelect} />

                </div>
                <button onClick={() => { submitSelect() }} className="dataPortal_btn"><p>Done</p></button>
            </div>
        </>
    )
}

export default SelectScheduleDataA;