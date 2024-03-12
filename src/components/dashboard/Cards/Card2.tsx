import React from 'react'

type Card2Props = {
    title:string,
    count:number,
    men:number,
    women:number,
    pastmonth:number,
    img:string
}

function Card2({title,count,men,women,pastmonth,img}:Card2Props) {
  return (
    <div className='sm:w-1/2 border border-grey2 rounded-xl p-5 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p className='font-poppins text-lg font-medium text-tertiary mb-5'>{title}</p>
          <p className='font-poppins text-5xl font-medium text-tertiary mb-8'>{count}</p>
          <p className='font-roboto text-xs font-normal text-priSubtitle mb-1'>{men} Men</p>
          <p className='font-roboto text-xs font-normal text-priSubtitle mb-1'>{women} Women</p>

        </div>
        <div className='relative flex flex-col justify-start items-center gap-3'>
          <div className='relative'>
            <img src={img} alt="" className='z-10'/>
          </div>

          <div className='px-3 py-1 bg-lightOrange rounded max-w-fit'>
            <p className='font-roboto text-sectitle text-xs font-normal'>+{pastmonth}% Past month</p>
          </div>

        </div>
    </div>
  )
}

export default Card2