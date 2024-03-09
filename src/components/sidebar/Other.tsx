import React from 'react'
import SideBarLinks from './SidebarLinks/SideBarLinks'
import { BiSupport } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";

const otherLinks = [
  {
      id:6,
      icon:BiSupport,
      text:'support',
      link:'/support',
  },
  {
      id:7,
      icon:FaGear,
      text:'settings',
      link:'/settings',
  },
]

function Other() {
  return (
    <div className='w-full lg:px-8'>
        <div className='py-2.5 flex w-full justify-center items-center'>
            <p className='uppercase text-priSubtitle font-roboto lg:text-xs text-[8px] leading-[18px] font-medium'>other</p>
        </div>
        <SideBarLinks links={otherLinks} />
    </div>
  )
}

export default Other