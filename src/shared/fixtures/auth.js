import { members } from './members';

const userCredentials = [
  { email: 'rui@mail.com', password: 'user' },
  { email: 'martim@mail.com', password: 'user' },
];

export const login = (email, password) => {
  // check credentials
  if (userCredentials.some((user) => user.email === email && user.password === password)) {
    // return user
    return members.find((m) => m.email === email);
  }
  return null;
};
