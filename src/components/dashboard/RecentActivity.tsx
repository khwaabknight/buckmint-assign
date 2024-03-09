import React from 'react'
import Button from '../common/Button'

type RecentActivityProps = {
  openModal: () => void
}

function RecentActivity({openModal}:RecentActivityProps) {
  return (
    <div className='bg-tertiary rounded-lg text-white'>
      <div className='bg-white bg-opacity-5 px-8 py-3'>
        <p className='font-poppins text-lg font-medium'>Recently Activity</p>
      </div>
      <div className='p-8'>
        <div className='flex flex-col gap-2 lg:w-10/12 mb-6'>
          <p className='font-roboto text-xs font-medium opacity-60'>10.40 AM, Fri 10 Sept 2021</p>
          <p className='font-poppins text-xl font-medium'>You Posted a New Job</p>
          <p className='font-roboto text-base font-normal opacity-80'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        </div>
        <div className='flex justify-between items-center w-11/12'>
          <p className='font-poppins text-base font-normal'>Schedule a call</p>
          <Button 
            type='button'
            primary
            onClick={openModal}
            customClasses='px-12 text-lg font-poppins font-medium'    
          >
            Schedule
          </Button>
        </div>
      </div>

    </div>
  )
}

export default RecentActivity