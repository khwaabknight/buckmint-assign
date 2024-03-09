import React from 'react'

type Card1Props = {
    title:string,
    count:number,
    additional:string,
    bg:string,
    color:string,
}

function Card1({title,count,additional,bg,color}:Card1Props) {
  return (
    <div className={`${bg} flex flex-col justify-center items-start gap-4 sm:w-1/3 p-3 pl-5 rounded-lg h-auto`}>
        <p className='font-poppins text-xl font-medium text-tertiary'>{title}</p>
        <p className='font-poppins text-4xl overflow-hidden font-medium text-tertiary'>{count}</p>
        <p className={`${color} font-roboto font-normal text-base`}>{additional}</p>
    </div>
  )
}

export default Card1