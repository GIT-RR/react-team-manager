import React, { useState, useEffect } from 'react';
import './MembersPage.css';
import { membersApi } from '../../../shared/apis';
import { useHistory } from 'react-router-dom';
import { MemberDisplayer, MemberList } from '../../features/Members';

const MembersPage = () => {
  const history = useHistory();
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState(null);

  useEffect(() => {
    const getMembers = async () => {
      const members = await membersApi.getMembers();
      setMembers(members);
    };
    getMembers();
  }, []);

  const handleSelectMember = (member) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  const handleAddMember = () => {
    history.push('/members/add');
  };

  return (
    <>
      <h3>Team Members</h3>
      <div>
        <button onClick={handleAddMember}>Add a new team member</button>
      </div>
      <div className='member-container'>
        <div className='member-column'>
          <MemberList members={members} onSelectMember={handleSelectMember} />
        </div>
        <div className='member-column'>
          {selectedMember && <MemberDisplayer id={selectedMember.id} />}
        </div>
      </div>
    </>
  );
};

export default MembersPage;
