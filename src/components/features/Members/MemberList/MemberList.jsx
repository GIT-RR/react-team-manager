import React from 'react';
import './MemberList.css';

const MemberList = ({ members, onSelectMember }) => {
  return (
    <ul className='members'>
      {members.map((member) => (
        <li key={member.id} onClick={() => onSelectMember(member)}>
          <span className='badge'>{member.id}</span> {member.name}
        </li>
      ))}
    </ul>
  );
};

export default MemberList;
