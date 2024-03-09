import React from 'react'
import { MemberType } from '../../../../../types/types'
import MemberCard from './MemberCard'

type MemberDisplayProps = {
  removeMember:(val:MemberType) => void,
  members:MemberType[],
}

function MemberDisplay({removeMember,members}:MemberDisplayProps) {
  return (
    <div className='flex flex-col gap-3'>
      {
       members.length < 0 ? (
        <div>Select Members from dropdown</div>
       ) : (
        members.map((member) => (
          <MemberCard 
            removeHandler={() => removeMember(member)}
            name={member.name}
            email={member.email}
            image={member.image}
          />
        ))
       )
      }
      
    </div>
  )
}

export default MemberDisplay