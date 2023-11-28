import { useState, useEffect } from "react";
import "./AllLocationA.css";
import HeaderA from "../headerA/HeaderA";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

// import './Map.css'
// import Locationdetails from "../location-details/Locationdetails";
const AllLocationA = () => {
  let userId = localStorage.getItem("userId");
  const [old, setOld] = useState("block");
  const [query, setQuery] = useState("");
  const [again, setAgain] = useState("none");
  const [sideMapBg, setSideMapBg] = useState("");
  const [tableSide, setTableSide] = useState("none");
  const [mapSide, setMapSide] = useState("block");
  const [update, setUpdate] = useState("none");
  const [fullLocationData, setFullLocationData] = useState([]);
  const [longLat, setLongLat] = useState([]);

  const [locationData, setLocationData] = useState({
    location: "",
    latitude : "",
    longitude:""
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
  const changeUpdateClose = () => {
    setUpdate("none");
    setOld("block");

  }
  const changeAgain = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
    setLocationData({ location: "", latitude: "" ,longitude:""})
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
      // Checks();
    }
  }
  // const Checks = () => {
  //   console.log("ok")
  //   const sendLocationData = {
  //     location: locationData.location,
  //     zone: locationData.latitude,
  //     zone: locationData.longitude,
  //     userId: userId
  //   }
  //   console.log(sendLocationData)
  //   axios.post('https://mhr.mhrguardtracking.com/location_insert.php', sendLocationData).then((result) => {
  //     console.log(result);
  //     evenLocationHandler();
  //     window.location.reload();
  //   })
  // }
  // const updateForm = () => {
  //   if (locationData.location.length === 0) {
  //     alert("sorry")
  //   }
  //   else if (locationData.zone.length === 0) {
  //     alert("sorry")
  //   }
  //   else {
  //     console.log("done")
  //     updateChecks();
  //   }
  // }
  // const updateChecks = () => {
  //   console.log("ok")
  //   const sendLocationData = {
  //     location: locationData.location,
  //     zone: locationData.zone,
  //   }
  //   console.log(sendLocationData)
  //   axios.post('http://localhost/php/location_edit.php', sendLocationData).then((result) => {
  //     console.log(result);
  //     evenLocationHandler();
  //   })
  // }
  useEffect(() => {
    const getLocationData = async () => {
      const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php?userId=");
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
      longitude:""
    });
  };
  const deleteUser = (id) => {
    axios.delete('https://mhr.mhrguardtracking.com/location_dell.php', { data: { id: id } }).then((result) => {
      console.log(result)
      console.log({ locationData: { id: id } })
      const getLocationData = async () => {
        const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php");
        const reqDataLocation = await respons.json();
        console.log(reqDataLocation);
        setFullLocationData(reqDataLocation);
      }
      getLocationData();
      window.location.reload();

    })
  }

  // const updateUser = (id) => {
  //   axios.get("https://mhr.mhrguardtracking.com/location_list.php?userId=" + localStorage.getItem("userId")).then((result) => {
  //     console.log(result)
  //     var dat = result.data[id - 1]
  //     console.log(dat)
  //     setOld("none");
  //     setUpdate("block");
  //     setLocationData({
  //       location: dat.location,
  //       zone: dat.zone
  //     })
  //   })
  // }



  const forword = (i, loca,lat,long) => {
    navigate("/AllLocationDetailsA", { state: { id: i, location: loca, latitude:lat,longitude:long } })
  };
  // searching 
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   const getLongLatData = async () => {
  //     const respons = await fetch("https://mhr.mhrguardtracking.com/location_list.php?userId=" + localStorage.getItem("userId"));
  //     const reqData = await respons.json();
  //     console.log(reqData);
  //     reqData.map((item)=>{
  //       setLongLat({text:item.location,lat:item.latitude,lng:item.longitude})
  //     })
  //   }
  //   getLongLatData();
  // }, [])

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
  console.log(fullLocationData && fullLocationData)
  return (
    <>

      <HeaderA />
      <div className="all-location-type-main-admin">
        <div className="all-admin-location-type-body">
          <div style={{ display: old, }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="all-admin-location-search-div">
                <input className="all-admin-location-input" placeholder="Search Here" onChange={(e) => handleSearch(e)} />
              </div>
              <div
                className="all-admin-location-add-btn"
              >
                {/* <button
                  onClick={() => {
                    change();
                  }}
                >
                  Add new
                </button> */}
                <div className="all-adm1-location-add-btn">
                  <p style={{ background: sideMapBg == true ? "#9bcc8b" : "" }} onClick={() => handleSideMap(true)}>Sites</p>
                  <div className="all-horizantal-adm1-location-add-btn"></div>
                  <p style={{ background: sideMapBg == false ? "#9bcc8b" : "" }} onClick={() => handleSideMap(false)}>Map</p>
                </div>
              </div>
            </div>
            {/* <div className="contaner-map-side"> */}
            <div style={{ display: tableSide }}>
              <table className="all-admin-location-table" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Location</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Latitude

</th>
                  </tr>
                </thead>
                <tbody>
                  {fullLocationData && fullLocationData.filter((user) => user.location.toLowerCase().includes(query)).map((item, index) => {
                    return (
                      <tr key={index}>
                        <td >{index + 1}</td>
                        <td >{item.location}</td>
                        <td >{item.longitude}</td>
                        <td >{item.latitude}</td>
                        {/* <td ><button onClick={() => deleteUser(item.id)} style={{ border: "0rem", width: "4rem", marginLeft: "-.6rem", borderRadius: ".5rem", background: "#0077c7", color: "white" }}>delete</button></td>
                        <td ><button onClick={() => forword(item.id, item.location, item.latitude,item.longitude)} style={{ border: "0rem", width: "4rem", marginLeft: "-.6rem", borderRadius: ".5rem", background: "#0077c7", color: "white" }}>update</button></td> */}
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
        {fullLocationData && fullLocationData.map((item,index)=>{
          console.log(fullLocationData)
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
              {/* <img src="./assets/map.svg" alt="none" style={{ width: "100%", height: "100%" }} /> */}
            </div>
          </div>
          {/* </div> */}
          {/* After display None */}
          {/* <div className="admin-location-body-dialogbox" style={{ display: again }}>
            <h1 style={{ color: "#0077c7" }}>New Location</h1>
            <div><p>Location</p><input type="text" name="location" placeholder="Enter your Location"
              onChange={handleChange} value={locationData.location} /></div>
            <div><p>Latitude</p><input type="number" name="latitude" placeholder="Enter your latitude"
              onChange={handleChange} value={locationData.latitude } /></div>
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
          </div> */}
          {/* After display None update value
         <div className="location-update-dialogbox" style={{ display: update }}>
          <h1 style={{ color: "#0077c7" }}>updata Location</h1>
          <input type="text" name="location" placeholder="Enter your Location"
            onChange={handleChange} value={locationData.location} />
          <input type="text" name="zone" placeholder="Enter your Zone"
            onChange={handleChange} value={locationData.zone} />
          <button
            onClick={() => {
              changeUpdateClose();
            }}
          >
            Cancal
          </button>
          <button
            onClick={() => {
              submitUpdate(locationData.location,locationData.zone)
            }}
          >
            Done
          </button>
        </div> */}


        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AllLocationA