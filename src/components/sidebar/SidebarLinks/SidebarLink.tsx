import React from 'react'
import { IconType } from 'react-icons';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { RootState } from '../../../store/store';

type SidebarLinkProps = {
  icon:IconType,
  text:string,
  link:string,
}

function SidebarLink({icon:Icon,text,link}:SidebarLinkProps) {
  const location = useLocation();
  const currLink = location.pathname.split('/').includes(text);
  const sidebarOn = useSelector((state: RootState) => state.sidebar.sidebarOn)


  return (
    <Link to={link} className={`flex items-center gap-6 `}>
      <Icon fill={`${currLink ? '#FF5151' : '#686868'}`} size={17}/>
      <p className={`${currLink ? 'text-main' : 'text-priSubtitle'} 
      lg:block ${sidebarOn?'sm:block':'sm:hidden'}
      capitalize font-poppins text-base font-normal
      transition-colors duration-300`}>{text}</p>
    </Link>
  )
}

export default SidebarLink