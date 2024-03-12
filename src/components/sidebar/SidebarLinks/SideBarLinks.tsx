import React from 'react'
import SidebarLink from './SidebarLink'
import {IconType } from 'react-icons'

type SidebarLinkType = {
    id:number,
    icon: IconType,
    text:string,
    link:string,
    
}
type SidebarLinksProps = {
    mmlinks:SidebarLinkType[],
    otherLinks:SidebarLinkType[],
    children:React.ReactNode,
}

function SideBarLinks({mmlinks,children,otherLinks}:SidebarLinksProps) {

  return (

    <div className='w-full lg:px-8 sm:px-0 px-8 flex flex-col lg:items-start sm:items-center items-start justify-between h-4/6 mb-10'>
        <div className='py-2.5 flex w-full lg:justify-start sm:justify-center items-center'>
            <p className='uppercase text-priSubtitle font-roboto lg:text-xs text-[8px] leading-[18px] font-medium'>main menu</p>
        </div>
        {/* <div className={`flex flex-col lg:items-start sm:items-center gap-8 my-4 px-6 sm:p-0 w-full min-w-fit`}> */}
            {
                mmlinks.map((link) => (<SidebarLink key={link.id} icon={link.icon} text={link.text} link={link.link}/>))
            }
        {/* </div> */}
        <div className='py-2.5 flex w-full lg:justify-start sm:justify-center items-center'>
            <p className='uppercase text-priSubtitle font-roboto lg:text-xs text-[8px] leading-[18px] font-medium'>other</p>
        </div>
        {/* <div className={`flex flex-col lg:items-start sm:items-center gap-8 my-4 px-6 sm:p-0 w-full min-w-fit`}> */}
            {
                otherLinks.map((link) => (<SidebarLink key={link.id} icon={link.icon} text={link.text} link={link.link}/>))
            }
        
    </div>


    
  )
}

export default SideBarLinks