import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
const TestMap = () => {
  return (
    <>
    <Header/>
    <div>
      <h1>TestMap</h1>
      <Outlet/>
      </div>
      </>
  )
}

export default TestMap