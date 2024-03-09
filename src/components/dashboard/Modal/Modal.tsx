import React, { useState } from 'react'
import AddMembers from './ModalSteps/AddMembers';
import SelectDate from './ModalSteps/SelectDate';
import SelectTime from './ModalSteps/SelectTime';
import { RxCross2 } from "react-icons/rx";
import { MeetingDataType, MemberType } from '../../../types/types';
import { Dayjs } from 'dayjs';


type ModalProps = {
  closeHandler:() => void,
  meetingData:MeetingDataType,
  setTime:(val:string) => void,
  setDate:(val:Dayjs) => void,
  addMember:(val:MemberType) => void,
  removeMember:(val:MemberType) => void,
  members:MemberType[],
}

const modalSteps = [
  'Time','Date','Add team member'
]

function Modal({closeHandler,setTime,setDate,addMember,meetingData,removeMember,members} : ModalProps) {

  const [step, setStep] = useState(0);
  
  const handleOnClose = (e:any)=> {
    e.preventDefault();
    closeHandler();
  }

  const confirmHandler = () => {

    // api request to schedule meeting    
    setStep(0);
    closeHandler();    
  }

  return (
    <div className='bg-white lg:w-2/5 md:w-2/3 max-w-[90%] w-11/12 grid sm:grid-cols-6 rounded-xl sm:min-h-[350px] relative'>
      <div className='col-span-2 bg-backgrd sm:flex flex-col justify-center gap-14 p-10 hidden'>
        {
          modalSteps.map((modalStep,index) => (<p key={index} className={`${step === index ? 'text-main' : 'text-[#344054]'} font-poppins text-sm font-medium`}>{modalStep}</p>))
        }
      </div>
      <div className='sm:hidden px-10 py-5 text-center bg-backgrd'>
        <p className='text-main font-poppins text-sm font-medium'>{modalSteps[step]}</p>
      </div>
      <div className='sm:col-span-4 flex flex-col justify-center h-full relative sm:px-6 py-8'>
        
        <div className='flex flex-col justify-center items-center'>
          {step === 0 && <SelectTime next={() => setStep(1)} time={meetingData.time} setTime={setTime}/>}
          {step === 1 && <SelectDate next={() => setStep(2)} setDate={setDate}/>}
          {step === 2 && <AddMembers confirm={confirmHandler} members={members} addMember={addMember} removeMember={removeMember}/>}
        </div>
        
      </div>
      <button 
          type='button' 
          onClick={handleOnClose}
          className='text-[#667085] absolute top-3 right-3'
        >
          <RxCross2 size={16}/>
        </button>  
    </div>
  )
}

export default Modal