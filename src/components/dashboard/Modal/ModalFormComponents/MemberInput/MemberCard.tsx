import React from 'react'
import Button from '../../../../common/Button'

type MemberCardProps =  {
    removeHandler:() => void,
    name:string,
    email:string,
    image:string,
}

function MemberCard({removeHandler,name,email,image}:MemberCardProps) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 justify-start items-center'>
            <div className='h-10 w-10 overflow-hidden rounded-full'>
                <img src={image} alt='' className='object-contain'/>
            </div>
            <div className='flex flex-col items-start justify-center gap-0'>
                <p className='font-poppins text-[#344054] text-sm font-semibold'>{name}</p>
                <p className='font-roboto text-[#475467] text-sm font-normal'>{email}</p>
            </div>
        </div>
        <div>
            <Button
                secondary
                onClick={removeHandler}
                customClasses='text-[#B42318]'
            >Remove</Button>
        </div>
    </div>
  )
}

export default MemberCard