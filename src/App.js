import React from 'react';
import './App.css';
import MembersPage from './components/features/Members/MembersPage/MembersPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tasks from './components/features/Tasks/Tasks';
import MemberEditPage from './components/features/Members/MemberEditPage/MemberEditPage';

function App() {
  return (
    <>
      <header>Team Manager</header>
      <div className='app-container'>
        <Router>
          <nav>
            <a href='/tasks'>Tasks</a>
            <a href='/members'>Team</a>
          </nav>
          <Switch>
            <Route path='/tasks'>
              <Tasks />
            </Route>
            <Route path='/members/edit/:id'>
              <MemberEditPage />
            </Route>
            <Route path='/members'>
              <MembersPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
