import { useState,useEffect } from "react";
import "./ConnectionA.css";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
const ConnectionA = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

useEffect(() => {
  let login = localStorage.getItem("login");
  if(login=="admin"){
    navigate("/AdminA")
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
      // var url = "https://api.mhrguardtracking.com/LoginA.php";
            var url = "https://mhr.mhrguardtracking.com/Login.php";
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
        if(response[0].result === "Invalid E-mail" || response[0].result === "Invalid Password"){
          setErr(response[0].result);
        }else{
          setMsg(response[0].result);
          setTimeout(function() {
            localStorage.setItem("login", "admin")
            localStorage.setItem("userId", response[0].userId)
            localStorage.setItem("image",response[0].image);
            localStorage.setItem("userName",response[0].userName);
            localStorage.setItem("email",response[0].email);
            navigate("/AdminA");
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
        <h1>Log In A</h1>
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

export default ConnectionA;
