import React from 'react';
import { membersApi } from '../../../../shared/apis';
import { useHistory } from 'react-router-dom';

const MemberDisplayer = ({ id }) => {
  const history = useHistory();
  const member = membersApi.getMember(id);

  const handleEdit = () => {
    history.push('/members/edit/' + id);
    return;
  };

  const handleDelete = () => {
    membersApi.removeMember(member.id);
    history.push('/members');
  };

  return (
    <div>
      <h2>{member.name} Details</h2>

      <table>
        <tr>
          <td>
            <label>Email:</label>
          </td>
          <td>{member.email}</td>
        </tr>
        <tr>
          <td>
            <label>Role:</label>
          </td>
          <td>{member.roleDesc}</td>
        </tr>
        <tr>
          <td>
            <label>Gender:</label>
          </td>
          <td>{member.genderDesc}</td>
        </tr>
      </table>

      <br></br>
      <button onClick={handleEdit}>Edit member</button>
      <button onClick={handleDelete}>Delete member</button>
    </div>
  );
};

export default MemberDisplayer;
