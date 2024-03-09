import React from 'react'
import Select from '../common/Select'
import Button from '../common/Button'
import ScheduleCard from './Cards/ScheduleCard'

const announcementList = [
  {
    id:11,
    title:'Outing schedule for every department',
    time:'5 Minutes ago'
  },
  {
    id:12,
    title:'Meeting HR Department',
    time:'Yesterday, 12:30 PM'
  },
  {
    id:13,
    title:'IT Department need two more talents for UX/UI Designer position',
    time:'Yesterday, 09:15 AM'
  },
  {
    id:14,
    title:'IT Department need two more talents for UX/UI Designer position',
    time:'Yesterday, 07:15 AM'
  },
]

function Announcements() {
  return (
    <div className='rounded-xl border'>
      <div className='p-5 h-72 overflow-auto hide-scrollbar'>
        <div className='flex justify-between pb-5'>
          <p className='font-poppins text-tertiary text-lg font-medium'>Announcement</p>
          <Select />
        </div>
        <div className='flex flex-col gap-3'>
          {
            announcementList.map((item) => (
              <ScheduleCard 
                key={item.id}
                title={item.title}
                time={item.time}
                pin
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

export default Announcements