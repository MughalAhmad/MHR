import React from "react";
import "./Subadmincard.css";
import Header from "../header/Header";
const Subadmincard = ({ data }) => {
  return (
    <>
    <Header/>
      {data.map((da) => {
       const { Id, Name, DOB,Phone, SIA_License, Mail,Emergence_No,SIA_Expire, Address } = da;
       return (
        <tr key={Id}>
        <td style={{paddingLeft:".5rem",paddingRight:"2rem", fontSize:"1rem",paddingBottom:"2rem"}}>{Id}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{Name}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{DOB}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{Phone}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{SIA_License}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{Mail}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{Emergence_No}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>'{Address}'</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}>{SIA_Expire}</td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"}}>delete</button></td>
        <td style={{paddingRight:"3rem", fontSize:"1rem"}}><button style={{border:"0rem",width:"4rem",marginLeft:"-.6rem",borderRadius:".5rem",background:"#0077c7",color:"white"  }}>update</button></td>
      </tr>
        );
      })}
    </>
  );
};

export default Subadmincard;
