import React from 'react';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <header>Team Manager</header>
      <div className='app-container'>
        <nav>
          <a href='/tasks'>Tasks</a>
          <a href='/members'>Team</a>
        </nav>
        <Routes />
      </div>
    </>
  );
}

export default App;
