import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderA from '../headerA/HeaderA';
const TestMapA = () => {
  return (
    <>
    <HeaderA/>
    
    <div>
      <h1>TestMap</h1>
      <Outlet/>
      </div>
      </>
  )
}

export default TestMapA