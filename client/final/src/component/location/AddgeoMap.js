import React ,{useState,useEffect}from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../header/Header";

import GeoMaps from "./GeoMaps"
const AddgeoMap = () => {
    let {name}=useParams();
    const navigate = useNavigate();
    const [mapLocation, setLocation] = useState();
    const [mapInfo, setMapInfo] = useState([])

useEffect(() => {
    const getGeoCode= async()=>{
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name} &key=AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA`)
        .then(resp=>resp.json())
        .then(data=>{
           console.log(data)
        //    so to get the geometry location
           setLocation(data.results[0].geometry.location)
        })
        // get map info
        await axios.post('https://mhr.mhrguardtracking.com/location_insert.php',name)
        .then((response)=>{
            console.log("response",response)
            setMapInfo(response.data)
        })
    }
    getGeoCode()
    return()=>{
        setLocation(null)
        setMapInfo  (null)
    }

}, [name])

const [state, setState] = useState([])
const {paths} = state

    return (
    <div>
        <Header/>
<GeoMaps
apiKey='AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA'
center={mapLocation}
paths={paths}
point={paths=>setState({paths})}
/>
    </div>
  )
}

export default AddgeoMap