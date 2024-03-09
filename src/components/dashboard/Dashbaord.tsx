import React, { useState } from 'react'
import Stats from './Stats'
import Announcements from './Announcements'
import RecentActivity from './RecentActivity'
import UpcomingSchedule from './UpcomingSchedule'
import Overlay from '../common/Overlay/Overlay'
import Modal from './Modal/Modal'
import { MemberType, MeetingDataType } from '../../types/types'
import dayjs, { Dayjs } from 'dayjs'



function Dashbaord() {

  const [showModal, setShowModal] = useState(false);
  const [meetingData,setMeetingData] = useState<MeetingDataType>({
    time:'0000',
    date:dayjs(Date.now()),
    members:[]
  });
  const closeHandler = () => {
    setMeetingData({
      time:'0000',
      date:dayjs(Date.now()),
      members:[]
    })
    setShowModal(false);
  }


  const setTime = (time:string) => {
    setMeetingData({
      ...meetingData,
      time:time,
    });
  }
  const setDate = (date:Dayjs) => {
    setMeetingData({
      ...meetingData,
      date:date,
    });
  }
  const addMember = (member:MemberType) => {
    if(meetingData.members.filter((item:MemberType) => member.id === item.id).length === 0){
      setMeetingData({
        ...meetingData,
        members:[...meetingData.members,member]
      })
    }
  }
  const removeMember = (member:MemberType) => {
    setMeetingData({
      ...meetingData,
      members:meetingData.members.filter((item) => item.id !== member.id)
    })
  }
  return (
    <div className='flex flex-col mx-5 sm:ml-2 sm:mr-10 mb-5 '>
      <div className='py-2.5'>
        <p className='font-poppins text-tertiary text-2xl font-medium leading-10'>Dashboard</p>
      </div>
      <div className='grid lg:grid-cols-5 gap-x-8 gap-y-6'>
        <div className='lg:col-span-3 flex flex-col gap-5'>
          <Stats/>
          <Announcements/>
        </div>
        <div className='lg:col-span-2 flex sm:flex-row justify-start lg:flex-col flex-col gap-x-10 gap-y-6'>
          <RecentActivity openModal={() => setShowModal(true)}/>
          <UpcomingSchedule/>
        </div>
      </div>
      <Overlay showModal={showModal} closeHandler={closeHandler} >
        <Modal 
          closeHandler={closeHandler}
          meetingData={meetingData}
          setTime={setTime}
          setDate={setDate}
          addMember={addMember}
          removeMember={removeMember}
          members={meetingData.members}
        />
      </Overlay>

    </div>
  )
}

export default Dashbaord