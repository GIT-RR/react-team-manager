import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TasksPage, MemberAddPage, MembersPage, MemberEditPage } from './components/pages';

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
              <TasksPage />
            </Route>
            <Route path='/members/add'>
              <MemberAddPage />
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
