import React from 'react'
import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom'

type SidebarLinkProps = {
  icon:IconType,
  text:string,
  link:string,
}

function SidebarLink({icon:Icon,text,link}:SidebarLinkProps) {
  const location = useLocation();
  const currLink = location.pathname.split('/').includes(text);


  return (
    <Link to={link} className={`flex items-center gap-6 `}>
      <Icon fill={`${currLink ? '#FF5151' : '#686868'}`} height={24} width={24}/>
      <p className={`${currLink ? 'text-main' : 'text-priSubtitle'} 
      lg:block sm:hidden
      capitalize font-poppins text-base font-normal
      transition-colors duration-300`}>{text}</p>
    </Link>
  )
}

export default SidebarLink