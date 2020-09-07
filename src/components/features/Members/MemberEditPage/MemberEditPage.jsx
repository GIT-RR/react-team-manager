import React from 'react';
import MemberForm from '../MemberForm/MemberForm';
import { useHistory, useParams } from 'react-router-dom';
import { membersApi } from '../../../../shared/apis';
import { members } from '../../../../shared/fixtures/members';

const MemberEditPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const member = membersApi.getMember(+id);

  const handleEdit = (memberData) => {
    console.log(memberData);
    membersApi.updateMember(memberData);
  };
  const handleCancel = () => {
    history.push('/members');
  };

  return (
    <>
      <h2>Editing {member.name}</h2>
      <MemberForm member={member} onSubmit={handleEdit} onCancel={handleCancel} />
    </>
  );
};

export default MemberEditPage;
