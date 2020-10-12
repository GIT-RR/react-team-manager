import React, { useEffect, useState } from 'react';
import { MemberForm } from '../../features/Members';
import { useHistory, useParams } from 'react-router-dom';
import { membersApi } from '../../../shared/apis';

const MemberEditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    membersApi.getMember(id).then((res) => setMember(res));
  }, [id]);

  const handleEdit = async (memberData) => {
    await membersApi.updateMember(memberData);
    history.push('/members');
  };
  const handleCancel = () => {
    history.push('/members');
  };

  return (
    <>
      <h2>Editing {member?.name}</h2>
      {member && <MemberForm member={member} onSuccess={handleEdit} onCancel={handleCancel} />}
    </>
  );
};

export default MemberEditPage;
