import React from 'react';
import './App.css';
import Routes from './Routes';
import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <header>Team Manager</header>
      <div className='app-container'>
        <BrowserRouter>
          <nav>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/members'>Team</Link>
          </nav>
          <Routes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
