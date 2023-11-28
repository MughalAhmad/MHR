import React ,{useRef,useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import {DateRange} from 'react-date-range';
import "./ViewPdfA.css"
import jsPDF from 'jspdf';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
const ViewPdfA = () => {
  const [sortDate, setSortDate] = useState([])
  const [getData, setGatData] = useState([])
 const [start, setStart] = useState("")
 const [end, setEnd] = useState("");
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());


  useEffect(() => {
    sortDate.filter((item)=>{
            console.log(item)
    // if(item.dates<=start && item.dates>=end){
    //   setGatData(item)
    //   console.log(item)
    // }
   })
  }, [start,end])
  
    const data=useLocation();
    const pdfRef=useRef();
    // console.log(data);
    const AA={
        datas:data.state.allData,
    }
    const handleChange1 = (e) => {
      console.log( e.target.value )
      setStart( e.target.value );
    }
    const handleChange2 = (e) => {
      console.log(e.target.value)
      setEnd(e.target.value);
    }
    // console.log(AA)
    useEffect(() => {
      const sortData=()=>{
       const data=AA.datas.sort((a,b)=>new Date(a.dates) - new Date(b.dates))
       setSortDate(data)
       setGatData(data)
        // console.log(AA);
      }
      sortData()
    }, [])
    
    const downloadPDF = () => {
      if(start <= end){
        const input= pdfRef.current;
        html2canvas (input).then((canvas) => {
        const imgData = canvas. toDataURL('image/png');
        const pdf = new jsPDF('P', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight= canvas. height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX= (pdfWidth - imgWidth * ratio) / 2;
        const imgY= 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf. save('Schedule Data.pdf');
        });
      }
      else{
        alert("Date not correct")
      }
      
      };
      const selectionRange = {
        startDate:startDate ,
        endDate: endDate,
        key: 'selection',
      }
      const handleSelect=(date)=>{
        let filtered=getData.filter((item)=>{
          let filterDate= new Date(item.dates);
          return(
            filterDate>=date.selection.startDate &&
            filterDate<=date.selection.endDate
          );
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate)
        setSortDate(filtered);
const ss=date.selection.startDate;
        console.log("Start",date.selection.startDate);
        console.log("End",date.selection.endDate);

      }
  return (
    <>
    <div className='admin-viewPDFA'>
    <button onClick={downloadPDF} style={{backgroundColor:"#0077c7",color:'white',border:"0", width:"10rem",height:'5rem',fontSize:"2rem",borderRadius:'.8rem',margin:"2rem"}}>Download</button>
   
    <div className='Range'>
    <DateRange
   className='wrapper classname'
  onChange={handleSelect}
  ranges={[selectionRange]}
/>
   </div>
  
    </div>
       <div  ref={pdfRef} >
      <img
       className='admain-PDFA-img'
       src="./assets/img.png"
      />
      <h4  className='admain-PDFA-h4-1' >
        MHR Guard Tracking
      </h4>
      <h4 className='admain-PDFA-h4-2'>
        Scheduling Data
      </h4>
      <div className='table_wapper'>
      <table  className="subadmin-guard-table-download">
            <thead>
              <tr>
                <th style={{fontSize:'2rem'}}>Date</th>
                <th style={{fontSize:'2rem'}}>Name</th>
                <th style={{fontSize:'2rem'}}>Job</th>
                <th style={{fontSize:'2rem'}}>Location</th>
                {/* <th style={{fontSize:'2rem'}}>Date</th> */}
                <th style={{fontSize:'2rem'}}>Start Time</th>
                <th style={{fontSize:'2rem'}}>End Time</th>
                {/* <th style={{fontSize:'2rem'}}>Break</th> */}
              </tr>
            </thead>
            <tbody>
              {sortDate.map((item,index) => {
                console.log(item.dates)  
       return (
        <tr key={index}>
        <td style={{fontSize:'1.2rem',fontWeight:"600"}} >{item.dates}</td>
        <td style={{fontSize:'1.2rem',fontWeight:"600"}} >{item.nameGuard}</td>
        <td style={{fontSize:'1.2rem',fontWeight:"600"}}>{item.jName}</td>
        <td style={{fontSize:'1.2rem',fontWeight:"600"}}>{item.lName}</td>
        {/* <td style={{fontSize:"1.2rem",fontWeight:"600"}}>{item.dates}</td> */}
        <td style={{fontSize:'1.2rem',fontWeight:"600"}}>{item.sTime}</td>
        <td style={{fontSize:'1.2rem',fontWeight:"600"}}>{item.eTime}</td>
        {/* <td style={{fontSize:'1rem'}}>{item.break}</td> */}
      </tr>
        );
      })}
      </tbody>
          </table>
          </div>
          {/* <p style={styles.pageNumber}  render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed /> */}
    </div>
  </>
);
}

export default ViewPdfA