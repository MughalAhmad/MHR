import { useState, useEffect } from "react";
import "./Subadmin.css";
import axios from "axios";
import Header from "../header/Header";
import Subadmincard from "../subadmincard/Subadmincard";
import { Outlet, useNavigate } from "react-router-dom";
const Subadmin = () => {
  let mail = localStorage.getItem("email");
  let userId = localStorage.getItem("userId");
  let userName = localStorage.getItem("userName");
  let userContact = localStorage.getItem("userContact");
  let image = localStorage.getItem("image");
  console.log(image);
  const [query, setQuery] = useState("");
  const [old, setOld] = useState("Start");
  const [back, setBack] = useState("rgb(121, 183, 121)");
  const [again, setAgain] = useState("Break In");
  const [back2, setBack2] = useState("rgb(121, 183, 121)");
  const [full, setFull] = useState([])
  const [newImg, setNewImg] = useState("")
  const [updateImg, setUpdateImg] = useState("")
  const [img, setImg] = useState("")
  // useEffect(() => {
  //   const getImg = async () => {
  //     const respons = await fetch("https://mhr.mhrguardtracking.com/sub_img.php?userId="+localStorage.getItem("userId"));

  //     const reqData = await respons.json();
  //     console.log(reqData);
  //     // setUpdateImg(reqData)
  //   }
  //   getImg();
  // }, []);
  const change = () => {
    if (old === "Start") {
      let newBox = "End";
      setOld(newBox);
      setBack("#e76b6b");
    } else {
      let second = "Start";
      setOld(second);
      setBack("rgb(121, 183, 121)");
    }
  };
  const navigate = useNavigate();
  const gotoLogin = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("image", "");
    // localStorage.setItem("loginStatus","Logged out successfylly");

    navigate("/Connection");
  };
  const change2 = () => {
    if (again === "Break In") {
      let newBox = "Break Out";
      setAgain(newBox);
      setBack2("#e76b6b");
    } else {
      let second = "Break In";
      setAgain(second);
      setBack2("rgb(121, 183, 121)");
    }
  };



  useEffect(() => {
    const getData = async () => {
      const respons = await fetch("https://mhr.mhrguardtracking.com/guard_list.php?userId=" + localStorage.getItem("userId"));

      const reqData = await respons.json();
      // console.log(reqData);
      setFull(reqData);

    }
    getData();
  }, []);
  useEffect(() => {
    const getImg = () => {
      setUpdateImg(image)

    }
    getImg();
  }, []);
  console.log(updateImg.length)
  // searching 
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handlImg = async (e) => {
    const val = e.target.files[0];
    console.log(val);
    setNewImg(val);
    const formData = new FormData();
    formData.append("newImg", val);
    formData.append("userId", userId)
    console.log(formData);
    await axios.post('https://mhr.mhrguardtracking.com/subs_img_insert.php', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res)
      setUpdateImg(res.data.image)
      localStorage.setItem("image", res.data.image)
    })
  }

  return (
    <>
      <Header />

      <div className="subadmin-main">
        {/* SideBar Side */}
        <div className="subadmin-sidebar">
          <div style={{ position: 'relative' }}>
            <img
              src={updateImg.length == 0 ? "./assets/img2.jpg" : updateImg}
              alt="noun"
              className="subadmin-side-img"
            />
            <input type="file" onChange={(e) => handlImg(e)}
              style={{ position: "absolute", left: "4rem", top: "3rem", height: "20rem", width: "20rem", backgroundColor: "pink", borderRadius: "3rem", opacity: "1%" }}
            />
          </div>
          <div className="subadmin-div-text">
            <p>{userName}</p>
            <p>{userContact}</p>
            <p>{mail}</p>
          </div>
          {/* <div className="subadmin-button">
          <button
            style={{ background: back2, marginRight: "1rem" }}
            onClick={() => {
              change2();
            }}
          >
            {again}
          </button>
          <button
            style={{ background: back }}
            onClick={() => {
              change();
            }}
          >
            {old}
          </button>
        </div> */}
        </div>
        {/* Body Side */}
        <div className="subadmin-body">
          <div style={{ display: old }}>
            <div className="btn_input_profile">
              <div className="subadmin-div-search">
                {/* <button>Search</button> */}
                <input className="subadmin-input" placeholder="Search Here" onChange={(e) => handleSearch(e)} />
              </div>
              <div className="logout_div" onClick={() => { gotoLogin() }}>
                <h3>Log</h3>
                <h3>Out</h3>
                {/* <ion-icon
                name="log-out-outline"
               
              ></ion-icon> */}
              </div>
              <div className="subadmin_profile_btn">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  style={{
                    fontSize: "2rem",
                    border: ".1rem solid",
                    background: "#0077c7",
                    color: "white",
                  }}
                >
                  <ion-icon
                    name="person-circle-sharp"
                    style={{
                      color: "white",
                      marginBottom: "-.2rem",
                    }}
                  />
                  Profile
                </button>
              </div>
              <div
                style={{ width: "20rem", background: "#e6f4e1" }}
                className="offcanvas offcanvas-end"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header ">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    ProFile
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="profile_logout_div" onClick={() => { gotoLogin() }}>
                  <h3>Log</h3>
                  <h3>Out</h3>
                  {/* <ion-icon
                  name="log-out-outline"
                 
                ></ion-icon> */}
                </div>
                <hr />
                <div className="offcanvas-body">
                  {/* <img
                  src="./assets/img1.jpg"
                  alt="noun"
                  style={{ width: "15rem", height: "15rem" }}
                /> */}


                  <div style={{ position: 'relative' }}>
                    <img
                      src={updateImg.length == 0 ? "./assets/img2.jpg" : updateImg}
                      alt="noun"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                    <input type="file" onChange={(e) => handlImg(e)}
                      style={{ position: "absolute", left: "0rem", top: "3rem", height: "15rem", width: "15rem", borderRadius: "3rem", opacity: "1%" }}
                    />
                  </div>



                  <hr />
                  <div>
                    <p style={{ fontSize: "1.5rem", marginRight: "2rem", color: "#0077c7", maxWidth: "18rem", overflow: "auto" }}>
                      {userName}
                    </p>
                    <hr />
                    <p style={{ fontSize: "1.5rem", color: "#0077c7", maxWidth: "18rem", overflow: "auto" }}>
                      {userContact}
                    </p>
                    <hr />
                    <p style={{ fontSize: "1.5rem", color: "#0077c7", maxWidth: "18rem", overflow: "auto" }}>{mail}</p>
                    <hr />
                  </div>
                  {/* <div className="subadmin-button" style={{}}>
                  <button
                    style={{ background: back2 }}
                    onClick={() => {
                      change2();
                    }}
                  >
                    {again}
                  </button>
                  <button
                    style={{ background: back }}
                    onClick={() => {
                      change();
                    }}
                  >
                    {old}
                  </button>
                </div> */}
                </div>
              </div>
            </div>
            <div className="userTable">
              <table className="sub-table">
                <thead>
                  <tr>
                    <th >#</th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>SIA license</th>
                    <th>E-mail</th>
                    <th>Emergency No</th>
                    <th>Address</th>
                    <th>SIA Expire</th>
                  </tr>
                </thead>
                <tbody>
                  {full && full.filter((user) => user.guard_name.toLowerCase().includes(query)).map((item, index) => {
                    return (
                      <tr key={index}>
                        <td >{index + 1}</td>
                        <td>{item.guard_name}</td>
                        <td>{item.guard_dob}</td>
                        <td>{item.guard_phone}</td>
                        <td>{item.guard_SIALicense}</td>
                        <td>{item.guard_email}</td>
                        <td>{item.guardEmergenceNo}</td>
                        <td>'{item.guard_adress}'</td>
                        <td>{item.guardSIAExpire}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  );
};
export default Subadmin;
