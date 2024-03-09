import React from 'react'
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";

type ScheduleCardProps = {
    title:string,
    time:string,
    pin?:boolean
}

function ScheduleCard({title,time,pin}:ScheduleCardProps) {
  return (
    <div className='px-4 py-3 bg-backgrd border border-grey2 rounded-md flex justify-between items-center'>
        <div className='flex flex-col gap-1.5 flex-wrap'>
            <p className='font-poppins text-base text-sectitle font-normal'>{title}</p>
            <p className='font-roboto text-[9px] leading-[14px] text-priSubtitle font-normal'>{time}</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            {
                pin && <BsPinAngleFill size={20} className={` fill-grey1 hover:fill-secSubtitle`}/>
            }
            <BsThreeDots size={20} className={` fill-grey1 hover:fill-secSubtitle`}/>
        </div>
    </div>
  )
}

export default ScheduleCard