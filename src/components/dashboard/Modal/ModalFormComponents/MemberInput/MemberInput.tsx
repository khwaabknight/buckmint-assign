import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { MemberType } from '../../../../../types/types'
import { FiUser } from "react-icons/fi";

const optionList = [
  {
    id:1,
    name:'Candice Wu',
    email:'candice@untitledui.com',
    image:'/images/placeholder.png'
  },
  {
    id:2,
    name:'Demi Wilkinson',
    email:'demi@untitledui.com',
    image:'/images/placeholder.png'
  },
  {
    id:3,
    name:'Drew Cano',
    email:'drew@untitledui.com',
    image:'/images/placeholder.png'
  },
  {
    id:4,
    name:'Aman Gupta',
    email:'aman@untitledui.com',
    image:'/images/placeholder.png'
  },
]

type MemberInputProps = {
  addMember:(val:MemberType) => void
}

function MemberInput({addMember} : MemberInputProps) {
  return (
    <div>
      <div></div>
      <div>
        <div className='relative w-full'>
          <select className='cursor-pointer appearance-none focus:outline-none text-xs text-secSubtitle font-roboto font-normal border border-grey2 rounded py-3 pl-14 pr-8 w-full ' onChange={(e) => {
            addMember(optionList[parseInt(e.target.value)])
          }}>
            {
              optionList.map((option,index) => (<option key={option.id} value={index}>{option.name}</option>))
            }
          </select>
          <FiUser fill='#fff' stroke='#B2B2B2' className='absolute left-5 top-3' size={16}/>
          <FaAngleDown fill='#B2B2B2' className='absolute right-5 top-3' size={16}/>
        </div>
      </div>
    </div>
  )
}

export default MemberInput