import React from 'react';
import { MemberDisplayer } from '../../features/Members';
import { useHistory, useParams } from 'react-router-dom';
import { membersApi } from '../../../shared/apis';

const MemberEditPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const member = membersApi.getMember(+id);

  const handleEdit = (memberData) => {
    console.log(memberData);
    membersApi.updateMember(memberData);
    history.push('/members');
  };
  const handleCancel = () => {
    history.push('/members');
  };

  return (
    <>
      <h2>Editing {member.name}</h2>
      <MemberDisplayer member={member} onSuccess={handleEdit} onCancel={handleCancel} />
    </>
  );
};

export default MemberEditPage;
