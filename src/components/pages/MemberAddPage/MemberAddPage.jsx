import React from 'react';
import { useHistory } from 'react-router-dom';
import MemberForm from '../../features/Members/MemberForm/MemberForm';
import { membersApi } from '../../../shared/apis';

const MemberAddPage = () => {
  const history = useHistory();

  const handleAdd = async (member) => {
    await membersApi.addMember(member);
    history.push('/members');
  };

  const handleCancel = () => {
    history.push('/members');
  };

  return (
    <>
      <h2>Adding a new member</h2>
      <MemberForm onSuccess={handleAdd} onCancel={handleCancel} />
    </>
  );
};

export default MemberAddPage;
