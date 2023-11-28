import React,{useEffect} from 'react'
import { useNavigate  } from "react-router-dom";

const ProtectedA = (props) => {
    const navigate = useNavigate();
const {ComponentA} =props;
    useEffect(() => {
      let loginA= localStorage.getItem("login");
      if(loginA != "admin"){
        // localStorage.setItem("loginStatus","Please login to view side A"); 
        navigate("/ConnectionA",{replace:true})
      }
    }, [])
    
  return (
    <div><ComponentA/></div>
  )
}

export default ProtectedA