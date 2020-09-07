import React, { useState } from 'react';
import './MembersPage.css';
import MemberDisplayer from '../MemberDisplayer/MemberDisplayer';
import { membersApi } from '../../../../shared/apis';
// import AddMemberForm from './AddMemberForm/AddMemberForm';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const members = membersApi.getMembers();

  const handleSelectMember = (member) => {
    setSelectedMember(JSON.stringify(selectedMember) === JSON.stringify(member) ? null : member);
  };

  const handleDeleteMember = () => {};

  const handleAddMember = () => {};

  const handleCancel = () => {};
  return (
    <>
      <h3>Team Members</h3>
      <div>
        <button onClick={handleAddMember}>Add a new team member</button>
      </div>
      <div className='member-container'>
        <div className='member-column'>
          <ul className='members'>
            {members.map((member) => (
              <li key={member.id} onClick={() => handleSelectMember(member)}>
                <span className='badge'>{member.id}</span> {member.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='member-column'>
          {selectedMember && <MemberDisplayer id={selectedMember.id} />}
          {/* {!selectedMember && addMember && (
            <AddMemberForm onSucess={handleAddMember} onCancel={handleCancel} />
          )} */}
        </div>
      </div>
    </>
  );
};

export default Members;
