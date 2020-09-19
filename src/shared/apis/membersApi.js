import { membersBE } from '../fixtures';

export const getMembers = () => {
  return membersBE.getAll();
};

export const getMember = (id) => {
  debugger;
  return membersBE.get(id);
};

export const addMember = (member) => {
  membersBE.add(member);
};

export const updateMember = (member) => {
  membersBE.update(member);
};

export const removeMember = (memberId) => {
  membersBE.remove(memberId);
};
