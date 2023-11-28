
import { useState,useEffect } from "react";
import "./Connection.css";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
const Connection = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

useEffect(() => {
  let login = localStorage.getItem("login");
  if(login == "subadmin"){
    navigate("/Subadmin")
  }
  let loginStatus = localStorage.getItem("loginStatus");
  if(loginStatus){
    setErr(loginStatus);
    setTimeout(function(){
      // localStorage.clear();
      // window.location.reload();
    }, 500);
  
  }
  setTimeout(function(){
setMsg("");
  },1000);

  
}, [msg])


  const handleInputs=(e,type)=>{
    switch(type){
      case"email":
      setErr("");
      setEmail(e.target.value);
      if(e.target.value === ""){
        setErr("E-mail has left blank");
      }
      break;
      case"password":
      setErr("");
      setPassword(e.target.value);
      if(e.target.value === ""){
        setErr("Password has left blank");
      }
      break;

    }
  }
  const loginSubmit=()=>{
    if(email !== "" && password !== ""){
      var url = "https://mhr.mhrguardtracking.com/Login.php	";
      var headers={
        "Accept":"application/json",
        "Content-type":"application/json",
      };
      var Data ={
        email:email,
        password:password
      };
      fetch(url,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(Data)
      }).then((response)=>response.json())
      .then((response) =>{
        console.log(response)
        if(response[0].result === "Invalid E-mail" || response[0].result === "Invalid Password"){
          setErr(response[0].result);
        }else{
          // console.log(response);
          setMsg(response[0].result);
          setTimeout(function() {
                      console.log(response);
            localStorage.setItem("login", "subadmin");
            localStorage.setItem("email",response[0].email);
            localStorage.setItem("userName",response[0].userName);
            localStorage.setItem("userContact",response[0].userContact);
            let getMail = localStorage.getItem("email");
            console.log(getMail);
            localStorage.setItem("userId",response[0].userId);
            localStorage.setItem("image",response[0].image);


            navigate("/Subadmin",{state : {email:email}});
          }, 2000);
        }
      }).catch((err)=>{
        setErr(err);
        console.log(err);
      })
    }
    else{
      setErr("All field are required!")
    }
  }
  return (
    <div className="main_div">
      <div className="logInForm">
        <img src="./assets/img.png" alt="noun" className="logIn_img" />
        <h1>Log In S</h1>
        <div className="mb-3 ">
          <p>
            {
              err !== "" ? <span className="error">{err}</span>:
              <span className="success">{msg}</span>
            }
          </p>
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {handleInputs(e,"email")}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => {handleInputs(e,"password")}}
          />
        </div>
        <button type="submit" className="btn btn-primary" 
        onClick={loginSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Connection;


