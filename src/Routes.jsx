import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TasksPage, MemberAddPage, MembersPage, MemberEditPage } from './components/pages';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/members/edit/:id' component={MemberEditPage} />
        <PrivateRoute path='/members/add' component={MemberAddPage} />
        <PrivateRoute path='/members' component={MembersPage} />
        <PrivateRoute path='/tasks' component={TasksPage} />
        <Redirect from='/' to='/members' />
      </Switch>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authData = localStorage.getItem('authData');
  return (
    <Route
      {...rest}
      render={(props) => (authData ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

export default Routes;
