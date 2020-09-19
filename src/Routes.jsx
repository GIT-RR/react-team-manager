import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { TasksPage, MemberAddPage, MembersPage, MemberEditPage } from './components/pages';

const Routes = () => {
  return (
    <Router>
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
        <Redirect from='/' to='/members' />
      </Switch>
    </Router>
  );
};

export default Routes;
