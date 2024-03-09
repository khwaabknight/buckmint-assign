import React from 'react'
import { MemberType } from '../../../../types/types'
import MemberInput from '../ModalFormComponents/MemberInput/MemberInput'
import MemberDisplay from '../ModalFormComponents/MemberInput/MemberDisplay'
import Button from '../../../common/Button'

type AddMembersProps = {
  confirm:() => void,
  addMember:(member:MemberType) => void,
  removeMember:(val:MemberType) => void,
  members:MemberType[],
}

function AddMembers({confirm,addMember,removeMember,members}:AddMembersProps) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col flex-wrap gap-1'>
        <p className='font-poppins text-[#101828] text-lg font-semibold'>Add team member</p>
        <p className='font-roboto text-[#475467] text-sm font-normal'>The following users have access to this meeting:</p>
      </div>
      <MemberDisplay members={members} removeMember={removeMember}/>
      <MemberInput addMember={addMember}/>
      <div>
        <Button
          primary
          onClick={confirm}
          customClasses='px-10'
        >Confirm</Button>
      </div>
    </div>
  )
}

export default AddMembers