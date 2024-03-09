import React from 'react'
import OTPInput from '../ModalFormComponents/OtpInput/OtpInput'
import Button from '../../../common/Button'

type SelectTimeProps = {
    time:string,
    next:() => void,
    setTime:(val:string) => void,
}

function SelectTime({time,next,setTime}:SelectTimeProps) {

  return (
    <div className='flex flex-col gap-10 items-start'>
        <div className='flex flex-col flex-wrap gap-1'>
            <p className='font-poppins text-[#101828] text-lg font-semibold'>Select a time for meeting</p>
            <p className='font-roboto text-[#475467] text-sm font-normal'>The following time will be set for the meeting:</p>
        </div>
        <div className='flex flex-col gap-1'>
            <OTPInput setTime={setTime}/>
            <p className='font-poppins text-[#475467] text-xs font-normal opacity-40'>time in 24 hr format</p>
        </div>
        <Button type='button' primary onClick={next} customClasses='px-10'>
            Next
        </Button>
    </div>
  )
}

export default SelectTime