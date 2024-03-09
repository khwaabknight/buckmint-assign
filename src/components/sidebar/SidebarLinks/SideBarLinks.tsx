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
    links:SidebarLinkType[]
}

function SideBarLinks({links}:SidebarLinksProps) {


  return (
    <div className={`flex flex-col lg:items-start sm:items-center gap-8 my-4 w-full min-w-fit`}>
        {
            links.map((link) => (<SidebarLink key={link.id} icon={link.icon} text={link.text} link={link.link} />))
        }
    </div>
  )
}

export default SideBarLinks