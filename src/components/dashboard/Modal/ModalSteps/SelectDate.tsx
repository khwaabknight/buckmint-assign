import React from 'react'
import BasicDateCalendar from '../ModalFormComponents/Calender/CalenderInput'
import Button from '../../../common/Button'
import { Dayjs } from 'dayjs'

type SelectDateProps = {
  next:() => void,
  setDate:(val:Dayjs) => void
}

function SelectDate({next,setDate}:SelectDateProps) {
  return (
    <div>
      <div className='flex flex-col flex-wrap gap-1'>
        <p className='font-poppins text-[#101828] text-lg font-semibold'>Select a date for meeting</p>
        <p className='font-roboto text-[#475467] text-sm font-normal'>The following date will be set for the meeting:</p>
      </div>
      <BasicDateCalendar setDate={setDate}/>
      <Button type='button' primary onClick={next} customClasses='px-10'>
        Next
      </Button>
    </div>
  )
}

export default SelectDate