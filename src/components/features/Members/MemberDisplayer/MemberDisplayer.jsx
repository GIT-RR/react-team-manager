import React, { useEffect, useState } from 'react';
import { membersApi } from '../../../../shared/apis';
import { useHistory } from 'react-router-dom';

const MemberDisplayer = ({ id }) => {
  const history = useHistory();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const getMember = async () => {
      const member = await membersApi.getMember(id);
      setMember(member);
    };
    getMember();
  }, [id]);

  const handleEdit = () => {
    history.push('/members/edit/' + id);
    return;
  };

  const handleDelete = async () => {
    await membersApi.removeMember(member.id);
    history.push('/members');
    return;
  };

  return (
    <div>
      <h2>{member?.name} Details</h2>

      <table>
        <thead>
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>{member?.email}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>Role:</label>
            </td>
            <td>{member?.roleDesc}</td>
          </tr>
          <tr>
            <td>
              <label>Gender:</label>
            </td>
            <td>{member?.genderDesc}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleEdit}>Edit member</button>
      <button onClick={handleDelete}>Delete member</button>
    </div>
  );
};

export default MemberDisplayer;
