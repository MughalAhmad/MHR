import { useState, useEffect } from "react";
import "./Location.css";
import Header from "../header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
//////////////////////////////////////////////////


// import './Map.css'
// import Locationdetails from "../location-details/Locationdetails";
const Location = () => {
  let userId = localStorage.getItem("userId");
  const [old, setOld] = useState("block");
  const [again, setAgain] = useState("none");
  const [sideMapBg, setSideMapBg] = useState("");
  const [tableSide, setTableSide] = useState("none");
  const [mapSide, setMapSide] = useState("block");
  const [update, setUpdate] = useState("none");
  const [fullLocationData, setFullLocationData] = useState([]);
  const [longLat, setLongLat] = useState([]);
  const [name, setName] = useState("")

  const [locationData, setLocationData] = useState({
    location: "",
    latitude: "",
    longitude: ""
  })
  const navigate = useNavigate();

  const change = () => {
    let newBox = "none";
    setOld(newBox);
    let second = "block";
    setAgain(second);
  };
  const changeUpdate = (id) => {
    setOld("none");
    setUpdate("block");
    console.log(id)
  };
  const handleSideMap = (state) => {
    console.log(state);
    if (state == true) {
      setSideMapBg(state);
      setTableSide("block")
      setMapSide("none");
    }
    else {
      setSideMapBg(state);
      setMapSide("block");
      setTableSide("none")
    }
  }
 
  const changeAgain = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
    setLocationData({ location: "", latitude: "", longitude: "" })
  };
  const handleChange = (e) => {
    setLocationData({ ...locationData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  const submitForm = (id) => {
    if (locationData.location.length === 0) {
      alert("sorry")
    }
    else if (locationData.latitude.length === 0) {
      alert("sorry")
    }
    else if (locationData.longitude.length === 0) {
      alert("sorry")
    }
    else {
      console.log("done")
      console.log("ID" + id)
      Checks();
    }
  }
  const Checks = () => {
    console.log("ok")
    const sendLocationData = {
      location: locationData.location,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      userId: userId
    }
    console.log(sendLocationData)
    axios.post('https://mhr.mhrguardtracking.com/location_insert.php', sendLocationData).then((result) => {
      console.log(result);
      evenLocationHandler();
      window.location.reload();
    })
  }

  useEffect(() => {
    const getLocationData = async () => {
      const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php?userId=" + localStorage.getItem("userId"));
      const reqData = await respons.json();
      console.log(reqData);
      setFullLocationData(reqData);
    }
    getLocationData();
  }, [])
  const evenLocationHandler = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
    setLocationData({
      location: "",
      latitude: "",
      longitude: ""
    });
  };
  const deleteUser = (id) => {
    axios.delete('https://mhr.mhrguardtracking.com/location_dell.php', { data: { id: id } }).then((result) => {
      console.log(result)
      console.log({ locationData: { id: id } })
      const getLocationData = async () => {
        const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php?userId=" + localStorage.getItem("userId"));
        const reqDataLocation = await respons.json();
        console.log(reqDataLocation);
        setFullLocationData(reqDataLocation);
      }
      getLocationData();
      window.location.reload();

    })
  }

  



  const forword = (i, loca, lat, long) => {
    navigate("/Locationdetails", { state: { id: i, location: loca, latitude: lat, longitude: long } })
  };


  

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










// ///////////////////////////////////////////////////
let message =""
const addName =()=>{
  const addName={
    location:name,
    userId:userId
  }
  axios.post('https://mhr.mhrguardtracking.com/location_insert.php',addName)
  .then(response=>{
    if(response){
      message =response.status
      // alert(message)
      navigate(`/map/${name}`)
    }

  })
  .catch(err=>console.log(err))
}
















  return (
    <>

      <Header />
      <div className="location-type-main-subadmin">
        <div className="location-type-body">
          <div style={{ display: old, }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                className="subadmin-location-add-btn"
              >
                <div className="sub1-location-add-btn">
                  <p style={{ background: sideMapBg == true ? "#9bcc8b" : "" }} onClick={() => handleSideMap(true)}>Sites</p>
                  <div className="horizantal-sub1-location-add-btn"></div>
                  <p style={{ background: sideMapBg == false ? "#9bcc8b" : "" }} onClick={() => handleSideMap(false)}>Map</p>
                </div>
              </div>
            </div>
  
            <div style={{ display: tableSide }}>
            <div className="subadmin-location-search-div">
                <input className="subadmin-location-input" placeholder="Search Here" onChange={(e)=>setName(e.target.value)} value={name}/>
                <button style={{width:"5rem",height:"2rem",border:"0.1rem solid #9bcc8b",fontSize:"1rem",borderRadius:".8rem",marginLeft:"1rem",color:"#0077c7"}} 
                disabled={name=="" ? true : false}
                onClick={addName}>Click</button>
              </div>
              <table className="subadmin-location-table" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Location</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">State</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                 {fullLocationData && fullLocationData.map((item, index) => {
                  {/* {fullLocationData && fullLocationData.filter((user) => user.location.toLowerCase().includes(query)).map((item, index) => { */}
                    return (
                      <tr key={index}>
                        <td >{index + 1}</td>
                        <td >{item.location}</td>
                        <td >{item.longitude}</td>
                        <td >{item.latitude}</td>
                        <td ><button onClick={() => deleteUser(item.id)} style={{ border: "0rem", width: "4rem", marginLeft: "-.6rem", borderRadius: ".5rem", background: "#0077c7", color: "white" }}>delete</button></td>
                        <td ><button onClick={() => forword(item.id, item.location, item.latitude, item.longitude)} style={{ border: "0rem", width: "4rem", marginLeft: "-.6rem", borderRadius: ".5rem", background: "#0077c7", color: "white" }}>update</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div style={{ display: mapSide, width: "100%", height: "100%", padding: "1rem" }}>
              <div className="google-map">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA' }}
                  defaultCenter={location}
                  defaultZoom={17}
                >
          
                  {fullLocationData && fullLocationData.map((item, index) => {
                    const aa = fullLocationData.latitude
                    // console.log(aa)
                    // console.log(Number(item.latitude))

                    return (
                      <LocationPin key={index}
                        lat={Number(item.latitude)}
                        lng={Number(item.longitude)}
                        text={item.location}
                      />
                    )
                  })}
                
                </GoogleMapReact>
              </div>
            </div>
          </div>
      




{/* ////////////////////////////////////////////////////////// */}
      
          {/* After display None */}
          <div className="subadmin-location-body-dialogbox" style={{ display: again }}>
            <h1 style={{ color: "#0077c7" }}>New Location</h1>
            <div><p>Location</p><input type="text" name="location" placeholder="Enter your Location"
              onChange={handleChange} value={locationData.location} /></div>
            <div><p>Latitude</p><input type="number" name="latitude" placeholder="Enter your latitude"
              onChange={handleChange} value={locationData.latitude} /></div>
            <div><p>Longitude</p><input type="number" name="longitude" placeholder="Enter your longitude"
              onChange={handleChange} value={locationData.longitude} /></div>
            <button
              onClick={() => {
                changeAgain();
              }}
            >
              Cancal
            </button>
            <button
              onClick={() => {
                submitForm();
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
}

export default Location