import { useState,useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AdminA.css";
import axios from "axios";
import HeaderA from "../headerA/HeaderA";
import AdmincardA from "../admin cardA/AdmincardA";
const AdminA = () => {
  
  let userId = localStorage.getItem("userId");
  var image = localStorage.getItem("image");
  var userName = localStorage.getItem("userName");
  var userEmail = localStorage.getItem("email");
  console.log(image);

console.log(userName)
console.log(userEmail)
  const [old, setOld] = useState("block");
  const [again, setAgain] = useState("none");
  const [update, setUpdate] = useState("none");
  const [newImg, setNewImg] = useState("");
  const [username, setUsername] = useState("")
  const [job, setJob] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [subData, setSubData] = useState([])
  const [updateImg, setUpdateImg] = useState("")
  const [state, setState] = useState("");
  const [query, setQuery] = useState("")
  useEffect(() => {
    const getData = async()=>{
    const respons= await fetch("https://mhr.mhrguardtracking.com/sub_list.php") ;
   const reqData =await respons.json();
   console.log(reqData);
   setSubData(reqData);
    }
    getData();
    console.log(subData)
  }, [])
  const navigate = useNavigate();
  const gotoLogin = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("image","");

    // localStorage.setItem("loginStatus", "Logged out successfylly");
    navigate("/ConnectionA");
  };
  const admin_eventhandler1 = () => {
    let newBox = "none";
    setOld(newBox);
    let second = "block";
    setAgain(second);
  };
  const admin_eventhandler2 = () => {
    let newagain = "none";
    setAgain(newagain);
    let third = "block";
    setOld(third);
  };
  const goAdminSide = () => {
    setUpdate("block");
    setOld("none");
  };
  const admin_eventhandler3 = () => {
    setUpdate("none");
    setOld("block");
  };
  const admin_eventhandler4 = () => {
    setUpdate("none");
    setOld("block");
  };
  const addImgPromt = () => {
    window.prompt("text")
  }
  const addNamePromt = () => {
    window.prompt("text")
  };
 
  const submitNew = () => {
    if (username.length === 0) {
      alert("sorry u")
    }
    else if (job.length === 0) {
      alert("sorry j")
    }
    else if (contact.length === 0) {
      alert("sorry c")
    }
    else if (email.length === 0) {
      alert("sorry e")
    }
    else if (password.length === 0) {
      alert("sorry p")
    }
    else if (state.length === 0) {
      alert("sorry s")
    }
    else {
      console.log("done")
      Check();
    }
  }
  const Check = async() => {
    const formData=new FormData();
    formData.append("state",state) ;
    formData.append("username",username) ;
    formData.append("job",job) ;
    formData.append("contact",contact) ;
    formData.append("email",email) ;
    formData.append("password",password) ;
    console.log(formData);
   const responce=await axios.post('https://mhr.mhrguardtracking.com/sub_insert.php',formData,{
    headers:{"Content-Type":"multipart/form-data"},
   }); 
   if(responce.data.status=="invalid"){
    alert(responce.data.message)
   }
   else{
 setTimeout(() => {
      admin_eventhandler2()
      window.location.reload();
    }, 100);
   }
  };
  const go_subadmin_details = (id,username,contact,job,email) => {
    navigate('/SubadminDetailsA', {state:{
      id:id,
      username:username,
      contact:contact,
      job:job,
      email:email
    }})
    console.log('hello')
  }
  const stateUpdate =(id,username,contact,job,email,password,state)=>{
    navigate("/AdmincardA", {state:{
      id:id,
      username:username,
      contact:contact,
      job:job,
      email:email,
      password:password,
      state:state
     
    }})
   
  }
  const handlImg=async(e)=>{
    const val=e.target.files[0];
    console.log(val);
    setNewImg(val);
    const formData=new FormData();
    formData.append("newImg",val);
    formData.append("userId",userId)
    console.log(formData.data);
    await axios.post('https://mhr.mhrguardtracking.com/admin_img_insert.php',formData,{
      headers:{"Content-Type":"multipart/form-data"},
     }).then((res) => {
      console.log(res)
      setUpdateImg(res.data.image)
      localStorage.setItem("image",res.data.image)
     })
  }
  useEffect(() => {
    const getImg =  () => {
     setUpdateImg(image)

    }
    getImg();
  }, []);
    // searching 
    const handleSearch = (e) => {
      setQuery(e.target.value);
    };
    console.log(updateImg)
  return (
    <>
      <HeaderA />

      <div className="admin-main">
        {/* SideBar Side */}
        <div className="admin-sidebar">
          <div>
            <img src={updateImg.length==0?"./assets/img2.jpg":updateImg}
             alt="noun" className="admin-side-img" />
            <input type="file" onChange={(e)=>handlImg(e)}
          style={{position:"absolute",left:"4rem",top:"3rem",height:"20rem",width:"20rem",backgroundColor:"pink",borderRadius:"3rem",opacity:"1%"}}
          />
          </div>
          <div className="admin-div-text">
          <p style={{ fontSize: "1.5rem",marginRight: "2rem", color: "black" ,maxWidth:"18rem",overflow:"auto"}}>
              {userName}</p>
              <p style={{ fontSize: "1.5rem",marginRight: "2rem", color: "black" ,maxWidth:"18rem",overflow:"auto"}}>
              {userEmail}</p>
          </div>
        </div>
        {/* Body Side */}
        <div className="admin-body">
          <div style={{ display: old }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="admin-div-search">
                {/* <button>Search</button> */}
                <input className="admin-main-input" placeholder="Search Here" onChange={(e) => handleSearch(e)} />
              </div>

              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={{ fontSize: "2rem", border: ".1rem solid", background: "#0077c7", color: "white" }}
              >
                <ion-icon
                  name="person-circle-sharp"
                  style={{
                    color: "white",
                    background: "#0077c7",
                    marginBottom: "-.2rem",
                  }}
                />
                Profile
              </button>

              <div
                className="offcanvas offcanvas-end"
                style={{ width: "20rem", background: "#e6f4e1" }}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header ">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Profile
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div
                    className="window_side"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <img
                      src={updateImg.length==0?"./assets/img2.jpg":updateImg}
                      alt="noun"
                      className=""
                      style={{ width: "15rem", height: "15rem" }}
                    />
                    <ion-icon
                      name="create-outline"
                      onClick={() => { addImgPromt() }}
                      style={{ marginTop: "2rem", fontSize: "2rem" }}
                    ></ion-icon>
                    <hr />
                    <h4 style={{ marginRight: "2rem", color: '#0077c7' }}>{userName}</h4>
                    <ion-icon
                      onClick={() => { addNamePromt() }}
                      name="create-outline"
                      style={{ marginTop: ".3rem", fontSize: "1.4rem" }}
                    ></ion-icon>
                    <hr />
                    <h4 style={{ color: '#0077c7' }}>{userEmail}</h4>
                    <hr />
                    <div
                      style={{
                        fontSize: "2rem",
                        background: "#0077c7",
                        color: "white",
                        width: "4rem",
                        height: "3rem",
                        borderRadius: ".5rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <ion-icon
                        onClick={() => {
                          gotoLogin();
                        }}
                        name="log-out-outline"
                      ></ion-icon>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="admin-cards">
            {/* <AdmincardA myList={myList} stateUpdate={() => goAdminSide()} /> */}





 {subData && subData.filter((user)=>user.username.includes(query)).map((item) => {
        // const { Id, Name, Contact, job, Mail, Password } = item;
        return (
          <div className="Admincard-main" key={item.id} >
        
            <div className="admincard-div-text">
              <p><b>Name:</b>{"  " + item.username} </p>
              <p><b  >Contact:</b>{"  " + item.contact}</p>
              <p><b  >Job:</b>{"  " + item.job}</p>
              <p><b style={{ fontWeight: "bold" }}>Mail:</b>{"  " + item.email}</p>
              <p><b style={{ fontWeight: "bold" }}>Pass:</b>{"  " + item.password}</p>
              <p><b style={{ fontWeight: "bold" }}>State:</b>{"  " + item.state}</p>
            </div>
            <div className="admincard-div-img">
              {/* <img src={`http://localhost/php/img/${item.newImg}`} alt="noun" className="admincard-card-img" /> */}
              <button onClick={() => { go_subadmin_details(
                item.id,
                item.username,
                item.contact,
                item.job,
                item.email,
              ) }}><b>Details</b></button>
              <button 
              onClick={() => stateUpdate(
                item.id,
                item.username,
                item.contact,
                item.job,
                item.email,
                item.password,
                item.state
              )}
              ><b>Edit</b></button>
             {/* <button ><b>Delete</b></button> */}
            </div>
          </div>
        );
      })
      }






















              <div onClick={() => {
                admin_eventhandler1();
              }} style={{ width: '20rem', height: "14rem", borderRadius: ".5rem", border: ".01rem solid black", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                <ion-icon style={{ fontSize: "5rem", color: "gray" }} name="person-add-outline"></ion-icon>
              </div>
            </div>
          </div>
          {/* After display None for add new Subadmin*/}
          <div className="admin-body-dialogbox-new" style={{ display: again }}>
            <p style={{ color: "#0077c7", fontSize: "2rem" }}> Add New Sub-Admin</p>
            <div className="new-input" >
              <label>Name</label>
              <input type="text" placeholder="Name" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="new-input">
              <label>Job</label>
              <input placeholder="job" type="text" name="job" value={job} onChange={(e)=>setJob(e.target.value)} />
            </div>
            <div className="new-input">
              <label>Contact</label>
              <input placeholder="contact" type="number" name="contact" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div className="new-input">
              <label>E-Mail</label>
              <input placeholder="email" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="new-input">
              <label>Password</label>
              <input placeholder="password" type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="new-input">
              <label>Status</label>
              <select value={state} onChange={(e)=>setState(e.target.value)}>
                <option>Active</option>
                <option>Deactive</option>
              </select>
              {/* <input placeholder="password" type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> */}
            </div>

            <div className="new-img">
            {/* <label>Picture</label>
              <input placeholder="Image" type="file"  style={{
                width: "15rem",
                height: "15rem",
                textAlign: "center",
              }}  name="image" onChange={(e)=>setNewImg(e.target.files[0])}/> */}
           
              
            <button
              onClick={() => {
                admin_eventhandler2();
              }}
            >
              Cancal
            </button>
            <button
              onClick={() => {
                submitNew();
              }}
            >
              Done
            </button>
            </div>
          </div>

          
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default AdminA;
