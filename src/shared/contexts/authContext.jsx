import React from 'react';
import { createContext, useState } from 'react';

// const defaultAuthData = {
//   id: 0,
//   email: 'rui@mail.com',
//   name: 'Rui Ribeiro',
//   gender: 'm',
//   role: 'tl',
//   isActive: true,
// };

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();

  return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
