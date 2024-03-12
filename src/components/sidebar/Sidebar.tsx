import SideBarLinks from './SidebarLinks/SideBarLinks'
import { RxCross2 } from 'react-icons/rx'
import { MdDashboard } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiShirtButton } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../store/features/sidebar/sidebarSlice';
import { RootState } from '../../store/store';


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

function Sidebar() {

  const dispatch = useDispatch();

  const sidebarOn = useSelector((state: RootState) => state.sidebar.sidebarOn)



  return (
    <div className={`sm:flex flex-col items-center gap-10 bg-backgrd border-r border-grey5 w-11/12 h-screen relative`}>

      <div className={`lg:hidden p-5 ${sidebarOn ? 'sm:flex' : 'sm:hidden'} absolute top-2 right-2 text-grey2 hover:text-priSubtitle`}>
        <button onClick={() => dispatch(closeSidebar())} ><RxCross2 size={20} /></button>
      </div>

      <p className='font-poppins p-3 lg:text-4xl md:text-xl text-lg font-semibold sm:mt-10 text-black text-center'>
        WeHR
      </p>
      <SideBarLinks links={mainMenuLinks} >
        main menu
      </SideBarLinks>
      <SideBarLinks links={otherLinks}>
        other
      </SideBarLinks>
    </div>
  )
}

export default Sidebar