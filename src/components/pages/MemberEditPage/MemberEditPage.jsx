import React, { useEffect, useState } from 'react';
import { MemberForm } from '../../features/Members';
import { useHistory, useParams } from 'react-router-dom';
import { membersApi } from '../../../shared/apis';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

const MemberEditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const getMember = async () => {
      const member = await membersApi.getMember(id);
      setMember(member);
    };
    getMember();
  }, [id]);

  const handleEdit = async (memberData) => {
    await membersApi.updateMember(memberData);
    history.push('/members');
  };
  const handleCancel = () => {
    history.push('/members');
  };

  return (
    <AuthLayout>
      <h2>Editing {member?.name}</h2>
      {member && <MemberForm member={member} onSuccess={handleEdit} onCancel={handleCancel} />}
    </AuthLayout>
  );
};

export default MemberEditPage;
