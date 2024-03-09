import React from 'react'
import Brand from './Brand'
import MainMenu from './MainMenu'
import Other from './Other'


function Sidebar() {

  

  return (
    <div className={`flex flex-col items-center gap-10 bg-backgrd border-r border-grey5 w-11/12 h-screen`}>
      <Brand />
      <MainMenu />
      <Other />
    </div>
  )
}

export default Sidebar