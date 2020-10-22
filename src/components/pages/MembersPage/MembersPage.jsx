import React, { useState, useEffect } from 'react';
import './MembersPage.css';
import { membersApi } from '../../../shared/apis';
import { useHistory } from 'react-router-dom';
import { MemberDisplayer, MemberList } from '../../features/Members';
import Loading from '../../shared/Loading/Loading';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

const MembersPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const getMembers = async () => {
    setIsLoading(true);
    const members = await membersApi.getMembers();
    setMembers(members);
    setIsLoading(false);
  };

  useEffect(() => {
    getMembers();
  }, []);

  const handleSelectMember = (member) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  const handleAddMember = () => {
    history.push('/members/add');
  };

  const handleDeleteMember = async (id) => {
    setIsLoading(true);
    await membersApi.removeMember(id);
    setSelectedMember(null);
    getMembers();
  };

  return (
    <AuthLayout>
      {isLoading && <Loading />}
      <h3>Team Members</h3>
      <button onClick={handleAddMember}>Add a new team member</button>
      <div className='member-container'>
        <div className='member-column'>
          {members && <MemberList members={members} onSelectMember={handleSelectMember} />}
        </div>
        <div className='member-column'>
          {selectedMember && (
            <MemberDisplayer id={selectedMember.id} onDelete={handleDeleteMember} />
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default MembersPage;
