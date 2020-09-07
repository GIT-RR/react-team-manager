import React from 'react';
import { membersApi } from '../../../../shared/apis';
import { useHistory } from 'react-router-dom';

const MemberDisplayer = ({ id }) => {
  const history = useHistory();
  const member = membersApi.getMember(id);

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
      <input
        type='button'
        value='Edit member'
        onClick={() => history.push('/members/edit/' + member.id)}
      />
    </div>
  );
};

export default MemberDisplayer;
