import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const optionList = [
    "Today, 13 Sept 2021",
    "Yesterday, 12 Sept 2021",
    "Monday, 11 Sept 2021",
    "Sunday, 10 Sept 2021",
]

function Select() {
  return (
    <div className='relative max-w-fit'>
      <select className='cursor-pointer appearance-none focus:outline-none text-xs text-secSubtitle font-roboto font-normal border border-grey2 rounded py-1 pl-2 pr-3'>
        {
          optionList.map((option, index) => (<option key={index} value={option}>{option}</option>))
        }
      </select>
      <FaAngleDown fill='#B2B2B2' className='absolute right-2 top-1.5'/>
    </div>
  )
}

export default Select