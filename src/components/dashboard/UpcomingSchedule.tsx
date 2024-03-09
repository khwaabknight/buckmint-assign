import React from 'react'
import Select from '../common/Select'
import Button from '../common/Button'
import ScheduleCard from './Cards/ScheduleCard'

const priorityList = [
  {
    id:21,
    title:'Review candidate applications',
    time:'Today - 11.30 AM'
  }
]
const otherList = [
  {
    id:31,
    title:'Interview with candidates',
    time:'Today - 10.30 AM'
  },
  {
    id:32,
    title:'Short meeting with product designer from IT Departement',
    time:'Today - 09.15 AM'
  },
  {
    id:33,
    title:'Short meeting with product designer from IT Departement',
    time:'Today - 09.15 AM'
  },
]

function UpcomingSchedule() {
  return (
    <div className='rounded-xl border'>
      <div className='p-5 lg:h-96 sm:h-64 h-80 overflow-auto hide-scrollbar'>
        <div className='flex justify-between pb-5'>
          <p className='font-poppins text-tertiary text-lg font-medium'>Upcoming Schedule</p>
          <Select />
        </div>
        <div className='flex flex-col gap-3'>
          <p>Priority</p>
          {
            priorityList.map((item) => (
              <ScheduleCard 
                key={item.id}
                title={item.title}
                time={item.time}
              />
            ))
          }
          <p>Other</p>
          {
            otherList.map((item) => (
              <ScheduleCard 
                key={item.id}
                title={item.title}
                time={item.time}
              />
            ))
          }
        </div>
      </div>


      <div className='border-t border-grey2 flex items-center justify-center overflow-hidden'>
        <Button
          type='button'
          secondary
          onClick={() => {}}
        >See All Announcement</Button>
      </div>
    </div>
  )
}




export default UpcomingSchedule