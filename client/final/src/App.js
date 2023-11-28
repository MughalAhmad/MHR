import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Connection from "./component/log-sign-forget/Connection";
import Protected from "./Protected/Protected";

import FirstScreen from "./first Screen/FirstScreen";

// import TestMap from "./component/try/TestMap";
import Subadmin from "./component/subadmin/Subadmin";
import Guardlist from "./component/guardlist/Guardlist";
import Guardlistdetails from "./component/guardlist-details/Guardlistdetails";
import View from "./component/view/View";
import Scheduling from "./component/scheduling/Scheduling";
import SelectSchedulingData from "./component/selectSchedulingData/SelectSchedulingData"
import Jobtype from "./component/jobtypes/Jobtype";
import Jobcard from "./component/jobcards/Jobcard";
import Location from "./component/location/Location";
import Locationdetails from "./component/location-details/Locationdetails";
import Pdf from "./component/download/Pdf";
import ViewPdf from "./component/view-download/ViewPdf";

// admin
import ConnectionA from "./componentsA/log-sign-forgetA/ConnectionA";
import ProtectedA from "./Protected/ProtectedA";
import TestMapA from "./componentsA/tryA/TestMapA";
import AdminA from "./componentsA/adminA/AdminA";
import AdmincardA from "./componentsA/admin cardA/AdmincardA"
import GuardlistA from "./componentsA/GuardlistA/GuardlistA";
import GuardlistdetailsA from "./componentsA/guardlist-detailsA/GuardlistdetailsA"
import SubadminDetailsA from "./componentsA/subadmin-detailsA/SubadminDetailsA";
import TotalguardlistA from "./componentsA/total_guard_listA/TotalguardlistA";
import TotalguardlistdetailsA from "./componentsA/total_guardlist_detailsA/TotalguardlistdetailsA";
import SchedulingA from "./componentsA/schedulingA/SchedulingA";
import SelectScheduleDataA from "./componentsA/select-Schedule-Data-A/SelectScheduleDataA";
import JobtypeA from "./componentsA/jobtypesA/JobtypeA";
import JobcardA from "./componentsA/jobcardsA/JobcardA";
import LocationA from "./componentsA/locationA/LocationA";
import LocationdetailsA from "./componentsA/location-detailsA/LocationdetailsA"
import PdfA from "./componentsA/downloadA/PdfA";
import AllLocationA from "./componentsA/AllLocationA/AllLocationA";
import AllLocationDetailsA from "./componentsA/AllLocationDetailsA/AllLocationDetailsA";
import ViewA from "./componentsA/viewA/ViewA"
import ViewPdfA from "./componentsA/view-downloadA/ViewPdfA";




import Home from "./first Screen/home/Home";
import About from "./first Screen/about/About";
import Contact from "./first Screen/contact/Contact";
import Feature from "./first Screen/feature/Feature";


import AddgeoMap from "./component/location/AddgeoMap";


const App = () => {
  return (
    // <>
    // <FirstScreen/>
    // </>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<FirstScreen />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Feature' element={<Feature />} />




      </Routes>
      <Routes><Route path='/Connection' element={<Connection />} /></Routes>
      <Routes>
        <Route path='/Subadmin' element={<Protected Component={Subadmin}  />} />
        <Route path='/Guardlist' element={< Protected Component={Guardlist} />} />
        <Route path='/Guardlistdetails' element={< Protected Component={Guardlistdetails} />} />
        <Route path='/View' element={< Protected Component={View} />} />
        <Route path='/Scheduling' element={< Protected Component={Scheduling} />} />
        <Route path='/SelectSchedulingData' element={< Protected Component={SelectSchedulingData} />} />
        <Route path='/Pdf' element={< Protected Component={Pdf} />} />
        <Route path='/Jobtype' element={< Protected Component={Jobtype} />} />
        <Route path='/Jobcard' element={< Protected Component={Jobcard} />} />
        <Route path='/Location' element={< Protected Component={Location} />} />
        <Route path='/map/:name' element={< Protected Component={AddgeoMap} />} />
        <Route path='/Locationdetails' element={< Protected Component={Locationdetails} />} />
        <Route path='/ViewPdf' element={< Protected Component={ViewPdf} />} />

      </Routes>

<Routes><Route path='/ConnectionA' element={  <ConnectionA />} /></Routes>
      <Routes>
        <Route path='/AdminA' element={<ProtectedA ComponentA={AdminA} />} />
        <Route path='/AdmincardA' element={<ProtectedA ComponentA={AdmincardA} />} />
        <Route path='/GuardlistA' element={< ProtectedA ComponentA={ GuardlistA}/>} />
        <Route path='/GuardlistdetailsA' element={< ProtectedA ComponentA={ GuardlistdetailsA}/>} />
        <Route path='/SubadminDetailsA' element={< ProtectedA ComponentA={ SubadminDetailsA }/>} />
        <Route path='/TotalguardlistA' element={<ProtectedA ComponentA={TotalguardlistA} />} />
        <Route path='/TotalguardlistdetailsA' element={<ProtectedA ComponentA={TotalguardlistdetailsA} />} />
        <Route path='/SchedulingA' element={<ProtectedA ComponentA={SchedulingA} />} />
        <Route path='/SelectScheduleDataA' element={<ProtectedA ComponentA={SelectScheduleDataA} />} />
        <Route path='/PdfA' element={<ProtectedA ComponentA={PdfA} /> }/>
        <Route path='/JobtypeA' element={<ProtectedA ComponentA={JobtypeA} />} />
        <Route path='/JobcardA' element={<ProtectedA ComponentA={JobcardA} />} />
        <Route path='/LocationA' element={<ProtectedA ComponentA={LocationA}/>} />
        <Route path='/LocationdetailsA' element={<ProtectedA ComponentA={LocationdetailsA}/>} />
        <Route path='/TestMapA' element={<ProtectedA ComponentA={TestMapA}/>} />
        <Route path='/AllLocationA' element={<ProtectedA ComponentA={AllLocationA}/>} />
        <Route path='/AllLocationDetailsA' element={<ProtectedA ComponentA={AllLocationDetailsA}/>} />
        <Route path='/ViewA' element={<ProtectedA ComponentA={ViewA}/>} />
        <Route path='/ViewPdfA' element={<ProtectedA ComponentA={ViewPdfA}/>} />


      </Routes>  

      
 {/* <Routes><Route path='/' element={  <ConnectionA />} /></Routes>
      <Routes>
        <Route path='/AdminA' element={<ProtectedA ComponentA={AdminA} />} />
        <Route path='/GuardlistA' element={< ProtectedA ComponentA={ GuardlistA}/>} />
        <Route path='/GuardlistdetailsA' element={< ProtectedA ComponentA={ GuardlistdetailsA}/>} />
        <Route path='/SubadminDetailsA' element={< ProtectedA ComponentA={ SubadminDetailsA }/>} />
        <Route path='/TotalguardlistA' element={<ProtectedA ComponentA={TotalguardlistA} />} />
        <Route path='/TotalguardlistdetailsA' element={<ProtectedA ComponentA={TotalguardlistdetailsA} />} />
        <Route path='/SchedulingA' element={<ProtectedA ComponentA={SchedulingA} />} />
        <Route path='/SelectScheduleDataA' element={<ProtectedA ComponentA={SelectScheduleDataA} />} />
        <Route path='/PdfA' element={<ProtectedA ComponentA={PdfA} /> }/>
        <Route path='/JobtypeA' element={<ProtectedA ComponentA={JobtypeA} />} />
        <Route path='/JobcardA' element={<ProtectedA ComponentA={JobcardA} />} />
        <Route path='/LocationA' element={<ProtectedA ComponentA={LocationA}/>} />
        <Route path='/LocationdetailsA' element={<ProtectedA ComponentA={LocationdetailsA}/>} />
        <Route path='/TestMapA' element={<ProtectedA ComponentA={TestMapA}/>} />
        <Route path='/AllLocationA' element={<ProtectedA ComponentA={AllLocationA}/>} />
        <Route path='/AllLocationDetailsA' element={<ProtectedA ComponentA={AllLocationDetailsA}/>} />

      </Routes>   */}

    </BrowserRouter>
  );
};

export default App;
