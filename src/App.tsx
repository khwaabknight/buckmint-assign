import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashbaord from './components/dashboard/Dashbaord';


function App() {

  return (
    <div className="grid lg:grid-cols-6 sm:grid-cols-12 gap-5 relative">
      <div className={`lg:col-span-1 lg:w-1/6 sm:w-1/12 h-screen fixed z-20 hidden sm:block`}>
        <Sidebar />
      </div>
      <div className='lg:col-span-1 sm:col-span-1'/>
      <div className='lg:col-span-5 sm:col-span-11 w-full relative'>
        <div className='fixed top-0 right-0 bg-white lg:w-5/6 sm:w-11/12 w-full sm:min-h-24 min-h-10'>
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
