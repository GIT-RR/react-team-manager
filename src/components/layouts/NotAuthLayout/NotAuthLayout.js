import React from 'react';
import './NotAuthLayout.css';

const NotAuthLayout = ({ children }) => {
  return (
    <>
      <header className='not-auth-header'>Welcome to Team Manager</header>
      <div className='app-container'>{children}</div>
    </>
  );
};

export default NotAuthLayout;
