import React, { useState } from 'react'
import Input from '../common/Input'
import { FaBell } from "react-icons/fa6";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../store/features/sidebar/sidebarSlice';

const user = {
  name:'Admirra John',
  image:'/images/user.jpg'
}



function Navbar() {

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const [showSearchbar, setShowSearchbar] = useState(true);

  const onChange = (str:string) => {
    setSearchString(str);
  }

  const searchHandler = () => {
    // search request call search(searchString);
    setSearchString('');
    setShowSearchbar(false);
  }

  return (
    <div className='flex justify-between items-center sm:py-6 py-2 sm:ml-2 sm:pr-12 sm:pl-0 px-6 border-b z-10'>
      <div className='flex justify-center items-center gap-2'>
        <div className={`px-3 lg:hidden flex items-center justify-center text-grey1 ${''}`} onClick={() => dispatch(openSidebar())}>
          <RxHamburgerMenu size={20} />
        </div>
        <div className={`px-3 items-center justify-center text-grey1 sm:hidden ${showSearchbar ? 'hidden' : 'flex'}`} 
        onClick={() =>  setShowSearchbar(true)}>
          <CiSearch size={20}/>
        </div>
        <div className={`sm:w-80 relative rounded sm:block transition-all duration-300 ${showSearchbar ? 'w-96' : 'w-0'}`}>
          <Input
              type='text'
              name='searchnav'
              id='searchnav'
              placeholder='Search'
              value={searchString}
              onChange={onChange}
              customClasses='pr-6 w-full'
          />
          <button type='button' className='absolute right-3 top-1.5 z-50 text-grey1' onClick={searchHandler}>
            <CiSearch size={20}/>
          </button>
        </div>
      </div>
      <div className={`sm:flex items-center gap-9 sm:mr-0 mr-4 ${showSearchbar ? 'hidden' : 'flex'}`}>
        <div className='relative'>
          <FaBell size={16} fill='#B2B2B2'/>
          <div className='bg-main h-2 w-2 rounded-full absolute top-0 left-3 border border-white'/>
        </div>
        <div className=''>
          <BsChatLeftDotsFill size={16} fill='#B2B2B2'/>
        </div>
        <div className='flex items-center justify-center relative overflow-hidden h-9 sm:gap-4 gap-2'>
          <div className='h-8 w-8 overflow-hidden rounded-full z-20'>
            <img src={user.image} alt='' className=''/>
          </div>
          <p className='text-tertiary font-poppins text-base font-medium sm:block hidden'>{user.name}</p>

          <FaAngleDown fill='#B2B2B2'/>
        </div>        
      </div>
    </div>
  )
}

export default Navbar