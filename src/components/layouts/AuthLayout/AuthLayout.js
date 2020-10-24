import React, { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import { Link, useHistory } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const authData = JSON.parse(localStorage.getItem('authData'));
  const history = useHistory();

  const handleLogOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.clear();
      setIsLoading(false);
      history.push('/');
    }, 3000);
  };

  return (
    <>
      {isLoading && <Loading />}
      <header className='auth-header'>Team Manager - {authData?.name}</header>
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
