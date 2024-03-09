import React from 'react'
import SideBarLinks from './SidebarLinks/SideBarLinks'
import { MdDashboard } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiShirtButton } from "react-icons/gi";

const mainMenuLinks = [
    {
        id:1,
        icon:MdDashboard,
        text:'dashboard',
        link:'/dashboard',
    },
    {
        id:2,
        icon:MdPersonAddAlt1,
        text:'recruitment',
        link:'/recruitment',
    },
    {
        id:3,
        icon:BiSolidCalendarEvent,
        text:'schedule',
        link:'/schedule',
    },
    {
        id:4,
        icon:HiMiniUserGroup,
        text:'employee',
        link:'/employee',
    },
    {
        id:5,
        icon:GiShirtButton,
        text:'department',
        link:'/department',
    }
]

function MainMenu() {
  return (
    <div className='w-full lg:px-8'>
        <div className='py-2.5 flex w-full justify-center items-center'>
            <p className='uppercase text-priSubtitle font-roboto lg:text-xs text-[8px] leading-[18px] font-medium'>main menu</p>
        </div>
        <SideBarLinks links={mainMenuLinks} />
    </div>
  )
}

export default MainMenu