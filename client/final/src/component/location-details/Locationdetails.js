import { useState ,useEffect} from 'react';
import "./Locationdetails.css";
import Header from '../header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Locationdetails = () => {
    let userId = localStorage.getItem("userId");

    const navigate = useNavigate();
    const propUpdate = useLocation();
    const [first, setfirst] = useState(
        {
        id:propUpdate.state.id,
        location:propUpdate.state.location,
        latitude:propUpdate.state.latitude,
        longitude:propUpdate.state.longitude
    }
    )
    useEffect(() => {
        const d = first.id;
        console.log(d)
        console.log("h")
        axios.get("https://mhr.mhrguardtracking.com/location_list.php?userId="+localStorage.getItem("userId")).then((result)=>{
            console.log(result)
      const dat =result.data;
        console.log(dat);
        dat.map((item)=>{
            if(item.id===d){
            var aa=new Array(item.location,item.latitude,item.longitude)
            console.log(aa)
            setfirst({location:item.location,latitude:item.latitude,longitude:item.longitude})
            console.log(setfirst({location:item.location,latitude:item.latitude,longitude:item.longitude}))
            }
        })
      })
    }, [])
    const handleUpdate = (e) => {
        setfirst({ ...first, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }
    const submitUpdate = () => {
        console.log("ok")
        const sendLocationUpdate = {
            id: propUpdate.state.id,
            location: first.location,
            latitude: first.latitude,
            longitude: first.longitude,

        }
        console.log(sendLocationUpdate)
        axios.post('https://mhr.mhrguardtracking.com/location_update.php', sendLocationUpdate).then((result) => {
            console.log(result);
            navigate(-1);
        })
    }
    return (
        <div className='subadmin-update-loaction'>
        <Header/>
            <div className="subadmin-location-update-dialogbox">
                <h1 style={{ color: "#0077c7" }}>updata Location</h1>
                <div><p>Location</p><input type="text" name="location" placeholder="Enter your Location"
                    onChange={handleUpdate}
                    value={first.location}
                /></div>
                <div><p>Latitude</p><input type="text" name="latitude" placeholder="Enter your Zone"
                    onChange={handleUpdate}
                    value={first.latitude}
                /></div>
                  <div><p>Longitude</p><input type="text" name="longitude" placeholder="Enter your Zone"
                    onChange={handleUpdate}
                    value={first.longitude}
                /></div>
                <button
                    onClick={() => { navigate(-1) }}
                >
                    Cancal
                </button>
                <button
                    onClick={() => {
                        submitUpdate()
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default Locationdetails