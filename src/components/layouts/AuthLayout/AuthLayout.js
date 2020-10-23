import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../shared/contexts/authContext';
import Loading from '../../shared/Loading/Loading';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  const { authData, setAuthData } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAuthData(null);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      {isLoading && <Loading />}
      <header className='auth-header'>Team Manager - {authData.name}</header>
      <nav>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/members'>Team</Link>
        <button onClick={handleLogOut}>Logout</button>
      </nav>
      <div className='app-container'>{children}</div>
    </>
  );
};

export default AuthLayout;
