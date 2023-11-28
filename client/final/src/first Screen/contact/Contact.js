import React, { useState } from 'react'
import "./Contact.css";
import axios from 'axios'
import Headerfirst from '../header first/Headerfirst';
import FooterFirst from '../footer first/FooterFirst';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    subject: "",
    message: ""
  });
  const handleFormaData = (e) => {
    console.log({ ...formData, [e.target.name]: e.target.value })
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitForm = () => {
    if (formData.name.length === 0) {
      alert("sorry")
    }
    else if (formData.mail.length === 0) {
      alert("sorry")
    }
    else if (formData.subject.length === 0) {
      alert("sorry")
    }
    else if (formData.message.length === 0) {
      alert("sorry")
    }

    else {
      console.log("done")
      Check();
    }
  }
  const Check = () => {
    console.log("ok")
    const sendData = {
      name: formData.name,
      mail: formData.mail,
      subject: formData.subject,
      message: formData.message,
    }
    console.log(sendData)
    axios.post('', sendData).then((result) => {
      console.log('hello')
    })
  }
  return (
    <div className='main-contact'>
      <Headerfirst />
      <div className='section5' id='section_5'>
        <div className='left-section5'>
          <p style={{ fontSize: "3rem", fontWeight: "700" }}>Contact Us</p>
          <div className='sub1-left-section5'>
            <div className='subsub1-sub1-left-section5'>
              <div className='sub1-subsub1-sub1-left-section5'>
                <img src='./assets/mail.svg' alt='none' style={{ width: "2rem", height: "2rem" }} />
                <p style={{ fontSize: "2rem" }}>Email</p>
              </div>
              <span >info@mhrsupport.com</span>
            </div>

            <div className='subsub2-sub1-left-section5'>
              <div className='sub1-subsub2-sub1-left-section5'>
                <img src='./assets/phone.svg' alt='none' style={{ width: "2rem", height: "2rem" }} />
                <p style={{ fontSize: "2rem" }}>Phone</p>
              </div>
              <span >0208 0640 607</span>
            </div>

            <div className='subsub3-sub1-left-section5'>
              <div className='sub1-subsub3-sub1-left-section5'>
                <img src='./assets/location.svg' alt='none' style={{ width: "2rem", height: "2rem" }} />
                <p style={{ fontSize: "2rem" }}>Office</p>
              </div>
              <span >Location: 18 CRAVEN GARDENS LONDON IG6 1PF
              </span>
            </div>

          </div>
        </div>
        <div className='right-section5'>
          <div className='sub1-right-section5'>
            <div className='subsub1-sub1-right-section5'>
              <input 
                value={formData.name}
                onChange={handleFormaData}
                name='name'
                type='text'
              />
              <p>Your Name</p>
            </div>


            <div className='subsub2-sub1-right-section5'>
              <input 
                value={formData.mail}
                onChange={handleFormaData}
                name='mail'
                type='text'
              />
              <p>Your Email</p>
            </div>



            <div className='subsub3-sub1-right-section5'>
              <input
                value={formData.subject}
                onChange={handleFormaData}
                name='subject'
                type='text'
              />
              <p>Subject</p>
            </div>



            <div className='subsub4-sub1-right-section5'>
              <textarea 
                value={formData.message}
                onChange={handleFormaData}
                name='message'
                type='text'
              />
              <p>Message</p>
            </div>
          </div>
          <button style={{ backgroundColor: "#332A5D", color: "white", width: "7rem", height: "2.3rem", borderRadius: "1rem", border: "0", marginTop: "2rem" }} onChange={() => submitForm()}>Send</button>
        </div>
      </div>
      <div className='contact-div2'>
        <img src='./assets/p6.svg' alt='none' />
      </div>



      <FooterFirst />

    </div>
  )
}

export default Contact