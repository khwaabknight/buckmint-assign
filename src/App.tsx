import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashbaord from './components/dashboard/Dashbaord';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


function App() {

  const sidebarOn = useSelector((state: RootState) => state.sidebar.sidebarOn)

  return (
    <div className="grid lg:grid-cols-6 sm:grid-cols-12 lg:gap-20 relative">
      <div className={`lg:w-1/6 fixed z-20 sm:block min-h-screen transition-[width] duration-300 ${sidebarOn ? 'max-w-80 w-4/5 sm:w-3/4' : 'w-0 sm:w-1/12'} `}>
        <Sidebar/>
      </div>
      <div className='lg:col-span-1 sm:col-span-1'/>
      <div className='lg:col-span-5 sm:col-span-11 w-full relative'>
        <div className='fixed top-0 right-0 bg-white lg:w-5/6 sm:w-11/12 w-full sm:min-h-24 min-h-10 z-50'>
          <Navbar/>
        </div>
        <div className='sm:min-h-24 min-h-10'/>
        {/* <div className='h-[2px] shadow-inner shadow-grey2 opacity-70 ml-2'></div> */}
        <Dashbaord/>
      </div>
    </div>
  );
}

export default App;
